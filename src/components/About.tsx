"use client";

import { motion } from "motion/react";
import { useRef } from "react";
import { aboutItems } from "../constants";

// --------------------
// Types
// --------------------
type Theme = "white" | "gradient" | "dark";

// --------------------
// Theme Styles (same values, tokenized)
// --------------------
const THEME_STYLES: Record<Theme, any> = {
    white: {
        container: "bg-white border-transparent md:bg-[var(--card)] md:border-[var(--border)]",
        title: "text-black md:text-[var(--foreground)]",
        desc: "text-black/60 md:text-[var(--foreground)]/60",
        number: "text-black/5 md:text-[var(--foreground)]/5",
        accent: "bg-[#FF007F]",
        mobileGradientLabel: "from-black/5 to-transparent md:hidden",
    },
    gradient: {
        container: "bg-linear-to-br from-[#8B0046] to-[#5A002E]",
        title: "text-[var(--foreground)]",
        desc: "text-[var(--foreground)]/80 md:text-[var(--foreground)]/60",
        number: "text-[var(--foreground)]/20 md:text-[var(--foreground)]/5",
        accent: "bg-white md:bg-[#FF007F]",
        mobileGradientLabel: "from-black/10 to-transparent md:hidden",
    },
    dark: {
        container: "bg-[var(--card)] border-[var(--border)]",
        title: "text-[var(--foreground)]",
        desc: "text-[var(--foreground)]/60",
        number: "text-[var(--foreground)]/5",
        accent: "bg-[#FF007F]",
        mobileGradientLabel: "from-[#FF007F]/20 to-transparent md:hidden",
    },
};

// --------------------
// About Card
// --------------------
const AboutCard = ({ item }: any) => {
    const styles = THEME_STYLES[item.theme as Theme];

    return (
        <div className="w-[100%] h-[220px]">
            <motion.div
                className={`w-full h-full relative group rounded-xl px-8 py-8 overflow-hidden border border-[var(--background)] cursor-pointer glass ${styles.container}`}
                whileHover="hover"
                initial="initial"
            >
                {/* Mobile ambience */}
                <div className={`absolute inset-0 bg-linear-to-br ${styles.mobileGradientLabel}`} />

                {/* Desktop hover gradient */}
                <motion.div className="absolute inset-0 glass-pink opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Big number */}
                <motion.span
                    className={`absolute -bottom-8 -right-4 text-[8rem] font-bold leading-none select-none pointer-events-none transition-colors duration-300 ${styles.number}`}
                    variants={{
                        initial: { y: 0 },
                        hover: { y: -10 },
                    }}
                    transition={{ duration: 0.5 }}
                >
                    {item.id}
                </motion.span>

                {/* Content */}
                <motion.div
                    className="relative z-10 h-full flex flex-col justify-between"
                    variants={{
                        initial: { y: 0 },
                        hover: { y: -5 },
                    }}
                    transition={{ duration: 0.4 }}
                >
                    <div>
                        <h1 className={`text-2xl font-bold transition-colors duration-300 select-none ${styles.title}`}>
                            {item.title}
                        </h1>
                        <p className={`text-sm transition-colors duration-300 select-none pt-2 ${styles.desc}`}>
                            {item.description}
                        </p>
                    </div>

                    {/* Decorative pill */}
                    <div
                        className={`mt-8 h-1.5 rounded-full transition-all duration-500 w-12 md:opacity-50 group-hover:w-24 group-hover:opacity-100 ${styles.accent}`}
                    />
                </motion.div>
            </motion.div>
        </div>

    );
};

// --------------------
// About Section
// --------------------
const About = () => {
    const containerRef = useRef<HTMLDivElement | null>(null);

    return (
        <section
            id="about"
            className="pt-20 bg-[var(--background)] text-[var(--foreground)]">
            <div className="w-full flex flex-col items-center justify-center">
                {/* Header */}
                <div>
                    <h2 className="text-4xl font-bold text-[var(--foreground)] leading-[0.9] text-center capitalize">
                        Built for those
                        <br />
                        <span className="text-[var(--foreground)]/50">who dare to lead</span>
                    </h2>
                </div>

                {/* Grid */}
                <div ref={containerRef} className="w-[90%] grid grid-col-1 md:grid-cols-3 gap-6 place-items-center mt-6">
                    {aboutItems.map((item) => (
                        <AboutCard key={item.id} item={item} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default About;
