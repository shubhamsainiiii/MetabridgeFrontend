/* eslint-disable no-unused-vars */
import React from 'react'
import { motion } from 'framer-motion'
import { Link } from "react-router-dom";

const ContactCTA = () => {

    const fadeUp = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 1.2,
                ease: "easeInOut"
            }
        }
    };

    const fadeUpDelay = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 1.2,
                ease: "easeInOut",
                delay: 0.2
            }
        }
    };

    const buttonAnim = {
        hidden: { opacity: 0, y: 30, scale: 0.95 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 1.2,
                ease: "easeInOut",
                delay: 0.4
            }
        }
    };

    return (
        <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            className="bg-indigo-700 text-white py-20 text-center"
        >
            <div className="max-w-4xl mx-auto px-6">

                <motion.h2
                    variants={fadeUp}
                    className="text-3xl md:text-4xl font-bold mb-6"
                >
                    Ready to Start Your Project?
                </motion.h2>

                <motion.p
                    variants={fadeUpDelay}
                    className="mb-8 text-gray-200"
                >
                    Let’s build something amazing together. Contact us today.
                </motion.p>

                <motion.div variants={buttonAnim}>
                    <Link
                        to="/contact"
                        className="bg-white text-indigo-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-200 transition"
                    >
                        Contact Us
                    </Link>
                </motion.div>

            </div>
        </motion.section>
    )
}

export default ContactCTA
