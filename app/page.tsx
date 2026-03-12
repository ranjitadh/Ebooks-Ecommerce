import { CartProvider } from "@/lib/cart-context"
import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { CardsSection } from "@/components/cards-section"
import { BuySection } from "@/components/buy-section"
import { CartDrawer } from "@/components/cart-drawer"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <CartProvider>
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <CardsSection />
        <BuySection />
      </main>
      <Footer />
      <CartDrawer />
    </CartProvider>
  )
}
