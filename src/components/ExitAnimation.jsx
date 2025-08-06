"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import Details from "./Details";

export default function ExitAnimation() {
    const [isVisible, setIsVisible] = useState(true);

    return (
        <div className="flex flex-col w-[100px] h-[160px] relative">
            <motion.button onClick={() => setIsVisible(!isVisible)} whileTap={{ y: 1 }} className="bg-[#0cdcf7] text-[#0f1115] rounded-[10px] py-[10px] px-[20px] absolute bottom-0 left-0 right-0">
                {isVisible ? "Hide" : "Show"}
            </motion.button>

            <AnimatePresence initial={false}>
                {isVisible && (
                    <motion.div key="box" initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 220 }} exit={{ opacity: 0, height: 0 }} className="w-[300px] h-[auto] bg-[#0cdcf7] rounded-[10px]">
                        <Details />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
