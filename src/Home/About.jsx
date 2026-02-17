/* eslint-disable no-unused-vars */
import React from 'react'
import { motion } from 'framer-motion'

const About = () => {

    const imageLeft = {
        hidden: {
            opacity: 0,
            x: -30,
            scale: 1.02
        },
        visible: {
            opacity: 1,
            x: 0,
            scale: 1,
            transition: {
                duration: 1.8,
                ease: "easeInOut"
            }
        }
    };

    const contentRight = {
        hidden: {
            opacity: 0,
            x: 30
        },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 1.8,
                ease: "easeInOut",
                delay: 0.2
            }
        }
    };

    return (
        <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            className="py-28"
        >
            <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

                {/* Image */}
                <motion.img
                    variants={imageLeft}
                    src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
                    alt="team"
                    className="rounded-xl shadow-lg"
                />

                {/* Content */}
                <motion.div variants={contentRight}>
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
                </motion.div>

            </div>
        </motion.section>
    )
}

export default About
