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
    <section className="py-24 border-t border-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {signals.map((signal) => (
            <div key={signal.title} className="space-y-4">
              <signal.icon className="w-6 h-6 text-primary" strokeWidth={1.5} />
              <h3 className="text-lg font-semibold text-foreground">
                {signal.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {signal.description}
              </p>
            </div>
          ))}
        </div>

        {/* Certification logos */}
        <div className="flex flex-wrap justify-center gap-8 pt-8 border-t border-border">
          {certifications.map((cert) => (
            <div
              key={cert}
              className="text-sm font-mono text-muted-foreground/50 uppercase tracking-wider"
            >
              {cert}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
