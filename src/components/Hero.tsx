"use client";

import { motion } from "motion/react";
import { useTheme } from "next-themes";
import { FaWhatsapp } from "react-icons/fa";
import { SiGooglemeet } from "react-icons/si";

const Hero = () => {
  const { theme } = useTheme()
  console.log(theme);

  return (
    <section
      id="home"
      className="relative center-center flex-col pt-8 overflow-hidden bg-[var(--background)] text-[var(--foreground)]"
    >
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Main Pink Glow */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] sm:w-[600px] sm:h-[600px] lg:w-[800px] lg:h-[800px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(255,0,127,0.25) 0%, rgba(255,0,127,0.05) 40%, transparent 70%)",
          }}
          animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Secondary Glow */}
        <motion.div
          className="absolute top-1/3 right-1/4 w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] lg:w-[400px] lg:h-[400px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(225,0,106,0.2) 0%, transparent 60%)",
          }}
          animate={{ x: [0, 50, 0], y: [0, -30, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Floating Shapes */}
        <motion.div
          className="hidden sm:block absolute top-20 right-[15%] w-24 h-24 lg:w-32 lg:h-32 border border-[var(--border)] rounded-2xl rotate-12"
          animate={{ rotate: [12, 24, 12], y: [0, -20, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="hidden sm:block absolute bottom-32 left-[10%] w-16 h-16 lg:w-24 lg:h-24 border border-[var(--border)] rounded-full"
          animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full center-center flex-col gap-6 px-4">
        {/* Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[var(--foreground)] ${theme === "dark" ? "glass" : "glass-pink"}`}
        >
          <span className="w-1.5 h-1.5 bg-[var(--color-pink-neon)] rounded-full animate-pulse shadow-[0_0_15px_#FF007F]" />
          <span className="text-sm opacity-70">Web Development Agency</span>
        </motion.div>

        {/* Headline */}
        <div>
          <motion.h1
            className="text-5xl md:text-6xl text-center flex flex-col font-bold tracking-tight leading-[0.95]"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="text-[var(--foreground)]">Steady</span>
            <span className="text-gradient">Web Solutions</span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            className="text-sm text-center opacity-70 mt-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            Digital craftsmanship for modern businesses.
            <br />
            <span className="opacity-50">We build experiences that convert.</span>
          </motion.p>
        </div>

        {/* CTA Buttons */}
        <motion.div
          className="center-center flex-col md:flex-row gap-4 mt-2 flex-wrap"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <motion.a
            href=""
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
            className="bg-gradient-to-r from-[var(--color-pink-neon)] to-[var(--color-pink-hot)] rounded-full center-center gap-2 px-6 py-2 text-white"
          >
            <SiGooglemeet className="text-white/90" />
            <span className="text-white/90 text-sm md:text-md capitalize">
              Book A Meeting
            </span>
          </motion.a>

          <motion.a
            href=""
            // whileHover={{ scale: 1.05 }}
            // whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
            className="rounded-full center-center gap-2 px-6 py-2 border border-[var(--border)] bg-[var(--bg-background)] text-[var(--foreground)]"
          >
            <FaWhatsapp />
            <span className="text-sm md:text-md capitalize">
              Contact in whatsApp
            </span>
          </motion.a>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="center-center gap-8 sm:gap-24 flex-wrap"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          {[
            { value: "50+", label: "Projects" },
            { value: "98%", label: "Satisfaction" },
            { value: "5yrs", label: "Experience" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="center-center flex-col"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 + index * 0.1 }}
            >
              <div className="text-2xl md:text-4xl text-[var(--foreground)]">
                {stat.value}
              </div>
              <div className="text-sm md:text-sm opacity-50">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="mt-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <div className="w-6 h-10 border-2 border-[var(--border)] rounded-full flex justify-center pt-2">
          <motion.div
            className="w-1 h-2 bg-[var(--color-pink-neon)] rounded-full"
            animate={{ y: [0, 4, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
