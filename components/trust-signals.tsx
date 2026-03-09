import { Shield, Globe, BadgeCheck } from "lucide-react"

const signals = [
  {
    icon: Shield,
    title: "Blockchain Certified Investigators",
    description:
      "Our team holds CCFI and CAMS certifications. Each investigator has 500+ hours of blockchain forensics training and direct experience with major chains.",
  },
  {
    icon: Globe,
    title: "NCA & Interpol Coordination",
    description:
      "Direct working relationships with the UK National Crime Agency, Interpol, and cybercrime units in 14 countries for cross-border case coordination.",
  },
  {
    icon: BadgeCheck,
    title: "No Recovery, No Fee",
    description:
      "We operate on contingency. If we don't recover your funds, you don't pay. Our success is directly aligned with yours.",
  },
]

const certifications = [
  "Chainalysis Certified",
  "CCFI Accredited",
  "CAMS Member",
  "ACFE Partner",
  "CipherTrace Licensed",
]

export function TrustSignals() {
  return (
    <section className="py-16 md:py-24 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="mb-8 md:mb-12">
          <p className="text-xs font-medium text-primary uppercase tracking-wider mb-2">Why Us</p>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight">
            Trusted Recovery Experts
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 mb-10 md:mb-16">
          {signals.map((signal) => (
            <div key={signal.title} className="p-4 sm:p-6 bg-card border border-border rounded-2xl space-y-3 sm:space-y-4">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <signal.icon className="w-5 h-5 text-primary" strokeWidth={1.5} />
              </div>
              <h3 className="text-sm sm:text-lg font-semibold text-foreground">
                {signal.title}
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                {signal.description}
              </p>
            </div>
          ))}
        </div>

        {/* Certification logos */}
        <div className="flex flex-wrap justify-center gap-4 sm:gap-8 pt-6 sm:pt-8 border-t border-border">
          {certifications.map((cert) => (
            <div
              key={cert}
              className="text-[10px] sm:text-sm font-mono text-muted-foreground/50 uppercase tracking-wider"
            >
              {cert}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
