"use client"

import { useState } from "react"

const scamTypes = [
  "Rug Pull",
  "Wire Transfer Fraud",
  "Bank Transfer Fraud",
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
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("submitting")

    try {
      const response = await fetch("https://formsubmit.co/ajax/sarahleonard@vectorshielderecovery.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(formData)
      })

      if (response.ok) {
        setStatus("success")
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
      } else {
        setStatus("idle")
        alert("There was an error submitting the form.")
      }
    } catch (error) {
      setStatus("idle")
      alert("There was an error submitting the form.")
    }
  }

  return (
    <section id="contact" className="relative py-20 border-t border-border overflow-hidden">
      <div className="absolute inset-x-0 bottom-0 h-80 bg-gradient-to-t from-primary/5 to-transparent pointer-events-none" />

      <div className="relative max-w-2xl mx-auto px-5">
        <div className="mb-10">
          <p className="text-sm font-medium text-primary mb-3">Get Started</p>
          <h2 className="text-2xl md:text-3xl font-bold mb-2 tracking-tight">
            Tell Us What Happened
          </h2>
          <p className="text-muted-foreground">
            Free, confidential assessment within 24 hours.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="name" className="block text-sm text-foreground font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 bg-card border border-border text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none transition-colors rounded-lg"
                placeholder="Your full name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm text-foreground font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 bg-card border border-border text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none transition-colors rounded-lg"
                placeholder="you@email.com"
              />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="amount" className="block text-sm text-foreground font-medium mb-2">
                Amount Lost (USD)
              </label>
              <input
                type="number"
                id="amount"
                name="amount"
                required
                min="0"
                value={formData.amount}
                onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
                className="w-full px-4 py-3 bg-card border border-border text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none transition-colors rounded-lg [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                placeholder="Estimated value"
              />
            </div>

            <div>
              <label htmlFor="scamType" className="block text-sm text-foreground font-medium mb-2">
                Scam Type
              </label>
              <select
                id="scamType"
                name="scamType"
                required
                value={formData.scamType}
                onChange={(e) => setFormData({ ...formData, scamType: e.target.value })}
                className="w-full px-4 py-3 bg-card border border-border text-foreground focus:border-primary focus:outline-none transition-colors rounded-lg cursor-pointer"
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

          <div>
            <label htmlFor="description" className="block text-sm text-foreground font-medium mb-2">
              Brief Description
            </label>
            <textarea
              id="description"
              name="description"
              required
              rows={4}
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              className="w-full px-4 py-3 bg-card border border-border text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none transition-colors rounded-lg resize-none"
              placeholder="What happened? Include any relevant details about the scam, wallet addresses, or platform names."
            />
          </div>

          <button
            type="submit"
            disabled={status === "submitting" || status === "success"}
            className="w-full px-6 py-4 bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors rounded-xl disabled:opacity-70 disabled:cursor-not-allowed"
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
