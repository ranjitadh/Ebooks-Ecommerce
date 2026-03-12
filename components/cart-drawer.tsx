"use client"

import Image from "next/image"
import { X, Plus, Minus, ShoppingBag, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useCart } from "@/lib/cart-context"
import { redirectToStripeCheckout } from "@/lib/stripe"
import { useState } from "react"

export function CartDrawer() {
  const { items, isOpen, setIsOpen, removeItem, totalPrice, updateQuantity } = useCart()
  const [checkoutLoading, setCheckoutLoading] = useState(false)
  const [checkoutError, setCheckoutError] = useState<string | null>(null)

  const handleCheckout = async () => {
    setCheckoutError(null)
    setCheckoutLoading(true)
    const error = await redirectToStripeCheckout(
      items.map((item) => ({
        id: item.id,
        name: item.name,
        price: item.price,
        quantity: item.quantity,
        image: item.image,
      }))
    )
    // If we get here, redirect didn't happen — show the error
    if (error) {
      setCheckoutError(error)
      setCheckoutLoading(false)
    }
  }

  if (!isOpen) return null

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50"
        onClick={() => setIsOpen(false)}
      />

      {/* Drawer */}
      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-card border-l border-border z-50 flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border/50">
          <h2 className="font-serif text-xl flex items-center gap-2">
            <ShoppingBag className="h-5 w-5 text-primary" />
            Your Cart
          </h2>
          <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
            <X className="h-5 w-5" />
          </Button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-auto p-6">
          {items.length === 0 ? (
            <div className="text-center py-12">
              <ShoppingBag className="h-16 w-16 text-muted-foreground/30 mx-auto mb-4" />
              <p className="text-foreground/60 font-sans">Your cart is empty</p>
            </div>
          ) : (
            <div className="space-y-6">
              {items.map((item) => (
                <div key={item.id} className="flex gap-4">
                  <div className="relative w-20 h-24 flex-shrink-0">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-serif text-sm mb-1">{item.name}</h3>
                    <p className="text-primary font-sans text-sm mb-2">
                      €{item.price.toFixed(2)}
                    </p>
                    <div className="flex items-center gap-2">
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8"
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      >
                        <Minus className="h-3 w-3" />
                      </Button>
                      <span className="w-8 text-center font-sans text-sm">
                        {item.quantity}
                      </span>
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      >
                        <Plus className="h-3 w-3" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="ml-auto text-destructive hover:text-destructive"
                        onClick={() => removeItem(item.id)}
                      >
                        Remove
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="p-6 border-t border-border/50 space-y-4">
            <div className="flex items-center justify-between">
              <span className="font-sans text-foreground/70">Subtotal</span>
              <span className="font-serif text-xl text-primary">
                €{totalPrice.toFixed(2)}
              </span>
            </div>
            <p className="text-xs text-foreground/50 font-sans">
              Shipping calculated at checkout
            </p>
            {checkoutError && (
              <p className="text-xs text-destructive font-sans text-center">
                {checkoutError}
              </p>
            )}
            <Button
              size="lg"
              disabled={checkoutLoading}
              onClick={handleCheckout}
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90 py-6 uppercase tracking-widest disabled:opacity-70"
            >
              {checkoutLoading ? (
                <>
                  <Loader2 className="h-5 w-5 mr-2 animate-spin" />
                  Redirecting…
                </>
              ) : (
                "Checkout"
              )}
            </Button>
          </div>
        )}
      </div>
    </>
  )
}
