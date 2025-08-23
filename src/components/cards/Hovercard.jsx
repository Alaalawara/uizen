import React, { useRef } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";

export default function Hovercard({
  title,
  description,
  imageUrl,
  badge,
  href,
  className = "",
  actions,
}) {
  const ref = useRef<HTMLDivElement | null>(null);

  // Mouse tilt/parallax
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-50, 50], [8, -8]);
  const rotateY = useTransform(x, [-50, 50], [-8, 8]);
  const shadow = useTransform(
    [rotateX, rotateY],
    ([rx, ry]) =>
      `0 10px 20px rgba(0,0,0,0.08), ${ry}px ${Math.abs(Number(rx)) + 10}px 30px rgba(0,0,0,0.12)`
  );

  function handleMouseMove() {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const px = e.clientX - (rect.left + rect.width / 2);
    const py = e.clientY - (rect.top + rect.height / 2);
    x.set(Math.max(-50, Math.min(50, (px / (rect.width / 2)) * 50)));
    y.set(Math.max(-50, Math.min(50, (py / (rect.height / 2)) * 50)));
  }

  function handleMouseLeave() {
    animate(x, 0, { type: "spring", stiffness: 150, damping: 15 });
    animate(y, 0, { type: "spring", stiffness: 150, damping: 15 });
  }

  const Wrapper = href ? "a" : "div";

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, boxShadow: shadow }}
      className={[
        "group perspective-1000 rounded-xl w-fit h-fit",
        // perspective wrapper: apply on parent container if stacking
        className,
      ].join(" ")}
    >
      <motion.div
        whileHover={{ y: -4, scale: 1.01 }}
        transition={{ type: "spring", stiffness: 200, damping: 18 }}
        className="relative rounded-xl border border-neutral-200/70 bg-white/90 backdrop-blur-sm shadow-sm overflow-hidden will-change-transform"
      >
        <Wrapper
          {...(href ? { href } : {})}
          className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500/70"
          aria-label={title}
        >
          {/* Media */}
          {imageUrl && (
            <div className="relative aspect-[16/9] w-full overflow-hidden">
              <motion.img
                src={imageUrl}
                alt={title}
                className="h-full w-full object-cover"
                whileHover={{ scale: 1.04 }}
                transition={{ type: "spring", stiffness: 140, damping: 18 }}
              />
              {badge && (
                <div className="absolute left-3 top-3">
                  <span className="inline-flex items-center rounded-full bg-black/80 px-2 py-1 text-[10px] font-medium text-white">
                    {badge}
                  </span>
                </div>
              )}
            </div>
          )}

          {/* Content */}
          <div className="p-4 sm:p-5">
            <h3 className="text-base sm:text-lg font-semibold text-neutral-900 leading-tight">
              {title}
            </h3>
            {description && (
              <p className="mt-1.5 text-sm text-neutral-600 line-clamp-3">
                {description}
              </p>
            )}

            {/* Actions */}
            {actions ? (
              <div className="mt-4 flex items-center gap-2">{actions}</div>
            ) : (
              href && (
                <div className="mt-4 inline-flex items-center text-sm font-medium text-indigo-600 group-hover:text-indigo-700">
                  Learn more
                  <svg
                    className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-0.5"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M13 5l7 7-7 7M5 12h14"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              )
            )}
          </div>
        </Wrapper>
      </motion.div>
    </motion.div>
  );
}
