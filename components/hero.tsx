"use client"

import Image from "next/image"

export function Hero() {
  const stats = [
    { value: "$47M+", label: "Recovered" },
    { value: "800+", label: "Cases" },
    { value: "62", label: "Countries" },
  ]

  return (
    <section className="relative min-h-[100svh] flex items-center pt-16 md:pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 md:py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left content */}
          <div className="space-y-5 md:space-y-8 order-2 lg:order-1">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary/10 border border-primary/20 rounded-full">
              <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
              <span className="text-xs font-medium text-primary">Trusted by 800+ clients worldwide</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight text-balance">
              Your Funds Were Taken.{" "}
              <span className="text-primary">We Bring Them Back.</span>
            </h1>
            <p className="text-base md:text-lg text-muted-foreground max-w-xl leading-relaxed">
              Forensic-grade blockchain tracing and legal recovery for crypto
              fraud victims. We identify perpetrators, trace stolen assets, and
              coordinate with global authorities.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="#contact"
                className="inline-flex justify-center px-6 py-3.5 bg-primary text-primary-foreground font-medium text-sm hover:bg-accent transition-colors rounded-full shadow-lg shadow-primary/25"
              >
                Begin Recovery Assessment
              </a>
              <a
                href="#cases"
                className="inline-flex justify-center px-6 py-3.5 bg-secondary border border-border text-foreground font-medium text-sm hover:border-primary hover:text-primary transition-colors rounded-full"
              >
                See Recovered Cases
              </a>
            </div>

            {/* Trust stats - horizontal on mobile */}
            <div className="flex items-center gap-6 pt-2 md:pt-4">
              {stats.map((stat, index) => (
                <div key={stat.label} className="flex items-center gap-4">
                  <div className="text-center">
                    <p className="text-xl md:text-2xl font-bold text-primary font-mono">
                      {stat.value}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {stat.label}
                    </p>
                  </div>
                  {index < stats.length - 1 && (
                    <div className="w-px h-8 bg-border" />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right - Hero Image */}
          <div className="relative h-[240px] sm:h-[320px] lg:h-[480px] order-1 lg:order-2">
            <div className="absolute inset-0 bg-primary/5 rounded-2xl lg:rounded-3xl overflow-hidden border border-border">
              <Image
                src="/images/hero-shield.jpg"
                alt="VectorShield cyber security protection visualization"
                fill
                className="object-cover"
                priority
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
            </div>
            {/* Floating badge on image */}
            <div className="absolute bottom-4 left-4 right-4 sm:left-auto sm:right-4 sm:w-auto">
              <div className="flex items-center gap-3 px-4 py-3 bg-card/90 backdrop-blur-md rounded-xl border border-border">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-semibold text-card-foreground">Verified Recovery</p>
                  <p className="text-xs text-muted-foreground">Licensed investigators</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
