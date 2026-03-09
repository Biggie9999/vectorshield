"use client"

import { useState, useEffect } from "react"
import { Shield } from "lucide-react"

export function Navigation() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <Shield className="w-6 h-6 text-primary transition-colors group-hover:text-accent" />
            <span className="text-foreground font-semibold tracking-tight">
              VectorShield
            </span>
          </a>

          {/* Navigation Links - Hidden on mobile */}
          <div className="hidden md:flex items-center gap-8">
            <a
              href="#services"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Services
            </a>
            <a
              href="#process"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Process
            </a>
            <a
              href="#cases"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Cases
            </a>
            <a
              href="#contact"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Contact
            </a>
          </div>

          {/* CTA Button */}
          <a
            href="#contact"
            className="hidden sm:inline-flex px-4 py-2 text-sm font-medium border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-200 rounded-[2px]"
          >
            Start Recovery
          </a>
        </div>
      </div>
    </nav>
  )
}
