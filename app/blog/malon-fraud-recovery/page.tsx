import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Shield, Search, Lock } from "lucide-react"

export default function BlogPost() {
  return (
    <main className="min-h-screen pt-24 bg-background">
      <Navigation />
      
      <article className="max-w-4xl mx-auto px-4 py-16 md:px-5 md:py-24">
        <Link 
          href="/blog"
          className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors mb-12"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Journal
        </Link>

        <header className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
              Case Study
            </span>
            <span className="px-3 py-1 border border-border text-xs font-medium rounded-full">
              High-Profile Recovery
            </span>
            <time className="text-xs text-muted-foreground font-mono">
              May 12, 2026
            </time>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-tight">
            How VectorShield Recovered <span className="text-primary">$230M</span> from the Malon Fraud Syndicate
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed">
            The Malon Fraud Syndicate thought they had executed the perfect crime. By routing funds through thousands of intermediary wallets and utilizing advanced tumbling services, they believed the $230 million was untraceable. They were wrong.
          </p>
        </header>

        <div className="mb-12 relative w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden border border-border">
          <Image 
            src="/images/malon.jpg" 
            alt="The Malon Fraud Syndicate - Investigation Target"
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="prose prose-invert prose-lg max-w-none">
          <h2 className="flex items-center gap-3 text-2xl font-bold mt-12 mb-6">
            <Search className="w-6 h-6 text-primary" />
            The Incident: A Web of Deceit
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            In early 2025, a sophisticated phishing campaign targeted high-net-worth individuals and institutional liquidity providers. The perpetrators, later identified as the "Malon Syndicate," used spoofed governance portals and deceptive smart contracts to drain wallets across multiple networks. Within 72 hours, an estimated $230 million in Ethereum, stablecoins, and wrapped assets had vanished.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-10">
            The victims approached VectorShield when traditional avenues hit a dead end. The sheer scale and speed of the theft left local authorities struggling to establish a starting point.
          </p>

          <h2 className="flex items-center gap-3 text-2xl font-bold mt-12 mb-6">
            <Shield className="w-6 h-6 text-primary" />
            The Investigation: Untangling the Blockchain
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Our forensic team immediately initiated a comprehensive tracing protocol. The initial challenge was the syndicate's aggressive use of cross-chain bridges and obfuscation techniques. They fractured the stolen funds into micro-transactions, pushing them through heavily utilized privacy protocols.
          </p>
          <ul className="space-y-4 mb-10 text-muted-foreground">
            <li className="flex items-start gap-3">
              <span className="block w-2 h-2 mt-2 rounded-full bg-primary flex-shrink-0" />
              <span><strong>Heuristic Pattern Recognition:</strong> We deployed proprietary AI models to analyze transaction behaviors, identifying hidden links between seemingly unrelated addresses across chains.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="block w-2 h-2 mt-2 rounded-full bg-primary flex-shrink-0" />
              <span><strong>Exchange Collaboration:</strong> By working closely with compliance teams at major tier-1 exchanges, we mapped the egress points where the syndicate attempted to off-ramp funds into fiat.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="block w-2 h-2 mt-2 rounded-full bg-primary flex-shrink-0" />
              <span><strong>Smart Contract Decompilation:</strong> Our security researchers analyzed the malicious contracts, discovering a subtle flaw in how the attackers managed their operational gas fees, which eventually led to their centralized command wallets.</span>
            </li>
          </ul>

          <div className="p-8 my-12 bg-primary/5 border border-primary/20 rounded-2xl">
            <blockquote className="text-xl italic font-medium leading-relaxed text-foreground mb-4">
              "The Malon Syndicate relied on the illusion of absolute anonymity. But on the blockchain, every action leaves a cryptographic shadow. Our job is simply to illuminate it."
            </blockquote>
            <cite className="text-sm text-primary font-mono">— Lead Forensic Investigator, VectorShield</cite>
          </div>

          <h2 className="flex items-center gap-3 text-2xl font-bold mt-12 mb-6">
            <Lock className="w-6 h-6 text-primary" />
            The Recovery: Freezing and Restitution
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            After a grueling four-month investigation, the breakthrough came when a portion of the funds was routed to a centralized exchange under a fabricated corporate identity. VectorShield immediately provided our forensic dossier to international law enforcement partners.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Coordinated freezing orders were executed across multiple jurisdictions simultaneously. In a historic precedent, 94% of the stolen assets were successfully frozen before they could be liquidated.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-10">
            Over the following months, our legal partners navigated complex multi-jurisdictional proceedings to orchestrate the safe return of the $230 million back to the victims, marking one of the largest successful private asset recoveries in cryptocurrency history.
          </p>
        </div>
      </article>

      <Footer />
    </main>
  )
}
