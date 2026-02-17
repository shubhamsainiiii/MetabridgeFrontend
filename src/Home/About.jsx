import React from 'react'
import { fadeLeft, fadeRight } from '../Animations/variants';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section className="py-20">
            <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

                <motion.img
                    variants={fadeLeft}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
                    alt="team"
                    className="rounded-xl shadow-lg"
                />

                <div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        About Our Company
                    </h2>
                    <p className="text-gray-600 leading-relaxed mb-4">
                        We are a leading IT company delivering innovative digital solutions.
                        Our team specializes in web development, mobile apps, cloud
                        computing, and enterprise software.
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                        With a focus on quality, performance, and scalability, we help
                        businesses grow in the digital world.
                    </p>
                </div>

            </div>
        </section>
    )
}

export default About


