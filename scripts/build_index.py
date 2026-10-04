#!/usr/bin/env python3
"""Validate every design-md/**/DESIGN.md and regenerate everything derived from them:
README catalog, palette swatches, banner, REPOS.md and the site data (site/src/data/atlas.json).

Usage: pip install pyyaml && python3 scripts/build_index.py
"""
import csv, html, json, pathlib, re, sys
import yaml

ROOT = pathlib.Path(__file__).resolve().parent.parent
REPO = "ayushap18/design-md-atlas"
SECTIONS = ["Overview", "Colors", "Typography", "Layout", "Elevation & Depth",
            "Shapes", "Components", "Do's and Don'ts"]
START, END = "<!-- catalog:start -->", "<!-- catalog:end -->"
# category -> (label, chip color)
CATS = {
    "ai-llm": ("AI & LLM", "7C5CFF"), "developer-tools": ("Developer Tools", "64748B"),
    "backend-infra": ("Backend & Infra", "10B981"), "productivity": ("Productivity", "F59E0B"),
    "design-tools": ("Design Tools", "EC4899"), "fintech": ("Fintech", "2563EB"),
    "ecommerce-consumer": ("E-commerce & Consumer", "F97316"),
    "media-entertainment": ("Media & Entertainment", "E11D48"),
    "mobility-hardware": ("Mobility & Hardware", "0EA5E9"),
    "public-design-systems": ("Public Design Systems", "0F766E"),
    "saas-marketing": ("SaaS & Marketing", "A855F7"), "aesthetics": ("Aesthetics", "84CC16"),
}
REPO_GROUPS = {"collections": "DESIGN.md collections", "spec": "Specs & standards",
               "tools": "Generators, extractors & tooling",
               "ds": "Open-source design systems (source material)"}
GENERIC = re.compile(r"^(ui-[\w-]+|system-ui|-apple-system|BlinkMacSystemFont|sans-serif|serif|monospace|inherit)$", re.I)
COLOR = re.compile(r"^(#[0-9a-fA-F]{3,8}|rgba?\([^)]*\))$")


def frontmatter(text):
    m = re.match(r"---\n(.*?)\n---\n", text, re.S)
    return m and yaml.safe_load(m.group(1))


def check(text):
    """Return a list of problems with one DESIGN.md (empty = valid)."""
    try:
        fm = frontmatter(text)
    except yaml.YAMLError as e:
        return [f"invalid YAML: {str(e).splitlines()[0]}"]
    if fm is None:
        return ["missing YAML frontmatter"]
    if not isinstance(fm, dict):
        return ["frontmatter is not a YAML mapping"]
    errs = [f"frontmatter missing `{k}`" for k in ("name", "colors", "typography") if not fm.get(k)]
    heads = [h.strip() for h in re.findall(r"^## (.+)$", text, re.M)]
    found = [h for h in heads if h in SECTIONS]
    errs += [f"missing section `## {s}`" for s in SECTIONS if s not in heads]
    if found != sorted(found, key=SECTIONS.index):
        errs.append("sections out of order")
    return errs


def palette(colors, n=8):
    """First n distinct plain colors (gradients skipped)."""
    out = []
    for v in colors.values():
        v = str(v).strip()
        if COLOR.match(v) and v.upper() not in (c.upper() for c in out):
            out.append(v)
    return out[:n]


def swatch_svg(cols, w=160, h=20):
    bw = w / len(cols)
    rects = "".join(f'<rect x="{i * bw:.2f}" width="{bw + .5:.2f}" height="{h}" fill="{c}"/>'
                    for i, c in enumerate(cols))
    return (f'<svg xmlns="http://www.w3.org/2000/svg" width="{w}" height="{h}" viewBox="0 0 {w} {h}">'
            f'<clipPath id="r"><rect width="{w}" height="{h}" rx="5"/></clipPath>'
            f'<g clip-path="url(#r)">{rects}</g>'
            f'<rect x=".5" y=".5" width="{w - 1}" height="{h - 1}" rx="4.5" fill="none" '
            f'stroke="#8888" /></svg>')


def saturation(c):
    """HSV saturation * value of a #hex color (0 for anything else) — 'how colorful'."""
    h = c.lstrip("#")
    if not c.startswith("#") or len(h) not in (3, 6, 8):
        return 0
    h = "".join(ch * 2 for ch in h) if len(h) == 3 else h[:6]
    rgb = [int(h[i:i + 2], 16) / 255 for i in range(0, 6, 2)]
    return max(rgb) - min(rgb)


