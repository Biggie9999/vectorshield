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
    <section id="cases" className="py-16 md:py-24 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-start sm:items-center justify-between gap-4 mb-8 md:mb-12">
          <div>
            <p className="text-xs font-medium text-primary uppercase tracking-wider mb-2">Case Studies</p>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight">
              Recovered Cases
            </h2>
          </div>
          <a
            href="#contact"
            className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors whitespace-nowrap"
          >
            View All
          </a>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {cases.map((caseItem) => (
            <div
              key={caseItem.id}
              className="relative bg-card border border-border p-4 sm:p-6 hover:border-primary/50 transition-colors rounded-2xl group"
            >
              {/* Closed badge */}
              <div className="absolute top-3 right-3 sm:top-4 sm:right-4 px-2 py-0.5 bg-primary/10 border border-primary/30 rounded-full">
                <span className="text-[10px] sm:text-xs font-mono font-bold text-primary tracking-wider">
                  CLOSED
                </span>
              </div>

              {/* Case ID */}
              <div className="mb-4 sm:mb-6">
                <span className="text-[10px] sm:text-xs text-muted-foreground">Case</span>
                <p className="font-mono text-base sm:text-lg text-foreground">
                  #{caseItem.id}
                </p>
              </div>

              {/* Details */}
              <div className="space-y-2 sm:space-y-3">
                <div className="flex justify-between items-center border-b border-border pb-2 sm:pb-3">
                  <span className="text-xs sm:text-sm text-muted-foreground">Type</span>
                  <span className="text-xs sm:text-sm text-foreground">
                    {caseItem.type}
                  </span>
                </div>
                <div className="flex justify-between items-center border-b border-border pb-2 sm:pb-3">
                  <span className="text-xs sm:text-sm text-muted-foreground">Amount</span>
                  <span className="text-xs sm:text-sm font-mono text-foreground">
                    {caseItem.amount}
                  </span>
                </div>
                <div className="flex justify-between items-center border-b border-border pb-2 sm:pb-3">
                  <span className="text-xs sm:text-sm text-muted-foreground">
                    Recovered
                  </span>
                  <span className="text-xs sm:text-sm font-mono font-bold text-primary">
                    {caseItem.recovered}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs sm:text-sm text-muted-foreground">
                    Duration
                  </span>
                  <span className="text-xs sm:text-sm text-foreground">
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
