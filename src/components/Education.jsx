import { motion } from "framer-motion";

export default function Education() {
    const education = [
        {
            school: "SMK Negeri 1 Subang",
            degree: "Teknik Komputer dan Jaringan (TKJ)",
            year: "2022 - 2025",
            logo: "https://upload.wikimedia.org/wikipedia/commons/2/28/Logo_SMK_Negeri_1_Subang.png",
            desc: "Menguasai jaringan komputer, administrasi server, serta dasar pengembangan web dan sistem berbasis database.",
        },
    ];
    return (
        <section id="education" className="relative py-32 bg-[#0b0b10] text-[#cfd0d8] overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.05)_1px,transparent_1px)] opacity-10" />
            <div className="absolute inset-0 bg-linear-to-b from-[#0b0b10] via-[#10101a] to-[#0b0b10] opacity-95" />

            <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl font-bold text-[#b8c2ff] mb-20"
                >
                    My <span className="text-[#80ffd4]">Education</span>
                </motion.h2>

                <div className="grid md:grid-cols-2 gap-12 justify-items-center">
                    {education.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: i * 0.2 }}
                            viewport={{ once: true }}
                            className="relative w-full max-w-md bg-[#11111a]/60 border border-[#2a2a3b] rounded-2xl p-8 text-left shadow-[0_0_20px_rgba(126,249,200,0.08)] hover:shadow-[0_0_25px_rgba(126,249,200,0.25)] transition-all duration-500 group"
                        >
                            <div className="absolute inset-0 rounded-2xl bg-linear-to-br from-[#7ef9c8]/10 via-transparent to-[#a7b3ff]/10 opacity-0 group-hover:opacity-100 blur-xl transition duration-700"></div>
                            <motion.div
                                whileHover={{ scale: 1.1, rotate: 5 }}
                                className="absolute -top-12 left-1/2 -translate-x-1/2 w-24 h-24 bg-[#0a0a0f] border border-[#80ffd4]/30 rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(126,249,200,0.2)]"
                            >
                                <img
                                    src={item.logo}
                                    alt={item.school}
                                    className="w-16 h-16 object-contain rounded-full opacity-90 group-hover:opacity-100 transition"
                                />
                            </motion.div>

                            <div className="mt-16 space-y-3 relative z-10">
                                <h3 className="text-2xl font-semibold text-[#80ffd4]">{item.school}</h3>
                                <p className="text-sm text-[#b8c2ff]/70">{item.degree}</p>
                                <p className="text-xs text-[#7ef9c8]/70">{item.year}</p>
                                <p className="text-sm text-[#d4d6dc]/70 mt-3 leading-relaxed">{item.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}