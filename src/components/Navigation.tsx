"use client"

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { FiMenu, FiX } from "react-icons/fi";
import { navLinks } from "../constants";

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
            className="relative px-6 py-2 text-sm font-medium text-white/70 hover:text-white transition-colors duration-300 cursor-pointer"
        >
            {children}
            <motion.span
                className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] bg-linear-to-r from-[#FF007F] to-[#E1006A] rounded-full"
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
                className={`w-full h-20 sticky top-0 z-100 flex justify-center items-center
                        ${isScrolled ? 'bg-white/8 backdrop-blur-[24px] backdrop-saturate-[180%] border border-white/10' : 'bg-transparent'}`}>
                <motion.div
                    whileHover={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    className="w-full flex justify-between items-center px-6"
                >
                    {/* Logo */}
                    <div>
                        <motion.div className="bg-gradient-to-r from-[#FF007F] to-[#E1006A] rounded-full px-4 py-1">
                            <span className="text-md text-white">SWS</span>
                        </motion.div>
                    </div>

                    {/* Desktop Nav Links */}
                    <div className="">
                        {navLinks.map((link) => (
                            <MagneticLink key={link.name} href={link.href}>
                                {link.name}
                            </MagneticLink>
                        ))}
                    </div>

                    {/* Desktop CTA Button */}
                    <div>
                        <motion.a
                            href="#contact"
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.3 }}
                            className="text-md text-[#FF007F] rounded-sm"
                        >
                            Let's Talk
                        </motion.a>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <div className="flex justify-center items-center md:hidden">
                        <motion.button
                            className="text-white"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            whileTap={{ scale: 0.9 }}
                        >
                            {isMobileMenuOpen ? <FiX size={20} /> : <FiMenu size={20} />}
                        </motion.button>
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
                        className="fixed inset-0 z-40 bg-black/90 backdrop-blur-lg"
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
                                    className="text-xl font-medium text-white hover:text-[#FF007F] transition-colors"
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
                                className="px-4 py-2 bg-[#fff] text-md text-[#FF007F] rounded-sm"
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
