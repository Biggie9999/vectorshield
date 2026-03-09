import { Shield } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 md:py-12">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 mb-10 md:mb-12">
          {/* Logo & tagline */}
          <div className="space-y-3 sm:space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                <Shield className="w-4 h-4 text-primary" />
              </div>
              <span className="text-foreground font-semibold tracking-tight text-sm">
                VectorShield
              </span>
            </div>
            <p className="text-xs sm:text-sm text-muted-foreground">
              Forensic blockchain recovery for fraud victims.
            </p>
          </div>

          {/* Navigation */}
          <div className="space-y-3 sm:space-y-4">
            <p className="text-[10px] sm:text-xs uppercase tracking-wider text-muted-foreground">
              Navigation
            </p>
            <div className="flex flex-row sm:flex-col gap-3 sm:gap-2">
              <a
                href="#services"
                className="text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Services
              </a>
              <a
                href="#process"
                className="text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Process
              </a>
              <a
                href="#cases"
                className="text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Cases
              </a>
              <a
                href="#contact"
                className="text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Contact
              </a>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-3 sm:space-y-4">
            <p className="text-[10px] sm:text-xs uppercase tracking-wider text-muted-foreground">
              Contact
            </p>
            <div className="flex flex-col gap-1.5 sm:gap-2">
              <a
                href="mailto:cases@vectorshield.com"
                className="text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                cases@vectorshield.com
              </a>
              <p className="text-xs sm:text-sm text-muted-foreground">
                London | Singapore | New York
              </p>
            </div>
          </div>
        </div>

        {/* Legal disclaimer */}
        <div className="pt-6 sm:pt-8 border-t border-border">
          <p className="text-[10px] sm:text-xs text-muted-foreground/70 mb-4 sm:mb-6 max-w-3xl leading-relaxed">
            VectorShield Recovery provides investigative and advisory services.
            Recovery outcomes depend on case specifics and are not guaranteed.
            We do not provide legal advice. All cases are handled in compliance
            with applicable laws and regulations.
          </p>

          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-4">
            <p className="text-[10px] sm:text-xs text-muted-foreground">
              &copy; {new Date().getFullYear()} VectorShield Recovery Ltd.
            </p>
            <p className="text-[10px] sm:text-xs text-muted-foreground">
              Regulated by the FCA (Placeholder)
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
