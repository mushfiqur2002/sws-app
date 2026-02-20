"use client";

import { motion, useInView } from "motion/react";
import { useRef, useState } from "react";
import { wordpressFeatures, customFeatures } from "../constants";

const Services = () => {
    const [activeService, setActiveService]: any = useState(null);
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-50px" });

    return (
        <section
            id="services"
            className="pt-20 bg-[var(--background)] text-[var(--foreground)] relative"
        >
            {/* Background Lighting Effect */}
            <motion.div
                className="absolute inset-0 pointer-events-none transition-all duration-700"
                animate={{
                    background:
                        activeService === "custom"
                            ? "radial-gradient(ellipse 80% 50% at 70% 50%, rgba(255,0,127,0.15) 0%, transparent 60%)"
                            : activeService === "wordpress"
                                ? "radial-gradient(ellipse 80% 50% at 30% 50%, rgba(59,130,246,0.1) 0%, transparent 60%)"
                                : "none",
                }}
            />

            <div ref={sectionRef} className="w-full">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <h1 className="text-4xl font-bold leading-[0.9] text-center capitalize text-[var(--foreground)]">
                        <span>Choose your </span>
                        <span className="text-gradient">path</span>
                    </h1>
                    <p className="text-center text-[var(--foreground)]/60 mt-2">
                        Two distinct approaches to web development. Both deliver exceptional
                        results.
                    </p>
                </motion.div>

                {/* Services Grid */}
                <div className="w-[90%] flex flex-wrap justify-center gap-4 mt-6 mx-auto">
                    {/* WordPress Card */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        onMouseEnter={() => setActiveService("wordpress")}
                        onMouseLeave={() => setActiveService(null)}
                        className="group relative sm:w-full md:w-[320px] h-[400px] rounded-xl overflow-hidden border border-blue-200 bg-[var(--card)]"
                    >
                        {/* Hover Glow */}
                        <div className="pointer-events-none absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-linear-to-br from-blue-500/15 to-transparent" />

                        {/* Content */}
                        <motion.div
                            className="relative z-10 h-full px-6 py-6 flex flex-col gap-6"
                            whileHover={{ y: -8 }}
                            transition={{ type: "spring", stiffness: 300, damping: 25 }}
                        >
                            {/* Badge */}
                            <div className="w-fit flex items-center px-4 py-1.5 gap-2 rounded-full bg-[var(--foreground)]/5 border border-[var(--foreground)]/10">
                                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                                <span className="text-xs font-thin text-[var(--foreground)]/70">
                                    Quick Launch
                                </span>
                            </div>

                            <div>
                                <h3 className="text-3xl font-bold text-[var(--foreground)]">
                                    WordPress
                                </h3>
                                <p className="text-xs text-[var(--foreground)]/60 pt-2">
                                    The world's most popular CMS. Perfect for businesses that need
                                    a professional website fast, with the flexibility to manage
                                    content independently.
                                </p>
                            </div>

                            <ul className="flex flex-col gap-4">
                                {wordpressFeatures.map((feature, index) => (
                                    <motion.li
                                        key={index}
                                        className="flex items-center gap-2"
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                                        transition={{ delay: 0.4 + index * 0.1 }}
                                    >
                                        <div className="w-6 h-6 bg-blue-500/20 flex items-center justify-center rounded-lg">
                                            <feature.icon className="w-3 h-3 text-blue-400" />
                                        </div>
                                        <span className="text-[12px] text-[var(--foreground)]/70">
                                            {feature.text}
                                        </span>
                                    </motion.li>
                                ))}
                            </ul>

                            <div className="flex items-baseline gap-2 mt-auto">
                                <span className="text-[14px] text-[var(--foreground)]/40">
                                    Starting from
                                </span>
                                <span className="text-xl font-bold text-[var(--foreground)]">
                                    $2,500
                                </span>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* custom */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        onMouseEnter={() => setActiveService("wordpress")}
                        onMouseLeave={() => setActiveService(null)}
                        className="group relative sm:w-full md:w-[320px] h-[400px] rounded-xl overflow-hidden border border-[#FF007F]/20 bg-[var(--card)]"
                    >
                        {/* Hover Glow */}
                        <div className="pointer-events-none absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-linear-to-br from-[#FF007F]/10 to-transparent" />

                        {/* Content */}
                        <motion.div
                            className="relative z-10 h-full px-6 py-6 flex flex-col gap-6"
                            whileHover={{ y: -8 }}
                            transition={{ type: "spring", stiffness: 300, damping: 25 }}
                        >
                            {/* Badge */}
                            <div className="w-fit flex items-center px-4 py-1.5 gap-2 rounded-full bg-[var(--foreground)]/5 border border-[var(--foreground)]/10">
                                <span className="w-1.5 h-1.5 bg-pink-500 rounded-full" />
                                <span className="text-xs font-thin text-[var(--foreground)]/70">
                                    Recommended
                                </span>
                            </div>

                            <div>
                                <h3 className="text-3xl font-bold text-[var(--foreground)]">
                                    Custom <span className="text-gradient">Engineering</span>
                                </h3>
                                <p className="text-xs text-[var(--foreground)]/60 pt-2">
                                    Hand-crafted solutions built with modern technologies. For
                                    businesses that demand exceptional performance and unlimited
                                    scalability.
                                </p>
                            </div>

                            <ul className="flex flex-col gap-4">
                                {customFeatures.map((feature, index) => (
                                    <motion.li
                                        key={index}
                                        className="flex items-center gap-2"
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                                        transition={{ delay: 0.4 + index * 0.1 }}
                                    >
                                        <div className="w-6 h-6 bg-pink-500/20 flex items-center justify-center rounded-lg">
                                            <feature.icon className="w-3 h-3 text-pink-400" />
                                        </div>
                                        <span className="text-[12px] text-[var(--foreground)]/70">
                                            {feature.text}
                                        </span>
                                    </motion.li>
                                ))}
                            </ul>

                            <div className="flex items-baseline gap-2 mt-auto">
                                <span className="text-[14px] text-[var(--foreground)]/40">
                                    Starting from
                                </span>
                                <span className="text-xl font-bold text-[var(--foreground)]">
                                    $2,500
                                </span>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Services;
