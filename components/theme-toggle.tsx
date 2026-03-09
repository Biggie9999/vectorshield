"use client"

import { Sun, Moon, Monitor } from "lucide-react"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="p-2 rounded-xl border border-border bg-secondary/50 w-9 h-9" />
    )
  }

  const cycleTheme = () => {
    if (theme === "light") setTheme("dark")
    else if (theme === "dark") setTheme("system")
    else setTheme("light")
  }

  return (
    <button
      onClick={cycleTheme}
      className="p-2 rounded-xl border border-border bg-secondary/50 hover:bg-secondary hover:border-primary/50 transition-all duration-200"
      aria-label={`Current theme: ${theme}. Click to change.`}
    >
      {theme === "light" && <Sun className="w-4 h-4 text-foreground" />}
      {theme === "dark" && <Moon className="w-4 h-4 text-foreground" />}
      {theme === "system" && <Monitor className="w-4 h-4 text-foreground" />}
    </button>
  )
}
