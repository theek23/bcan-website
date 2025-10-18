import React, { useState, useEffect, useRef, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";

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

// Breast Cancer Death Counter component (smaller version)
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
    ],
    [perMinute, perHour, perDay]
  );

  return (
    <div className="space-y-3">
      <div className="grid place-items-center">
        <motion.div
          initial={{ scale: 0.98 }}
          animate={{ scale: [1, 1.02, 1] }}
          transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
          className="bg-white text-black rounded-xl shadow-lg px-4 py-3 w-full"
        >
          <div className="text-center">
            <div className="text-xs uppercase tracking-wider text-black/60 mb-1">
              Deaths since page load
            </div>
            <div className="text-2xl md:text-3xl font-black tabular-nums">
              {formatNumber(Math.floor(display))}
            </div>
          </div>
        </motion.div>
      </div>

      <div className="grid gap-2 grid-cols-3">
        {stats.map((s) => (
          <div
            key={s.label}
            className="rounded-lg border border-black/10 bg-black/5 p-2 text-center"
          >
            <div className="text-xs text-gray-700">{s.label}</div>
            <div className="text-sm font-bold tabular-nums text-gray-900">
              {s.value.toFixed(1)}
            </div>
          </div>
        ))}
      </div>

      <div className="text-xs text-gray-600 text-center">
        Source: WHO/GLOBOCAN 2022 (~670,000 deaths/year)
      </div>
    </div>
  );
};

const BreastCancerPopup: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // For testing purposes, let's show the popup every time
    // You can uncomment the sessionStorage check later if needed
    console.log('BreastCancerPopup: Setting up timer to show popup');
    
    // Check if popup has been shown before in this session
    // const shownBefore = sessionStorage.getItem('breast-cancer-popup-shown');
    
    // if (!shownBefore) {
      // Show popup after 2 seconds
      const timer = setTimeout(() => {
        console.log('BreastCancerPopup: Showing popup now');
        setIsVisible(true);
        // sessionStorage.setItem('breast-cancer-popup-shown', 'true');
      }, 2000);

      return () => clearTimeout(timer);
    // }
  }, []);

  // For immediate testing - uncomment this line to show popup immediately
  useEffect(() => { setIsVisible(true); }, []);

  useEffect(() => {
    if (isVisible) {
      // Auto-close after 8 seconds
      const autoCloseTimer = setTimeout(() => {
        setIsVisible(false);
      }, 8000);

      return () => clearTimeout(autoCloseTimer);
    }
  }, [isVisible]);

  const handleClose = () => {
    setIsVisible(false);
  };

  console.log('BreastCancerPopup: Rendering, isVisible:', isVisible);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed bottom-4 right-4 z-50 max-w-sm w-full mx-4 sm:mx-0"
        >
          <div className="bg-gradient-to-br from-pink-50 to-red-50 border border-pink-200 rounded-2xl shadow-2xl p-4 relative">
            {/* Close button */}
            <button
              onClick={handleClose}
              className="absolute top-2 right-2 w-6 h-6 rounded-full bg-white/80 hover:bg-white flex items-center justify-center transition-colors duration-200 group"
              aria-label="Close popup"
            >
              <svg
                className="w-4 h-4 text-gray-600 group-hover:text-gray-800"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Header */}
            <div className="mb-3 pr-6">
              <h3 className="text-lg font-bold text-gray-900 mb-1">
                Breast Cancer Awareness
              </h3>
              <p className="text-sm text-gray-600">
                Every second counts in early detection
              </p>
            </div>

            {/* Death Counter */}
            <BreastCancerDeathCounter />

            {/* Footer */}
            <div className="mt-3 pt-3 border-t border-pink-200">
              <p className="text-xs text-gray-600 text-center">
                Learn more about early detection with Bcan Bra technology
              </p>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default BreastCancerPopup;
