// src/Pages/ComponentsShell.jsx
import { NavLink, Outlet } from "react-router-dom";

const nav = [
  { label: "Cards", items: [{ label: "Hover Tilt Card", to: "/components/cards/hover" }] },
  { label: "Buttons", items: [{ label: "3D Button", to: "/components/buttons/3d" }] },
  // add more groups here...
];

export default function ComponentsShell() {
  return (
    <div className="min-h-screen w-full bg-neutral-100">
      <div className="mx-auto items-center px-6 py-10">
    
        {/* Right content */}
        <main className="col-span-12 md:col-span-9 lg:col-span-10">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
