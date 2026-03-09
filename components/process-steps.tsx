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
    <section id="process" className="py-16 md:py-24 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="mb-10 md:mb-16">
          <p className="text-xs font-medium text-primary uppercase tracking-wider mb-2">Our Process</p>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight">
            How Recovery Works
          </h2>
        </div>

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

        {/* Mobile/Tablet: Vertical with timeline */}
        <div className="lg:hidden space-y-0">
          {steps.map((step, index) => (
            <div key={step.number} className="flex gap-4 relative">
              {/* Timeline line */}
              {index < steps.length - 1 && (
                <div className="absolute left-5 top-12 w-0.5 h-[calc(100%-12px)] bg-border" />
              )}
              {/* Step number circle */}
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center">
                <span className="text-sm font-mono font-bold text-primary">
                  {step.number}
                </span>
              </div>
              <div className="pb-8 pt-1">
                <h3 className="text-sm sm:text-base font-semibold mb-1 text-foreground">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
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
