import Link from "next/link"
import type { Metadata } from "next"
import { XCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "Payment Cancelled | Dinastia di Sicilia",
  description: "Your Dinastia di Sicilia order was cancelled. Return to the store to try again.",
}

export default function CancelPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      {/* Radial glow behind the card */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] blur-[120px] bg-destructive/10 rounded-full" />
      </div>

      <div className="relative z-10 max-w-lg w-full text-center">
        {/* Decorative ring + icon */}
        <div className="flex justify-center mb-8">
          <div className="relative">
            <div className="absolute inset-0 blur-2xl bg-destructive/20 rounded-full" />
            <div className="relative w-24 h-24 rounded-full border-2 border-border flex items-center justify-center bg-card">
              <XCircle className="w-12 h-12 text-foreground/40" />
            </div>
          </div>
        </div>

        {/* Heading */}
        <p className="text-foreground/50 uppercase tracking-[0.3em] text-sm mb-3 font-sans">
          Payment Cancelled
        </p>
        <h1 className="font-serif text-4xl md:text-5xl mb-6 text-balance">
          No Worries, The Dynasty Waits
        </h1>

        {/* Body */}
        <div className="bg-card border border-border/50 rounded-lg p-8 mb-8 space-y-4">
          <p className="text-foreground/80 font-sans text-lg leading-relaxed">
            Your order was not completed. No charge has been made to your account.
          </p>
          <p className="text-foreground/60 font-sans text-sm leading-relaxed">
            Changed your mind? You can return to the store anytime and the{" "}
            <span className="text-primary font-serif">Florio dynasty</span> will still be waiting for you.
          </p>
        </div>

        {/* Decorative divider */}
        <div className="flex items-center gap-4 mb-8">
          <div className="flex-1 h-px bg-border/50" />
          <span className="text-foreground/20 text-lg">✦</span>
          <div className="flex-1 h-px bg-border/50" />
        </div>

        {/* Sicilian quote */}
        <blockquote className="text-foreground/50 font-sans text-sm italic mb-10 max-w-sm mx-auto">
          "In Sicily, destiny is like the wind: you cannot stop it, but you can learn to sail against it."
        </blockquote>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/#buy"
            className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground font-sans text-sm uppercase tracking-widest hover:bg-primary/90 transition-colors rounded-md"
          >
            Try Again
          </Link>
          <Link
            href="/"
            className="inline-flex items-center justify-center px-8 py-4 border border-border text-foreground/70 font-sans text-sm uppercase tracking-widest hover:border-primary/50 hover:text-primary transition-colors rounded-md"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  )
}
