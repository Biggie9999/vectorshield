const steps = [
  {
    number: "01",
    title: "Initial Assessment",
    description:
      "Free case evaluation. We analyze your situation, transaction history, and potential recovery pathways.",
  },
  {
    number: "02",
    title: "Blockchain Forensics",
    description:
      "Our investigators trace funds across chains, identify mixer usage, and map the complete transaction graph.",
  },
  {
    number: "03",
    title: "Legal & Exchange Liaison",
    description:
      "We coordinate with exchanges, law enforcement, and legal counsel to freeze identified assets.",
  },
  {
    number: "04",
    title: "Fund Repatriation",
    description:
      "Working with authorities and exchanges, we facilitate the return of recovered assets to you.",
  },
  {
    number: "05",
    title: "Case Closed",
    description:
      "Detailed case report, evidence documentation, and support for any ongoing legal proceedings.",
  },
]

export function ProcessSteps() {
  return (
    <section id="process" className="py-24 border-t border-border">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-bold mb-16 tracking-tight">
          How Recovery Works
        </h2>

        {/* Desktop: Horizontal */}
        <div className="hidden lg:grid lg:grid-cols-5 gap-8">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="absolute top-6 left-full w-full h-px bg-border -translate-y-1/2" />
              )}
              <span className="block text-6xl font-mono font-bold text-primary/10 mb-4">
                {step.number}
              </span>
              <h3 className="text-base font-semibold mb-2 text-foreground">
                {step.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Mobile/Tablet: Vertical */}
        <div className="lg:hidden space-y-8">
          {steps.map((step) => (
            <div key={step.number} className="flex gap-6">
              <span className="text-5xl font-mono font-bold text-primary/10 flex-shrink-0 w-16">
                {step.number}
              </span>
              <div className="pt-2">
                <h3 className="text-base font-semibold mb-2 text-foreground">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
