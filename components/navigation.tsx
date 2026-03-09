"use client"

import { useState, useEffect } from "react"
import { Shield, MessageCircle } from "lucide-react"
import { ThemeToggle } from "./theme-toggle"

const WHATSAPP_NUMBER = "14145511344"
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=Hi%2C%20I%20need%20help%20with%20crypto%20recovery.`

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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
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

          {/* Right side actions */}
          <div className="flex items-center gap-3">
            {/* Theme Toggle - always visible */}
            <ThemeToggle />

            {/* Desktop CTA */}
            <a
              href="#contact"
              className="hidden md:inline-flex px-5 py-2.5 text-sm font-medium border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-200 rounded-xl"
            >
              Start Recovery
            </a>

            {/* Mobile WhatsApp CTA - only on mobile, no hamburger */}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="md:hidden inline-flex items-center gap-2 px-4 py-2.5 bg-[#25D366] text-white font-medium text-sm rounded-xl hover:bg-[#20BD5A] transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Chat Now</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}
