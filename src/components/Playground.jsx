// src/components/Playground.jsx
import { useState } from "react";

export default function Playground({ title, code, children }) {
  const [tab, setTab] = useState("preview");
  return (
    <section className="rounded-2xl bg-white border border-black/10 shadow-lg overflow-hidden">
      <div className="flex items-center justify-between bg-neutral-900 text-white px-4 py-2">
        <h3 className="text-sm font-medium">{title}</h3>
        <div className="flex gap-1 bg-neutral-800 rounded-md p-1">
          {["preview", "code"].map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`px-3 py-1 text-xs rounded ${tab === t ? "bg-white text-black" : "text-white/80"}`}
            >
              {t[0].toUpperCase() + t.slice(1)}
            </button>
          ))}
        </div>
      </div>
      <div className="p-6">{tab === "preview" ? children : (
        <pre className="overflow-auto rounded-lg bg-neutral-950 p-4 text-neutral-200 text-xs">
          <code>{code}</code>
        </pre>
      )}</div>
    </section>
  );
}
