// src/Pages/ComponentsShowcase.jsx
import { Link, useLocation } from "react-router-dom";
import { useMemo } from "react";
import CollectionsPills from "../components/CollectionsPills";

function useQuery() {
  const { search } = useLocation();
  return useMemo(() => new URLSearchParams(search), [search]);
}

// SINGLE source-of-truth catalog
const groupsCatalog = [
  {
    key: "cards",
    title: "Cards",
    items: [
      {
        key: "hover-tilt",
        title: "Hover Tilt Card",
        to: "/components/cards/hover",
        desc: "Interactive tilt with smooth lift and 3D feel.",
        img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop",
        badge: "New",
      },
    ],
  },
  {
    key: "buttons",
    title: "Buttons",
    items: [
      {
        key: "three-d",
        title: "3D Button",
        to: "/components/buttons/3d",
        desc: "Pressable, tactile 3D effect with Motion.",
        img: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=1200&auto=format&fit=crop",
        badge: "New",
      },
      // add more buttons here...
    ],
  },
  {
    key: "inputs",
    title: "Inputs",
    items: [],
  },
  {
    key: "overlays",
    title: "Overlays",
    items: [],
  },
  {
    key: "navigation",
    title: "Navigation",
    items: [],
  },
];

export default function ComponentsShowcase() {
  const q = useQuery();
  const selected = q.get("group"); // e.g., "buttons"

  const visible = useMemo(
    () => (selected ? groupsCatalog.filter((g) => g.key === selected) : groupsCatalog),
    [selected]
  );

  return (
    <div className="space-y-8">
      {/* Hero header (keep if desired) */}
      <header className="text-center flex flex-col w-full items-center gap-5 py-8 md:py-16 lg:py-20 xl:gap-4">
        <h1 class="text-primary leading-tighter text-4xl font-semibold tracking-tight text-balance lg:leading-[1.1] lg:font-semibold xl:text-5xl xl:tracking-tighter max-w-4xl">The Foundation for your Design System</h1>
        <p className="text-foreground max-w-3xl text-base text-balance sm:text-lg">
          A set of beautifully designed components that you can customize, extend, and build on. Start here then make it your own. Open Source. Open Code.
        </p>
      </header>

    {/* Collections bar -> updates ?group=... */}
      <div className="container-wrapper scroll-mt-24 hidden md:flex">
      <CollectionsPills />
      </div>

      {/* Groups -> Grid of cards */}
      {visible.map((g) => (
        <section key={g.key} className="space-y-3">
          <h2 className="text-sm font-semibold text-neutral-700">{g.title}</h2>

          <div className="grid grid-cols-3 md:grid-cols-3 sm:grid-cols-3 lg:grid-cols-3 gap-6">
            {g.items.length === 0 && (
              <div className="col-span-full rounded-lg border bg-white p-6 text-sm text-neutral-500">
                No components in this collection yet.
              </div>
            )}

            {g.items.map((it) => (
              <Link
                key={it.key}
                to={it.to}
                className="group overflow-hidden rounded-xl border bg-white shadow-sm hover:shadow-md transition"
              >
                <div className="relative">
                  <img
                    src={it.img}
                    alt={it.title}
                    className="h-40 w-full object-cover transition group-hover:scale-[1.02]"
                  />
                  {it.badge && (
                    <span className="absolute left-3 top-3 rounded-full bg-white/90 px-2.5 py-1 text-xs font-medium shadow">
                      {it.badge}
                    </span>
                  )}
                </div>
                <div className="p-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-base font-semibold">{it.title}</h3>
                    <span className="text-xs text-neutral-500">Open</span>
                  </div>
                  <p className="mt-1 text-sm text-neutral-600 line-clamp-2">{it.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
