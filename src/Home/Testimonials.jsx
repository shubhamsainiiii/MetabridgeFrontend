/* eslint-disable no-unused-vars */
import React from 'react'
import { motion } from 'framer-motion'

const Testimonials = () => {

    const reviews = [
        {
            name: "Amit Sharma",
            text: "Excellent development team! Delivered our project before deadline."
        },
        {
            name: "Neha Verma",
            text: "Professional service and great communication throughout."
        }
    ];

    const fadeUp = {
        hidden: {
            opacity: 0,
            y: 40
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 1.3,
                ease: "easeInOut"
            }
        }
    };

    const staggerContainer = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    return (
        <motion.section
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            className="py-24 bg-gray-50"
        >
            <div className="max-w-5xl mx-auto px-6 text-center">

                {/* Heading Animation */}
                <motion.h2
                    variants={fadeUp}
                    className="text-3xl md:text-4xl font-bold mb-14"
                >
                    Client Testimonials
                </motion.h2>

                <div className="grid md:grid-cols-2 gap-8">
                    {reviews.map((review, index) => (
                        <motion.div
                            key={index}
                            variants={fadeUp}
                            whileHover={{ scale: 1.03 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="bg-white p-8 rounded-xl shadow-lg"
                        >
                            <p className="italic text-gray-600">
                                "{review.text}"
                            </p>

                            <h4 className="mt-4 font-semibold text-indigo-600">
                                {review.name}
                            </h4>
                        </motion.div>
                    ))}
                </div>

            </div>
        </motion.section>
    )
}

export default Testimonials
