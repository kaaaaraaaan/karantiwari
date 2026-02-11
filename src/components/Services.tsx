'use client';

import { Section } from '@/components/Section';
import { Monitor, Megaphone, Search } from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
    {
        title: 'Web Development',
        description: 'I transform your vision into a stunning online reality. My web design service focuses on creating user-friendly, responsive, and visually captivating websites that leave a lasting impression.',
        icon: Monitor,
        iconColor: 'text-[#ef4444]', // Red-ish pink
        bgColor: 'bg-red-50',
    },
    {
        title: 'Digital Marketing',
        description: 'I elevate your brand\'s online presence with my digital marketing expertise. I craft tailored strategies that harness the power of the digital landscape, from social media campaigns to content marketing.',
        icon: Megaphone,
        iconColor: 'text-[#f59e0b]', // Amber
        bgColor: 'bg-amber-50',
    },
    {
        title: 'Search Engine Optimization',
        description: 'I boost your website\'s visibility and drive organic traffic with my SEO services. I employ proven strategies, including keyword optimization, on-page and off-page techniques, to improve your rankings.',
        icon: Search,
        iconColor: 'text-[#10b981]', // Emerald/Green
        bgColor: 'bg-emerald-50',
    },
];

export function Services() {
    return (
        <Section id="services" className="bg-gray-50">
            <div className="text-center mb-16">
                <h2 className="font-serif text-3xl md:text-4xl font-bold">What Services I'm Providing</h2>
                <div className="w-16 h-1 bg-[#7e22ce] mx-auto mt-4 rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {services.map((service, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center group"
                    >
                        <div className={`w-16 h-16 mx-auto ${service.bgColor} rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                            <service.icon className={`w-8 h-8 ${service.iconColor}`} />
                        </div>

                        <h3 className="font-serif text-xl font-bold mb-4 text-[#0f172a]">{service.title}</h3>
                        <p className="text-gray-600 leading-relaxed text-sm">
                            {service.description}
                        </p>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
}
