'use client';

import { Section } from '@/components/Section';
import { Quote } from 'lucide-react';
import { motion } from 'framer-motion';

const testimonials = [
    {
        text: "Karan Tiwari's expertise in web design made our collaboration effortless. His attention to detail and creative flair brought our website vision to fruition, exceeding our expectations.",
        client: "Ram Neupane ( Keanu Sourcing )",
    },
    {
        text: "I wholeheartedly recommend Karan Tiwari for web design projects. His professionalism and innovative approach transformed our online presence, garnering positive feedback from our audience.",
        client: "Asif Ansari ( Easy Care )",
    },
    {
        text: "We are thrilled with the website Karan Tiwari designed for us. His understanding of our brand identity and user experience resulted in a website that truly reflects our values.",
        client: "Hari Neupane ( KIES Sourcing )",
    },
];

export function Testimonials() {
    return (
        <Section id="testimonials" className="bg-surface-alt">
            <div className="text-center mb-16">
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-heading">What My Clients Say</h2>
                <div className="section-heading-line"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {testimonials.map((testimonial, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-center text-center group"
                    >
                        {/* Quote Icon */}
                        <div className="mb-6 text-primary">
                            <span className="text-6xl font-serif leading-none opacity-50">“</span>
                        </div>

                        <div className="w-12 h-1 bg-primary mb-6 rounded-full group-hover:w-20 transition-all duration-300"></div>

                        <p className="text-body leading-relaxed mb-8 italic">
                            {testimonial.text}
                        </p>

                        <div className="w-8 h-1 bg-primary mb-6 rounded-full"></div>

                        <h4 className="font-medium text-gray-800">
                            {testimonial.client}
                        </h4>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
}
