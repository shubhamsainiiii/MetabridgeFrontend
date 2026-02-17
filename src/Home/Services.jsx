/* eslint-disable no-unused-vars */


import React from 'react'
import { motion } from 'framer-motion'
import { FaCode, FaMobileAlt, FaCloud, FaShieldAlt } from "react-icons/fa";

const Services = () => {

    const smoothEase = [0.22, 1, 0.36, 1];

    // Smooth Fade Up
    const fadeUp = {
        hidden: {
            opacity: 0,
            y: 35
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 1.2,
                ease: smoothEase
            }
        }
    };

    // Stagger effect
    const staggerContainer = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.18
            }
        }
    };

    const services = [
        { icon: <FaCode />, title: "Web Development", desc: "Modern, scalable React & MERN applications." },
        { icon: <FaMobileAlt />, title: "App Development", desc: "High-performance Android & iOS apps." },
        { icon: <FaCloud />, title: "Cloud Solutions", desc: "Secure & scalable cloud infrastructure." },
        { icon: <FaShieldAlt />, title: "Cyber Security", desc: "Advanced protection & data security." },
    ];

    return (
        <motion.section
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            className="py-24 bg-gray-50"
        >
            <div className="max-w-7xl mx-auto px-6 text-center">

                {/* Heading Animation */}
                <motion.h2
                    variants={fadeUp}
                    className="text-3xl md:text-4xl font-bold mb-16"
                >
                    Our Services
                </motion.h2>

                <div className="grid md:grid-cols-4 gap-10">
                    {services.map((item, index) => (
                        <motion.div
                            key={index}
                            variants={fadeUp}
                            whileHover={{
                                scale: 1.05,
                                y: -6
                            }}
                            transition={{
                                duration: 0.4,
                                ease: smoothEase
                            }}
                            className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl"
                        >
                            <div className="text-4xl text-indigo-600 mb-4 flex justify-center">
                                {item.icon}
                            </div>

                            <h3 className="font-semibold text-xl mb-2">
                                {item.title}
                            </h3>

                            <p className="text-gray-500">
                                {item.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>

            </div>
        </motion.section>
    )
}

export default Services
