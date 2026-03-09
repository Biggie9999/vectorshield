"use client"

import { useState, useRef } from "react"

const scamTypes = [
  {
    id: "rug-pull",
    name: "Rug Pull",
    description:
      "Project creators abandon a token after raising funds, leaving investors with worthless assets. Common in DeFi and NFT projects.",
    method:
      "We trace deployment wallets, identify connected exchanges, and work with legal teams to freeze assets before liquidation.",
    recoveryRate: "72%",
  },
  {
    id: "fake-exchange",
    name: "Fake Exchange",
    description:
      "Fraudulent platforms that mimic legitimate exchanges, stealing deposits and blocking withdrawals.",
    method:
      "Domain forensics, wallet tracing to real exchanges, and coordination with hosting providers and law enforcement.",
    recoveryRate: "68%",
  },
  {
    id: "romance-fraud",
    name: "Romance Fraud",
    description:
      "Long-term manipulation schemes where criminals build fake relationships to extract crypto payments.",
    method:
      "Social engineering analysis, multi-platform wallet tracing, and partnership with international cybercrime units.",
    recoveryRate: "54%",
  },
  {
    id: "investment-scheme",
    name: "Investment Scheme",
    description:
      "Ponzi or pyramid structures disguised as legitimate investment opportunities with guaranteed returns.",
    method:
      "Full network analysis, identification of fund flow patterns, and coordination with securities regulators.",
    recoveryRate: "61%",
  },
  {
    id: "wallet-hack",
    name: "Wallet Hack",
    description:
      "Unauthorized access to private keys through malware, phishing, or compromised seed phrases.",
    method:
      "Real-time tracing, exchange notification within hours, and emergency fund freezing protocols.",
    recoveryRate: "78%",
  },
  {
    id: "nft-fraud",
    name: "NFT Fraud",
    description:
      "Counterfeit NFTs, marketplace exploits, or fake minting sites that drain wallets.",
    method:
      "Smart contract analysis, marketplace coordination, and recovery of ETH/SOL from traced wallets.",
    recoveryRate: "65%",
  },
  {
    id: "pig-butchering",
    name: "Pig Butchering",
    description:
      "Long-con investment fraud combining romance scams with fake trading platforms over months.",
    method:
      "Multi-jurisdictional investigation, deep wallet analysis, and collaboration with Asian cybercrime taskforces.",
    recoveryRate: "47%",
  },
  {
    id: "phishing",
    name: "Phishing",
    description:
      "Deceptive emails, websites, or messages that trick users into revealing private keys or signing malicious transactions.",
    method:
      "Rapid response tracing, immediate exchange alerts, and smart contract interaction reversal where possible.",
    recoveryRate: "71%",
  },
]

export function ScamTypeSelector() {
  const [selected, setSelected] = useState(scamTypes[0])
  const scrollRef = useRef<HTMLDivElement>(null)

  return (
    <section id="services" className="py-24 border-t border-border">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-bold mb-12 tracking-tight">
          What type of scam are you dealing with?
        </h2>

        {/* Horizontal scrollable pills */}
        <div
          ref={scrollRef}
          className="flex gap-3 overflow-x-auto pb-4 scrollbar-hide -mx-6 px-6"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {scamTypes.map((type) => (
            <button
              key={type.id}
              onClick={() => setSelected(type)}
              className={`flex-shrink-0 px-4 py-2.5 text-sm font-medium transition-all duration-200 rounded-xl ${
                selected.id === type.id
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary border border-border text-foreground hover:border-primary"
              }`}
            >
              {type.name}
            </button>
          ))}
        </div>

        {/* Dynamic content */}
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          <div className="p-6 bg-card border-l-4 border-l-primary border border-border rounded-xl">
            <h3 className="text-xs uppercase tracking-wider text-muted-foreground mb-3">
              Description
            </h3>
            <p className="text-foreground leading-relaxed">
              {selected.description}
            </p>
          </div>
          <div className="p-6 bg-card border-l-4 border-l-primary border border-border rounded-xl">
            <h3 className="text-xs uppercase tracking-wider text-muted-foreground mb-3">
              Recovery Method
            </h3>
            <p className="text-foreground leading-relaxed">{selected.method}</p>
          </div>
          <div className="p-6 bg-card border-l-4 border-l-primary border border-border rounded-xl">
            <h3 className="text-xs uppercase tracking-wider text-muted-foreground mb-3">
              Average Recovery Rate
            </h3>
            <p className="text-4xl font-mono font-bold text-primary">
              {selected.recoveryRate}
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              Based on closed cases in this category
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