def banner_svg(entries):
    """1280x420 banner: title on the left, mosaic of every file's palette on the right."""
    cols, size, gap, x0, y0 = 12, 28, 5, 820, 45
    tiles = []
    for i, e in enumerate(entries[:120]):
        c, r = i % cols, i // cols
        x, y = x0 + c * (size + gap), y0 + r * (size + gap)
        vivid = sorted(e["palette"], key=saturation, reverse=True) or ["#888"]
        tiles.append(f'<rect class="t" style="animation-delay:{(c + r) * 60}ms" x="{x}" y="{y}" '
                     f'width="{size}" height="{size}" rx="7" fill="{vivid[0]}" stroke="#ffffff1f"/>')
        if len(vivid) > 1:  # accent dot: second most vivid color
            tiles.append(f'<circle cx="{x + size - 8}" cy="{y + 8}" r="3.4" fill="{vivid[1]}"/>')
    n = len(entries)
    return f'''<svg xmlns="http://www.w3.org/2000/svg" width="1280" height="420" viewBox="0 0 1280 420">
<style>
.t{{transform-box:fill-box;transform-origin:center;animation:pop .7s cubic-bezier(.2,.8,.2,1) backwards}}
@keyframes pop{{from{{transform:scale(.4)}}to{{transform:none}}}}
@media (prefers-reduced-motion:reduce){{.t{{animation:none}}}}
</style>
<defs><linearGradient id="bg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#14121C"/><stop offset="1" stop-color="#0B0B10"/></linearGradient>
<linearGradient id="ink" x1="0" x2="1"><stop offset="0" stop-color="#FF6B4A"/><stop offset=".35" stop-color="#FFC84A"/><stop offset=".7" stop-color="#4AD6A8"/><stop offset="1" stop-color="#8B7CFF"/></linearGradient>
<pattern id="dots" width="22" height="22" patternUnits="userSpaceOnUse"><circle cx="1" cy="1" r="1" fill="#ffffff10"/></pattern></defs>
<rect width="1280" height="420" rx="24" fill="url(#bg)"/>
<rect width="1280" height="420" rx="24" fill="url(#dots)"/>
<text x="64" y="104" font-family="ui-monospace,SFMono-Regular,Menlo,monospace" font-size="16" letter-spacing="4" fill="#A8A3B8">AWESOME · DESIGN SYSTEMS FOR AI AGENTS</text>
<text x="60" y="196" font-family="ui-serif,Georgia,'Times New Roman',serif" font-size="92" fill="#F5F1E8">DESIGN<tspan fill="url(#ink)">.md</tspan></text>
<text x="62" y="280" font-family="ui-serif,Georgia,'Times New Roman',serif" font-style="italic" font-size="72" fill="#F5F1E8">Atlas</text>
<rect x="64" y="318" width="236" height="4" rx="2" fill="url(#ink)"/>
<text x="64" y="362" font-family="-apple-system,'Segoe UI',Helvetica,Arial,sans-serif" font-size="20" fill="#C9C4D6">{n} DESIGN.md files · {len(CATS)} categories · drop one in, build on-brand UI</text>
{"".join(tiles)}
</svg>'''


