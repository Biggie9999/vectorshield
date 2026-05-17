import { Shield, Globe } from "lucide-react"
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
    <section className="py-20 border-t border-border">
      <div className="max-w-7xl mx-auto px-5">
        <div className="mb-12">
          <p className="text-sm font-medium text-primary mb-3">Why Choose Us</p>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
            Trusted Recovery Experts
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-5 mb-12">
          {signals.map((signal) => (
            <div key={signal.title} className="p-6 bg-card border border-border rounded-xl">
              <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                <signal.icon className="w-5 h-5 text-primary" strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {signal.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {signal.description}
              </p>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-6 pt-8 border-t border-border">
          {certifications.map((cert) => (
            <div
              key={cert}
              className="text-sm font-mono text-muted-foreground/60 uppercase tracking-wide"
            >
              {cert}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
