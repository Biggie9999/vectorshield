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
    <section id="cases" className="py-24 border-t border-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
            Recovered Cases
          </h2>
          <a
            href="#contact"
            className="text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            View All Cases
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {cases.map((caseItem) => (
            <div
              key={caseItem.id}
              className="relative bg-card border border-border p-6 hover:border-primary/50 transition-colors rounded-2xl"
            >
              {/* Closed badge */}
              <div className="absolute top-4 right-4 px-2.5 py-1 bg-primary/10 border border-primary/30 rounded-lg">
                <span className="text-xs font-mono font-bold text-primary tracking-wider">
                  CLOSED
                </span>
              </div>

              {/* Case ID */}
              <div className="mb-6">
                <span className="text-xs text-muted-foreground">Case</span>
                <p className="font-mono text-lg text-foreground">
                  #{caseItem.id}
                </p>
              </div>

              {/* Details */}
              <div className="space-y-3">
                <div className="flex justify-between items-center border-b border-border pb-3">
                  <span className="text-sm text-muted-foreground">Type</span>
                  <span className="text-sm text-foreground">
                    {caseItem.type}
                  </span>
                </div>
                <div className="flex justify-between items-center border-b border-border pb-3">
                  <span className="text-sm text-muted-foreground">Amount</span>
                  <span className="text-sm font-mono text-foreground">
                    {caseItem.amount}
                  </span>
                </div>
                <div className="flex justify-between items-center border-b border-border pb-3">
                  <span className="text-sm text-muted-foreground">
                    Recovered
                  </span>
                  <span className="text-sm font-mono font-bold text-primary">
                    {caseItem.recovered}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">
                    Duration
                  </span>
                  <span className="text-sm text-foreground">
                    {caseItem.duration}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
