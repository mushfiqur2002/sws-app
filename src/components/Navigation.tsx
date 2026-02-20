"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { FiMenu, FiX } from "react-icons/fi";
import { navLinks } from "../constants";
import { ModeToggle } from "@/components/toggle-button";

const MagneticLink = ({ children, href, onClick }: any) => {
    const ref: any = useRef(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e: any) => {
        const { clientX, clientY } = e;
        const { left, top, width, height } = ref.current.getBoundingClientRect();
        const x = (clientX - (left + width / 2)) * 0.3;
        const y = (clientY - (top + height / 2)) * 0.3;
        setPosition({ x, y });
    };

    const handleMouseLeave = () => {
        setPosition({ x: 0, y: 0 });
    };

    return (
        <motion.a
            ref={ref}
            href={href}
            onClick={onClick}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            animate={{ x: position.x, y: position.y }}
            transition={{ type: "spring", stiffness: 150, damping: 15 }}
            className="relative px-6 py-2 text-sm font-medium text-[var(--foreground)]/70 hover:text-[var(--foreground)] transition-colors duration-300 cursor-pointer"
        >
            {children}
            <motion.span
                className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] bg-gradient-to-r from-[var(--color-pink-neon)] to-[var(--color-pink-hot)] rounded-full"
                initial={{ width: 0, opacity: 0 }}
                whileHover={{ width: "60%", opacity: 1 }}
                transition={{ duration: 0.3 }}
            />
        </motion.a>
    );
};

const Navigation = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const closeMobileMenu = () => setIsMobileMenuOpen(false);

    return (
        <>
            <motion.nav
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className={`w-full h-20 sticky top-0 z-50 flex justify-center items-center
          ${isScrolled
                        ? "bg-[var(--card)]/80 backdrop-blur-[24px] backdrop-saturate-[180%] border border-[var(--border)]"
                        : "bg-[var(--background)]"
                    }`}
            >
                <motion.div
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    className="w-full flex justify-between items-center px-6"
                >
                    {/* Logo */}
                    <div>
                        <motion.div className="bg-gradient-to-r from-[var(--color-pink-neon)] to-[var(--color-pink-hot)] rounded-full px-6 py-2">
                            <span className="text-md text-white font-semibold">SWS</span>
                        </motion.div>
                    </div>

                    {/* Desktop Nav Links */}
                    <div className="flex-md-hidden items-center">
                        {navLinks.map((link) => (
                            <MagneticLink key={link.name} href={link.href}>
                                {link.name}
                            </MagneticLink>
                        ))}
                    </div>

                    {/* Right Side Actions */}
                    <div className="flex items-center gap-3">
                        {/* switch */}
                        <ModeToggle className="px-4 py-1.5 border-1 border-[var(--border)] rounded-full text-sm bg-[var(--bg-background)] cursor-pointer"/>

                        {/* Mobile Menu Toggle */}
                        <div className="hidden-md-flex justify-center items-center">
                            <motion.button
                                className="text-[var(--foreground)]"
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                whileTap={{ scale: 0.9 }}
                            >
                                {isMobileMenuOpen ? <FiX size={22} /> : <FiMenu size={22} />}
                            </motion.button>
                        </div>
                    </div>
                </motion.div>
            </motion.nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-40 bg-[var(--background)]/95 backdrop-blur-lg"
                    >
                        <motion.div
                            initial={{ y: -20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: -20, opacity: 0 }}
                            transition={{ delay: 0.1 }}
                            className="flex flex-col items-center justify-center h-full gap-6"
                        >
                            {navLinks.map((link, index) => (
                                <motion.a
                                    key={link.name}
                                    href={link.href}
                                    onClick={closeMobileMenu}
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.1 + index * 0.05 }}
                                    className="text-xl font-medium text-[var(--foreground)] hover:text-[var(--color-pink-neon)] transition-colors"
                                >
                                    {link.name}
                                </motion.a>
                            ))}

                            <motion.a
                                href="#contact"
                                onClick={closeMobileMenu}
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.3 }}
                                className="px-5 py-2.5 bg-gradient-to-r from-[var(--color-pink-neon)] to-[var(--color-pink-hot)] text-white rounded-full"
                            >
                                Let's Talk
                            </motion.a>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navigation;
