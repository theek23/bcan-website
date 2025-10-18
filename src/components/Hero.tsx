import React, { useEffect, useMemo, useRef, useState } from "react";
import { ArrowRight, Cpu } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import ModelViewer from "./ModelViewer";

// Live Breast Cancer Death Counter (Global)
// Source rate: WHO estimates ~670,000 breast cancer deaths worldwide in 2022.
// We convert that to a per-second rate and animate a counter that estimates deaths since the page loaded.

const ANNUAL_DEATHS = 670_000; // Update when newer WHO/GLOBOCAN numbers are published
const PER_SECOND = ANNUAL_DEATHS / (365 * 24 * 60 * 60);

function formatNumber(n: number) {
  return new Intl.NumberFormat(undefined, {
    maximumFractionDigits: 0,
  }).format(n);
}

function useNow() {
  const [now, setNow] = useState(() => Date.now());
  useEffect(() => {
    let raf: number;
    const tick = () => {
      setNow(Date.now());
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);
  return now;
}

/* COMMENTED OUT FOR NEW UPDATE - BreastCancerDeathCounter component
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
*/

const Hero = () => {
  return (
    <div className="min-h-screen flex items-center bg-gradient-to-br from-pink-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="flex justify-center">
          <div className="max-w-4xl text-center space-y-8">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
              Ultimate Solution For Breast Cancer Early Detection
            </h1>

            <p className="text-xl text-gray-600">
              Transform breast cancer detection with our innovative BCan Bra,
              powered by advanced AI and patent-pending technology merged with
              AI for earlier, more accurate diagnosis.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/about"
                className="px-8 py-4 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition-colors duration-200 flex items-center justify-center"
              >
                Learn More
                <ArrowRight size={20} className="ml-2" />
              </Link>
              <Link
                to="/contact?form=investor"
                className="px-8 py-4 border-2 border-pink-600 text-pink-600 rounded-lg hover:bg-pink-50 transition-colors duration-200 flex items-center justify-center"
              >
                Invest in Us
                <ArrowRight size={20} className="ml-2" />
              </Link>
              <Link
                to="/contact?form=investor"
                className="px-8 py-4 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition-colors duration-200 flex items-center justify-center"
              >
                Donate now
                <ArrowRight size={20} className="ml-2" />
              </Link>
            </div>

            {/* COMMENTED OUT FOR NEW UPDATE - BreastCancerDeathCounter usage */}
            {/* <BreastCancerDeathCounter /> */}
          </div>

          {/* COMMENTED OUT - 3D Model Section */}
          {/* <div className="relative">
            <div className="w-full h-[500px] rounded-2xl bg-gradient-to-br from-pink-200 to-blue-200 animate-none">
              <div className="w-full h-[500px] rounded-xl bg-gradient-to-br from-pink-100 to-blue-100">
                <ModelViewer />
              </div>
            </div>
          </div> */}
        </div>

        {/* Updated donate button with smaller size and increased margin-top */}
        <div className="flex justify-center mt-12">
          {/* <Link
            to="/contact?form=feedback"
            className="px-8 py-4 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition-colors duration-200 flex items-center justify-center text-sm"
          >
            Donate Now
            <ArrowRight size={16} className="ml-2" />
          </Link> */}
        </div>
      </div>
    </div>
  );
};

export default Hero;
