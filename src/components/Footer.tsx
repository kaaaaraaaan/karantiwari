import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export function Footer() {
    return (
        <footer className="bg-surface-dark text-white pt-16 pb-8">
            <div className="container mx-auto px-4 md:px-6 max-w-7xl">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4 mb-16">

                    {/* Left: Social Icons */}
                    <div className="flex items-center gap-6 order-2 md:order-1">
                        <a href="https://www.facebook.com/kaaaaraaaan" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors"><Facebook size={20} /></a>
                        <a href="https://x.com/KrnTiwari" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors"><Twitter size={20} /></a>
                        <a href="https://www.instagram.com/kaaaaraaaan/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors"><Instagram size={20} /></a>
                        <a href="https://www.linkedin.com/in/karan-tiwari-2019/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors"><Linkedin size={20} /></a>
                    </div>

                    {/* Center: Logo */}
                    <div className="order-1 md:order-2">
                        <Link href="/">
                            <div className="relative w-48 h-24 md:w-64 md:h-32">
                                <Image
                                    src="/logo-dark.png"
                                    alt="Karan Tiwari Logo"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        </Link>
                    </div>

                    {/* Right: Email */}
                    <div className="order-3 md:order-3">
                        <a href="mailto:tiwari.krn@gmail.com" className="font-serif font-bold text-lg md:text-xl hover:text-primary transition-colors">
                            tiwari.krn@gmail.com
                        </a>
                    </div>
                </div>

                {/* Bottom: Copyright */}
                <div className="text-center pt-8 border-t border-gray-800">
                    <p className="text-gray-400 text-sm">Copyright © {new Date().getFullYear()} Karan Tiwari</p>
                </div>
            </div>
        </footer>
    );
}
