const cases = [
  {
    id: "CR-2847",
    type: "Rug Pull",
    amount: "$220,000",
    recovered: "91%",
    duration: "74 days",
  },
  {
    id: "CR-3156",
    type: "Fake Exchange",
    amount: "$1,450,000",
    recovered: "78%",
    duration: "112 days",
  },
  {
    id: "CR-2991",
    type: "Wallet Hack",
    amount: "$89,500",
    recovered: "100%",
    duration: "23 days",
  },
]

export function RecoveredCases() {
  return (
    <section id="cases" className="py-20 border-t border-border">
      <div className="max-w-7xl mx-auto px-5">
        <div className="flex items-center justify-between mb-10">
          <div>
            <p className="text-sm font-medium text-primary mb-3">Case Studies</p>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
              Recovered Cases
            </h2>
          </div>
          <a
            href="#contact"
            className="text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            View All
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {cases.map((caseItem) => (
            <div
              key={caseItem.id}
              className="relative bg-card border border-border p-6 hover:border-primary/50 transition-colors rounded-xl"
            >
              <div className="absolute top-4 right-4 px-2.5 py-1 bg-primary/10 rounded-md">
                <span className="text-xs font-mono font-bold text-primary">
                  CLOSED
                </span>
              </div>

              <div className="mb-5">
                <span className="text-xs text-muted-foreground">Case</span>
                <p className="font-mono text-lg text-foreground">
                  #{caseItem.id}
                </p>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between items-center pb-3 border-b border-border">
                  <span className="text-sm text-muted-foreground">Type</span>
                  <span className="text-sm text-foreground">{caseItem.type}</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-border">
                  <span className="text-sm text-muted-foreground">Amount</span>
                  <span className="text-sm font-mono text-foreground">{caseItem.amount}</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-border">
                  <span className="text-sm text-muted-foreground">Recovered</span>
                  <span className="text-sm font-mono font-bold text-primary">{caseItem.recovered}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Duration</span>
                  <span className="text-sm text-foreground">{caseItem.duration}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
