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
            <div className="container mx-auto px-4 md:px-6 h-16 flex items-center justify-between max-w-7xl">
                {/* Logo */}
                <Link href="/" className="flex flex-col items-center leading-none">
                    <Image
                        src="/footer logo.png"
                        alt="Karan Tiwari Logo"
                        width={120}
                        height={40}
                        className="h-10 w-auto object-contain"
                    />
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    <Link href="/" className="text-sm font-medium hover:text-[#7e22ce] transition-colors">
                        Home
                    </Link>
                </nav>

                {/* CTA Button */}
                <div className="hidden md:block">
                    <Link href="#contact">
                        <Button>Hire Me</Button>
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden p-2 text-gray-600"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Nav */}
            {isOpen && (
                <div className="md:hidden absolute top-16 left-0 w-full bg-white border-b border-gray-100 p-4 flex flex-col gap-4 shadow-lg">
                    <Link
                        href="/"
                        className="text-sm font-medium hover:text-[#7e22ce]"
                        onClick={() => setIsOpen(false)}
                    >
                        Home
                    </Link>
                    <Link href="#contact" onClick={() => setIsOpen(false)}>
                        <Button className="w-full">Hire Me</Button>
                    </Link>
                </div>
            )}
        </header>
    );
}
