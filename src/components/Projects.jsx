import { motion } from "framer-motion";
import { useState } from "react";

export default function Projects() {
    const projects = [
        {
            title: "Portfolio Website",
            desc: "A futuristic portfolio crafted with React + Tailwind + Motion.",
            img: "https://images.unsplash.com/photo-1508830524289-0adcbe822b40?q=80&w=800",
            link: "#",
        },
        {
            title: "Supabase Gallery",
            desc: "A modern gallery using Supabase storage and real-time updates.",
            img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800",
            link: "#",
        },
        {
            title: "Laravel Dashboard",
            desc: "Elegant dashboard using Laravel, Tailwind, and dark neon UI.",
            img: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=800",
            link: "#",
        },
        {
            title: "AI Chat System",
            desc: "Realtime anonymous chat with OpenAI + Supabase backend.",
            img: "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?q=80&w=800",
            link: "#",
        },
    ];

    return (
        <section id="projects" className="relative py-32 bg-[#0a0a0f] text-[#d4d6dc] overflow-hidden">
            <div className="absolute inset-0 opacity-[0.05] bg-[radial-gradient(circle,rgba(255,255,255,0.1)_1px,transparent_1px)] " />
            <div className="absolute inset-0 bg-linear-to-b from-[#0a0a0f] via-[#10101a] to-[#0a0a0f] opacity-90"></div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl font-bold text-[#a7b3ff] mb-16"
                >
                    My <span className="text-[#7ef9c8]">Projects</span>
                </motion.h2>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12 justify-items-center">
                    {projects.map((project, i) => (
                        <HoloCard key={i} project={project} delay={i * 0.2} />
                    ))}
                </div>
            </div>
        </section>
    );
}

// Card
function HoloCard({ project, delay }) {
    const [transform, setTransform] = useState("");

    const handleMouseMove = (e) => {
        const { width, height, left, top } = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - left;
        const y = e.clientY - top;
        const rotateX = ((y - height / 2) / 15) * -1;
        const rotateY = (x - width / 2) / 15;
        setTransform(`rotateX(${rotateX}deg) rotateY(${rotateY}deg)`);
    };

    const resetTilt = () => setTransform("rotateX(0deg) rotateY(0deg)");

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 40 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay, duration: 0.6, type: "spring" }}
            viewport={{ once: true }}
            onMouseMove={handleMouseMove}
            onMouseLeave={resetTilt}
            style={{ transformStyle: "preserve-3d", transform }}
            className="relative w-[330px] h-[330px] bg-[#11111a]/60 backdrop-blur-xl border border-[#2a2a3b] rounded-2xl overflow-hidden group shadow-[0_0_20px_rgba(126,249,200,0.1)] hover:shadow-[0_0_30px_rgba(126,249,200,0.25)] transition-all duration-500"
        >

            <div className="absolute inset-0 bg-linear-to-br from-[#7ef9c8]/30 via-transparent to-[#a7b3ff]/20 opacity-0 group-hover:opacity-100 blur-xl transition duration-700"></div>
            <div
                className="absolute inset-0 bg-cover bg-center opacity-60 group-hover:opacity-90 transition-all duration-500"
                style={{ backgroundImage: `url(${project.img})`, transform: "translateZ(20px)" }}
            ></div>
            <div className="absolute inset-0 bg-linear-to-t from-[#0a0a0f] via-[#0a0a0f]/60 to-transparent mix-blend-overlay"></div>
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none before:absolute before:inset-0 before:bg-[linear-gradient(135deg,transparent_75%,rgba(126,249,200,0.15)_100%)] before:opacity-0 group-hover:before:opacity-100 transition duration-700"></div>

            {/* Content */}
            <div
                className="absolute bottom-0 p-6 text-left space-y-3 z-10"
                style={{ transform: "translateZ(40px)" }}
            >
                <h3 className="text-2xl font-bold text-[#7ef9c8]">{project.title}</h3>
                <p className="text-sm text-[#d4d6dc]/80 leading-relaxed">{project.desc}</p>
                <motion.a
                    href={project.link}
                    whileHover={{ scale: 1.05 }}
                    className="inline-block mt-3 px-5 py-2 text-sm font-semibold rounded-lg border border-[#7ef9c8]/60 text-[#7ef9c8] hover:bg-[#7ef9c8]/10 transition"
                >
                    View Project →
                </motion.a>
            </div>
        </motion.div>
    );
}
