import { CartProvider } from "@/lib/cart-context"
import { Header } from "@/components/header"
import { ContactSection } from "@/components/contact-section"
import { CartDrawer } from "@/components/cart-drawer"
import { Footer } from "@/components/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact Us | Dinastia di Sicilia",
  description: "Get in touch with us about Dinastia di Sicilia card game. Have questions about the game or your order? We would love to hear from you.",
}

export default function ContactPage() {
  return (
    <CartProvider>
      <Header />
      <main className="pt-24">
        <ContactSection />
      </main>
      <Footer />
      <CartDrawer />
    </CartProvider>
  )
}
