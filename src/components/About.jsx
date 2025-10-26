import { motion } from "framer-motion";
import { Code, Cpu, Globe, Palette } from "lucide-react";

export default function About() {
    return (
        <section
            id="about"
            className="relative py-32 bg-[#0b0b10] text-[#cfd0d8] overflow-hidden"
        >
            <div className="absolute inset-0 bg-linear-to-b from-transparent via-[#10101a] to-[#0b0b10]" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-[#80ffd4]/10 blur-3xl rounded-full" />

            <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12">
                <motion.h2
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl font-bold text-[#b8c2ff] mb-10 text-center"
                >
                    <span className="text-[#80ffd4]">About</span> Me
                </motion.h2>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                        className="flex justify-center"
                    >
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="relative w-60 h-60 rounded-full border border-[#80ffd4]/40 overflow-hidden shadow-[0_0_40px_rgba(128,255,212,0.2)]">
                            <img
                                src="/src/assets/profile.png"
                                alt="Muhamad Jaelani"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-linear-to-t from-[#0b0b10]/60 to-transparent" />
                        </motion.div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                    >
                        <p className="text-[#cfd0d8]/80 leading-relaxed mb-8">
                            I'm <span className="text-[#80ffd4] font-medium">Muhamad Jaelani</span>,
                            a passionate web developer who loves crafting interactive, futuristic
                            web experiences. I enjoy blending minimalistic design with glowing
                            neon elements — turning simple interfaces into immersive experiences.
                        </p>

                        <div className="grid grid-cols-2 gap-4">
                            {[
                                { icon: Code, label: "Frontend Dev" },
                                { icon: Cpu, label: "System Logic" },
                                { icon: Palette, label: "UI Design" },
                                { icon: Globe, label: "Web Integration" },
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    whileHover={{ scale: 1.05 }}
                                    className="flex items-center gap-3 border border-[#80ffd4]/20 bg-[#13131d]/60 px-4 py-3 rounded-lg hover:border-[#80ffd4]/40 transition-all"
                                >
                                    <item.icon className="text-[#80ffd4]" size={22} />
                                    <span className="text-[#cfd0d8] font-medium">{item.label}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}