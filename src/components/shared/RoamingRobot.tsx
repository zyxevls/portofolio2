/**
 * RoamingRobot — smooth, friendly monochrome cat mascot that roams the screen.
 * - Monochrome (uses currentColor + page background only)
 * - Left mouse drag to hang/shift it around
 * - Release triggers a falling bounce animation
 */
import { useCallback, useEffect, useRef, useState } from "react";

const ROBOT_WIDTH = 68;
const ROBOT_HEIGHT = 76;
const MESSAGES = [
    "quiet patrol mode",
    "pixel unit online",
    "monochrome only",
    "hold and drag",
    "tiny robot, big opinions",
    "compiled successfully",
];

const HANG_MESSAGES = ["gravity interrupted", "left click engaged", "please do not drop me"];

function PixelRobot({
    facingLeft,
    isHanging,
    isFalling,
}: {
    facingLeft: boolean;
    isHanging: boolean;
    isFalling: boolean;
})
{
    const flip = facingLeft ? "scaleX(-1)" : "none";

    return (
        <svg
            viewBox="0 0 48 52"
            width={ROBOT_WIDTH}
            height={ROBOT_HEIGHT}
            aria-hidden="true"
            style={{ transform: flip, overflow: "visible", display: "block", shapeRendering: "geometricPrecision" }}
        >
            <defs>
                <style>{`
          .rr-stroke { fill: none; stroke: currentColor; stroke-width: 2; stroke-linecap: round; stroke-linejoin: round; }
          .rr-fill { fill: currentColor; }
          .rr-bg { fill: var(--background); }
          .rr-soft { fill: none; stroke: currentColor; stroke-width: 1.4; opacity: 0.6; stroke-linecap: round; }
          .rr-whisker { fill: none; stroke: currentColor; stroke-width: 1; opacity: 0.45; stroke-linecap: round; }
          @keyframes rr-bob { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-1.5px); } }
          @keyframes rr-sway { 0%, 100% { transform: rotate(-1.2deg); } 50% { transform: rotate(1.2deg); } }
          @keyframes rr-blink { 0%, 92%, 100% { transform: scaleY(1); } 96% { transform: scaleY(0.1); } }
          @keyframes rr-leg-left { 0%, 100% { transform: rotate(-12deg); } 50% { transform: rotate(12deg); } }
          @keyframes rr-leg-right { 0%, 100% { transform: rotate(12deg); } 50% { transform: rotate(-12deg); } }
          @keyframes rr-arm-left { 0%, 100% { transform: rotate(0deg); } 50% { transform: rotate(-6deg); } }
          @keyframes rr-arm-right { 0%, 100% { transform: rotate(0deg); } 50% { transform: rotate(6deg); } }
          @keyframes rr-hang { 0%, 100% { transform: rotate(-3deg); } 50% { transform: rotate(3deg); } }
          @keyframes rr-tail { 0%, 100% { transform: rotate(-16deg); } 50% { transform: rotate(18deg); } }
          .rr-body { animation: ${isHanging ? "rr-hang 2s ease-in-out infinite" : isFalling ? "none" : "rr-bob 3.4s ease-in-out infinite"}; transform-origin: 24px 40px; }
          .rr-head { animation: ${isFalling ? "none" : "rr-sway 2.8s ease-in-out infinite"}; transform-origin: 24px 16px; }
          .rr-eye { animation: rr-blink 5.4s infinite; transform-box: fill-box; transform-origin: center; }
          .rr-leg-left { animation: ${isHanging || isFalling ? "none" : "rr-leg-left 0.82s ease-in-out infinite"}; transform-origin: 20px 45px; }
          .rr-leg-right { animation: ${isHanging || isFalling ? "none" : "rr-leg-right 0.82s ease-in-out infinite"}; transform-origin: 28px 45px; }
          .rr-arm-left { animation: ${isHanging || isFalling ? "none" : "rr-arm-left 1.4s ease-in-out infinite"}; transform-origin: 15px 43px; }
          .rr-arm-right { animation: ${isHanging || isFalling ? "none" : "rr-arm-right 1.4s ease-in-out infinite"}; transform-origin: 33px 43px; }
          .rr-tail { animation: ${isHanging || isFalling ? "none" : "rr-tail 1.5s ease-in-out infinite"}; transform-origin: 17px 45px; }
        `}</style>
            </defs>

            {isHanging ? (
                <g opacity="1">
                    <line x1="24" y1="-18" x2="24" y2="3" className="rr-soft" strokeDasharray="3 3" />
                    <rect x="22" y="-20" width="4" height="4" className="rr-fill" />
                </g>
            ) : null}

            <g className="rr-head">
                {/* ears */}
                <path d="M12 13 L16 3 L21.5 11 Z" className="rr-fill" />
                <path d="M36 13 L32 3 L26.5 11 Z" className="rr-fill" />
                <path d="M14.5 11 L16.5 6.5 L19 10.5 Z" className="rr-bg" />
                <path d="M33.5 11 L31.5 6.5 L29 10.5 Z" className="rr-bg" />

                {/* face */}
                <ellipse cx="24" cy="19" rx="13.5" ry="11.5" className="rr-fill" />

                {/* eyes */}
                <ellipse cx="18.5" cy="18" rx="4.4" ry="5.2" className="rr-bg rr-eye" />
                <ellipse cx="29.5" cy="18" rx="4.4" ry="5.2" className="rr-bg rr-eye" />
                <circle cx="19" cy="19.5" r="2.1" className="rr-fill" />
                <circle cx="29" cy="19.5" r="2.1" className="rr-fill" />
                <circle cx="19.9" cy="18.6" r="0.7" className="rr-bg" />
                <circle cx="29.9" cy="18.6" r="0.7" className="rr-bg" />

                {/* nose + mouth */}
                <path d="M22.5 23.5 L25.5 23.5 L24 25.8 Z" className="rr-bg" />
                <path d="M24 25.8 Q24 27.5 21.6 27.3" className="rr-soft" />
                <path d="M24 25.8 Q24 27.5 26.4 27.3" className="rr-soft" />

                {/* whiskers */}
                <line x1="12" y1="20" x2="3" y2="18.5" className="rr-whisker" />
                <line x1="12" y1="23" x2="3" y2="24" className="rr-whisker" />
                <line x1="36" y1="20" x2="45" y2="18.5" className="rr-whisker" />
                <line x1="36" y1="23" x2="45" y2="24" className="rr-whisker" />
            </g>

            <g className="rr-body">
                {/* tail (wags independently) */}
                <g className="rr-tail">
                    <path
                        d="M17 45 C7 49 1 40 6 32 C9 27 15 29 13 36"
                        className="rr-fill"
                    />
                </g>

                {/* back paws */}
                <g className="rr-leg-left">
                    <rect x="17" y="46" width="6.5" height="6" rx="3" className="rr-fill" />
                </g>
                <g className="rr-leg-right">
                    <rect x="24.5" y="46" width="6.5" height="6" rx="3" className="rr-fill" />
                </g>

                {/* body */}
                <ellipse cx="24" cy="37" rx="12" ry="11" className="rr-fill" />
                <ellipse cx="24" cy="40" rx="5.5" ry="6" className="rr-bg" />

                {/* front legs */}
                <g className="rr-arm-left">
                    <rect x="12" y="43" width="6.5" height="9" rx="3" className="rr-fill" />
                </g>
                <g className="rr-arm-right">
                    <rect x="29.5" y="43" width="6.5" height="9" rx="3" className="rr-fill" />
                </g>
            </g>

            {isFalling ? <line x1="8" y1="50" x2="40" y2="50" className="rr-soft" strokeDasharray="2 2" /> : null}
        </svg>
    );
}

