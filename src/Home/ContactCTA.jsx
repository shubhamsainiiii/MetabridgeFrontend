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
                duration: 1,
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
                duration: 1,
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
                duration: 1,
                ease: "easeInOut",
                delay: 0.4
            }
        }
    };

    return (
        <section className="bg-gradient-to-br from-indigo-900 via-indigo-800 to-indigo-900 py-10 flex justify-center">

            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.4 }}
                className="
                max-w-4xl w-full mx-6
                backdrop-blur-xl
                bg-white/10
                border border-white/20
                rounded-3xl
                px-10 py-10
                text-center
                shadow-2xl
                "
            >

                <motion.h2
                    variants={fadeUp}
                    className="text-3xl md:text-4xl font-bold mb-6 text-white"
                >
                    Ready to Start Your Project?
                </motion.h2>

                <motion.p
                    variants={fadeUpDelay}
                    className="mb-10 text-gray-200"
                >
                    Let’s build something amazing together. Contact us today.
                </motion.p>

                <motion.div
                    variants={buttonAnim}
                    className="flex flex-col sm:flex-row gap-4 justify-center"
                >
                    <Link
                        to="/contact"
                        className="
                        bg-white text-indigo-700 px-8 py-3 rounded-xl font-semibold
                        hover:bg-gray-200 transition-all duration-300 hover:-translate-y-1">
                        Contact Us
                    </Link>

                    <Link
                        to="/contact"
                        className="
                        border border-white text-white px-8 py-3 rounded-xl font-semibold
                        hover:bg-white hover:text-indigo-700 transition-all duration-300 hover:-translate-y-1">
                        Talk to Our Team
                    </Link>

                </motion.div>

            </motion.div>

        </section>
    )
}

export default ContactCTA;