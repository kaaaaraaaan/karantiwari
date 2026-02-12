'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-gray-100">
            <div className="container mx-auto px-4 md:px-6 h-16 flex items-center max-w-7xl">
                {/* Desktop Layout: Nav Left - Logo Center - CTA Right */}
                <div className="hidden md:grid md:grid-cols-3 w-full items-center">
                    {/* Left: Navigation */}
                    <nav className="flex items-center gap-6">
                        <Link href="#about" className="text-sm font-medium text-black hover:text-primary transition-colors">
                            About
                        </Link>
                        <Link href="#work" className="text-sm font-medium text-black hover:text-primary transition-colors">
                            Work
                        </Link>
                        <Link href="#skills" className="text-sm font-medium text-black hover:text-primary transition-colors">
                            Skills
                        </Link>
                    </nav>

                    {/* Center: Logo */}
                    <Link href="/" className="flex justify-center">
                        <Image
                            src="/footer logo.png"
                            alt="Karan Tiwari Logo"
                            width={120}
                            height={40}
                            className="h-10 w-auto object-contain"
                        />
                    </Link>

                    {/* Right: CTA Button */}
                    <div className="flex justify-end">
                        <Link href="#contact">
                            <Button>Hire Me</Button>
                        </Link>
                    </div>
                </div>

                {/* Mobile Layout: Logo Left - Menu Right */}
                <div className="md:hidden flex items-center justify-between w-full">
                    <Link href="/" className="flex items-center">
                        <Image
                            src="/footer logo.png"
                            alt="Karan Tiwari Logo"
                            width={120}
                            height={40}
                            className="h-10 w-auto object-contain"
                        />
                    </Link>

                    <button
                        className="p-2 text-gray-600"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Nav */}
            {isOpen && (
                <div className="md:hidden absolute top-16 left-0 w-full bg-white border-b border-gray-100 p-4 flex flex-col gap-4 shadow-lg">
                    <Link
                        href="#about"
                        className="text-sm font-medium text-black hover:text-primary"
                        onClick={() => setIsOpen(false)}
                    >
                        About
                    </Link>
                    <Link
                        href="#work"
                        className="text-sm font-medium text-black hover:text-primary"
                        onClick={() => setIsOpen(false)}
                    >
                        Work
                    </Link>
                    <Link
                        href="#skills"
                        className="text-sm font-medium text-black hover:text-primary"
                        onClick={() => setIsOpen(false)}
                    >
                        Skills
                    </Link>
                    <Link href="#contact" onClick={() => setIsOpen(false)}>
                        <Button className="w-full">Hire Me</Button>
                    </Link>
                </div>
            )}
        </header>
    );
}
