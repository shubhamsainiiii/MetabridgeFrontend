/* eslint-disable no-unused-vars */
import React from 'react'
import { motion } from 'framer-motion'
import { FaCheckCircle } from "react-icons/fa";

const Features = () => {

    const features = [
        "Experienced Developers",
        "Agile Development Process",
        "On-Time Delivery",
        "24/7 Technical Support",
        "Affordable Pricing",
        "Client-Centric Approach"
    ];

    const fadeUp = {
        hidden: { opacity: 0, y: 25 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 1.2,
                ease: "easeInOut"
            }
        }
    };

    const fadeLeft = {
        hidden: { opacity: 0, x: -25 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 1.2,
                ease: "easeInOut"
            }
        }
    };

    const staggerContainer = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.15
            }
        }
    };

    return (
        <motion.section
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            className="bg-indigo-50 py-24"
        >
            <div className="max-w-6xl mx-auto px-6 text-center">

                {/* Heading Animation */}
                <motion.h2
                    variants={fadeUp}
                    className="text-3xl md:text-4xl text-indigo-900 font-bold mb-14"
                >
                    Why Choose Us
                </motion.h2>

                <div className="grid md:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            variants={fadeLeft}
                            whileHover={{ scale: 1.03 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="flex items-center gap-4 bg-indigo-800 p-6 rounded-lg"
                        >
                            <FaCheckCircle className="text-green-400 text-2xl" />
                            <span className="text-lg text-white">{feature}</span>
                        </motion.div>
                    ))}
                </div>

            </div>
        </motion.section>
    )
}

export default Features
