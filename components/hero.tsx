"use client"

import { useEffect, useRef } from "react"

export function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio
      canvas.height = canvas.offsetHeight * window.devicePixelRatio
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio)
    }
    resize()
    window.addEventListener("resize", resize)

    // Node positions
    const nodes: { x: number; y: number; vx: number; vy: number }[] = []
    const nodeCount = 12
    const width = canvas.offsetWidth
    const height = canvas.offsetHeight

    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
      })
    }

    // Track traced connections for animation
    let tracedProgress = 0
    const connections: [number, number][] = []
    
    // Pre-calculate connections
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const dx = nodes[i].x - nodes[j].x
        const dy = nodes[i].y - nodes[j].y
        const dist = Math.sqrt(dx * dx + dy * dy)
        if (dist < 180) {
          connections.push([i, j])
        }
      }
    }

    const animate = () => {
      ctx.clearRect(0, 0, width, height)

      // Update node positions
      nodes.forEach((node) => {
        node.x += node.vx
        node.y += node.vy

        if (node.x < 0 || node.x > width) node.vx *= -1
        if (node.y < 0 || node.y > height) node.vy *= -1
      })

      // Draw connections
      connections.forEach(([i, j], index) => {
        const dx = nodes[i].x - nodes[j].x
        const dy = nodes[i].y - nodes[j].y
        const dist = Math.sqrt(dx * dx + dy * dy)

        if (dist < 180) {
          const opacity = (1 - dist / 180) * 0.3
          
          // Traced animation effect
          const isTraced = index < Math.floor(tracedProgress)
          
          ctx.beginPath()
          ctx.moveTo(nodes[i].x, nodes[i].y)
          ctx.lineTo(nodes[j].x, nodes[j].y)
          
          if (isTraced) {
            ctx.strokeStyle = `rgba(14, 111, 255, ${opacity + 0.4})`
            ctx.lineWidth = 2
          } else {
            ctx.strokeStyle = `rgba(107, 125, 147, ${opacity})`
            ctx.lineWidth = 1
          }
          ctx.stroke()
        }
      })

      // Draw nodes
      nodes.forEach((node, index) => {
        const isTraced = index < Math.floor(tracedProgress / 2)
        
        ctx.beginPath()
        ctx.arc(node.x, node.y, isTraced ? 5 : 3, 0, Math.PI * 2)
        ctx.fillStyle = isTraced ? "#0E6FFF" : "#6B7D93"
        ctx.fill()

        if (isTraced) {
          ctx.beginPath()
          ctx.arc(node.x, node.y, 10, 0, Math.PI * 2)
          ctx.strokeStyle = "rgba(14, 111, 255, 0.3)"
          ctx.lineWidth = 1
          ctx.stroke()
        }
      })

      // Animate traced progress
      tracedProgress += 0.02
      if (tracedProgress > connections.length) {
        tracedProgress = 0
      }

      requestAnimationFrame(animate)
    }

    const animationId = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener("resize", resize)
      cancelAnimationFrame(animationId)
    }
  }, [])

  const stats = [
    { value: "$47M+", label: "Recovered" },
    { value: "800+", label: "Cases Closed" },
    { value: "62", label: "Countries" },
    { value: "94", label: "Avg. Days" },
  ]

  return (
    <section className="relative min-h-screen flex items-center pt-20">
      <div className="max-w-7xl mx-auto px-6 py-20 w-full">
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
                className="inline-flex px-6 py-3 bg-primary text-primary-foreground font-medium text-sm hover:bg-accent transition-colors rounded-[2px]"
              >
                Begin Recovery Assessment
              </a>
              <a
                href="#cases"
                className="inline-flex px-6 py-3 border border-border text-foreground font-medium text-sm hover:border-primary hover:text-primary transition-colors rounded-[2px]"
              >
                See Recovered Cases
              </a>
            </div>

            {/* Trust stats */}
            <div className="flex flex-wrap gap-3 pt-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="flex items-center gap-2 px-4 py-2 bg-secondary/50 border border-border rounded-[2px]"
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

          {/* Right - Animated blockchain visualization */}
          <div className="relative h-[400px] lg:h-[500px]">
            <canvas
              ref={canvasRef}
              className="absolute inset-0 w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
