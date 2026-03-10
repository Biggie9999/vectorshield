import { Shield, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="max-w-7xl mx-auto px-5 py-12">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <Shield className="w-6 h-6 text-primary" strokeWidth={1.5} />
              <span className="text-foreground font-bold text-lg tracking-tight">
                VectorShield
              </span>
            </div>
            <p className="text-sm text-muted-foreground">
              Forensic blockchain recovery for fraud victims.
            </p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-wider text-muted-foreground mb-4">
              Navigation
            </p>
            <div className="flex flex-col gap-2.5">
              <a href="#services" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Services
              </a>
              <a href="#process" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Process
              </a>
              <a href="#cases" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Cases
              </a>
              <a href="#contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Contact
              </a>
            </div>
          </div>

          <div>
            <p className="text-xs uppercase tracking-wider text-muted-foreground mb-4">
              Contact
            </p>
            <div className="flex flex-col gap-2.5">
              <a
                href="mailto:sarahleonard@vectorshielderecovery.com"
                className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
              >
                <Mail className="w-5 h-5 flex-shrink-0" />
                sarahleonard@vectorshielderecovery.com
              </a>
              <p className="text-sm text-muted-foreground">
                London | Singapore | New York
              </p>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border">
          <p className="text-xs text-muted-foreground/70 mb-5 max-w-3xl leading-relaxed">
            VectorShield Recovery provides investigative and advisory services.
            Recovery outcomes depend on case specifics and are not guaranteed.
            We do not provide legal advice. All cases are handled in compliance
            with applicable laws and regulations.
          </p>

          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
            <p className="text-xs text-muted-foreground">
              &copy; {new Date().getFullYear()} VectorShield Recovery Ltd. All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground">
              Regulated by the Financial Conduct Authority
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
