export const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
};

export const fadeInDown = {
    initial: { opacity: 0, y: -20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
};

export const fadeInLeft = {
    initial: { opacity: 0, x: -30 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
};

export const fadeInRight = {
    initial: { opacity: 0, x: 30 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
};

export const fadeIn = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.8, ease: "easeOut" }
};

// ============================================================================
// SCALE & ZOOM ANIMATIONS
// ============================================================================

export const scaleIn = {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.5, ease: "easeOut" }
};

export const scaleUp = {
    initial: { opacity: 0, scale: 0.9 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.6, ease: [0.34, 1.56, 0.64, 1] } // cubic-bezier for bouncy effect
};

// ============================================================================
// STAGGER ANIMATIONS (untuk list items)
// ============================================================================

export const staggerContainer = (staggerChildren = 0.1, delayChildren = 0) => ({
    initial: "initial",
    animate: "animate",
    variants: {
        initial: { opacity: 0 },
        animate: {
            opacity: 1,
            transition: {
                staggerChildren,
                delayChildren
            }
        }
    }
});

export const staggerItem = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

// ============================================================================
// FLOATING & LEVITATION ANIMATIONS
// ============================================================================

export const float = (duration = 3) => ({
    animate: {
        y: [0, -15, 0],
        transition: {
            duration,
            repeat: Infinity,
            ease: "easeInOut"
        }
    }
});

export const floatRotate = (duration = 4) => ({
    animate: {
        y: [0, -20, 0],
        rotate: [0, 5, -5, 0],
        transition: {
            duration,
            repeat: Infinity,
            ease: "easeInOut"
        }
    }
});

// ============================================================================
// REVEAL ANIMATIONS (untuk section/text)
// ============================================================================

export const lineReveal = {
    initial: { opacity: 0, y: 40, scaleX: 0.9 },
    animate: { opacity: 1, y: 0, scaleX: 1 },
    transition: { duration: 0.8, ease: "easeOut" }
};

export const wordReveal = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 }
};

export const paragraphReveal = {
    initial: "initial",
    animate: "animate",
    variants: {
        initial: { opacity: 0 },
        animate: {
            opacity: 1,
            transition: {
                staggerChildren: 0.05,
                delayChildren: 0.1
            }
        }
    }
};

// ============================================================================
// HOVER & INTERACTIVE ANIMATIONS
// ============================================================================

export const hoverScale = {
    whileHover: { scale: 1.05 },
    transition: { duration: 0.3, ease: "easeOut" }
};

export const hoverLift = {
    whileHover: { y: -8, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" },
    transition: { duration: 0.3, ease: "easeOut" }
};

export const hoverRotate = {
    whileHover: { rotate: 5, scale: 1.05 },
    transition: { duration: 0.3, ease: "easeOut" }
};

export const hoverGlow = {
    whileHover: {
        boxShadow: "0 0 30px rgba(59, 130, 246, 0.5)",
        scale: 1.02
    },
    transition: { duration: 0.3 }
};

// ============================================================================
// PAGE TRANSITIONS
// ============================================================================

export const pageEnter = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
    transition: { duration: 0.5, ease: "easeInOut" }
};

export const pageEnterBlur = {
    initial: { opacity: 0, backdropFilter: "blur(10px)" },
    animate: { opacity: 1, backdropFilter: "blur(0px)" },
    transition: { duration: 0.6, ease: "easeOut" }
};

// ============================================================================
// ROTATE & SPIN ANIMATIONS
// ============================================================================

export const rotateSpin = (duration = 2) => ({
    animate: {
        rotate: 360,
        transition: {
            duration,
            repeat: Infinity,
            ease: "linear"
        }
    }
});

export const rotateSlowSpin = (duration = 8) => ({
    animate: {
        rotate: 360,
        transition: {
            duration,
            repeat: Infinity,
            ease: "linear"
        }
    }
});

// ============================================================================
// BOUNCE ANIMATIONS
// ============================================================================

export const bounce = (duration = 0.8) => ({
    animate: {
        y: [0, -15, 0],
        transition: {
            duration,
            repeat: Infinity,
            ease: "easeInOut"
        }
    }
});

export const bouncePulse = {
    animate: {
        scale: [1, 1.1, 1],
        opacity: [1, 0.8, 1],
        transition: {
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
        }
    }
};

// ============================================================================
// GRADIENT & GLOW ANIMATIONS
// ============================================================================

export const shimmer = {
    animate: {
        backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
        transition: {
            duration: 3,
            repeat: Infinity,
            ease: "linear"
        }
    }
};

export const glowPulse = {
    animate: {
        boxShadow: [
            "0 0 20px rgba(59, 130, 246, 0.3)",
            "0 0 40px rgba(59, 130, 246, 0.6)",
            "0 0 20px rgba(59, 130, 246, 0.3)"
        ],
        transition: {
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
        }
    }
};

// ============================================================================
// CUSTOM DELAY HELPER
// ============================================================================

export const withDelay = (animation: any, delay: number) => ({
    ...animation,
    transition: {
        ...animation.transition,
        delay
    }
});

// ============================================================================
// PRESET COMBINATIONS
// ============================================================================

export const heroTitle = {
    initial: { opacity: 0, y: 30, scale: 0.95 },
    animate: { opacity: 1, y: 0, scale: 1 },
    transition: { duration: 0.8, delay: 0.2, ease: "easeOut" }
};

export const heroSubtitle = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, delay: 0.4, ease: "easeOut" }
};

export const heroImage = {
    initial: { opacity: 0, scale: 0.8, rotate: -5 },
    animate: { opacity: 1, scale: 1, rotate: 0 },
    transition: { duration: 1, delay: 0.3, ease: [0.23, 1, 0.82, 1] }
};

export const heroCTA = {
    initial: { opacity: 0, y: 15 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, delay: 0.6, ease: "easeOut" },
    whileHover: { scale: 1.05, boxShadow: "0 15px 30px rgba(0,0,0,0.2)" },
    whileTap: { scale: 0.95 }
};

export const cardHover = {
    whileHover: {
        y: -10,
        boxShadow: "0 25px 50px rgba(0,0,0,0.15)",
        transition: { duration: 0.3, ease: "easeOut" }
    }
};

export const navbarEnter = {
    initial: { opacity: 0, y: -10 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5, ease: "easeOut" }
};

// ============================================================================
// CONTAINER ANIMATIONS
// ============================================================================

export const sectionReveal = (staggerDelay = 0.08, delay = 0) => ({
    initial: "initial",
    whileInView: "animate",
    viewport: { once: true, amount: 0.2 },
    variants: {
        initial: { opacity: 0 },
        animate: {
            opacity: 1,
            transition: {
                staggerChildren: staggerDelay,
                delayChildren: delay
            }
        }
    }
});
