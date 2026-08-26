import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { Home, Sheet, Phone, Table2 } from "lucide-react";
import menuPhotoAsset from "@/assets/siesta-menu-photo.jpg.asset.json";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "Menu — Siesta Café, Windsor" },
      {
        name: "description",
        content:
          "Our full menu: stone baked pizzas, pasta dishes, char grilled steaks, salads, ciabattas and wraps, house specials, desserts and drinks.",
      },
      { property: "og:title", content: "Menu — Siesta Café, Windsor" },
      {
        property: "og:description",
        content:
          "Stone baked pizzas, pasta, char grilled steaks, salads, ciabattas, house specials, desserts and drinks.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Menu,
});

type Dish = { name: string; desc?: string; price?: string };

function Section({
  title,
  subtitle,
  items,
  dark = false,
}: {
  title: string;
  subtitle?: string;
  items: Dish[];
  dark?: boolean;
}) {
  return (
    <div
      className={
        dark
          ? "rounded-2xl border border-border bg-accent p-8 text-foreground"
          : "rounded-2xl border border-border bg-card p-8"
      }
    >
      <h2 className="font-display text-2xl font-semibold">{title}</h2>
      {subtitle ? (
        <p
          className={
            dark
              ? "mt-2 text-sm text-foreground/70"
              : "mt-2 text-sm text-muted-foreground"
          }
        >
          {subtitle}
        </p>
      ) : null}
      <ul className="mt-6 space-y-4">
        {items.map((d) => (
          <li key={d.name} className="flex items-baseline justify-between gap-6">
            <div>
              <div className="font-medium">{d.name}</div>
              {d.desc ? (
                <p
                  className={
                    dark
                      ? "mt-0.5 text-sm text-foreground/70"
                      : "mt-0.5 text-sm text-muted-foreground"
                  }
                >
                  {d.desc}
                </p>
              ) : null}
            </div>
            {d.price ? <span className="shrink-0 font-medium">{d.price}</span> : null}
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
              className="inline-flex items-center gap-1.5 text-foreground"
            >
              <Sheet className="h-4 w-4" />
              Menu
            </Link>
            <a
              href="/#contact"
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
              Book a table
            </a>
          </div>
        </nav>
      </header>

      <section className="border-b border-border bg-secondary/40">
        <div className="container-prose py-16">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
            Café · Restaurant
          </p>
          <h1 className="mt-3 font-display text-4xl font-semibold sm:text-5xl">The menu</h1>
          <p className="mt-4 max-w-xl text-base text-muted-foreground">
            (V) vegetarian · (VV) vegan. Allergies? Please let us know and we'll guide you through
            the menu.
          </p>
        </div>
      </section>

      <section className="container-prose py-12">
        <figure className="overflow-hidden rounded-2xl border border-border bg-card">
          <img
            src={menuPhotoAsset.url}
            alt="Siesta Café printed menu"
            className="w-full object-cover"
            loading="lazy"
          />
          <figcaption className="px-6 py-4 text-sm text-muted-foreground">
            Our printed menu — full details listed below.
          </figcaption>
        </figure>
      </section>

      <section className="container-prose py-16">
        <div className="grid items-start gap-8 md:grid-cols-2">
          <Section
            title="Stone Baked Pizzas"
            subtitle="Hand stretched, 100% fresh dough pizzas"
            items={[
              { name: "Classic Margherita (V)", desc: "Mozzarella, tomato and basil sauce", price: "£12.95" },
              { name: "Pollo", desc: "Mozzarella, tomato sauce, grilled chicken, red onion", price: "£15.95" },
              { name: "Funghi (V)", desc: "Mozzarella, tomato sauce, mushrooms", price: "£13.95" },
              { name: "Hawaiian", desc: "Ham, pineapple, mozzarella, tomato sauce", price: "£15.95" },
              { name: "Piccante Americana", desc: "Mozzarella, pepperoni, jalapeño peppers", price: "£15.95" },
              { name: "Vegetariana (V)", desc: "Mixed peppers, mozzarella, red onion, sweetcorn", price: "£13.95" },
              { name: "BBQ Chicken", desc: "Red onion, barbecue sauce, mozzarella cheese", price: "£15.95" },
            ]}
          />

          <Section
            title="Pasta Dishes"
            subtitle="Gluten free penne pasta available — please select your choice of pasta from our pasta section"
            items={[
              { name: "Spaghetti Bolognese", desc: "Beef mince, bolognese sauce, parmesan cheese", price: "£15.95" },
              { name: "Penne, Spinach, Feta Cheese Pasta", desc: "Baby spinach, feta cheese, tomato sauce (V)", price: "£13.95" },
              { name: "Chicken and Mushroom Linguine", desc: "Grilled chicken, parmesan, creamy mushroom sauce", price: "£14.95" },
              { name: "Linguine Prawn", desc: "Mixed peppers, onions, gently spiced tomato sauce", price: "£17.95" },
              { name: "Chicken Pesto", desc: "Penne pasta, grilled chicken, pesto sauce, parmesan", price: "£12.95" },
            ]}
          />

          <Section
            title="House Specials"
            dark
            items={[
              { name: "Traditional Fish and Chips", desc: "Peas, tartar sauce", price: "£16.95" },
              { name: "Oven Cooked Ribs", desc: "Barbecue sauce, chips", price: "£16.95" },
              { name: "Chicken and Mushroom Special", desc: "Sautéed potatoes, creamy mushroom sauce", price: "£16.95" },
              { name: "Chicken Burger", desc: "Grilled chicken, sweet chilli jam, lettuce, tomato, red onion, chips", price: "£13.95" },
              { name: "Beef Burger", desc: "Lettuce, tomato, red onion, mayonnaise, chips", price: "£13.95" },
              { name: "Char Grilled Lamb Chops", desc: "Mixed salad, chips, tzatziki", price: "£22.95" },
              { name: "Char Grilled Salmon", desc: "Sautéed potatoes, mixed salad", price: "£18.95" },
            ]}
          />

          <Section
            title="Char Grilled Steaks"
            dark
            subtitle="Our prime quality steaks are grass-fed British cattle and 30 days dry aged on the bone. All our steaks are served with chips and peppercorn sauce."
            items={[
              { name: "Sirloin", price: "£24.95" },
              { name: "Rib-Eye", price: "£26.95" },
            ]}
          />

          <Section
            title="Main Course Salads"
            items={[
              { name: "Chicken Caesar Salad", desc: "Cos lettuce, croutons, parmesan, Caesar dressing", price: "£15.95" },
              { name: "Tuna Salad", desc: "Mixed salad leaves, red onions, vine tomatoes, sweetcorn, cucumber", price: "£14.95" },
              { name: "Siesta Salad", desc: "Lettuce, olives, avocado, feta, red onion, tomatoes, 2 boiled eggs, peas (V)", price: "£15.95" },
              { name: "Greek Salad", desc: "Vine tomatoes, red onions, feta cheese, cucumber, olives (VV)", price: "£13.95" },
            ]}
          />

          <Section
            title="Warm Ciabatta Bread or Tortilla Wraps"
            subtitle="Please select ciabatta or wrap"
            items={[
              { name: "Egg & Cheese", desc: "Chilli jam, mayonnaise and chips (V)", price: "£11.95" },
              { name: "BLT", desc: "Bacon, lettuce, tomato & chips", price: "£13.95" },
              { name: "Aegean", desc: "Feta cheese, tomato & avocado, oil and lemon dressing, chips (VV)", price: "£12.95" },
              { name: "Grilled Halloumi Cheese", desc: "Vine tomatoes, lettuce and chips (V)", price: "£13.95" },
              { name: "Grilled Chicken Souvlaki", desc: "Tzatziki, tomato, lettuce and red onion", price: "£13.95" },
              { name: "Falafel and Humus", desc: "Vine tomatoes, lettuce and chips (VV)", price: "£11.95" },
            ]}
          />

          <Section
            title="Side Dishes"
            items={[
              { name: "Chips", price: "£4.50" },
              { name: "Green Salad", price: "£6.50" },
              { name: "Feta Salad", price: "£7.95" },
              { name: "Salt and Pepper Squid", price: "£8.95" },
              { name: "Halloumi Cheese", price: "£7.95" },
              { name: "Tomato Bruschetta", price: "£7.95" },
            ]}
          />

          <Section
            title="Children's Menu"
            subtitle="Any dish £8.95"
            dark
            items={[
              { name: "Margharita Pizza" },
              { name: "Penne pasta, tomato sauce" },
              { name: "Chicken nuggets and chips" },
              { name: "Plain beef burger and chips" },
            ]}
          />

          <Section
            title="Desserts"
            items={[
              { name: "Baklava", price: "£7.95" },
              { name: "Greek yoghurt, honey and cinnamon" },
              { name: "Warm apple crumble, vanilla ice cream" },
              { name: "Chocolate brownie, vanilla ice cream" },
              { name: "Cheesecake, fresh cream, dusted cinnamon" },
              { name: "Ice cream", desc: "Choice of vanilla, chocolate or strawberry" },
            ]}
          />

          <Section
            title="Liqueur Coffees"
            subtitle="£9.95 each"
            items={[
              { name: "Italian", desc: "Amaretto Liqueur" },
              { name: "Highland", desc: "Scottish whisky" },
              { name: "Irish", desc: "Jameson Irish Whisky" },
              { name: "Baileys", desc: "Baileys Irish Cream Liqueur" },
              { name: "Kahlúa", desc: "Coffee Liqueur" },
              { name: "Affogato", desc: "Espresso, vanilla ice cream & Amaretto Liqueur" },
            ]}
          />

          <Section
            title="Hot Beverages"
            items={[
              { name: "Espresso", price: "£2.95" },
              { name: "Americano, Café Latte, Cappuccino, Mocha", price: "£3.50" },
              { name: "Almond or oat milk latte or cappuccino", price: "£3.95" },
              { name: "English breakfast or selection of herbal teas", price: "£2.95" },
            ]}
          />

          <Section
            title="Soft Drinks"
            items={[
              { name: "Coke, Coke O, Sprite, Fanta, Appletiser, Ginger Beer", price: "£3.50" },
              { name: "San Pellegrino", desc: "Lemon or Orange", price: "£3.95" },
              { name: "Fruit Juices", desc: "Apple, Orange or Cranberry", price: "£3.95" },
              { name: "Still/Sparkling water 330ml", price: "£3.50" },
              { name: "Still/Sparkling water 750ml", price: "£4.95" },
            ]}
          />

          <Section
            title="Bottle Beers"
            items={[
              { name: "Peroni, Moretti, Carlsberg 330ml", price: "£4.95" },
              { name: "Non-alcoholic beers", price: "£4.95" },
              { name: "Tuborg, London Pride Ale, Guinness 500ml", price: "£6.95" },
            ]}
          />
        </div>
      </section>

      <footer className="border-t border-border bg-background">
        <div className="container-prose flex flex-col items-center justify-between gap-4 py-10 text-sm text-muted-foreground sm:flex-row">
          <span>© {new Date().getFullYear()} Siesta Café, Windsor. All rights reserved.</span>
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full border-2 border-foreground/50 px-5 py-2 font-semibold text-foreground transition-colors hover:bg-foreground hover:text-background"
          >
            ← Back to home
          </Link>
        </div>
      </footer>
    </div>
  );
}
