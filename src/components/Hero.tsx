'use client';

import Image from 'next/image';
import { Linkedin, Instagram, Facebook } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { motion } from 'framer-motion';

export function Hero() {
    return (
        <section className="relative py-8 md:py-16 overflow-hidden bg-bg-hero">
            <div className="container mx-auto px-4 md:px-6 max-w-7xl">
                <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                    <div className="flex-1 flex flex-col md:flex-row items-center md:items-start gap-8">
                        {/* Social Links (Left Sidebar style feature) */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="hidden md:flex flex-col gap-6 pt-4 text-muted"
                        >
                            <a href="https://www.linkedin.com/in/karan-tiwari-2019/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors"><Linkedin size={24} /></a>
                            <a href="https://www.instagram.com/kaaaaraaaan/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors"><Instagram size={24} /></a>
                            <a href="https://www.facebook.com/kaaaaraaaan" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors"><Facebook size={24} /></a>
                        </motion.div>

                        {/* Text Content */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="flex-1 text-center md:text-left space-y-6"
                        >
                            <h1 className="font-serif text-4xl md:text-6xl font-bold text-heading">
                                Er. Karan Tiwari
                            </h1>
                            <p className="text-body text-lg leading-relaxed max-w-xl mx-auto md:mx-0">
                                I am a web designer and SEO specialist with a passion for helping businesses and
                                individuals achieve their online goals. With my skills and expertise, I can help you
                                create a stunning and effective website that will attract visitors and drive conversions.
                            </p>

                            {/* Mobile Socials */}
                            <div className="flex md:hidden justify-center gap-6 text-muted py-2">
                                <a href="https://www.linkedin.com/in/karan-tiwari-2019/" target="_blank" rel="noopener noreferrer"><Linkedin size={24} /></a>
                                <a href="https://www.instagram.com/kaaaaraaaan/" target="_blank" rel="noopener noreferrer"><Instagram size={24} /></a>
                                <a href="https://www.facebook.com/kaaaaraaaan" target="_blank" rel="noopener noreferrer"><Facebook size={24} /></a>
                            </div>

                            <div className="pt-4">
                                <a href="#contact">
                                    <Button size="lg">Hire Me</Button>
                                </a>
                            </div>
                        </motion.div>
                    </div>

                    {/* Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 }}
                        className="flex-1 flex justify-center md:justify-end"
                    >
                        <div className="relative">
                            {/* Image Placeholder - User can replace this */}
                            <div className="w-[250px] h-auto md:w-[280px] md:h-auto relative">
                                <Image
                                    src="/hero-image.png"
                                    alt="Karan Tiwari"
                                    width={500}
                                    height={600}
                                    className="object-contain w-full h-auto grayscale hover:grayscale-0 transition-all duration-500"
                                    priority
                                />
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
