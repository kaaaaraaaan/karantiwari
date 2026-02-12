'use client';

import { Section } from '@/components/Section';
import { Button } from '@/components/ui/Button';
import Image from 'next/image';
import { motion } from 'framer-motion';

const publications = [
    {
        title: "Website Security Best Practices",
        platform: "Livepositively",
        image: "/publications/livepositively.avif",
        link: "https://krntiwari.livepositively.com/website-security-best-practices"
    },
    {
        title: "Dividend Investing: A Lucrative Passive Income",
        platform: "Sharesansar",
        image: "/publications/Sharesansar.avif",
        link: "https://www.sharesansar.com/newsdetail/dividend-investing-a-lucrative-passive-income-2022-03-09"
    },
    {
        title: "Must Have Plugins for a WordPress Website",
        platform: "SEOBLOG",
        image: "/publications/SEOblog.avif",
        link: "https://www.seoblog.com/wordpress-website-plugins/"
    },
    {
        title: "Strikingly Review",
        platform: "USA Today",
        image: "/publications/USAtoday.avif",
        link: "https://www.usatoday.com/money/blueprint/business/website-builders/strikingly-review/"
    }
];

export function Publications() {
    return (
        <Section id="publications" className="bg-white">
            <div className="text-center mb-16">
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-heading">My Recent Publications</h2>
                <div className="section-heading-line"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {publications.map((pub, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="bg-surface rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group border border-border-light flex flex-col"
                    >
                        {/* Image */}
                        <div className="relative h-48 w-full overflow-hidden">
                            <Image
                                src={pub.image}
                                alt={pub.title}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                        </div>

                        {/* Content */}
                        <div className="p-6 flex flex-col flex-1 relative">
                            {/* Blue decorative line on left */}
                            <div className="absolute left-0 top-6 bottom-6 w-1 bg-primary"></div>

                            <h3 className="font-serif text-xl font-bold text-heading mb-4 pl-4">
                                {pub.title}
                            </h3>

                            <div className="pl-4 mb-6 text-muted text-sm flex-grow">
                                <p>Published On</p>
                                <p className="font-medium text-gray-800">{pub.platform}</p>
                            </div>

                            <div className="pl-4">
                                <a href={pub.link} target="_blank" rel="noopener noreferrer">
                                    <Button className="bg-primary hover:bg-primary-hover text-white border-none rounded-md px-6 py-2 h-auto text-sm w-full md:w-auto">
                                        Read The Article
                                    </Button>
                                </a>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
}
