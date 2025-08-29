// components/cards/HovercardDemoItem.jsx (thumbnail-only, no tilt logic)
export default function SimpleCard({ compact = true }) {
  return (
    <div className={`rounded-xl border bg-white ${compact ? "p-3" : "p-6"} shadow-sm`}>
      <h3 className={`${compact ? "text-sm" : "text-lg"} font-semibold`}>Uizen Hover Card</h3>
      {!compact && <p className="mt-1 text-sm text-neutral-600">Subtle 3D tilt using Motion values.</p>}
    </div>
  );
}
