import { motion } from "motion/react";

export default function CardCyber({ title, desc }) {
    return (
        <motion.div
            whileHover={{
                scale: 1.05,
                boxShadow: "0 0 20px rgba(128,255,212,0.2)",
                borderColor: "#80ffd4",
            }}
            transition={{ type: "spring", stiffness: 200, damping: 12 }}
            className="p-6 bg-[#11111a] border border-[#2b2b36] rounded-xl text-left 
                 hover:bg-[#151520] transition-all duration-300"
        >
            <h2 className="text-[#80ffd4] text-xl font-semibold mb-3">{title}</h2>
            <p className="text-[#b8c2ff]/80 text-sm leading-relaxed">{desc}</p>
        </motion.div>
    );
}
