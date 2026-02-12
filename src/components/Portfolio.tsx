'use client';

import { Section } from '@/components/Section';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
    {
        title: 'Easy Care Health Service',
        category: 'Web Design / Development',
        image: '/portfolio/easycarehealth.avif',
        description: 'A dedicated platform for hemorrhoid relief services.',
        url: 'https://easycarehealthservice.com/',
    },
    {
        title: 'Kies Sourcing',
        category: 'B2B Website',
        image: '/portfolio/Kiessourcing.avif',
        description: 'The ultimate sourcing solution for business procurement.',
        url: 'https://kiessourcing.com/',
    },
    {
        title: 'Keanu Sourcing',
        category: 'Logistics',
        image: '/portfolio/Keanu sourcing.avif',
        description: 'One stop logistic and warehousing services provider.',
        url: 'https://keanusourcing.com/',
    }
];

export function Portfolio() {
    return (
        <Section id="portfolio" className="bg-surface-alt">
            <div className="text-center mb-16">
                <h2 className="font-serif text-3xl md:text-4xl font-bold">My Portfolio</h2>
                <p className="text-muted mt-2">Discover my portfolio and see what I've created!</p>
                <div className="section-heading-line"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="group relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
                    >
                        {/* Image Container */}
                        <div className="relative h-64 w-full overflow-hidden">
                            <Image
                                src={project.image}
                                alt={project.title}
                                width={600}
                                height={400}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            {/* Overlay */}
                            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                                <a href={project.url} target="_blank" rel="noopener noreferrer" className="p-2 bg-white rounded-full text-primary hover:bg-gray-100 transition-colors">
                                    <ExternalLink size={20} />
                                </a>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="p-6">
                            <span className="text-xs font-bold text-primary uppercase tracking-wider mb-2 block">
                                {project.category}
                            </span>
                            <h3 className="font-serif text-xl font-bold text-heading mb-2">
                                {project.title}
                            </h3>
                            <p className="text-body text-sm">
                                {project.description}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>

            <div className="mt-12 text-center">
                <a href="https://github.com/kaaaaraaaan" target="_blank" className="font-medium text-primary hover:underline flex items-center justify-center gap-2">
                    View More on GitHub <ExternalLink size={16} />
                </a>
            </div>
        </Section>
    );
}
