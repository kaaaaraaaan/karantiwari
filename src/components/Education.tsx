'use client';

import { Section } from '@/components/Section';
import { motion } from 'framer-motion';

const educationData = [
    {
        title: "Masters In Computer Science ( MCS )",
        year: "2025-Current",
        school: "Lincoln College",
        location: "Dhobidhara, Kathmandu, Nepal",
        status: "Currently Studying",
    },
    {
        title: "Bachelor's Degree In Computer Engineering",
        year: "2018-2023", // Adjusted guess
        school: "Himalaya College of Engineering",
        location: "Chyasal-9, Lalitpur 44700",
        status: "Graduated",
    },
    {
        title: "High School",
        year: "2013-2015",
        school: "New Horizon College",
        location: "Butwal 32907",
        status: "Graduated",
    },
    {
        title: "School Leaving Certificate",
        year: "2000-2013",
        school: "New Environment English Secondary School",
        location: "Tilottama 32903",
        status: "Graduated",
    },
];

export function Education() {
    return (
        <Section id="education">
            <div className="text-center mb-16">
                <h2 className="font-serif text-3xl md:text-4xl font-bold">My Education</h2>
                <p className="text-muted mt-2">Everything I learnt from here led me to this.</p>
                <div className="section-heading-line"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {educationData.map((edu, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="bg-surface p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-border-light flex flex-col items-start h-full"
                    >
                        <h3 className="font-serif text-lg font-bold text-heading mb-4 min-h-[56px] flex items-center">
                            {edu.title}
                        </h3>

                        <p className="text-primary font-medium mb-4">{edu.year}</p>

                        <div className="space-y-1 text-body text-sm flex-grow">
                            <p className="font-medium text-gray-800">{edu.school}</p>
                            <p>{edu.location}</p>
                        </div>

                        <div className="mt-6 pt-4 w-full border-t border-gray-50">
                            <span className={`inline-block text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider ${edu.status === 'Currently Studying' ? 'bg-blue-500' : 'bg-primary'
                                }`}>
                                {edu.status}
                            </span>
                        </div>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
}
