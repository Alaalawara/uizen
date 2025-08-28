// src/components/buttons/3d-button.jsx
import { motion } from "framer-motion";
import Visualizer from "../../components/Visualizer";

const src = `import { motion } from "framer-motion";

export function ThreeDButton({ children = "Button" }) {
  return (
    <motion.button
      whileHover={{ y: -2 }}
      whileTap={{ y: 0 }}
      className="inline-flex items-center justify-center rounded-xl bg-black px-5 py-2.5 text-white text-sm font-medium shadow-[0_8px_0_#334155]"
      style={{ boxShadow: "0 8px 0 #334155" }}
      onMouseDown={(e) => (e.currentTarget.style.boxShadow = "0 0 0 #334155")}
      onMouseUp={(e) => (e.currentTarget.style.boxShadow = "0 8px 0 #334155")}
    >
      {children}
    </motion.button>
  );
}
`;

export default function Threedbutton() {
  return (
    <Visualizer title="3D Button" code={src}>
      <motion.button
        whileHover={{ y: -2 }}
        whileTap={{ y: 0 }}
        className="inline-flex items-center justify-center rounded-xl bg-black px-5 py-2.5 text-white text-sm font-medium"
        style={{ boxShadow: "0 8px 0 #334155" }}
      >
        Button
      </motion.button>
    </Visualizer>
  );
}
