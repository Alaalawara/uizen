
import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import useLenis from "../hooks/useLenis";

export default function LandingPage() {
  useLenis();
  return (
    <section className="flex justify-center items-center">
      {/* HERO */}
      <main className="relative text-primary min-h-screen flex flex-col md:w-[1180px] py-15 sm:w-[440px]">

        <section className="px-2 md:px-2">
          <motion.div
            className="flex flex-wrap gap-x-4 gap-y-2 text-7xl"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              show: {
                transition: {
                  staggerChildren: 0.05,
                },
              },
            }}
          >A minimalist UI kit that keeps developers in flow and products in harmony.
          </motion.div>
        </section>

      </main>
    </section>
  );
}

// how many visitors came through my profile