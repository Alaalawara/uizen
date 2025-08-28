// src/components/Visualizer.jsx
import { useState } from "react";

export default function Visualizer({ title, code, children }) {
  const [tab, setTab] = useState("preview");
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (e) {
      // fallback
    }
  }

  return (
    <section className="rounded-xl border bg-white shadow-sm overflow-hidden">
      <div className="flex items-center justify-between border-b px-3 py-2">
        <h3 className="text-sm font-medium">{title}</h3>
        <div className="flex items-center gap-2">
          <div className="flex rounded-md bg-neutral-100 p-1">
            {["preview", "code"].map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={`px-3 py-1 text-xs rounded ${
                  tab === t ? "bg-white shadow-sm" : "text-neutral-600"
                }`}
              >
                {t.toUpperCase() + t.slice(1)}
              </button>
            ))}
          </div>
          {tab === "code" && (
            <button
              onClick={copy}
              className="rounded-md border px-2 py-1 text-xs hover:bg-neutral-50"
            >
              {copied ? "Copied" : "Copy"}
            </button>
          )}
        </div>
      </div>

      <div className="p-4">
        {tab === "preview" ? (
          <div className="min-h-[320px] rounded-lg border bg-white">
            <div className="h-full w-full flex items-center justify-center p-6">
              {children}
            </div>
          </div>
        ) : (
          <pre className="overflow-auto rounded-lg bg-neutral-950 p-4 text-neutral-200 text-xs">
            <code>{code}</code>
          </pre>
        )}
      </div>
    </section>
  );
}
