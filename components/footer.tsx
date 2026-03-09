import { Shield } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border bg-card rounded-t-3xl">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Logo & tagline */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-primary" />
              <span className="text-foreground font-semibold tracking-tight">
                VectorShield
              </span>
            </div>
            <p className="text-sm text-muted-foreground">
              Forensic blockchain recovery for fraud victims.
            </p>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-wider text-muted-foreground">
              Navigation
            </p>
            <div className="flex flex-col gap-2">
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
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-wider text-muted-foreground">
              Contact
            </p>
            <div className="flex flex-col gap-2">
              <a
                href="mailto:cases@vectorshield.com"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                cases@vectorshield.com
              </a>
              <p className="text-sm text-muted-foreground">
                London | Singapore | New York
              </p>
            </div>
          </div>
        </div>

        {/* Legal disclaimer */}
        <div className="pt-8 border-t border-border">
          <p className="text-xs text-muted-foreground/70 mb-6 max-w-3xl">
            VectorShield Recovery provides investigative and advisory services.
            Recovery outcomes depend on case specifics and are not guaranteed.
            We do not provide legal advice. All cases are handled in compliance
            with applicable laws and regulations.
          </p>

          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <p className="text-xs text-muted-foreground">
              &copy; {new Date().getFullYear()} VectorShield Recovery Ltd. All
              rights reserved.
            </p>
            <p className="text-xs text-muted-foreground">
              Regulated by the Financial Conduct Authority (Placeholder)
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
