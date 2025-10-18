import React, { useState, useEffect, useRef, useMemo } from "react";
import { motion } from "framer-motion";

// Constants for breast cancer death calculations
const ANNUAL_DEATHS = 670000; // WHO/GLOBOCAN 2022 estimate
const PER_SECOND = ANNUAL_DEATHS / (365.25 * 24 * 3600);

// Hook for real-time updates
const useNow = () => {
  const [now, setNow] = useState(Date.now());
  useEffect(() => {
    const interval = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(interval);
  }, []);
  return now;
};

// Format number with commas
const formatNumber = (num: number) => {
  return num.toLocaleString();
};

// Breast Cancer Death Counter component
const BreastCancerDeathCounter: React.FC = () => {
  const now = useNow();

  const perMinute = PER_SECOND * 60;
  const perHour = PER_SECOND * 3600;
  const perDay = PER_SECOND * 86400;

  const [display, setDisplay] = useState(0);
  const lastNow = useRef<number>(now);
  useEffect(() => {
    const dt = Math.max(0, (now - lastNow.current) / 1000);
    lastNow.current = now;
    setDisplay((d) => d + dt * PER_SECOND);
  }, [now]);

  const stats = useMemo(
    () => [
      { label: "per minute", value: perMinute },
      { label: "per hour", value: perHour },
      { label: "per day", value: perDay },
      { label: "per year (est.)", value: ANNUAL_DEATHS },
    ],
    [perMinute, perHour, perDay]
  );

  return (
    <div className="space-y-4">
      <div className="grid place-items-center">
        <motion.div
          initial={{ scale: 0.98 }}
          animate={{ scale: [1, 1.02, 1] }}
          transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
          className="bg-white text-black rounded-2xl shadow-2xl px-6 py-6 md:px-8 md:py-8 w-full"
        >
          <div className="text-center">
            <div className="text-xs uppercase tracking-widest text-black/60 mb-1">
              Estimated deaths since page load
            </div>
            <div className="text-4xl md:text-5xl font-black tabular-nums">
              {formatNumber(Math.floor(display))}
            </div>
          </div>
        </motion.div>
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        {stats.map((s) => (
          <div
            key={s.label}
            className="rounded-2xl border border-black/10 bg-black/5 p-3"
          >
            <div className="text-sm text-gray-700">{s.label}</div>
            <div className="text-xl font-bold tabular-nums text-gray-900">
              {s.label.includes("year")
                ? formatNumber(Number(s.value))
                : s.value.toFixed(2)}
            </div>
          </div>
        ))}
      </div>

      <div className="text-xs text-gray-600">
        Method: Converts an annual global estimate to a per-second rate for
        awareness. Source: WHO/GLOBOCAN 2022 (~670,000 deaths). Update when new
        figures are released.
      </div>
    </div>
  );
};

const ProblemStatement = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Why Bcan Bra?
          </h2>
          <p className="text-xl text-gray-600">
            Understanding the urgent need for early detection
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Live Global Death Count */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Live Global Death Count: Breast Cancer
              </h3>
              <BreastCancerDeathCounter />
            </div>
          </div>

          {/* Right side - YouTube Video */}
          <div className="space-y-6">
            <div>
              <div
                className="relative w-full h-64 md:h-80 rounded-xl overflow-hidden shadow-lg"
                style={{ paddingTop: "56.25%" }}
              >
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src="https://drive.google.com/file/d/1ec8XN8zHJZapFSFTb2KmJGRYWhfAUn9E/preview"
                  title="Breast Cancer Awareness Video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <p className="text-sm text-gray-600 mt-4">
                Watch how early detection can save lives and why the Bcan Bra
                technology is crucial for women's health.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemStatement;
