import { useState } from "react";
import { motion } from "framer-motion"

export default function Navbar() {
    const navItems = ["Home", "Projects", "About", "Contact"];
    return (
        <motion.nav
            initial={{ y: -40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-[#0b0b10]/70 border-b border-[#2a2a35] shadow-[0_0_20px_rgba(128,255,212,0.05)]"
        >
            <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
                <a href="/" className="text-[#80ffd4] font-bold text-2xl tracking-widest">ZYXEVLS</a>
                <ul className="flex gap-8 text-[#b8c2ff]/80 font-medium">
                    {navItems.map((item) => (
                        <motion.li
                            key={item}
                            whileHover={{ scale: 1.1, color: "#80ffd4" }}
                            transition={{ type: "spring", stiffness: 300 }}
                            className="cursor-pointer hover:text-[#80ffd4] transition"
                        >
                            {item}
                        </motion.li>
                    ))}
                </ul>
            </div>
        </motion.nav>
    );
}