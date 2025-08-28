import { motion, AnimatePresence } from "framer-motion";
import * as React from "react"

export default function HoverandExit() {

    return (
        <div className="[perspective:1000px] flex items-center justify-center w-[1230px] h-screen bg-neutral-900"
            style={{
                backgroundImage: 'radial-gradient(circle at center,  rgba(6,182,212,0.2) 1px,transparent 1.5px )',
                backgroundSize: '12px 12px',
                backgroundRepeat: "repeat"
            }}>
                3dhover
        </div>
    );
}
