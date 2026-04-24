import { MotionProps, Variants } from "framer-motion";

export function createStaggerAnimation(
    staggerDelay: number = 0.1,
    initialDelay: number = 0,
    duration: number = 0.6
): Variants
{
    return {
        initial: { opacity: 0, y: 20 },
        animate: {
            opacity: 1,
            y: 0,
            transition: {
                staggerChildren: staggerDelay,
                delayChildren: initialDelay,
                duration
            }
        }
    };
}

export function createFloatingAnimation(
    amplitude: number = 15,
    duration: number = 4,
    rotate: boolean = false
)
{
    if (rotate) {
        return {
            animate: {
                y: [0, -amplitude, 0],
                rotate: [0, 5, -5, 0],
                transition: {
                    duration,
                    repeat: Infinity,
                    ease: "easeInOut"
                }
            }
        };
    }

    return {
        animate: {
            y: [0, -amplitude, 0],
            transition: {
                duration,
                repeat: Infinity,
                ease: "easeInOut"
            }
        }
    };
}

/**
 * Create custom gradient animation
 */
export function createGradientAnimation(
    duration: number = 3,
    colors: string[] = ["#3b82f6", "#a855f7", "#ec4899"]
)
{
    return {
        animate: {
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            transition: {
                duration,
                repeat: Infinity,
                ease: "linear"
            }
        },
        style: {
            backgroundSize: "200% 200%"
        }
    };
}

/**
 * Create staggered list animation with custom config
 */
export function createListAnimation(config: {
    itemDuration?: number;
    staggerDelay?: number;
    initialDelay?: number;
    direction?: "up" | "down" | "left" | "right";
    distance?: number;
})
{
    const {
        itemDuration = 0.6,
        staggerDelay = 0.1,
        initialDelay = 0,
        direction = "up",
        distance = 20
    } = config;

    const initialValues = {
        up: { opacity: 0, y: distance },
        down: { opacity: 0, y: -distance },
        left: { opacity: 0, x: -distance },
        right: { opacity: 0, x: distance }
    };

    return {
        container: {
            initial: { opacity: 0 },
            animate: {
                opacity: 1,
                transition: {
                    staggerChildren: staggerDelay,
                    delayChildren: initialDelay
                }
            }
        },
        item: {
            initial: initialValues[direction],
            animate: {
                opacity: 1,
                x: 0,
                y: 0,
                transition: { duration: itemDuration, ease: "easeOut" }
            }
        }
    };
}

/**
 * Combine multiple animation effects
 */
export function combineAnimations(...animations: any[])
{
    return animations.reduce((acc, animation) => ({
        ...acc,
        ...animation
    }), {});
}

/**
 * Add delay to existing animation
 */
export function withAnimationDelay(
    animation: any,
    delay: number,
    duration?: number
)
{
    const transition = animation.transition || {};
    return {
        ...animation,
        transition: {
            ...transition,
            delay,
            ...(duration && { duration })
        }
    };
}

/**
 * Spring animation preset
 */
export const springAnimations = {
    gentle: {
        type: "spring",
        stiffness: 100,
        damping: 10
    },
    bouncy: {
        type: "spring",
        stiffness: 200,
        damping: 8
    },
    snappy: {
        type: "spring",
        stiffness: 300,
        damping: 20
    }
};

/**
 * Parallax scroll helper
 */
export function useParallaxScroll(target: React.RefObject<HTMLElement>, depth: number = 0.5)
{
    // This is a hook-style function, but Framer Motion handles parallax differently
    // Use useTransform instead in components
    return { depth };
}

/**
 * Animation performance monitor
 */
export function monitorAnimationPerformance()
{
    if (typeof window !== "undefined") {
        // Check for reduced motion preference
        const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        if (prefersReducedMotion) {
            console.warn("User prefers reduced motion - consider disabling animations");
        }
    }
}

/**
 * Disable animations for accessibility
 */
export const accessibleAnimationConfig = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0 }
};

/**
 * Create responsive animation config
 */
export function createResponsiveAnimation(config: {
    mobile: any;
    tablet: any;
    desktop: any;
})
{
    // This would need to be used with conditional rendering
    // or with a media query hook
    return config;
}

/**
 * Intersection observer helper for scroll animations
 */
export const viewportConfig = {
    once: true,
    amount: 0.2,
    margin: "-50px"
};

/**
 * Full-width blur blob animation
 */
