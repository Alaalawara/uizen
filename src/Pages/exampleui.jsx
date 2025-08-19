
import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import useLenis from "../hooks/useLenis";
import ScrambleLink from "../components/ScrambleLink";
import Footer from "../components/Footer";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const roles = ["Full-Stack Developer", "Web Developer", "Frontend Developer", "Software Engineer "];

const roleStyles = [
  "font-medium text-2xl tracking-tight text-white",
  "font-medium text-2xl italic text-white",
  "font-medium text-2xl font-serif text-white",
];

const listItem = {
  hidden: { opacity: 0, y: 10 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
};

const projects = [
  { title: "randomcolorr", url: "https://randomcolorr.vercel.app" },
  { title: "reminderr", url: "https://reminderr-app.vercel.app" },
  { title: "randomfontt", url: "https://alaalawara.github.io/randomfontt" },
];

export default function exampleui() {
  const [index, setIndex] = useState(0);
  const [styleIdx, setStyleIdx] = useState(0);
  const items = useMemo(() => projects, []);
  useLenis();

  // rotate word every 0.5s (tweak as desired)
  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % roles.length);
      // pick a different style index than the current one to keep it changing
      setStyleIdx((curr) => {
        const next = Math.floor(Math.random() * roleStyles.length);
        return next === curr ? (next + 1) % roleStyles.length : next;
      });
    }, 2000);
    return () => clearInterval(id);
  }, []);

  // Use a key that changes per index so AnimatePresence triggers exit/enter
  const current = roles[index];

  const wordVariants = useMemo(
    () => ({
      initial: { opacity: 0, y: 10, filter: "blur(2px)" },
      animate: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.5, ease: "easeOut" }, },
      exit: { opacity: 0, y: -10, filter: "blur(2px)", transition: { delay: 1.0, duration: 0.5, ease: "easeIn" }, },
    }),
    []
  );

  return (
    <section className="flex justify-center items-center">
      {/* HERO */}
      <main className="relative text-primary min-h-screen flex flex-col md:w-[700px] py-35 sm:w-[440px]">
        {/* left side border */}
        <div className="pointer-events-none absolute inset-0">
          <motion.div
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }} // easeOutCubic-like
            className="absolute inset-0 origin-top"
          >
            <div className="absolute left-0 top-0 h-full w-[2px] bg-gradient-to-b from-transparent via-[#ffffff14] to-transparent"></div>
          </motion.div>
        </div>

        {/* main section */}
        <section className="flex flex-col items-start gap-3 md:items-start px-3 py-8">
          <motion.img
            src="https://avatars.githubusercontent.com/u/167957243?v=4"
            alt="Profile"
            className="w-18 h-18 mb-3 border-2 border-[#ffffff14] transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-white"
            initial="hidden"
            animate="show"
            variants={fadeUp}
          />
          <motion.div
            className="text-lg leading-relaxed max-w-xl flex flex-col"
            initial="hidden"
            animate="show"
            variants={fadeUp}
          >

            <span className="flex flex-col">
              <span className="font-medium text-2xl">Swaraj Sanap</span>
              <span className="inline-flex items-baseline flex-row">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={`${current}-${styleIdx}`}
                    className={roleStyles[styleIdx]}
                    initial="initial"
                    variants={wordVariants}
                    animate="animate"
                    exit="exit"
                  >
                    {current}
                  </motion.span>
                </AnimatePresence>
              </span>
            </span>
            <span className="font-medium text-2xl">
              Code that ships. Design that sticks.
            </span>
          </motion.div >
        </section>

        {/* HORIZONTAL RULE WITH FADED ENDS */}
        <div className="relative my-4">
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }} // easeOutCubic-like
            className="absolute inset-0 origin-right"
          >
            <div className="h-[2px] w-full bg-[#ffffff14]" />
            {/* optional caps */}
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute left-0 top-0 h-[2px] w-[2px] bg-white" />
              <div className="absolute right-0 top-0 h-[2px] w-[2px] bg-white" />
            </div>
          </motion.div>
        </div>

        {/* Projects */}
        <section className="grid md:grid-cols-2 px-3 py-8 md:px-3 gap-10">
          <div>
            <h3 className="text-xl uppercase mb-2">Projects</h3>
            <ul className="space-y-2 text-xl text-white">
              {projects.map((p, i) => (
                <motion.li
                  key={p.url}
                  initial={{ opacity: 0, y: 6 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.06, duration: 0.35, ease: "easeOut" }}
                  viewport={{ once: true, amount: 0.4 }}
                >
                  {/* Row is the hover group */}
                  <div className="group relative inline-flex items-center">
                    {/* Left-side https:// badge that only appears on hover */}
                    <span
                      aria-hidden
                      className="absolute right-full mr-4 select-none text-white/35 opacity-0 translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200"
                    >
                      https://
                    </span>
                    <ScrambleLink
                      text={p.title}
                      href={p.url}
                      duration={900}  // adjust 600–1200 for speed
                      fps={60}
                      className="text-white hover:text-white"
                    />
                  </div>
                </motion.li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl uppercase mb-2">What's it about</h3>
            <ul className="space-y-2 text-xl text-white">
              {["Random font generator", "Let me remind you!", "Random color generator"].map(
                (item, i) => (
                  <motion.li key={i} custom={i} initial="hidden" whileInView="show" viewport={{ once: true }} variants={listItem}>
                    {item}
                  </motion.li>
                )
              )}
            </ul>
          </div>
        </section>

        {/* HORIZONTAL RULE WITH FADED ENDS */}
        <div className="relative my-4">
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }} // easeOutCubic-like
            className="absolute inset-0 origin-left"
          >
            <div className="h-[2px] w-full bg-[#ffffff14]" />
            {/* optional caps */}
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute left-0 top-0 h-[2px] w-[2px] bg-white" />
              <div className="absolute right-0 top-0 h-[2px] w-[2px] bg-white" />
            </div>
          </motion.div>
        </div>

        {/* Skills */}
        <section className="px-3 md:px-3 py-5">
          <h3 className="text-sm uppercase mb-2">Skills</h3>
          <motion.div
            className="flex flex-wrap gap-x-4 gap-y-2 text-sm"
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
          >
            {["JavaScript", "ReactJs", "NextJs", "HTML", "CSS", "NodeJs", "Tailwind CSS", "SQL", "MySQL", "AWS", "GCP"].map((link, i) => (
              <motion.a
                key={i}
                href="#"
                variants={fadeUp}
                className="hover:underline"
              >
                {link}
              </motion.a>
            ))}
          </motion.div>
        </section>

        {/* HORIZONTAL RULE WITH FADED ENDS */}
        <div className="relative my-4">
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }} // easeOutCubic-like
            className="absolute inset-0 origin-right"
          >
            <div className="h-[2px] w-full bg-[#ffffff14]" />
            {/* optional caps */}
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute left-0 top-0 h-[2px] w-[2px] bg-white" />
              <div className="absolute right-0 top-0 h-[2px] w-[2px] bg-white" />
            </div>
          </motion.div>
        </div>

        {/* HORIZONTAL RULE WITH FADED ENDS */}
        <div className="relative my-4">
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }} // easeOutCubic-like
            className="absolute inset-0 origin-left"
          >
            <div className="h-[2px] w-full bg-[#ffffff14]" />
            {/* optional caps */}
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute left-0 top-0 h-[2px] w-[2px] bg-white" />
              <div className="absolute right-0 top-0 h-[2px] w-[2px] bg-white" />
            </div>
          </motion.div>
        </div>

        {/* CHANNELS */}
        <section className="px-3 md:px-3 py-5">
          <h3 className="text-sm uppercase mb-2">Social Handles</h3>
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-3"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              show: {
                transition: { staggerChildren: 0.06 },
              },
            }}
          >
            {/* X card */}
            <motion.a
              variants={fadeUp}
              href="https://x.com/loops_infinity"
              target="_blank"
              rel="noreferrer"
              className="group flex items-center justify-between rounded-md border border-white/10 bg-white/[0.02] px-4 py-3 transition-colors hover:bg-white/[0.04]"
            >
              <div className="flex items-center gap-3">
                {/* X icon */}
                <span className="inline-flex h-8 w-8 items-center justify-center rounded bg-black">
                  <svg xmlns="http://www.w3.org/2000/svg" shapeRendering="geometricPrecision" textRendering="geometricPrecision" imageRendering="optimizeQuality" fillRule="evenodd" clipRule="evenodd" viewBox="0 0 512 512">
                    <path d="M256 0c141.385 0 256 114.615 256 256S397.385 512 256 512 0 397.385 0 256 114.615 0 256 0z" />
                    <path fill="#fff" fillRule="nonzero" d="M318.64 157.549h33.401l-72.973 83.407 85.85 113.495h-67.222l-52.647-68.836-60.242 68.836h-33.423l78.052-89.212-82.354-107.69h68.924l47.59 62.917 55.044-62.917zm-11.724 176.908h18.51L205.95 176.493h-19.86l120.826 157.964z" />
                  </svg>
                </span>
                <div className="flex flex-col">
                  <span className="text-white">X</span>
                  <span className="text-white/50 text-xs">@loops_infinity</span>
                </div>
              </div>
              <span className="text-white/40 group-hover:text-white/70 transition-colors">↗</span>
            </motion.a>

            {/* GitHub card */}
            <motion.a
              variants={fadeUp}
              href="https://github.com/Alaalawara"
              target="_blank"
              rel="noreferrer"
              className="group flex items-center justify-between rounded-md border border-white/10 bg-white/[0.02] px-4 py-3 transition-colors hover:bg-white/[0.04]"
            >
              <div className="flex items-center gap-3">
                {/* GitHub icon */}
                <span className="inline-flex h-8 w-8 items-center justify-center rounded bg-white/10">
                  <svg viewBox="0 0 24 24" width="18" height="18" className="text-white">
                    <path
                      fill="currentColor"
                      d="M12 2C6.48 2 2 6.58 2 12.26c0 4.51 2.87 8.33 6.84 9.68.5.09.68-.22.68-.49 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.2-3.37-1.2-.45-1.17-1.11-1.48-1.11-1.48-.91-.64.07-.63.07-.63 1 .07 1.53 1.05 1.53 1.05.9 1.57 2.36 1.12 2.94.86.09-.67.35-1.12.63-1.38-2.22-.26-4.56-1.14-4.56-5.09 0-1.12.39-2.03 1.03-2.74-.1-.26-.45-1.31.1-2.73 0 0 .84-.27 2.75 1.05a9.3 9.3 0 0 1 5 0c1.91-1.32 2.75-1.05 2.75-1.05.55 1.42.2 2.47.1 2.73.64.71 1.03 1.62 1.03 2.74 0 3.96-2.34 4.82-4.57 5.08.36.32.67.94.67 1.9 0 1.37-.01 2.48-.01 2.82 0 .27.18.58.69.48A10.05 10.05 0 0 0 22 12.26C22 6.58 17.52 2 12 2z"
                    />
                  </svg>
                </span>
                <div className="flex flex-col">
                  <span className="text-white">GitHub</span>
                  <span className="text-white/50 text-xs">@Alaalawara</span>
                </div>
              </div>
              <span className="text-white/40 group-hover:text-white/70 transition-colors">↗</span>
            </motion.a>
          </motion.div>
        </section>


        {/* HORIZONTAL RULE WITH FADED ENDS */}
        <div className="relative my-4">
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }} // easeOutCubic-like
            className="absolute inset-0 origin-right"
          >
            <div className="h-[2px] w-full bg-[#ffffff14]" />
            {/* optional caps */}
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute left-0 top-0 h-[2px] w-[2px] bg-white" />
              <div className="absolute right-0 top-0 h-[2px] w-[2px] bg-white" />
            </div>
          </motion.div>
        </div>

        {/* FOOTER */}
        <Footer />

        {/* right side border */}
        <div className="pointer-events-none absolute inset-0">
          <motion.div
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }} // easeOutCubic-like
            className="absolute inset-0 origin-bottom"
          >
            <div className="absolute right-0 top-0 h-full w-[2px] bg-gradient-to-b from-transparent via-[#ffffff14] to-transparent"></div>
          </motion.div>
        </div>
      </main>
    </section>
  );
}

// how many visitors came through my profile