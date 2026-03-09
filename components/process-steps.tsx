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
    <section id="process" className="py-20 border-t border-border">
      <div className="max-w-7xl mx-auto px-5">
        <div className="mb-12">
          <p className="text-sm font-medium text-primary mb-3">Our Process</p>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
            How Recovery Works
          </h2>
        </div>

        {/* Desktop: Horizontal */}
        <div className="hidden lg:grid lg:grid-cols-5 gap-6">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              {index < steps.length - 1 && (
                <div className="absolute top-5 left-full w-full h-px bg-border" />
              )}
              <span className="block text-5xl font-mono font-bold text-primary/15 mb-4">
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

        {/* Mobile: Vertical */}
        <div className="lg:hidden space-y-6">
          {steps.map((step) => (
            <div key={step.number} className="flex gap-5">
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <span className="text-sm font-mono font-bold text-primary">
                  {step.number}
                </span>
              </div>
              <div className="flex-1 pt-1">
                <h3 className="text-base font-semibold mb-1 text-foreground">
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
