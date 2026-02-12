'use client';

import { motion } from 'framer-motion';
import { Section } from '@/components/Section';
import Image from 'next/image';

export function About() {
    return (
        <Section id="about" className="bg-white">
            <div className="text-center mb-16">
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-black">About Me</h2>
                <div className="section-heading-line"></div>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-12">
                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="flex-1 space-y-6"
                >
                    <h3 className="font-serif text-2xl font-bold text-heading">
                        Web Designer and SEO Specialist
                    </h3>
                    <div className="w-12 h-1 bg-primary rounded-full"></div> {/* Separator line */}

                    <div className="space-y-4 text-body leading-relaxed">
                        <p>
                            Hi, my name is Karan Tiwari and I am a web designer and SEO specialist.
                            I have been working in the industry for over 5 years and have had the
                            opportunity to work with a variety of clients, from small startups to
                            large corporations.
                        </p>
                        <p>
                            I am passionate about helping businesses succeed online and love the
                            challenge of creating beautiful, functional websites that are optimized
                            for search engines. When I'm not working, you can find me exploring the
                            latest web design trends or testing out new SEO strategies.
                        </p>
                        <p>
                            I am always looking for new opportunities to work with interesting
                            clients, so if you have a project in mind, please don't hesitate to
                            reach out! I would love to hear from you and see how I can help your
                            business grow.
                        </p>
                    </div>

                    <div className="pt-4">
                        <button className="bg-primary text-white px-8 py-3 rounded-md font-medium hover:bg-primary-hover transition-colors shadow-md">
                            Contact Me
                        </button>
                    </div>
                </motion.div>

                {/* Image Content */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="flex-1 relative"
                >
                    <div className="relative z-10 rounded-lg overflow-hidden shadow-xl">
                        <Image
                            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop"
                            alt="About Me Workspace"
                            width={600}
                            height={400}
                            className="w-full h-auto object-cover"
                        />
                    </div>
                    {/* Purple decorative background - simplified as absolute div */}
                    <div className="absolute top-4 -right-4 w-full h-full bg-primary-light -z-0 rounded-lg transform translate-x-2 translate-y-2 hidden md:block opacity-20"></div>
                    <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-primary -z-0 rounded-full opacity-10"></div>
                </motion.div>
            </div>
        </Section>
    );
}
