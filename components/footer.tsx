import { Instagram, Facebook } from "lucide-react"

export function Footer() {
  return (
    <footer className="py-12 border-t border-border/50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="font-serif text-xl text-primary mb-4">Dinastia di Sicilia</h3>
            <p className="text-foreground/60 font-sans text-sm leading-relaxed italic">
              "We believe that history is a people's most precious asset. Our goal is to bring the Florio myth back to life through a playful experience that combines art, culture, and strategy."
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-serif text-sm uppercase tracking-wider mb-4 text-foreground/80">Quick Links</h4>
            <ul className="space-y-2 font-sans text-sm">
              <li>
                <a href="/#about" className="text-foreground/60 hover:text-primary transition-colors">
                  About the Game
                </a>
              </li>
              <li>
                <a href="/#cards" className="text-foreground/60 hover:text-primary transition-colors">
                  The Cards
                </a>
              </li>
              <li>
                <a href="/#buy" className="text-foreground/60 hover:text-primary transition-colors">
                  Buy Now
                </a>
              </li>
              <li>
                <a href="/contact" className="text-foreground/60 hover:text-primary transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-serif text-sm uppercase tracking-wider mb-4 text-foreground/80">Follow Us</h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="text-foreground/60 hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-foreground/60 hover:text-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-border/30 text-center">
          <p className="text-foreground/40 font-sans text-sm">
            © {new Date().getFullYear()} Dinastia di Sicilia. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
