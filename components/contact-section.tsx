"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Send, CheckCircle, AlertCircle } from "lucide-react"

const FORMSPREE_KEY = process.env.NEXT_PUBLIC_FORMSPREE_KEY || "xnjgvabk"
const FORMSPREE_ENDPOINT = `https://formspree.io/f/${FORMSPREE_KEY}`

export function ContactSection() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    setError(null)

    const form = e.currentTarget
    const data = new FormData(form)

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: data,
        headers: {
          Accept: "application/json",
        },
      })

      if (response.ok) {
        setIsSubmitted(true)
        form.reset()
      } else {
        const json = await response.json()
        const message =
          json?.errors?.map((err: { message: string }) => err.message).join(", ") ||
          "Something went wrong. Please try again."
        setError(message)
      }
    } catch {
      setError("Network error. Please check your connection and try again.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section id="contact" className="py-24 relative bg-card/50">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <p className="text-primary uppercase tracking-[0.3em] text-sm mb-4 font-sans">
              Get in Touch
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl mb-6">
              Contact Us
            </h2>
            <p className="text-foreground/70 font-sans text-lg">
              Have questions about the game or your order? We would love to hear from you.
            </p>
          </div>

          {/* Contact Form */}
          {isSubmitted ? (
            <div className="text-center py-12 px-6 bg-card border border-border/50 rounded-lg">
              <CheckCircle className="h-16 w-16 text-primary mx-auto mb-4" />
              <h3 className="font-serif text-2xl mb-2">Thank You!</h3>
              <p className="text-foreground/70 font-sans">
                Your message has been sent. We will get back to you soon.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-sans uppercase tracking-wider text-foreground/70">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    required
                    placeholder="Your name"
                    className="bg-card border-border/50 focus:border-primary"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-sans uppercase tracking-wider text-foreground/70">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="your@email.com"
                    className="bg-card border-border/50 focus:border-primary"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-sans uppercase tracking-wider text-foreground/70">
                  Subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  required
                  placeholder="How can we help?"
                  className="bg-card border-border/50 focus:border-primary"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-sans uppercase tracking-wider text-foreground/70">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder="Tell us more..."
                  className="bg-card border-border/50 focus:border-primary resize-none"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                disabled={isLoading}
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 py-6 text-lg uppercase tracking-widest"
              >
                {isLoading ? (
                  "Sending..."
                ) : (
                  <>
                    <Send className="h-5 w-5 mr-2" />
                    Send Message
                  </>
                )}
              </Button>

              {error && (
                <div className="flex items-start gap-3 rounded-lg border border-destructive/50 bg-destructive/10 px-4 py-3 text-sm text-destructive">
                  <AlertCircle className="h-4 w-4 mt-0.5 shrink-0" />
                  <span>{error}</span>
                </div>
              )}
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
