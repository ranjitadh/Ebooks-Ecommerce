export function AboutSection() {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="space-y-16">
          {/* Build Your Florio Collection */}
          <div className="text-center">
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl mb-8 text-balance">
              Build Your Florio Collection
            </h2>
            <div className="space-y-6 text-foreground/80 font-sans text-lg leading-relaxed">
              <p>
                Step into the fascinating world of the Florio dynasty and discover the story of one of Sicily's most influential families. Dinastia di Sicilia combines strategy, history, and beautiful artwork in a fast and engaging card game that is easy to learn and enjoyable for everyone.
              </p>
              <p>
                Each game invites players to explore the characters, events, industries, and places that shaped the Florio legacy while building their own collection of cards and competing to create the most powerful dynasty.
              </p>
            </div>
          </div>

          {/* What's inside the box */}
          <div className="text-center">
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl mb-8 text-balance">
              What's inside the box
            </h2>
            <div className="space-y-6 text-foreground/80 font-sans text-lg leading-relaxed">
              <p>
                Inside the deck you will find 38 beautifully illustrated cards inspired by the history of the Florio family and the places that defined their success. Each card represents an element of their remarkable rise and can be combined strategically to score points and gain influence.
              </p>
              <p>
                The game also includes simple rules that allow players to start playing in just a few minutes, making it perfect for both casual players and history lovers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
