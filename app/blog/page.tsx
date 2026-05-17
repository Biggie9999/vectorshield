import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ArrowRight } from "lucide-react"

export default function BlogIndex() {
  return (
    <main className="min-h-screen pt-24 bg-background">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 py-16 md:px-5 md:py-24">
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            VectorShield <span className="text-primary">Journal</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Inside looks at our process, major recoveries, and the forensic strategies we use to reclaim stolen digital assets.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <article className="group relative border border-border bg-card/50 hover:bg-card/80 transition-colors rounded-2xl overflow-hidden flex flex-col">
            <div className="p-6 md:p-8 flex-1 flex flex-col">
              <div className="flex items-center gap-3 mb-6">
                <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                  Case Study
                </span>
                <time className="text-xs text-muted-foreground font-mono">
                  May 2026
                </time>
              </div>
              
              <h2 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                How VectorShield Recovered $230M from the Malon Fraud Syndicate
              </h2>
              
              <p className="text-sm text-muted-foreground mb-8 flex-1">
                A deep dive into how our team of experts tracked down and successfully recovered $230 million stolen in one of the most sophisticated crypto fraud operations of the year.
              </p>

              <Link 
                href="/blog/malon-fraud-recovery"
                className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors mt-auto"
              >
                Read full case study
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </article>
        </div>
      </div>

      <Footer />
    </main>
  )
}
