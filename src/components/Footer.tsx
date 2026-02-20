"use client";

import { motion } from "motion/react";

const Footer = () => {
  return (
    <motion.footer
      className=" pt-6 sm:pt-8 pb-6 sm:pb-8 border-t border-[var(--border)] bg-[var(--background)] text-[var(--foreground)]"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.2, duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="text-lg sm:text-xl font-bold text-gradient">
            SWS
          </span>
          <span className="text-[var(--foreground)]/40 text-xs sm:text-sm">
            © 2025 Steady Web Solutions
          </span>
        </div>

        {/* <div className="flex items-center gap-4 sm:gap-6">
          <a
            href="#"
            className="text-[var(--foreground)]/40 hover:text-[var(--foreground)] transition-colors text-xs sm:text-sm"
          >
            Privacy
          </a>
          <a
            href="#"
            className="text-[var(--foreground)]/40 hover:text-[var(--foreground)] transition-colors text-xs sm:text-sm"
          >
            Terms
          </a>
          <a
            href="#"
            className="text-[var(--foreground)]/40 hover:text-[#FF007F] transition-colors text-xs sm:text-sm"
          >
            Telegram
          </a>
        </div> */}
      </div>
    </motion.footer>
  );
};

export default Footer;
