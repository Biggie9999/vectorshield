"use client"

import { useState } from "react"

const scamTypes = [
  "Rug Pull",
  "Fake Exchange",
  "Romance Fraud",
  "Investment Scheme",
  "Wallet Hack",
  "NFT Fraud",
  "Pig Butchering",
  "Phishing",
  "Other",
]

export function IntakeForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    amount: "",
    scamType: "",
    description: "",
  })
  const [status, setStatus] = useState<"idle" | "submitting" | "success">(
    "idle"
  )

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("submitting")

    // Simulate submission
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setStatus("success")

    // Reset after showing success
    setTimeout(() => {
      setStatus("idle")
      setFormData({
        name: "",
        email: "",
        amount: "",
        scamType: "",
        description: "",
      })
    }, 3000)
  }

  return (
    <section
      id="contact"
      className="relative py-16 md:py-24 border-t border-border overflow-hidden"
    >
      {/* Blue vignette glow */}
      <div className="absolute inset-x-0 bottom-0 h-96 bg-gradient-to-t from-primary/5 to-transparent pointer-events-none" />

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6">
        <div className="mb-8 md:mb-10">
          <p className="text-xs font-medium text-primary uppercase tracking-wider mb-2">Get Started</p>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 tracking-tight">
            Tell Us What Happened
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground">
            Free, confidential assessment within 24 hours.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
            {/* Name */}
            <div className="space-y-1.5 sm:space-y-2">
              <label
                htmlFor="name"
                className="block text-xs sm:text-sm text-foreground font-medium"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                required
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-card border border-border text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none transition-colors rounded-xl text-sm"
                placeholder="Your full name"
              />
            </div>

            {/* Email */}
            <div className="space-y-1.5 sm:space-y-2">
              <label
                htmlFor="email"
                className="block text-xs sm:text-sm text-foreground font-medium"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                required
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-card border border-border text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none transition-colors rounded-xl text-sm"
                placeholder="you@email.com"
              />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
            {/* Amount */}
            <div className="space-y-1.5 sm:space-y-2">
              <label
                htmlFor="amount"
                className="block text-xs sm:text-sm text-foreground font-medium"
              >
                Amount Lost (USD)
              </label>
              <input
                type="number"
                id="amount"
                required
                min="0"
                value={formData.amount}
                onChange={(e) =>
                  setFormData({ ...formData, amount: e.target.value })
                }
                className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-card border border-border text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none transition-colors rounded-xl text-sm [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                placeholder="Estimated value"
              />
            </div>

            {/* Scam Type */}
            <div className="space-y-1.5 sm:space-y-2">
              <label
                htmlFor="scamType"
                className="block text-xs sm:text-sm text-foreground font-medium"
              >
                Scam Type
              </label>
              <select
                id="scamType"
                required
                value={formData.scamType}
                onChange={(e) =>
                  setFormData({ ...formData, scamType: e.target.value })
                }
                className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-card border border-border text-foreground focus:border-primary focus:outline-none transition-colors rounded-xl cursor-pointer text-sm"
              >
                <option value="" disabled>
                  Select type
                </option>
                {scamTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Description */}
          <div className="space-y-1.5 sm:space-y-2">
            <label
              htmlFor="description"
              className="block text-xs sm:text-sm text-foreground font-medium"
            >
              Brief Description
            </label>
            <textarea
              id="description"
              required
              rows={4}
              value={formData.description}
              onChange={(e) =>
                setFormData({ ...formData, description: e.target.value })
              }
              className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-card border border-border text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none transition-colors rounded-xl resize-none text-sm"
              placeholder="What happened? Include any relevant details about the scam, wallet addresses, or platform names."
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={status === "submitting" || status === "success"}
            className="w-full px-6 py-3.5 sm:py-4 bg-primary text-primary-foreground font-medium text-sm hover:bg-accent transition-colors rounded-full shadow-lg shadow-primary/25 disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {status === "submitting" && "Submitting..."}
            {status === "success" && "Assessment Request Submitted"}
            {status === "idle" && "Request Free Assessment"}
          </button>
        </form>
      </div>
    </section>
  )
}