export function createBlurBlobAnimation(config: {
    position: "top-left" | "top-right" | "bottom-left" | "bottom-right";
    size?: "sm" | "md" | "lg";
    duration?: number;
    delay?: number;
    color?: string;
})
{
    const {
        position,
        size = "md",
        duration = 6,
        delay = 0,
        color = "blue"
    } = config;

    const sizeClasses = {
        sm: "w-40 h-40",
        md: "w-80 h-80",
        lg: "w-96 h-96"
    };

    const colorClasses = {
        blue: "bg-blue-400/20 dark:bg-blue-400/10",
        purple: "bg-purple-400/20 dark:bg-purple-400/10",
        pink: "bg-pink-400/20 dark:bg-pink-400/10"
    };

    const positionClasses = {
        "top-left": "-top-40 -left-40",
        "top-right": "-top-40 -right-40",
        "bottom-left": "-bottom-40 -left-40",
        "bottom-right": "-bottom-40 -right-40"
    };

    return {
        className: `absolute ${positionClasses[position]} ${sizeClasses[size]} rounded-full ${colorClasses[color as keyof typeof colorClasses]} blur-3xl pointer-events-none`,
        animate: {
            y: [0, position.includes("top") ? -30 : 30, 0],
            x: [0, position.includes("right") ? -20 : 20, 0]
        },
        transition: {
            duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay
        }
    };
}

/**
 * Text animation builder
 */
export function buildTextAnimation(config: {
    type: "word" | "char" | "line";
    staggerDelay?: number;
    initialDelay?: number;
    duration?: number;
})
{
    const {
        type,
        staggerDelay = 0.05,
        initialDelay = 0,
        duration = 0.6
    } = config;

    const delays = {
        word: 0.1,
        char: 0.03,
        line: 0.08
    };

    return {
        container: {
            initial: { opacity: 0 },
            animate: {
                opacity: 1,
                transition: {
                    staggerChildren: staggerDelay || delays[type],
                    delayChildren: initialDelay
                }
            }
        },
        item: {
            initial: { opacity: 0, y: 10 },
            animate: { opacity: 1, y: 0 },
            transition: { duration }
        }
    };
}

/**
 * Page transition config
 */
export const pageTransitionConfig = {
    enter: {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -20 },
        transition: { duration: 0.5, ease: "easeInOut" }
    },
    fade: {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        transition: { duration: 0.3 }
    },
    slideLeft: {
        initial: { opacity: 0, x: 100 },
        animate: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: -100 },
        transition: { duration: 0.5 }
    }
};

/**
 * Hover animation builder
 */
export function buildHoverAnimation(config: {
    scale?: number;
    lift?: number;
    glow?: boolean;
    rotate?: number;
    duration?: number;
})
{
    const {
        scale = 1,
        lift = 0,
        glow = false,
        rotate = 0,
        duration = 0.3
    } = config;

    const hoverState: any = {
        transition: { duration, ease: "easeOut" }
    };

    if (scale !== 1) hoverState.scale = scale;
    if (lift !== 0) hoverState.y = -lift;
    if (rotate !== 0) hoverState.rotate = rotate;
    if (glow) {
        hoverState.boxShadow = "0 0 30px rgba(59, 130, 246, 0.5)";
    }

    return {
        whileHover: hoverState,
        whileTap: { scale: scale * 0.95 }
    };
}

/**
 * Loading state animation
 */
export const loadingAnimations = {
    spinner: {
        animate: { rotate: 360 },
        transition: { duration: 2, repeat: Infinity, ease: "linear" }
    },
    pulse: {
        animate: { scale: [1, 1.1, 1], opacity: [1, 0.7, 1] },
        transition: { duration: 1.5, repeat: Infinity, ease: "easeInOut" }
    },
    bounce: {
        animate: { y: [0, -15, 0] },
        transition: { duration: 1, repeat: Infinity, ease: "easeInOut" }
    },
    shimmer: {
        animate: { backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] },
        transition: { duration: 2, repeat: Infinity, ease: "linear" }
    }
};

/**
 * Export all helpers as object for convenience
 */
export const AnimationHelpers = {
    createStaggerAnimation,
    createFloatingAnimation,
    createGradientAnimation,
    createListAnimation,
    combineAnimations,
    withAnimationDelay,
    createBlurBlobAnimation,
    buildTextAnimation,
    buildHoverAnimation,
    springAnimations,
    loadingAnimations,
    pageTransitionConfig
};
