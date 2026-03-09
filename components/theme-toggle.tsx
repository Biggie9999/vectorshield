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
      <div className="w-8 h-8 rounded-full bg-secondary/50" />
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
      className="w-8 h-8 rounded-full bg-secondary/80 hover:bg-secondary flex items-center justify-center transition-all duration-200"
      aria-label={`Current theme: ${theme}. Click to change.`}
    >
      {theme === "light" && <Sun className="w-3.5 h-3.5 text-foreground" />}
      {theme === "dark" && <Moon className="w-3.5 h-3.5 text-foreground" />}
      {theme === "system" && <Monitor className="w-3.5 h-3.5 text-foreground" />}
    </button>
  )
}
