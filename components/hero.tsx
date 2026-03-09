"use client"

import Image from "next/image"

export function Hero() {
  const stats = [
    { value: "$47M+", label: "Recovered" },
    { value: "800+", label: "Cases Closed" },
    { value: "62", label: "Countries" },
    { value: "94", label: "Avg. Days" },
  ]

  return (
    <section className="relative min-h-screen flex items-center pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight text-balance">
              Your Funds Were Taken.{" "}
              <span className="text-primary">We Bring Them Back.</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
              Forensic-grade blockchain tracing and legal recovery for crypto
              fraud victims. We identify perpetrators, trace stolen assets, and
              coordinate with global authorities.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="inline-flex px-6 py-3.5 bg-primary text-primary-foreground font-medium text-sm hover:bg-accent transition-colors rounded-xl"
              >
                Begin Recovery Assessment
              </a>
              <a
                href="#cases"
                className="inline-flex px-6 py-3.5 border border-border text-foreground font-medium text-sm hover:border-primary hover:text-primary transition-colors rounded-xl"
              >
                See Recovered Cases
              </a>
            </div>

            {/* Trust stats */}
            <div className="flex flex-wrap gap-3 pt-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="flex items-center gap-2 px-4 py-2.5 bg-secondary/50 border border-border rounded-xl"
                >
                  <span className="text-primary font-mono font-bold">
                    {stat.value}
                  </span>
                  <span className="text-muted-foreground text-sm">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Hero Image */}
          <div className="relative h-[400px] lg:h-[500px]">
            <div className="absolute inset-0 bg-primary/5 rounded-3xl overflow-hidden border border-border">
              <Image
                src="/images/hero-shield.jpg"
                alt="VectorShield cyber security protection visualization"
                fill
                className="object-cover"
                priority
              />
              {/* Overlay gradient for text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
