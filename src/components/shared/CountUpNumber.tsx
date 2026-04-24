import { useState, useEffect, useRef } from "react";
import { motion, useSpring, useTransform, AnimatePresence } from "framer-motion";

function parseStatValue(rawValue: string): { target: number; suffix: string; decimals: number } {
  const match = rawValue.match(/^(\d+(?:\.\d+)?)(.*)$/);
  if (!match) return { target: 0, suffix: rawValue, decimals: 0 };
  const numStr = match[1];
  const decimalPart = numStr.split(".")[1];
  return {
    target: Number(numStr),
    suffix: match[2] ?? "",
    decimals: decimalPart ? decimalPart.length : 0
  };
}

interface RollingDigitProps {
  value: number;
}

function RollingDigit({ value }: RollingDigitProps) {
  return (
    <div className="relative inline-block h-[1.2em] w-[0.65em] overflow-hidden">
      <motion.div
        animate={{ y: `-${value * 10}%` }}
        transition={{ 
          type: "spring", 
          stiffness: 120, 
          damping: 20,
          restDelta: 0.001 
        }}
        className="absolute flex flex-col"
      >
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((n) => (
          <div key={n} className="flex h-[1.2em] items-center justify-center">
            {n}
          </div>
        ))}
      </motion.div>
      {/* Invisible placeholder to maintain width and height */}
      <span className="invisible leading-[1.2em]">0</span>
    </div>
  );
}


interface CountUpNumberProps {
  value: string;
  duration?: number;
  delay?: number;
  start?: boolean;
}

export function CountUpNumber({
  value,
  duration = 2000,
  delay = 0,
  start = false
}: CountUpNumberProps) {
  const { target, suffix, decimals } = parseStatValue(value);
  const [currentNumber, setCurrentNumber] = useState(0);

  useEffect(() => {
    if (!start) {
      setCurrentNumber(0);
      return;
    }

    let animationFrame = 0;
    let startTime = 0;

    const startTimer = window.setTimeout(() => {
      const tick = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        const easedProgress = 1 - Math.pow(1 - progress, 3);
        setCurrentNumber(target * easedProgress);
        if (progress < 1) animationFrame = window.requestAnimationFrame(tick);
      };
      animationFrame = window.requestAnimationFrame(tick);
    }, delay);

    return () => {
      window.clearTimeout(startTimer);
      window.cancelAnimationFrame(animationFrame);
    };
  }, [target, duration, delay, start]);

  const formattedNumber = currentNumber.toFixed(decimals);
  const digits = formattedNumber.split("");

  return (
    <motion.span
      initial={{ opacity: 0, y: 10 }}
      animate={start ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
      className="inline-flex items-baseline"
    >
      {digits.map((char, i) => {
        if (char === "." || char === ",") {
          return <span key={i}>{char}</span>;
        }
        const digitValue = parseInt(char, 10);
        return <RollingDigit key={i} value={digitValue} />;
      })}
      {suffix && <span className="ml-1">{suffix}</span>}
    </motion.span>
  );
}


