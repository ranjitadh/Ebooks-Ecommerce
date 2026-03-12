import { NextResponse } from "next/server"
import Stripe from "stripe"

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2026-02-25.clover",
})

export interface CheckoutItem {
  id: string
  name: string
  price: number // in euros, e.g. 14.99
  quantity: number
  image: string
}

export async function POST(request: Request) {
  try {
    const { items }: { items: CheckoutItem[] } = await request.json()

    if (!items || items.length === 0) {
      return NextResponse.json({ error: "No items provided" }, { status: 400 })
    }

    const origin = request.headers.get("origin") ?? process.env.NEXT_PUBLIC_BASE_URL ?? "http://localhost:3000"

    const lineItems: Stripe.Checkout.SessionCreateParams.LineItem[] = items.map((item) => ({
      price_data: {
        currency: "eur",
        product_data: {
          name: item.name,
          images: [item.image],
        },
        // Stripe expects amounts in cents (smallest currency unit)
        unit_amount: Math.round(item.price * 100),
      },
      quantity: item.quantity,
    }))

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: lineItems,
      mode: "payment",
      success_url: `${origin}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/cancel`,
      // Collect shipping address for physical product
      shipping_address_collection: {
        allowed_countries: [
          "IT", "DE", "FR", "ES", "PT", "GB", "NL", "BE", "AT", "CH",
          "PL", "SE", "NO", "DK", "FI", "US", "CA", "AU",
        ],
      },
      metadata: {
        product_ids: items.map((i) => i.id).join(","),
      },
    })

    // Return both sessionId and url — frontend uses url for direct redirect
    return NextResponse.json({ sessionId: session.id, url: session.url })
  } catch (error) {
    console.error("Stripe checkout session error:", error)
    const message = error instanceof Error ? error.message : "Internal server error"
    return NextResponse.json({ error: message }, { status: 500 })
  }
}
