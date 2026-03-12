"use client"

import { ShoppingCart, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useCart } from "@/lib/cart-context"
import { useState } from "react"

export function Header() {
  const { totalItems, setIsOpen } = useCart()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border/50">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <a href="/" className="flex items-center gap-2">
            <span className="font-serif text-xl md:text-2xl tracking-wide text-primary">
              DINASTIA DI SICILIA
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="/#about" className="text-sm text-foreground/80 hover:text-primary transition-colors uppercase tracking-widest">
              About
            </a>
            <a href="/#cards" className="text-sm text-foreground/80 hover:text-primary transition-colors uppercase tracking-widest">
              The Cards
            </a>
            <a href="/#buy" className="text-sm text-foreground/80 hover:text-primary transition-colors uppercase tracking-widest">
              Buy
            </a>
            <a href="/contact" className="text-sm text-foreground/80 hover:text-primary transition-colors uppercase tracking-widest">
              Contact
            </a>
          </div>

          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              className="relative"
              onClick={() => setIsOpen(true)}
            >
              <ShoppingCart className="h-5 w-5 text-primary" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Button>

            {/* Mobile Menu Toggle */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </nav>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden pt-4 pb-2 border-t border-border/50 mt-4">
            <div className="flex flex-col gap-4">
              <a href="/#about" className="text-sm text-foreground/80 hover:text-primary transition-colors uppercase tracking-widest" onClick={() => setMobileMenuOpen(false)}>
                About
              </a>
              <a href="/#cards" className="text-sm text-foreground/80 hover:text-primary transition-colors uppercase tracking-widest" onClick={() => setMobileMenuOpen(false)}>
                The Cards
              </a>
              <a href="/#buy" className="text-sm text-foreground/80 hover:text-primary transition-colors uppercase tracking-widest" onClick={() => setMobileMenuOpen(false)}>
                Buy
              </a>
              <a href="/contact" className="text-sm text-foreground/80 hover:text-primary transition-colors uppercase tracking-widest" onClick={() => setMobileMenuOpen(false)}>
                Contact
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
