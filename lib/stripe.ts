export interface CheckoutItem {
  id: string
  name: string
  price: number
  quantity: number
  image: string
}

/**
 * Initiates a Stripe Checkout redirect for the given cart items.
 *
 * Modern @stripe/stripe-js v5+ removed redirectToCheckout.
 * Instead we use the session.url returned by the API and redirect via window.location.
 *
 * Returns an error string if the process fails, or null on success (page redirects).
 */
export async function redirectToStripeCheckout(items: CheckoutItem[]): Promise<string | null> {
  try {
    // 1. Create a session on the server
    const res = await fetch("/api/create-checkout-session", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ items }),
    })

    if (!res.ok) {
      const data = await res.json()
      return data.error ?? "Failed to create checkout session."
    }

    const { url } = await res.json()

    if (!url) {
      return "Checkout URL was not returned by the server."
    }

    // 2. Redirect directly to the Stripe-hosted checkout page
    window.location.href = url
    return null
  } catch (err) {
    console.error("Checkout error:", err)
    return err instanceof Error ? err.message : "An unexpected error occurred."
  }
}
