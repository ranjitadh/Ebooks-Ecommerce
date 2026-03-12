import Image from "next/image"

const cardCategories = [
  {
    number: "01",
    title: "CHARACTERS",
    description: (
      <>
        From visionaries like <span className="text-primary">Vincenzo Florio</span> to the diplomatic elegance of <span className="text-primary">Donna Franca</span>. The protagonists who shaped the destiny of an island.
      </>
    ),
  },
  {
    number: "02",
    title: "EVENTS",
    description: (
      <>
        Relive crucial moments: from the ferment of the <span className="text-primary">Belle Époque</span> to the tensions of the <span className="text-primary">Unification of Italy</span>. History moving before your eyes.
      </>
    ),
  },
  {
    number: "03",
    title: "PLACES",
    description: (
      <>
        From the splendor of <span className="text-primary">Villa Florio</span> to the architectural intimacy of <span className="text-primary">Villa della Dinastia</span>. The stages where power and art met.
      </>
    ),
  },
  {
    number: "04",
    title: "INDUSTRIES",
    description: (
      <>
        From <span className="text-primary">tuna processing</span> to <span className="text-primary">Marsala wine</span>, from <span className="text-primary">shipping</span> to <span className="text-primary">sulfur mines</span>. The empire that built a dynasty.
      </>
    ),
  },
]

export function CardsSection() {
  return (
    <section id="cards" className="py-24 relative bg-card/50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl mb-6 text-balance">
            The Four Pillars of the<br />Florio Myth
          </h2>
          <p className="text-foreground/70 max-w-2xl mx-auto font-sans text-lg">
            An intuitive game system based on four types of collectible cards. Each card is a fragment of history, a fundamental piece to build your dynasty.
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
          {/* Left: Numbered Categories */}
          <div className="space-y-10 lg:pl-8">
            {cardCategories.map((category) => (
              <div key={category.number} className="flex gap-6">
                <span className="font-serif text-3xl md:text-4xl text-foreground/30 leading-none">
                  {category.number}
                </span>
                <div>
                  <h3 className="font-serif text-lg md:text-xl tracking-widest mb-3 text-foreground">
                    {category.title}
                  </h3>
                  <p className="text-foreground/70 font-sans text-sm md:text-base leading-relaxed">
                    {category.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right: Cards Display */}
          <div className="relative flex justify-center items-center">
            <div className="relative">
              {/* Decorative glow */}
              <div className="absolute inset-0 blur-3xl bg-primary/10 rounded-full scale-90 pointer-events-none" />
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/tris%20cards%20transparent-eF4NU4v5OcUzi8gQPGQFtPXvkH3l6W.png"
                alt="Sample cards from Dinastia di Sicilia showing Characters, Events, and Places categories"
                width={500}
                height={400}
                className="relative z-10 w-full max-w-[500px] h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
