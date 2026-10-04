#!/usr/bin/env python3
"""Validate every design-md/**/DESIGN.md and regenerate the catalog in README.md.

Usage: python3 scripts/build_index.py
"""
import pathlib, re, sys

ROOT = pathlib.Path(__file__).resolve().parent.parent
SECTIONS = ["Overview", "Colors", "Typography", "Layout", "Elevation & Depth",
            "Shapes", "Components", "Do's and Don'ts"]
START, END = "<!-- catalog:start -->", "<!-- catalog:end -->"


def check(text):
    """Return a list of problems with one DESIGN.md (empty = valid)."""
    m = re.match(r"---\n(.*?)\n---\n", text, re.S)
    if not m:
        return ["missing YAML frontmatter"]
    try:
        import yaml
        if not isinstance(yaml.safe_load(m.group(1)), dict):
            return ["frontmatter is not a YAML mapping"]
    except ImportError:
        pass  # ponytail: YAML parse check needs PyYAML; CI installs it
    except yaml.YAMLError as e:
        return [f"invalid YAML: {str(e).splitlines()[0]}"]
    errs = [f"frontmatter missing `{k}:`" for k in ("name", "colors", "typography")
            if not re.search(rf"^{k}:", m.group(1), re.M)]
    heads = [h.strip() for h in re.findall(r"^## (.+)$", text, re.M)]
    found = [h for h in heads if h in SECTIONS]
    errs += [f"missing section `## {s}`" for s in SECTIONS if s not in heads]
    if found != sorted(found, key=SECTIONS.index):
        errs.append("sections out of order")
    return errs


def field(text, key):
    m = re.search(rf"^{key}:\s*(.+)$", text, re.M)
    return m.group(1).strip().strip("\"'") if m else ""


def main():
    files = sorted(ROOT.glob("design-md/*/*/DESIGN.md"))
    bad, cats = 0, {}
    for f in files:
        text = f.read_text()
        for e in check(text):
            print(f"{f.relative_to(ROOT)}: {e}")
            bad += 1
        cats.setdefault(f.parent.parent.name, []).append(
            (field(text, "name") or f.parent.name, f.relative_to(ROOT), field(text, "description")))

    lines = [f"**{len(files)} DESIGN.md files** across {len(cats)} categories.", ""]
    for cat, items in sorted(cats.items()):
        lines += [f"### {cat.replace('-', ' ').title()} ({len(items)})", "", "| Name | Description |", "|---|---|"]
        lines += [f"| [{n}]({p}) | {d.replace('|', '/')} |" for n, p, d in items]
        lines.append("")
    readme = ROOT / "README.md"
    r = readme.read_text()
    readme.write_text(r[: r.index(START) + len(START)] + "\n" + "\n".join(lines) + r[r.index(END):])
    print(f"{len(files)} files, {bad} problems")
    sys.exit(1 if bad else 0)


if __name__ == "__main__":
    assert check("no frontmatter") == ["missing YAML frontmatter"]
    ok = "---\nname: x\ncolors:\ntypography:\n---\n" + "".join(f"## {s}\n" for s in SECTIONS)
    assert check(ok) == [], check(ok)
    assert "sections out of order" in check(ok.replace("## Overview\n", "") + "## Overview\n")
    main()
