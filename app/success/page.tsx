import Link from "next/link"
import type { Metadata } from "next"
import { CheckCircle2 } from "lucide-react"

export const metadata: Metadata = {
  title: "Order Confirmed | Dinastia di Sicilia",
  description: "Thank you for your purchase of Dinastia di Sicilia card game.",
}

export default function SuccessPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      {/* Radial glow behind the card */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] blur-[120px] bg-primary/10 rounded-full" />
      </div>

      <div className="relative z-10 max-w-lg w-full text-center">
        {/* Decorative ring + icon */}
        <div className="flex justify-center mb-8">
          <div className="relative">
            <div className="absolute inset-0 blur-2xl bg-primary/30 rounded-full" />
            <div className="relative w-24 h-24 rounded-full border-2 border-primary/50 flex items-center justify-center bg-card">
              <CheckCircle2 className="w-12 h-12 text-primary" />
            </div>
          </div>
        </div>

        {/* Heading */}
        <p className="text-primary uppercase tracking-[0.3em] text-sm mb-3 font-sans">
          Payment Successful
        </p>
        <h1 className="font-serif text-4xl md:text-5xl mb-6 text-balance">
          Grazie! Your Dynasty Awaits
        </h1>

        {/* Body */}
        <div className="bg-card border border-border/50 rounded-lg p-8 mb-8 space-y-4">
          <p className="text-foreground/80 font-sans text-lg leading-relaxed">
            Your order has been confirmed. We are preparing your copy of{" "}
            <span className="text-primary font-serif">Dinastia di Sicilia</span> for shipment.
          </p>
          <p className="text-foreground/60 font-sans text-sm leading-relaxed">
            You will receive a confirmation email shortly with your order details and tracking information once your package ships.
          </p>
        </div>

        {/* Decorative divider */}
        <div className="flex items-center gap-4 mb-8">
          <div className="flex-1 h-px bg-border/50" />
          <span className="text-primary/50 text-lg">✦</span>
          <div className="flex-1 h-px bg-border/50" />
        </div>

        {/* Stats reminder */}
        <div className="flex items-center justify-center gap-8 mb-10 text-foreground/60 font-sans">
          <div className="flex flex-col items-center gap-1">
            <span className="text-2xl font-serif text-primary">2-4</span>
            <span className="text-xs uppercase tracking-wider">Players</span>
          </div>
          <div className="h-6 w-px bg-border" />
          <div className="flex flex-col items-center gap-1">
            <span className="text-2xl font-serif text-primary">38</span>
            <span className="text-xs uppercase tracking-wider">Cards</span>
          </div>
          <div className="h-6 w-px bg-border" />
          <div className="flex flex-col items-center gap-1">
            <span className="text-2xl font-serif text-primary">15-30</span>
            <span className="text-xs uppercase tracking-wider">Minutes</span>
          </div>
        </div>

        {/* CTA */}
        <Link
          href="/"
          className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground font-sans text-sm uppercase tracking-widest hover:bg-primary/90 transition-colors rounded-md"
        >
          Back to Homepage
        </Link>
      </div>
    </div>
  )
}
