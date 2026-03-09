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
      className="relative py-24 border-t border-border overflow-hidden"
    >
      {/* Blue vignette glow */}
      <div className="absolute inset-x-0 bottom-0 h-96 bg-gradient-to-t from-primary/5 to-transparent pointer-events-none" />

      <div className="relative max-w-3xl mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-bold mb-2 tracking-tight">
          Tell Us What Happened
        </h2>
        <p className="text-muted-foreground mb-10">
          Free, confidential assessment within 24 hours.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Name */}
            <div className="space-y-2">
              <label
                htmlFor="name"
                className="block text-sm text-foreground font-medium"
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
                className="w-full px-4 py-3 bg-transparent border border-border text-foreground placeholder:text-muted-foreground focus:border-primary focus:text-primary focus:outline-none transition-colors rounded-[2px]"
                placeholder="Your full name"
              />
            </div>

            {/* Email */}
            <div className="space-y-2">
              <label
                htmlFor="email"
                className="block text-sm text-foreground font-medium"
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
                className="w-full px-4 py-3 bg-transparent border border-border text-foreground placeholder:text-muted-foreground focus:border-primary focus:text-primary focus:outline-none transition-colors rounded-[2px]"
                placeholder="you@email.com"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Amount */}
            <div className="space-y-2">
              <label
                htmlFor="amount"
                className="block text-sm text-foreground font-medium"
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
                className="w-full px-4 py-3 bg-transparent border border-border text-foreground placeholder:text-muted-foreground focus:border-primary focus:text-primary focus:outline-none transition-colors rounded-[2px] [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                placeholder="Estimated value"
              />
            </div>

            {/* Scam Type */}
            <div className="space-y-2">
              <label
                htmlFor="scamType"
                className="block text-sm text-foreground font-medium"
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
                className="w-full px-4 py-3 bg-background border border-border text-foreground focus:border-primary focus:outline-none transition-colors rounded-[2px] cursor-pointer"
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
          <div className="space-y-2">
            <label
              htmlFor="description"
              className="block text-sm text-foreground font-medium"
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
              className="w-full px-4 py-3 bg-transparent border border-border text-foreground placeholder:text-muted-foreground focus:border-primary focus:text-primary focus:outline-none transition-colors rounded-[2px] resize-none"
              placeholder="What happened? Include any relevant details about the scam, wallet addresses, or platform names."
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={status === "submitting" || status === "success"}
            className="w-full px-6 py-4 bg-primary text-primary-foreground font-medium text-sm hover:bg-accent transition-colors rounded-[2px] disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {status === "submitting" && "Submitting..."}
            {status === "success" && "Assessment Request Submitted"}
            {status === "idle" && "Request Free Recovery Assessment"}
          </button>
        </form>
      </div>
    </section>
  )
}
