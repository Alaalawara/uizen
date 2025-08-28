// import { motion } from "framer-motion";
// import * as React from "react"

// export default function Threedbutton() {

//     return (
//         <div className="[perspective:1000px] flex items-center justify-center w-[1230px] h-screen bg-neutral-900"
//             style={{
//                 backgroundImage: 'radial-gradient(circle at center,  rgba(6,182,212,0.2) 1px,transparent 1.5px )',
//                 backgroundSize: '12px 12px',
//                 backgroundRepeat: "repeat"
//             }}>
//                 <motion.button
//                     whileHover={{
//                         rotatex:65,
//                         rotateY:20,
//                         boxShadow:"0px 2px 5px rgba(8,112,184,0.7)",
//                         y:-10
//                         }}
//                         style={{
//                             translateZ:100
//                         }}
//                         whileTap={{y:0}}
//                         transition={{
//                             duration:0.3,
//                             ease:'easeInOut'
//                         }}
//                     className="group relative bg-black text-white px-4 py-2 rounded-lg text-2xl font-medium transition-shadow duration-200 cursor-pointer">
//                     <span className="text-neutral-500 transition-colors duration-300 group-hover:text-cyan-500">
//                         Subscribe
//                     </span>
//                     {/* bottom 2px cyan line (centered, 75% width) */}
//                     <span className="pointer-events-none absolute inset-x-0 bottom-0 mx-auto h-[2px] w-3/4 
//                    bg-gradient-to-r from-transparent via-cyan-500 to-transparent 
//                    opacity-0 group-hover:text"></span>

//                     {/* blurred glow of the same line */}
//                     <span className="pointer-events-none inset-x-0 bottom-0 mx-auto h-[2px] w-3/4 
//                    bg-gradient-to-r from-transparent via-cyan-500 to-transparent 
//                    blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-150"></span>
//                 </motion.button>
//         </div>
//     );
// }
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
        className="inline-flex items-center justify-center rounded-xl bg-black px-5 py-2.5 text-white text-sm font-medium cursor-pointer"
        style={{ boxShadow: "0 8px 0 #334155" }}
      >
        Button
      </motion.button>
    </Visualizer>
  );
}
