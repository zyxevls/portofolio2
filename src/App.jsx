import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import CardCyber from "./components/CardCyber";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Education from "./components/Education";
import "./index.css";


export default function App() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);

  return (
    <main ref={ref} className="relative overflow-hidden bg-[#0b0b10]">
      <motion.div
        className="absolute top-[-100px] left-[20%] w-[400px] h-[400px] bg-[#80ffd4]/10 rounded-full blur-3xl"
        style={{ y: y1 }}
      />
      <motion.div
        className="absolute bottom-[-150px] right-[15%] w-[500px] h-[500px] bg-[#b8c2ff]/10 rounded-full blur-3xl"
        style={{ y: y1 }}
      />

      <Navbar />
      <Hero />
      <About />
      <Skills />

      <section className="relative z-10 grid md:grid-cols-3 gap-8 px-10 py-28 max-w-6xl mx-auto">
        {[
          {
            title: "Neon Projects",
            desc: "Build smooth futuristic apps with motion and calm gradients."
          },
          {
            title: "AI Integration",
            desc: "Smart adaptive designs that react to your movement and presence."
          },
          {
            title: "Minimal Glow",
            desc: "A balance of elegance and tech aesthetics for any screen."
          }
        ].map((card, i) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: i * 0.2, duration: 0.6 }}
          >
            <CardCyber title={card.title} desc={card.desc} />
          </motion.div>
        ))}
      </section>

      <section className="relative z-10 text-center px-8 py-24 max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-[#b8c2ff] mb-6"
        >
          <span className="text-[#80ffd4]">Adaptive</span> Motion Experience
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="text-[#cfd0d8]/80 text-lg leading-relaxed"
        >
          Each element responds smoothly to user movement, scroll, and hover — creating a calm sense of interactivity without noise.
        </motion.p>
      </section>

      {/* <Footer /> */}
    </main>
  );
}