function SpeechBubble({
    message,
    visible,
    facingLeft,
}: {
    message: string;
    visible: boolean;
    facingLeft: boolean;
})
{
    return (
        <div
            style={{
                position: "absolute",
                bottom: 88,
                left: facingLeft ? undefined : -6,
                right: facingLeft ? -6 : undefined,
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0) scale(1)" : "translateY(10px) scale(0.95)",
                transition: "opacity 0.22s ease, transform 0.32s cubic-bezier(.2,.9,.22,1)",
                pointerEvents: "none",
                whiteSpace: "nowrap",
                background: "var(--foreground)",
                color: "var(--background)",
                fontSize: 10,
                fontFamily: "monospace",
                padding: "5px 8px",
                borderRadius: 6,
                boxShadow: "0 8px 22px rgba(0,0,0,0.16)",
                zIndex: 10,
            }}
        >
            {message}
            <span
                style={{
                    position: "absolute",
                    bottom: -5,
                    left: facingLeft ? undefined : 12,
                    right: facingLeft ? 12 : undefined,
                    width: 0,
                    height: 0,
                    borderLeft: "5px solid transparent",
                    borderRight: "5px solid transparent",
                    borderTop: "5px solid var(--foreground)",
                }}
            />
        </div>
    );
}

export function RoamingRobot()
{
    const frameRef = useRef<HTMLDivElement | null>(null);
    const rafRef = useRef<number>(0);
    const groundYRef = useRef<number>(0);
    const targetXRef = useRef<number>(96);
    const targetYRef = useRef<number>(0);
    const currentXRef = useRef<number>(96);
    const currentYRef = useRef<number>(0);
    const velocityXRef = useRef<number>(0);
    const velocityYRef = useRef<number>(0);
    const dragOffsetXRef = useRef<number>(0);
    const dragOffsetYRef = useRef<number>(0);
    const draggingRef = useRef<boolean>(false);
    const dirRef = useRef<number>(1);
    const roamPhaseRef = useRef<number>(0);
    const minXRef = useRef<number>(24);
    const maxXRef = useRef<number>(typeof window !== "undefined" ? window.innerWidth - ROBOT_WIDTH - 24 : 800);
    const releaseTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    const [facingLeft, setFacingLeft] = useState(false);
    const [isHanging, setIsHanging] = useState(false);
    const [isFalling, setIsFalling] = useState(false);
    const [bubbleVisible, setBubbleVisible] = useState(false);
    const [message, setMessage] = useState(MESSAGES[0]);

    const syncFrame = useCallback(() =>
    {
        const frame = frameRef.current;
        if (!frame) return;
        frame.style.transform = `translate3d(${currentXRef.current}px, ${currentYRef.current}px, 0)`;
    }, []);

    const startRelease = useCallback(() =>
    {
        setIsHanging(false);
        setBubbleVisible(false);
        setIsFalling(true);
        draggingRef.current = false;
        velocityYRef.current = Math.max(5.2, velocityYRef.current * 0.35 + 5);
        velocityXRef.current *= 0.35;

        if (releaseTimerRef.current) clearTimeout(releaseTimerRef.current);
        releaseTimerRef.current = setTimeout(() =>
        {
            setIsFalling(false);
            velocityYRef.current = 0;
            velocityXRef.current = 0;
        }, 850);
    }, []);

    useEffect(() =>
    {
        const updateBounds = () =>
        {
            maxXRef.current = Math.max(minXRef.current, window.innerWidth - ROBOT_WIDTH - 24);
            groundYRef.current = window.innerHeight - ROBOT_HEIGHT - 10;
            currentXRef.current = Math.min(Math.max(currentXRef.current, minXRef.current), maxXRef.current);
            if (!draggingRef.current && !isFalling) {
                currentYRef.current = groundYRef.current;
            }
            syncFrame();
        };

        updateBounds();
        window.addEventListener("resize", updateBounds);
        return () => window.removeEventListener("resize", updateBounds);
    }, [isFalling, syncFrame]);

    useEffect(() =>
    {
        const onMove = (e: MouseEvent) =>
        {
            if (!draggingRef.current) return;
            targetXRef.current = e.clientX - dragOffsetXRef.current;
            targetYRef.current = e.clientY - dragOffsetYRef.current;
            setFacingLeft(e.movementX < 0 || e.clientX < currentXRef.current + ROBOT_WIDTH / 2);
        };

        const onUp = (e: MouseEvent) =>
        {
            if (e.button !== 0 || !draggingRef.current) return;
            startRelease();
        };

        window.addEventListener("mousemove", onMove, { passive: true });
        window.addEventListener("mouseup", onUp);
        return () =>
        {
            window.removeEventListener("mousemove", onMove);
            window.removeEventListener("mouseup", onUp);
        };
    }, [startRelease]);

    useEffect(() =>
    {
        const tick = () =>
        {
            const groundY = groundYRef.current || window.innerHeight - ROBOT_HEIGHT - 10;

            if (draggingRef.current) {
                const dx = targetXRef.current - currentXRef.current;
                const dy = targetYRef.current - currentYRef.current;
                velocityXRef.current = velocityXRef.current * 0.72 + dx * 0.24;
                velocityYRef.current = velocityYRef.current * 0.72 + dy * 0.24;
                currentXRef.current += velocityXRef.current;
                currentYRef.current += velocityYRef.current;
                currentXRef.current = Math.min(Math.max(currentXRef.current, minXRef.current), maxXRef.current);
                currentYRef.current = Math.min(Math.max(currentYRef.current, 0), groundY);
                roamPhaseRef.current += 0.09;
            } else if (isFalling) {
                velocityYRef.current += 0.72;
                currentXRef.current += velocityXRef.current;
                currentYRef.current += velocityYRef.current;
                velocityXRef.current *= 0.985;

                if (currentXRef.current <= minXRef.current) {
                    currentXRef.current = minXRef.current;
                    velocityXRef.current *= -0.4;
                }
                if (currentXRef.current >= maxXRef.current) {
                    currentXRef.current = maxXRef.current;
                    velocityXRef.current *= -0.4;
                }

                if (currentYRef.current >= groundY) {
                    currentYRef.current = groundY;
                    velocityYRef.current *= -0.42;
                    velocityXRef.current *= 0.78;
                    if (Math.abs(velocityYRef.current) < 1.1) {
                        currentYRef.current = groundY;
                        velocityYRef.current = 0;
                        velocityXRef.current = 0;
                        setIsFalling(false);
                    }
                }
            } else {
                const baseSpeed = 0.65;
                currentXRef.current += dirRef.current * baseSpeed;
                roamPhaseRef.current += 0.08;
                currentYRef.current = groundY + Math.sin(roamPhaseRef.current) * 1.8;

                if (currentXRef.current >= maxXRef.current) {
                    currentXRef.current = maxXRef.current;
                    dirRef.current = -1;
                    setFacingLeft(true);
                } else if (currentXRef.current <= minXRef.current) {
                    currentXRef.current = minXRef.current;
                    dirRef.current = 1;
                    setFacingLeft(false);
                }
            }

            syncFrame();
            rafRef.current = window.requestAnimationFrame(tick);
        };

        rafRef.current = window.requestAnimationFrame(tick);
        return () => window.cancelAnimationFrame(rafRef.current);
    }, [isFalling, syncFrame]);

    const handleMouseDown = useCallback((e: React.MouseEvent<HTMLDivElement>) =>
    {
        if (e.button !== 0) return;
        e.preventDefault();
        e.stopPropagation();

        const frame = frameRef.current;
        if (!frame) return;

        draggingRef.current = true;
        setIsHanging(true);
        setIsFalling(false);
        setBubbleVisible(true);
        setMessage(HANG_MESSAGES[Math.floor(Math.random() * HANG_MESSAGES.length)]);
        velocityXRef.current = 0;
        velocityYRef.current = 0;

        const rect = frame.getBoundingClientRect();
        dragOffsetXRef.current = e.clientX - rect.left;
        dragOffsetYRef.current = e.clientY - rect.top;
        targetXRef.current = rect.left;
        targetYRef.current = rect.top;
    }, []);

    useEffect(() =>
    {
        currentXRef.current = 96;
        currentYRef.current = groundYRef.current || window.innerHeight - ROBOT_HEIGHT - 10;
        syncFrame();
    }, [syncFrame]);

    return (
        <div
            style={{
                position: "fixed",
                left: 0,
                top: 0,
                zIndex: 9999,
                width: "100vw",
                height: "100vh",
                pointerEvents: "none",
                userSelect: "none",
                color: "var(--foreground)",
            }}
            aria-hidden="true"
        >
            <div
                ref={frameRef}
                style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    width: ROBOT_WIDTH,
                    height: ROBOT_HEIGHT,
                    willChange: "transform",
                    pointerEvents: "auto",
                    cursor: isHanging ? "grabbing" : "grab",
                }}
            >
                <SpeechBubble message={message} visible={bubbleVisible} facingLeft={facingLeft} />

                <div
                    onMouseDown={handleMouseDown}
                    style={{ width: ROBOT_WIDTH, height: ROBOT_HEIGHT, display: "flex", alignItems: "flex-end", justifyContent: "center" }}
                >
                    <PixelRobot facingLeft={facingLeft} isHanging={isHanging} isFalling={isFalling} />
                </div>
            </div>
        </div>
    );
}
