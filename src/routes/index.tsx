import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import interiorAsset from "@/assets/siesta-interior.jpg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Siesta Café, Windsor — Café & Restaurant" },
      {
        name: "description",
        content:
          "Stone baked pizzas, fresh pasta, char grilled steaks and great coffee in Windsor. Open daily — book a table or view our menu.",
      },
      { property: "og:title", content: "Siesta Café, Windsor — Café & Restaurant" },
      {
        property: "og:description",
        content:
          "Stone baked pizzas, fresh pasta, char grilled steaks and great coffee in Windsor. Open daily — book a table or view our menu.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur-md">
        <nav className="container-prose flex h-16 items-center justify-between">
          <Link to="/" className="font-display text-lg font-semibold tracking-tight">
            Siesta Café
          </Link>
          <div className="flex items-center gap-8 text-sm font-medium">
            <Link to="/" className="text-muted-foreground transition-colors hover:text-foreground">
              Home
            </Link>
            <Link
              to="/menu"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              Menu
            </Link>
            <a
              href="#contact"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              Contact
            </a>
            <a
              href="tel:+4407557672909"
              className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Book a table
            </a>
          </div>
        </nav>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden bg-primary text-primary-foreground">
        <img
          src={interiorAsset.url}
          alt="Siesta Café dining room in Windsor"
          className="absolute inset-0 h-full w-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/60" />
        <div className="relative container-prose flex min-h-[560px] flex-col justify-center py-20">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-primary-foreground/70">
            Windsor · Café & Restaurant
          </p>
          <h1 className="max-w-3xl text-5xl font-semibold leading-[1.05] sm:text-6xl md:text-7xl">
            Fresh food, proper coffee, all day in Windsor.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-primary-foreground/80">
            Stone baked pizzas, fresh pasta, char grilled steaks and Mediterranean plates — served
            all day in a relaxed setting. Open seven days a week.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-background px-7 py-3 text-sm font-semibold text-foreground transition-transform hover:scale-[1.02]"
            >
              Reserve a table
            </a>
            <Link
              to="/menu"
              className="inline-flex items-center justify-center rounded-full border border-primary-foreground/30 px-7 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground/10"
            >
              View the menu
            </Link>
          </div>
        </div>
      </section>

      {/* Info grid */}
      <section className="container-prose py-20">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {/* Opening times */}
          <article className="rounded-2xl border border-border bg-card p-8">
            <h3 className="text-lg font-semibold">Opening times</h3>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              {[
                ["Monday", "9:00 – 17:00"],
                ["Tuesday", "9:00 – 17:00"],
                ["Wednesday", "9:00 – 17:00"],
                ["Thursday", "9:00 – 20:00"],
                ["Friday", "9:00 – 20:00"],
                ["Saturday", "9:00 – 21:00"],
                ["Sunday", "9:00 – 18:00"],
              ].map(([day, hours]) => (
                <li key={day} className="flex justify-between">
                  <span>{day}</span>
                  <span className="text-foreground">{hours}</span>
                </li>
              ))}
            </ul>
          </article>

          {/* Find us */}
          <article className="rounded-2xl border border-border bg-card p-8">
            <h3 className="text-lg font-semibold">Find us</h3>
            <p className="mt-4 text-sm text-muted-foreground">
              Siesta Café
              <br />
              13 High St
              <br />
              Windsor SL4 1LD
            </p>
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=13+High+St,+Windsor+SL4+1LD"
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-block text-sm font-medium text-primary underline-offset-4 hover:underline"
            >
              Get directions →
            </a>
          </article>

          {/* Contact */}
          <article className="rounded-2xl border border-border bg-card p-8">
            <h3 className="text-lg font-semibold">Contact</h3>
            <p className="mt-4 text-sm text-muted-foreground">
              For reservations and enquiries.
            </p>
            <dl className="mt-4 space-y-2 text-sm">
              <div className="flex justify-between">
                <dt className="text-muted-foreground">Phone</dt>
                <dd className="text-foreground">+44 0755 767 2909</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-muted-foreground">Email</dt>
                <dd className="text-foreground">hello@example.com</dd>
              </div>
            </dl>
          </article>
        </div>
      </section>

      {/* Map */}
      <section id="map" className="border-t border-border">
        <div className="container-prose py-20">
          <h2 className="text-3xl font-semibold sm:text-4xl">Find us in Windsor</h2>
          <p className="mt-3 max-w-xl text-base text-muted-foreground">
            13 High St, Windsor SL4 1LD — right in the heart of town.
          </p>
          <div className="mt-8 overflow-hidden rounded-2xl border border-border">
            <iframe
              title="Siesta Café, Windsor on Google Maps"
              src="https://www.google.com/maps?q=13+High+St,+Windsor+SL4+1LD&output=embed"
              width="100%"
              height="420"
              loading="lazy"
              style={{ border: 0 }}
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="border-t border-border bg-secondary/40">
        <div className="container-prose grid items-center gap-12 py-20 md:grid-cols-2">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
              Our story
            </p>
            <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
              A neighbourhood café at heart.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              Siesta Café is a relaxed café and restaurant in Windsor, serving from morning coffee
              through to dinner. Hand-stretched stone baked pizzas, fresh pasta, grass-fed char
              grilled steaks and Mediterranean plates — cooked simply, with good ingredients. Pull
              up a chair and stay a while.
            </p>

          </div>
          <div className="aspect-[4/3] overflow-hidden rounded-2xl border border-border bg-muted">
            {/* Replace with your photo: import a real image here */}
            <div className="flex h-full w-full items-center justify-center text-sm text-muted-foreground">
              Your photo here
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section id="reviews" className="container-prose py-20">
        <div className="flex items-end justify-between">
          <h2 className="text-3xl font-semibold sm:text-4xl">What guests say</h2>
          <span className="text-sm text-muted-foreground">Rated 4.9 ★ from 320+ reviews</span>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {[
            {
              quote:
                "The freshest seafood we've had in years. Simple, precise, and genuinely warm service.",
              name: "Eleanor R.",
              detail: "Dined in · Friday evening",
            },
            {
              quote:
                "A quiet, confident kitchen. The set lunch is a steal for what you get on the plate.",
              name: "Marcus T.",
              detail: "Dined in · Tuesday lunch",
            },
            {
              quote:
                "We came for one night and booked again before we left. The sourdough alone is worth the trip.",
              name: "Priya & Sam",
              detail: "Dined in · Anniversary",
            },
          ].map((r) => (
            <figure
              key={r.name}
              className="flex flex-col rounded-2xl border border-border bg-card p-7"
            >
              <blockquote className="text-base leading-relaxed text-foreground">
                “{r.quote}”
              </blockquote>
              <figcaption className="mt-5 border-t border-border pt-4 text-sm">
                <div className="font-medium text-foreground">{r.name}</div>
                <div className="text-muted-foreground">{r.detail}</div>
              </figcaption>
            </figure>
          ))}
        </div>
        <p className="mt-6 text-xs text-muted-foreground">
          Replace these placeholder reviews by pasting your own above.
        </p>
      </section>

      {/* Contact CTA */}
      <section
        id="contact"
        className="border-t border-border bg-primary text-primary-foreground"
      >
        <div className="container-prose flex flex-col items-center py-20 text-center">
          <h2 className="text-3xl font-semibold sm:text-4xl">Book your table</h2>
          <p className="mt-4 max-w-md text-primary-foreground/80">
            Walk-ins welcome, but evenings fill fast. Call us or drop a line and we'll find you a
            spot.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href="tel:+4407557672909"
              className="inline-flex items-center justify-center rounded-full bg-background px-7 py-3 text-sm font-semibold text-foreground transition-transform hover:scale-[1.02]"
            >
              Call +44 0755 767 2909
            </a>
            <a
              href="mailto:hello@example.com"
              className="inline-flex items-center justify-center rounded-full border border-primary-foreground/30 px-7 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground/10"
            >
              Email us
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-background">
        <div className="container-prose flex flex-col items-center justify-between gap-4 py-10 text-sm text-muted-foreground sm:flex-row">
          <span>© {new Date().getFullYear()} Siesta Café, Windsor. All rights reserved.</span>
          <nav className="flex items-center gap-6">
            <Link to="/menu" className="hover:text-foreground">
              Menu
            </Link>
            <a href="#about" className="hover:text-foreground">
              About
            </a>
            <a href="#contact" className="hover:text-foreground">
              Contact
            </a>
          </nav>
        </div>
      </footer>
    </div>
  );
}
