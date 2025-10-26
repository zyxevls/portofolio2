import { motion } from "framer-motion";
import { FileUser, FolderGit2 } from "lucide-react";
import { TypeAnimation } from "react-type-animation";
import { useEffect, useRef } from "react";

export default function Hero() {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        let particles = [];
        const num = 50;

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        window.addEventListener("resize", resize);
        resize();

        // generate particles
        for (let i = 0; i < num; i++) {
            particles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                r: Math.random() * 2,
                dx: (Math.random() - 0.5) * 0.8,
                dy: (Math.random() - 0.5) * 0.8,
            });
        }

        const draw = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = "rgba(128,255,212,0.6)";
            particles.forEach((p) => {
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
                ctx.fill();

                // movement
                p.x += p.dx;
                p.y += p.dy;
                if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
                if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
            });
            requestAnimationFrame(draw);
        };
        draw();

        return () => window.removeEventListener("resize", resize);
    }, []);

    return (
        <section className="relative flex flex-col justify-center items-center text-center pt-36 pb-28 overflow-hidden bg-[#0b0b10]">
            <canvas ref={canvasRef} className="absolute inset-0 z-0" />
            <div className="absolute inset-0 bg-linear-to-b from-transparent to-[#0b0b10]" />

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: [0.2, 0.4, 0.2] }}
                transition={{ duration: 6, repeat: Infinity }}
                className="absolute w-[700px] h-[700px] blur-3xl bg-[radial-gradient(circle_at_center,rgba(128,255,212,0.1)_0%,transparent_70%)]"
            />

            <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="relative z-10 text-[#80ffd4]/80 text-lg mb-4 tracking-wide"
            >
                Hi, it’s me
            </motion.p>

            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="relative z-10 text-5xl md:text-7xl font-extrabold text-[#b8c2ff] drop-shadow-[0_0_25px_rgba(150,160,255,0.3)] tracking-tight"
            >
                Muhamad Jaelani
            </motion.h1>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="relative z-10 mt-6 text-[#cfd0d8]/80 text-xl font-mono"
            >
                <TypeAnimation
                    sequence={[
                        "Frontend Web Developer",
                        2000,
                        "Tech Enthusiast",
                        2000,
                        "I Use Arch BTW",
                        2000,
                    ]}
                    wrapper="span"
                    speed={60}
                    repeat={Infinity}
                />
            </motion.div>

            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1.5 }}
                className="relative z-10 mt-6 max-w-2xl text-[#cfd0d8]/70 text-lg leading-relaxed"
            >
                I love building calm, futuristic interfaces that blend design, animation, and accessibility.
            </motion.p>

            <div className="flex gap-5">
                <motion.button
                    whileHover={{
                        scale: 1.08,
                        boxShadow: "0 0 25px rgba(128,255,212,0.4)",
                    }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 200, damping: 14 }}
                    className="relative flex gap-2 z-10 mt-10 px-10 py-4 rounded-full border border-[#80ffd4]/60 text-[#202020] font-semibold 
                   bg-[#b8c2ff] hover:bg-[#96a3fa] hover:border-[#80ffd4] transition-all duration-300"
                >
                    <FileUser /> Resume
                </motion.button>
                <motion.button
                    whileHover={{
                        scale: 1.08,
                        boxShadow: "0 0 25px rgba(128,255,212,0.4)",
                    }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 200, damping: 14 }}
                    className="relative z-10 flex gap-2 mt-10 px-10 py-4 rounded-full border border-[#80ffd4]/60 text-[#80ffd4] font-semibold 
                   bg-[#13131d] hover:bg-[#181826] hover:border-[#80ffd4] transition-all duration-300"
                >
                    <FolderGit2 />  View My Work
                </motion.button>
            </div>
        </section>
    );
}