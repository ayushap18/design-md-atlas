"use client"

import { CheckIcon, CopyIcon } from "lucide-react"
import { useState } from "react"
import { toast } from "sonner"
import { Button } from "@/components/ui/button"

/** Clipboard API with a legacy fallback (older browsers, unfocused documents). */
export async function copyText(value: string) {
  try {
    await navigator.clipboard.writeText(value)
  } catch {
    const ta = Object.assign(document.createElement("textarea"), { value, readOnly: true })
    ta.style.cssText = "position:fixed;opacity:0"
    document.body.append(ta)
    ta.select()
    const ok = document.execCommand("copy")
    ta.remove()
    if (!ok) throw new Error("copy failed")
  }
}

export function CopyButton({
  value,
  label,
  toastLabel = "Copied to clipboard",
  ...props
}: { value: string; label?: string; toastLabel?: string } & Omit<React.ComponentProps<typeof Button>, "value">) {
  const [done, setDone] = useState(false)
  async function copy() {
    try {
      await copyText(value)
      setDone(true)
      toast.success(toastLabel)
      setTimeout(() => setDone(false), 1500)
    } catch {
      toast.error("Copy failed. Select the text manually.")
    }
  }
  const Icon = done ? CheckIcon : CopyIcon
  return (
    <Button onClick={copy} aria-label={label ?? "Copy"} {...props}>
      <Icon />
      {label}
    </Button>
  )
}

export function DownloadButton({ content, filename = "DESIGN.md", ...props }: { content: string; filename?: string } & React.ComponentProps<typeof Button>) {
  function download() {
    const url = URL.createObjectURL(new Blob([content], { type: "text/markdown" }))
    const a = Object.assign(document.createElement("a"), { href: url, download: filename })
    a.click()
    URL.revokeObjectURL(url)
    toast.success(`Downloaded ${filename}`)
  }
  return <Button onClick={download} {...props} />
}
