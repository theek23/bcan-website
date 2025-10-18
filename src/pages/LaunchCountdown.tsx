import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const LaunchCountdown = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "BCAN Solutions — Smart Tech For Human Wellness";
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/home", { replace: true });
    }, 2000); // Navigate after 2 seconds

    return () => clearTimeout(timer);
  }, [navigate]);

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
          src="/logo-2.png"
          alt="BCAN"
          className="h-32sm:h-40 md:h-52 mb-8 md:mb-10 opacity-95"
        />
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
    </div>
  );
};

export default LaunchCountdown;
