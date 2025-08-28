// src/components/CollectionsPills.jsx
import { NavLink } from "react-router-dom";

const collections = [
  { label: "All", to: "/components" },
  { label: "Buttons", to: "/components?group=buttons" },
  { label: "Cards", to: "/components?group=cards" },
  { label: "Inputs", to: "/components?group=inputs" },
  { label: "Overlays", to: "/components?group=overlays" },
  { label: "Navigation", to: "/components?group=navigation" },
];

export default function CollectionsPills() {
  return (
    <div className="mx-auto flex flex-wrap gap-3">
      {collections.map((c) => (
        <NavLink
          key={c.to}
          to={c.to}
          className={({ isActive }) =>
            [
              "font-medium px-3 py-1 text-base transition text-gray-600",
              isActive ? "text-black hover:text-black hover:underline hover:underline-offset-4" : "text-neutral-600 hover:text-amber-400",
            ].join(" ")
          }
          end
        >
          {c.label}
        </NavLink>
      ))}
    </div>
  );
}
