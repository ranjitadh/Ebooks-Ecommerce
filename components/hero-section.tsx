"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useCart } from "@/lib/cart-context"

export function HeroSection() {
  const { addItem, setIsOpen } = useCart()

  const handleBuyNow = () => {
    addItem({
      id: "dinastia-di-sicilia",
      name: "Dinastia di Sicilia",
      price: 14.99,
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/BOO-C8JHp8MamZemSSFTjPCq5qCP5ejAQN.png",
    })
    setIsOpen(true)
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Decorative background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23d4af37' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Product Image */}
          <div className="order-1 flex justify-center">
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute inset-0 blur-3xl bg-primary/20 rounded-full scale-75" />
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/BOO-C8JHp8MamZemSSFTjPCq5qCP5ejAQN.png"
                alt="Dinastia di Sicilia card game box featuring the Florio dynasty"
                width={400}
                height={500}
                className="relative z-10 drop-shadow-2xl"
                priority
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="text-center lg:text-left order-2">
            <p className="text-primary uppercase tracking-[0.3em] text-sm mb-4 font-sans">
              The Florio Dynasty
            </p>
            <h1 className="mb-6">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo%20Dinastia%20trasparent-duI8NWkz2qhqna71cCTAKk7kmubNya.png"
                alt="Dinastia di Sicilia"
                width={500}
                height={200}
                className="max-w-[320px] md:max-w-[420px] lg:max-w-[500px] h-auto mx-auto lg:mx-0"
              />
            </h1>
            <p className="text-lg md:text-xl text-foreground/80 mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0 font-sans">
              A 38-card strategic game inspired by real figures and events of the Sicilian Belle Époque, from Vincenzo Florio to Donna Franca.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                onClick={handleBuyNow}
                className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-lg uppercase tracking-widest"
              >
                Buy and Play Now
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="border-primary/50 text-primary hover:bg-primary/10 px-8 py-6 text-lg uppercase tracking-widest"
              >
                <a href="#cards">Learn More</a>
              </Button>
            </div>
            <div className="flex items-center gap-8 mt-8 justify-center lg:justify-start text-foreground/60 font-sans">
              <div className="flex items-center gap-2">
                <span className="text-2xl font-serif text-primary">2-4</span>
                <span className="text-sm uppercase tracking-wider">Players</span>
              </div>
              <div className="h-6 w-px bg-border" />
              <div className="flex items-center gap-2">
                <span className="text-2xl font-serif text-primary">15-30</span>
                <span className="text-sm uppercase tracking-wider">Minutes</span>
              </div>
              <div className="h-6 w-px bg-border" />
              <div className="flex items-center gap-2">
                <span className="text-2xl font-serif text-primary">38</span>
                <span className="text-sm uppercase tracking-wider">Cards</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-primary rounded-full" />
        </div>
      </div>
    </section>
  )
}
