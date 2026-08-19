import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "Menu — Marina Kitchen" },
      {
        name: "description",
        content:
          "Seasonal coastal menu — small plates, mains from land and sea, desserts, and drinks.",
      },
      { property: "og:title", content: "Menu — Marina Kitchen" },
      {
        property: "og:description",
        content:
          "Seasonal coastal menu — small plates, mains from land and sea, desserts, and drinks.",
      },
    ],
  }),
  component: Menu,
});

type Dish = { name: string; desc: string; price: string; tag?: string };

function Section({ title, items }: { title: string; items: Dish[] }) {
  return (
    <div>
      <h3 className="text-xl font-semibold">{title}</h3>
      <ul className="mt-5 space-y-5">
        {items.map((d) => (
          <li key={d.name} className="flex items-baseline justify-between gap-6">
            <div>
              <div className="font-medium text-foreground">
                {d.name}
                {d.tag ? (
                  <span className="ml-2 rounded-full bg-secondary px-2 py-0.5 text-xs font-medium uppercase tracking-wide text-secondary-foreground">
                    {d.tag}
                  </span>
                ) : null}
              </div>
              <p className="mt-1 text-sm text-muted-foreground">{d.desc}</p>
            </div>
            <span className="shrink-0 font-medium text-foreground">{d.price}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Menu() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur-md">
        <nav className="container-prose flex h-16 items-center justify-between">
          <Link to="/" className="font-display text-lg font-semibold tracking-tight">
            Marina Kitchen
          </Link>
          <div className="flex items-center gap-8 text-sm font-medium">
            <Link to="/" className="text-muted-foreground transition-colors hover:text-foreground">
              Home
            </Link>
            <Link
              to="/menu"
              className="text-foreground"
            >
              Menu
            </Link>
            <a
              href="tel:+10000000000"
              className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Book a table
            </a>
          </div>
        </nav>
      </header>

      <section className="border-b border-border bg-secondary/40">
        <div className="container-prose py-16">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
            Changing with the season
          </p>
          <h1 className="mt-3 text-4xl font-semibold sm:text-5xl">The menu</h1>
          <p className="mt-4 max-w-xl text-base text-muted-foreground">
            Prices in £. A discretionary 12.5% service charge applies to tables of six or more.
            Allergies? Tell us and we'll guide you through it.
          </p>
        </div>
      </section>

      <section className="container-prose py-16">
        <div className="grid gap-14 md:grid-cols-2">
          <Section
            title="Small plates"
            items={[
              {
                name: "Sourdough & cultured butter",
                desc: "Daily-baked loaf, sea salt, whipped butter.",
                price: "£6",
              },
              {
                name: "Line-caught mackerel tartare",
                desc: "Apple, horseradish, dill oil.",
                price: "£11",
                tag: "New",
              },
              {
                name: "Heritage tomato & burrata",
                desc: "Basil, aged vinegar, sourdough crumb.",
                price: "£12",
              },
            ]}
          />
          <Section
            title="From the sea"
            items={[
              {
                name: "Whole grilled lemon sole",
                desc: "Brown butter, capers, lemon, samphire.",
                price: "£26",
              },
              {
                name: "Day-boat cod, fennel velouté",
                desc: "Clams, new potato, parsley.",
                price: "£24",
              },
              {
                name: "Garlic prawn linguine",
                desc: "White wine, chilli, parsley.",
                price: "£19",
              },
            ]}
          />
          <Section
            title="From the land"
            items={[
              {
                name: "Dry-aged ribeye, 300g",
                desc: "Bone marrow butter, triple-cooked chips.",
                price: "£32",
              },
              {
                name: "Slow-roast lamb shoulder",
                desc: "Anchovy, gremolata, peas. For two.",
                price: "£44",
              },
              {
                name: "Charred cauliflower",
                desc: "Tahini, pomegranate, dukkah.",
                price: "£15",
                tag: "V",
              },
            ]}
          />
          <Section
            title="Sweet & to finish"
            items={[
              {
                name: "Salted caramel tart",
                desc: "Crème fraîche, dark chocolate.",
                price: "£9",
              },
              {
                name: "Lemon & thyme sorbet",
                desc: "Olive oil shortbread.",
                price: "£7",
              },
              {
                name: "Cheese of the day",
                desc: "Quince, oat cracker.",
                price: "£11",
              },
            ]}
          />
        </div>
        <p className="mt-12 text-xs text-muted-foreground">
          This is placeholder copy — paste your real menu over these items.
        </p>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-background">
        <div className="container-prose flex flex-col items-center justify-between gap-4 py-10 text-sm text-muted-foreground sm:flex-row">
          <span>© {new Date().getFullYear()} Marina Kitchen. All rights reserved.</span>
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full border border-border px-5 py-2 text-foreground transition-colors hover:bg-secondary"
          >
            ← Back to home
          </Link>
        </div>
      </footer>
    </div>
  );
}