def main():
    rank = {c: i for i, c in enumerate(CATS)}
    files = sorted(ROOT.glob("design-md/*/*/DESIGN.md"), key=lambda f: (rank.get(f.parent.parent.name, 99), str(f)))
    bad, entries = 0, []
    for f in files:
        text = f.read_text()
        errs = check(text)
        for e in errs:
            print(f"{f.relative_to(ROOT)}: {e}")
        bad += len(errs)
        if errs:
            continue
        fm = frontmatter(text)
        fonts = []
        for t in (fm.get("typography") or {}).values():
            fams = [x.strip().strip("'\"") for x in str(t.get("fontFamily", "")).split(",")] if isinstance(t, dict) else []
            fam = next((x for x in fams if x and not GENERIC.match(x)), "")
            if fam and fam not in fonts:
                fonts.append(fam)
        entries.append(dict(
            slug=f.parent.name, category=f.parent.parent.name, name=str(fm["name"]),
            description=str(fm.get("description", "")), source=str(fm.get("source", "")),
            path=str(f.relative_to(ROOT)), palette=palette(fm["colors"]),
            colors={k: str(v) for k, v in fm["colors"].items()}, fonts=fonts,
            typography=fm.get("typography") or {}, rounded=fm.get("rounded") or {},
            spacing=fm.get("spacing") or {}))

    # swatches + banner
    sw = ROOT / "assets/swatches"
    sw.mkdir(parents=True, exist_ok=True)
    for old in sw.glob("*.svg"):
        old.unlink()
    for e in entries:
        if e["palette"]:
            (sw / f"{e['slug']}.svg").write_text(swatch_svg(e["palette"]))
    (ROOT / "assets/banner.svg").write_text(banner_svg(entries))

    # README catalog
    by_cat = {}
    for e in entries:
        by_cat.setdefault(e["category"], []).append(e)
    order = [c for c in CATS if c in by_cat] + sorted(set(by_cat) - set(CATS))
    lines = ["<p>"] + [
        f'<a href="#{CATS.get(c, (c, ""))[0].lower().replace(" & ", "--").replace(" ", "-")}">'
        f'<img src="https://img.shields.io/badge/{CATS.get(c, (c, "555"))[0].replace(" ", "_").replace("&", "%26").replace("-", "--")}'
        f'-{len(by_cat[c])}-{CATS.get(c, ("", "555"))[1]}?style=for-the-badge" alt="{c}"></a>'
        for c in order] + ["</p>", ""]
    for c in order:
        label, color = CATS.get(c, (c.replace("-", " ").title(), "555555"))
        lines += [f"### {label}", "", "| Palette | Name | Vibe |", "|:--|:--|:--|"]
        lines += [f'| <img src="assets/swatches/{e["slug"]}.svg" width="160" height="20" alt="{html.escape(e["name"])} palette"> '
                  f'| **[{e["name"]}]({e["path"]})** | {e["description"].replace("|", "/")} |'
                  for e in by_cat[c]]
        lines.append("")
    readme = ROOT / "README.md"
    r = readme.read_text()
    readme.write_text(r[: r.index(START) + len(START)] + "\n" + "\n".join(lines) + r[r.index(END):])

    # REPOS.md + site data
    repos = [dict(group=g, name=n, stars=int(s), description=d, url=u)
             for g, n, s, d, u in csv.reader(open(ROOT / "data/repos.tsv"), delimiter="\t")]
    out = ["# Curated repos", "", f"{len(repos)} repositories related to DESIGN.md, agent design skills "
           "and design systems. Star counts snapshot: 2026-10-04.", ""]
    for g, title in REPO_GROUPS.items():
        out += [f"## {title}", "", "| Repo | ★ | What it is |", "|---|---:|---|"]
        out += [f"| [{x['name']}]({x['url']}) | {x['stars']:,} | {x['description'].replace('|', '/').strip()[:140]} |"
                for x in repos if x["group"] == g]
        out.append("")
    (ROOT / "REPOS.md").write_text("\n".join(out))
    (ROOT / "site/src/data").mkdir(parents=True, exist_ok=True)
    (ROOT / "site/src/data/atlas.json").write_text(json.dumps(dict(
        repo=REPO, categories={c: dict(label=l, color="#" + col) for c, (l, col) in CATS.items()},
        repoGroups=REPO_GROUPS, files=entries, repos=repos), separators=(",", ":"), default=str))

    print(f"{len(files)} files, {len(repos)} repos, {bad} problems")
    sys.exit(1 if bad else 0)


if __name__ == "__main__":
    assert check("no frontmatter") == ["missing YAML frontmatter"]
    ok = "---\nname: x\ncolors: {a: '#fff'}\ntypography: {b: {}}\n---\n" + "".join(f"## {s}\n" for s in SECTIONS)
    assert check(ok) == [], check(ok)
    assert "sections out of order" in check(ok.replace("## Overview\n", "") + "## Overview\n")
    assert check("---\ndescription: a: b\n---\n")[0].startswith("invalid YAML")
    assert saturation("#FF0000") == 1 and saturation("#777") == 0 and saturation("rgba(0,0,0,1)") == 0
    assert palette({"a": "#FFF", "b": "#fff", "c": "linear-gradient(#000,#fff)", "d": "rgba(0,0,0,.5)"}) == ["#FFF", "rgba(0,0,0,.5)"]
    main()
