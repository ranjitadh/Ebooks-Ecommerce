"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useCart } from "@/lib/cart-context"

export function BuySection() {
  const { addItem } = useCart()

  const handlePreOrder = () => {
    addItem({
      id: "dinastia-di-sicilia",
      name: "Dinastia di Sicilia - Edizione Limitata",
      price: 14.99,
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/BOO-C8JHp8MamZemSSFTjPCq5qCP5ejAQN.png",
    })
  }

  return (
    <section id="buy" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Section Header */}
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl mb-8 text-balance">
            A Destiny Written in Gold
          </h2>
          
          <blockquote className="text-foreground/80 font-sans text-lg md:text-xl leading-relaxed mb-12 italic max-w-3xl mx-auto">
            "In Sicily, destiny is like the wind: you cannot stop it, but you can learn to sail against it. Will your dynasty survive the waves of time?"
          </blockquote>

          {/* Product Image */}
          <div className="flex justify-center mb-12">
            <div className="relative">
              <div className="absolute inset-0 blur-3xl bg-primary/15 rounded-full scale-90" />
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/BOO-C8JHp8MamZemSSFTjPCq5qCP5ejAQN.png"
                alt="Dinastia di Sicilia card game box"
                width={300}
                height={400}
                className="relative z-10 drop-shadow-2xl"
              />
            </div>
          </div>

          {/* Pre-order Button */}
          <Button
            size="lg"
            onClick={handlePreOrder}
            className="bg-primary text-primary-foreground hover:bg-primary/90 px-12 py-6 text-lg uppercase tracking-widest"
          >
            Prenota l'Edizione Limitata
          </Button>
        </div>
      </div>
    </section>
  )
}
