import { useEffect, useMemo, useState } from "react";

function useClocks() {
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  const utc = useMemo(
    () =>
      now.toLocaleString("en-GB", {
        timeZone: "UTC",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        day: "2-digit",
        month: "short",
        year: "numeric",
      }),
    [now]
  );

  const ist = useMemo(
    () =>
      now.toLocaleString("en-IN", {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        day: "2-digit",
        month: "short",
        year: "numeric",
        hour12: false,
      }),
    [now]
  );

  // Local status based on the user's local time
  const hourLocal = now.getHours();
  const isDay = hourLocal >= 7 && hourLocal < 23; // 07:00–22:59 is "day" and 23:00–6:59 is "night"
  const status = isDay ? "Online" : "Offline";

  return { utc, ist, status, isDay };
}

export default function Footer() {
  const { utc, ist, status, isDay } = useClocks();

  return (
    <footer className="px-3 md:px-3 py-5 text-sm">
      <div className="flex flex-col md:flex-row items-center justify-center md:items-center gap-6">
        {/* Time Block */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6">
          <div className="flex items-center gap-2">
            <span>UTC</span>
            <span className="h-[1px] w-4 bg-white/15" />
            <time className="tabular-nums">{utc}</time>
          </div>

          <div className="hidden sm:block h-4 w-[1px] bg-white/10" />

          <div className="flex items-center gap-2">
            <span>IST</span>
            <span className="h-[1px] w-4 bg-white/15" />
            <time className="tabular-nums">{ist}</time>
          </div>
        </div>
  

          <div className="hidden md:block h-4 w-[1px] bg-white/10" />

          {/* Email */}
          {/* <a
            href="mailto:hi@example.com"
            className="underline underline-offset-4 hover:text-white"
          >
            hi@example.com
          </a> */}

          <div className="hidden md:block h-4 w-[1px] bg-white/10" />

          {/* Copyright */}
          <span>©2025</span>
        </div>
    </footer>
  );
}
