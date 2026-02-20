"use client";

import { motion, useInView } from "motion/react";
import { useRef, useState } from "react";
import { FiSend, FiMail, FiUser, FiMessageSquare } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa6";
import { SiGooglemeet } from "react-icons/si";
import { z } from "zod";

const contactSchema = z.object({
    name: z.string().min(1, "Name is required").min(2, "Name must be at least 2 characters"),
    email: z.string().min(1, "Email is required").email("Please enter a valid email"),
    message: z.string().min(1, "Message is required").min(100, "Message must be at least 100 characters"),
});

const Contact = () => {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-50px" });
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [errors, setErrors]: any = useState({});

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        if (errors[name]) setErrors({ ...errors, [name]: undefined });
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();
        const result = contactSchema.safeParse(formData);
        if (!result.success) {
            const fieldErrors = result.error.flatten().fieldErrors;
            setErrors({
                name: fieldErrors.name?.[0],
                email: fieldErrors.email?.[0],
                message: fieldErrors.message?.[0],
            });
            return;
        }
        setErrors({});
        console.log("Form submitted:", formData);
    };

    return (
        <section id="contact" className="w-full pt-20 bg-[var(--background)] text-[var(--foreground)]">
            <div ref={sectionRef} className="flex flex-col items-center">
                {/* Header */}
                <motion.div
                    className="flex flex-col items-center gap-2"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <span className="text-[#FF007F] text-xs sm:text-sm font-medium uppercase tracking-widest">
                        Get In Touch
                    </span>
                    <h2 className="text-4xl capitalize font-bold leading-tight text-center">
                        <span>Let's </span>
                        <span className="text-gradient italic pr-2 sm:pr-3">build</span>
                        <span> something</span>
                        <br className="hidden sm:block" />
                        <span> amazing</span>
                    </h2>
                </motion.div>

                {/* Content */}
                <div className="w-full grid md:grid-cols-3 place-items-center mt-6">
                    {/* Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="w-[90%] flex justify-center md:col-span-2"
                    >
                        <form
                            onSubmit={handleSubmit}
                            className="w-full flex flex-col gap-8 p-6 rounded-2xl bg-[var(--card)]/60 backdrop-blur-xl border border-[var(--border)] shadow-md"
                        >
                            {/* Name + Email */}
                            <div className="flex gap-6">
                                {/* Name */}
                                <div className="w-1/2 relative group">
                                    <FiUser className="absolute left-0 top-4 text-[var(--foreground)]/30 group-focus-within:text-[#FF007F] transition-colors w-5 h-5" />
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="Your name"
                                        className={`w-full pl-8 py-3 bg-transparent border-b outline-none transition-colors placeholder:text-[var(--foreground)]/30 ${errors.name ? "border-red-500" : "border-[var(--border)] focus:border-[#FF007F]"
                                            }`}
                                    />
                                    {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                                </div>

                                {/* Email */}
                                <div className="w-1/2 relative group">
                                    <FiMail className="absolute left-0 top-4 text-[var(--foreground)]/30 group-focus-within:text-[#FF007F] transition-colors w-5 h-5" />
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="your@email.com"
                                        className={`w-full pl-8 py-3 bg-transparent border-b outline-none transition-colors placeholder:text-[var(--foreground)]/30 ${errors.email ? "border-red-500" : "border-[var(--border)] focus:border-[#FF007F]"
                                            }`}
                                    />
                                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                                </div>
                            </div>

                            {/* Message */}
                            <div className="relative group">
                                <FiMessageSquare className="absolute left-0 top-4 text-[var(--foreground)]/30 group-focus-within:text-[#FF007F] transition-colors w-5 h-5" />
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows={5}
                                    placeholder="Tell us about your project... (minimum 100 characters)"
                                    className={`w-full pl-8 py-3 bg-transparent border-b outline-none resize-none transition-colors placeholder:text-[var(--foreground)]/30 ${errors.message ? "border-red-500" : "border-[var(--border)] focus:border-[#FF007F]"
                                        }`}
                                />
                                <div className="flex justify-between items-center mt-2">
                                    {errors.message ? (
                                        <p className="text-red-500 text-sm">{errors.message}</p>
                                    ) : (
                                        <span />
                                    )}
                                    <span
                                        className={`text-sm ${formData.message.length >= 100 ? "text-green-500" : "text-[var(--foreground)]/50"
                                            }`}
                                    >
                                        {formData.message.length}/100
                                    </span>
                                </div>
                            </div>

                            {/* Submit */}
                            <div className="flex justify-center">
                                <motion.button
                                    type="submit"
                                    className="flex items-center gap-2 px-6 py-2.5 rounded-full bg-linear-to-r from-[#FF007F] to-[#E1006A] text-white shadow-lg shadow-[#FF007F]/20"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                                >
                                    <span>Send Message</span>
                                    <FiSend className="w-4 h-4" />
                                </motion.button>
                            </div>
                        </form>
                    </motion.div>

                    {/* Session Buttons */}
                    <motion.div
                        className="w-full h-full flex sm:justify-center md:justify-start items-center flex-col gap-2 md:gap-6 mt-12 md:mt-0"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.7 }}
                    >
                        <div>
                            <h1 className="capitalize text-2xl ">or book a sassion</h1>
                        </div>
                        <div className="w-fit flex flex-col gap-4">
                            <motion.a
                                href="#"
                                className=" bg-gradient-to-r from-[#FF007F] to-[#E1006A] rounded-full flex items-center gap-2 px-6 py-2 text-white"
                            >
                                <SiGooglemeet />
                                <span className="capitalize">Book A Meeting</span>
                            </motion.a>

                            <motion.a
                                href="#"
                                className="rounded-full flex items-center gap-2 px-6 py-2 border border-[var(--border)] bg-[var(--card)] text-[var(--foreground)]"
                            >
                                <FaWhatsapp />
                                <span className="capitalize">Contact on WhatsApp</span>
                            </motion.a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
