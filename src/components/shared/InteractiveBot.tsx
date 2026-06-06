import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import "./interactive-bot.css";

interface BotState
{
    type: "idle" | "scrolling" | "hovering" | "celebrating";
    intensity: number;
}

export function InteractiveBot()
{
    const containerRef = useRef<HTMLDivElement>(null);
    const [botState, setBotState] = useState<BotState>({ type: "idle", intensity: 1 });
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isVisible, setIsVisible] = useState(true);

    // Track scroll for bot reactions
    useEffect(() =>
    {
        let scrollTimeout: NodeJS.Timeout;
        const handleScroll = () =>
        {
            setBotState({ type: "scrolling", intensity: Math.min(3, window.scrollY / 200) });
            clearTimeout(scrollTimeout);
            scrollTimeout = setTimeout(() =>
            {
                setBotState({ type: "idle", intensity: 1 });
            }, 2000);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () =>
        {
            window.removeEventListener("scroll", handleScroll);
            clearTimeout(scrollTimeout);
        };
    }, []);

    // Track mouse position for bot to "look" at cursor
    useEffect(() =>
    {
        const handleMouseMove = (e: MouseEvent) =>
        {
            if (containerRef.current) {
                const rect = containerRef.current.getBoundingClientRect();
                setMousePosition({
                    x: e.clientX - (rect.left + rect.width / 2),
                    y: e.clientY - (rect.top + rect.height / 2),
                });
            }
        };

        window.addEventListener("mousemove", handleMouseMove, { passive: true });
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    // Handle hover states
    const handleHover = (hovering: boolean) =>
    {
        if (hovering) {
            setBotState({ type: "hovering", intensity: 2 });
        } else {
            setBotState({ type: "idle", intensity: 1 });
        }
    };

    // Handle celebration on CTA click
    useEffect(() =>
    {
        const handleCtaClick = (e: CustomEvent) =>
        {
            setBotState({ type: "celebrating", intensity: 3 });
            setTimeout(() =>
            {
                setBotState({ type: "idle", intensity: 1 });
            }, 2000);
        };

        window.addEventListener("cta-clicked" as any, handleCtaClick);
        return () => window.removeEventListener("cta-clicked" as any, handleCtaClick);
    }, []);

    // Calculate head rotation based on mouse position
    const rotateX = (mousePosition.y / 100) * 5;
    const rotateY = (mousePosition.x / 100) * 5;

    const stateAnimations = {
        idle: {
            scale: 1,
            rotateX: rotateX * 0.3,
            rotateY: rotateY * 0.3,
            filter: "drop-shadow(0 0 20px rgba(139, 92, 246, 0.4))",
        },
        scrolling: {
            scale: 1 + botState.intensity * 0.05,
            rotateX: rotateX * (0.5 + botState.intensity * 0.2),
            rotateY: rotateY * (0.5 + botState.intensity * 0.2),
            filter: `drop-shadow(0 0 ${20 + botState.intensity * 10}px rgba(139, 92, 246, 0.6))`,
        },
        hovering: {
            scale: 1.1,
            rotateX: rotateX * 0.8,
            rotateY: rotateY * 0.8,
            filter: "drop-shadow(0 0 30px rgba(59, 130, 246, 0.7))",
        },
        celebrating: {
            scale: 1.15,
            rotateX: [0, -10, 10, -10, 0],
            rotateY: [0, 15, -15, 15, 0],
            filter: "drop-shadow(0 0 40px rgba(34, 197, 94, 0.8))",
        },
    };

    const transitionDuration = botState.type === "celebrating" ? 0.8 : 0.3;

    return (
        <div
            ref={containerRef}
            className="bot-container"
            onMouseEnter={() => handleHover(true)}
            onMouseLeave={() => handleHover(false)}
        >
            <motion.div
                className="bot-wrapper"
                animate={stateAnimations[botState.type]}
                transition={{ type: "spring", stiffness: 100, damping: 20, duration: transitionDuration }}
            >
                {/* Bot body - SVG based for lightweight rendering */}
                <svg
                    viewBox="0 0 100 120"
                    className="bot-svg"
                    width="120"
                    height="144"
                    aria-label="Interactive bot assistant"
                >
                    {/* Head */}
                    <g className="bot-head">
                        <rect x="25" y="10" width="50" height="50" rx="8" fill="url(#botGradient)" />
                        {/* Eyes */}
                        <circle cx="40" cy="30" r="5" fill="#fff" className="bot-eye" />
                        <circle cx="60" cy="30" r="5" fill="#fff" className="bot-eye" />
                        {/* Eye pupils - react to mouse */}
                        <circle
                            cx={Math.min(44, Math.max(36, 40 + mousePosition.x * 0.05))}
                            cy={Math.min(34, Math.max(26, 30 + mousePosition.y * 0.05))}
                            r="2"
                            fill="#1e1e2e"
                            className="bot-pupil"
                        />
                        <circle
                            cx={Math.min(64, Math.max(56, 60 + mousePosition.x * 0.05))}
                            cy={Math.min(34, Math.max(26, 30 + mousePosition.y * 0.05))}
                            r="2"
                            fill="#1e1e2e"
                            className="bot-pupil"
                        />
                        {/* Mouth */}
                        <path
                            d={botState.type === "celebrating" ? "M 40 45 Q 50 50 60 45" : "M 40 45 Q 50 48 60 45"}
                            stroke="#fff"
                            strokeWidth="2"
                            fill="none"
                            className="bot-mouth"
                        />
                    </g>

                    {/* Body */}
                    <g className="bot-body">
                        <rect x="30" y="65" width="40" height="35" rx="6" fill="url(#botGradient2)" />
                        {/* Left arm */}
                        <rect x="15" y="75" width="15" height="12" rx="6" fill="url(#botGradient)" />
                        {/* Right arm */}
                        <rect x="70" y="75" width="15" height="12" rx="6" fill="url(#botGradient)" />
                        {/* Status indicator */}
                        <circle cx="50" cy="80" r="4" fill="#22c55e" className={`status-light ${botState.type}`} />
                    </g>

                    {/* Gradients */}
                    <defs>
                        <linearGradient id="botGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#8b5cf6" />
                            <stop offset="100%" stopColor="#6366f1" />
                        </linearGradient>
                        <linearGradient id="botGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#6366f1" />
                            <stop offset="100%" stopColor="#0ea5e9" />
                        </linearGradient>
                    </defs>
                </svg>
            </motion.div>

            {/* Speech bubble */}
            <motion.div
                className="bot-speech-bubble"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: botState.type !== "idle" ? 1 : 0, scale: 1 }}
                transition={{ duration: 0.3 }}
            >
                <p className="text-xs text-foreground">
                    {botState.type === "scrolling" && "Wah, kamu lagi scroll ya? Ada yang bisa aku bantu?"}
                    {botState.type === "hovering" && "Hai! Klik aku untuk bantuan lebih lanjut!"}
                    {botState.type === "celebrating" && "Yeay! Terima kasih sudah klik! Aku senang bisa membantu!"}
                </p>
            </motion.div>
        </div>
    );
}
