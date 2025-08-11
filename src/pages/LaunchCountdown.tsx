import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

type TimeLeft = {
  totalMs: number;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

function calculateTimeLeft(targetDate: Date): TimeLeft {
  const totalMs = Math.max(0, targetDate.getTime() - Date.now());

  const days = Math.floor(totalMs / (1000 * 60 * 60 * 24));
  const hours = Math.floor((totalMs / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((totalMs / (1000 * 60)) % 60);
  const seconds = Math.floor((totalMs / 1000) % 60);

  return { totalMs, days, hours, minutes, seconds };
}

type UnitProps = { label: string; value: number };
const Unit = ({ label, value }: UnitProps) => {
  const formatted = String(value).padStart(2, "0");
  return (
    <div className="flex flex-col items-center">
      <div className="relative w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-xl md:rounded-2xl bg-white border border-white/40 shadow flex items-center justify-center">
        <span className="text-lg sm:text-2xl md:text-4xl font-semibold tracking-wider text-[#BE185D] tabular-nums drop-shadow">
          {formatted}
        </span>
        <div className="absolute inset-0 rounded-2xl ring-1 ring-white/60 pointer-events-none" />
      </div>
      <span className="mt-1.5 sm:mt-2 md:mt-3 text-[9px] sm:text-[10px] md:text-xs uppercase tracking-[0.2em] text-white/80">
        {label}
      </span>
    </div>
  );
};

const LaunchCountdown = () => {
  // Set your real launch date/time here (local time or ISO).
  // Easy to remove later: delete this file and switch the '/' route in `App.tsx` back to `Home`.
  const targetDate = useMemo(() => new Date("2025-08-12T00:00:00"), []);
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(() =>
    calculateTimeLeft(targetDate)
  );
  const navigate = useNavigate();
  const [showWelcome, setShowWelcome] = useState(false);

  useEffect(() => {
    document.title = "BCAN — Launching Soon";
  }, []);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetDate));
    }, 1000);
    return () => window.clearInterval(intervalId);
  }, [targetDate]);

  const isLive = timeLeft.totalMs === 0;

  useEffect(() => {
    if (isLive) {
      setShowWelcome(true);
      const timeoutId = window.setTimeout(() => {
        setShowWelcome(false);
        navigate("/home", { replace: true });
      }, 1800);
      return () => window.clearTimeout(timeoutId);
    }
  }, [isLive, navigate]);

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Animated brand gradient background */}
      <div className="absolute inset-0 -z-10 animated-gradient" />

      {/* Decorative grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.15)_1px,transparent_0)] [background-size:24px_24px] opacity-70"
      />

      {/* Brand glows */}
      <div
        aria-hidden
        className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-[#BE185D]/25 blur-3xl"
      />
      <div
        aria-hidden
        className="absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-white/40 blur-3xl"
      />

      <div className="relative flex min-h-screen flex-col items-center justify-center px-4 md:px-6 py-12 md:py-16">
        {/* Logo */}
        <img
          src="/bcan-logo.png"
          alt="BCAN"
          className="h-20 sm:h-24 md:h-28 mb-8 md:mb-10 opacity-95"
        />

        {/* Headline */}
        <h1
          className="text-center text-2xl sm:text-3xl md:text-5xl font-semibold tracking-tight text-white"
          style={{ textShadow: "0 2px 8px rgba(190,24,93,0.35)" }}
        >
          We’re launching soon
        </h1>
        <p className="mt-3 md:mt-4 max-w-xl text-center text-white/90 px-2">
          We’re putting the final touches on something great. Stay tuned!
        </p>

        {/* Countdown */}
        {!isLive && (
          <div className="mt-8 md:mt-10 grid grid-cols-4 gap-2 sm:gap-3 md:gap-6">
            <Unit label="Days" value={timeLeft.days} />
            <Unit label="Hours" value={timeLeft.hours} />
            <Unit label="Minutes" value={timeLeft.minutes} />
            <Unit label="Seconds" value={timeLeft.seconds} />
          </div>
        )}
      </div>

      {/* Local styles for animated gradient */}
      <style>{`
        .animated-gradient {
          background: linear-gradient(135deg, #ffffff, #BE185D, #ffffff);
          background-size: 200% 200%;
          animation: gradientShift 10s ease-in-out infinite;
        }
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>

      <AnimatePresence>
        {showWelcome && (
          <motion.div
            key="welcome"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-white via-pink-50 to-[#BE185D]/20 px-6"
          >
            <motion.div
              initial={{ y: 12, opacity: 0, scale: 0.98 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: -6, opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <img
                src="/bcan-logo.png"
                alt="BCAN"
                className="h-12 sm:h-16 md:h-20 mx-auto mb-3 sm:mb-4"
              />
              <div
                className="text-xl sm:text-2xl md:text-4xl font-semibold text-[#BE185D]"
                style={{ textShadow: "0 2px 8px rgba(190,24,93,0.25)" }}
              >
                Welcome to BCan Solutions
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LaunchCountdown;
