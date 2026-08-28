import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { Home, Sheet, Phone, Table2 } from "lucide-react";
const interiorAsset = { url: "/images/siesta-interior.jpg" };
const eggsAsset = { url: "/images/siesta-eggs.jpg" };
const pizzaAsset = { url: "/images/siesta-pizza.jpg" };
const steakAsset = { url: "/images/siesta-steak.jpg" };
const wrapAsset = { url: "/images/siesta-wrap.jpg" };
const spritzAsset = { url: "/images/siesta-spritz.jpg" };
import { SiteFooter } from "@/components/site-footer";

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
            <Link
              to="/"
              className="inline-flex items-center gap-1.5 text-muted-foreground transition-colors hover:text-foreground"
            >
              <Home className="h-4 w-4" />
              Home
            </Link>
            <Link
              to="/menu"
              className="inline-flex items-center gap-1.5 text-muted-foreground transition-colors hover:text-foreground"
            >
              <Sheet className="h-4 w-4" />
              Menu
            </Link>
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 text-muted-foreground transition-colors hover:text-foreground"
            >
              <Phone className="h-4 w-4" />
              Contact
            </a>
            <a
              href="tel:+4407557672909"
              className="inline-flex items-center justify-center gap-1.5 rounded-full bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/85"
            >
              <Table2 className="h-4 w-4" />
              Call to book
            </a>
          </div>
        </nav>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden bg-background text-foreground">
        <img
          src={interiorAsset.url}
          alt="Siesta Café dining room in Windsor"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-background/30" />

        <div className="relative container-prose flex min-h-[560px] flex-col justify-center py-20">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-foreground/70">
            Windsor · Café & Restaurant
          </p>
          <h1 className="max-w-3xl text-5xl font-semibold leading-[1.05] sm:text-6xl md:text-7xl">
            Fresh food, proper coffee, all day in Windsor.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-foreground/80">
            Stone baked pizzas, fresh pasta, char grilled steaks and Mediterranean plates — served
            all day in a relaxed setting. Open seven days a week.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-primary px-7 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-black/30 transition-all hover:scale-105"
            >
              Reserve a table
            </a>
            <Link
              to="/menu"
              className="inline-flex items-center justify-center rounded-full border-2 border-foreground/70 px-7 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-foreground hover:text-background"
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
            <img
              src={eggsAsset.url}
              alt="Poached eggs on smashed avocado sourdough at Siesta Café"
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="border-t border-border">
        <div className="container-prose py-20">
          <h2 className="text-3xl font-semibold sm:text-4xl">From our kitchen</h2>
          <p className="mt-3 max-w-xl text-base text-muted-foreground">
            A taste of what's coming out of the pass today.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { src: pizzaAsset.url, alt: "Stone baked pizza with basil and ham", label: "Stone baked pizzas" },
              { src: steakAsset.url, alt: "Char grilled steak with chips", label: "Char grilled steaks" },
              { src: wrapAsset.url, alt: "Fresh tortilla wrap cut in half", label: "Tortilla wraps" },
              { src: spritzAsset.url, alt: "Aperol spritz with orange slice", label: "Drinks & spritz" },
            ].map((p) => (
              <figure
                key={p.label}
                className="overflow-hidden rounded-2xl border border-border bg-card"
              >
                <img src={p.src} alt={p.alt} loading="lazy" className="aspect-square w-full object-cover" />
                <figcaption className="px-4 py-3 text-sm font-medium text-foreground">
                  {p.label}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>


      {/* Reviews */}
      <section id="reviews" className="container-prose py-20">
        <h2 className="text-3xl font-semibold sm:text-4xl">What guests say</h2>
        <p className="mt-3 max-w-xl text-base text-muted-foreground">
          Read what people are saying about us on Google, or leave a review after your visit.
        </p>
        <div className="mt-8">
          <a
            href="https://www.google.com/maps/search/?api=1&query=Siesta+Caf%C3%A9+13+High+St+Windsor+SL4+1LD"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-full border-2 border-foreground/70 px-7 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-foreground hover:text-background"
          >
            Read our Google reviews
          </a>
        </div>
      </section>

      {/* Contact CTA */}
      <section
        id="contact"
        className="border-t border-border bg-secondary text-foreground"
      >
        <div className="container-prose flex flex-col items-center py-20 text-center">
          <h2 className="text-3xl font-semibold sm:text-4xl">Book your table</h2>
          <p className="mt-4 max-w-md text-muted-foreground">
            Walk-ins welcome, but evenings fill fast. Call us or drop a line and we'll find you a
            spot.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href="tel:+4407557672909"
              className="inline-flex items-center justify-center rounded-full bg-primary px-7 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-black/30 transition-all hover:scale-105"
            >
              Call +44 0755 767 2909
            </a>
          </div>
        </div>
      </section>


      {/* Footer */}
      <SiteFooter />
    </div>
  );
}
