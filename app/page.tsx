import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/hero"
import { ScamTypeSelector } from "@/components/scam-type-selector"
import { ProcessSteps } from "@/components/process-steps"
import { RecoveredCases } from "@/components/recovered-cases"
import { TrustSignals } from "@/components/trust-signals"
import { IntakeForm } from "@/components/intake-form"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <ScamTypeSelector />
      <ProcessSteps />
      <RecoveredCases />
      <TrustSignals />
      <IntakeForm />
      <Footer />
    </main>
  )
}
