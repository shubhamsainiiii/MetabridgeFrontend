/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
import { FaLightbulb, FaUsers, FaLayerGroup } from "react-icons/fa";
import { FaClipboardList, FaPencilRuler, FaCode, FaRocket } from "react-icons/fa";
import {
    FaHotel,
    FaUtensils,
    FaCar,
    FaBuilding,
    FaHospital,
    FaHeadset,
    FaUniversity,
    FaBus,
    FaBook,
    FaCogs
} from "react-icons/fa";


const AboutPage = () => {
    const fadeUp = {
        hidden: { opacity: 0, y: 40 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 1.2, ease: "easeInOut" },
        },
    };

    const fadeLeft = {
        hidden: { opacity: 0, x: -50 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 1.2, ease: "easeInOut" },
        },
    };

    const fadeRight = {
        hidden: { opacity: 0, x: 50 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 1.2, ease: "easeInOut" },
        },
    };

    return (
        <div className="text-gray-800 overflow-hidden bg-indigo-50 ">

            {/* 🔥 Enhanced Split Hero Section */}
            <section className="py-8 bg-linear-to-r from-indigo-900 via-indigo-800 to-indigo-900 text-white">
                <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

                    <motion.div
                        variants={fadeLeft}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false }}
                    >

                        {/* Small Badge */}
                        <span className="inline-block bg-white/10 backdrop-blur-md px-4 py-1 rounded-full text-sm text-indigo-200 mb-6">
                            Your Trusted IT Solutions Partner
                        </span>

                        <h1 className="text-4xl font-bold leading-tight mb-6">
                            Crafting Digital Excellence
                        </h1>

                        <p className="text-lg text-indigo-200 mb-6">
                            We transform ideas into high-performing digital products with
                            innovation, technology, and strategy.
                        </p>

                        {/* Extra Supporting Line */}
                        <p className="text-indigo-300 text-sm md:text-base mb-10 max-w-xl">
                            From startups to enterprises, we help businesses scale through
                            modern web applications, cloud infrastructure, and secure
                            enterprise-grade solutions.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 mb-10">
                            <button className="bg-white text-indigo-900 px-6 py-3 rounded-xl font-semibold hover:bg-gray-200 transition-all duration-500">
                                Get Started
                            </button>

                            <button className="border border-white px-6 py-3 rounded-xl font-semibold hover:bg-white hover:text-indigo-900 transition-all duration-500">
                                View Our Work
                            </button>
                        </div>

                        {/* Floating Stats */}
                        <div className="flex flex-wrap gap-6">
                            <div className="bg-white/10 backdrop-blur-lg px-6 py-4 rounded-xl">
                                <h3 className="text-2xl font-bold">50+</h3>
                                <p className="text-indigo-200 text-sm">Projects</p>
                            </div>

                            <div className="bg-white/10 backdrop-blur-lg px-6 py-4 rounded-xl">
                                <h3 className="text-2xl font-bold">30+</h3>
                                <p className="text-indigo-200 text-sm">Clients</p>
                            </div>

                            <div className="bg-white/10 backdrop-blur-lg px-6 py-4 rounded-xl">
                                <h3 className="text-2xl font-bold">5+</h3>
                                <p className="text-indigo-200 text-sm">Years Experience</p>
                            </div>
                        </div>

                    </motion.div>

                    <motion.img
                        variants={fadeRight}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false }}
                        src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
                        alt="Team"
                        className="rounded-3xl shadow-2xl"
                    />
                </div>
            </section>



            {/* 🔥 Who We Are - Expanded Version */}
            <section className="py-28 relative">
                <div className="absolute inset-0 "></div>

                <div className="relative max-w-7xl mx-auto px-6">

                    {/* Section Heading */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2, ease: "easeInOut" }}
                        viewport={{ once: false }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl font-bold mb-4">Who We Are</h2>
                        <p className="text-gray-600 max-w-3xl mx-auto">
                            We are a passionate team of developers, designers, and strategists
                            dedicated to delivering high-performance digital solutions that
                            drive measurable business growth.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-16 items-center">

                        {/* Left Content */}
                        <motion.div
                            initial={{ opacity: 0, x: -40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1.2, ease: "easeInOut" }}
                            viewport={{ once: false }}
                        >
                            <h3 className="text-2xl font-bold text-indigo-700 mb-6">
                                Transforming Ideas into Scalable Digital Products
                            </h3>

                            <p className="text-gray-600 mb-6 leading-relaxed">
                                Our company combines cutting-edge technologies with creative
                                problem-solving to build web applications, enterprise systems,
                                and cloud-based platforms that scale with your business.
                            </p>

                            <p className="text-gray-600 leading-relaxed">
                                With a client-first approach and agile development methodology,
                                we ensure every solution is aligned with business goals,
                                performance standards, and long-term growth strategies.
                            </p>
                        </motion.div>

                        {/* Right Icon Cards */}
                        <div className="grid sm:grid-cols-2 gap-8">

                            {[
                                {
                                    icon: <FaLightbulb />,
                                    title: "Innovation First",
                                    desc: "Modern technology with forward-thinking solutions."
                                },
                                {
                                    icon: <FaUsers />,
                                    title: "Client Focused",
                                    desc: "We prioritize transparency and collaboration."
                                },
                                {
                                    icon: <FaLayerGroup />,
                                    title: "Scalable Systems",
                                    desc: "Architecture built for performance & growth."
                                },
                                {
                                    icon: <FaLightbulb />,
                                    title: "Future Ready",
                                    desc: "Continuous innovation to stay ahead of trends."
                                }
                            ].map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 40 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 1.2, ease: "easeInOut", delay: index * 0.15 }}
                                    viewport={{ once: false }}
                                    whileHover={{ y: -6 }}
                                    className="bg-white/70 backdrop-blur-xl border border-indigo-100 p-8 rounded-3xl shadow-md hover:shadow-xl transition-all duration-500"
                                >
                                    <div className="w-12 h-12 flex items-center justify-center bg-indigo-100 text-indigo-600 rounded-xl text-xl mb-4">
                                        {item.icon}
                                    </div>

                                    <h4 className="font-semibold text-indigo-700 mb-2">
                                        {item.title}
                                    </h4>

                                    <p className="text-gray-600 text-sm">
                                        {item.desc}
                                    </p>
                                </motion.div>
                            ))}

                        </div>
                    </div>

                </div>
            </section>





            {/* 🔥 Our Process - Glass Icons */}
            <section className="py-24 relative">
                <div className="max-w-6xl mx-auto px-6 text-center">

                    <motion.h2
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2, ease: "easeInOut" }}
                        viewport={{ once: false }}
                        className="text-4xl font-bold mb-16"
                    >
                        Our Process
                    </motion.h2>

                    <div className="grid md:grid-cols-4 gap-8">

                        {[
                            { icon: <FaClipboardList />, title: "Planning" },
                            { icon: <FaPencilRuler />, title: "Design" },
                            { icon: <FaCode />, title: "Development" },
                            { icon: <FaRocket />, title: "Deployment" }
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1.2, ease: "easeInOut", delay: index * 0.2 }}
                                viewport={{ once: false }}
                                whileHover={{ y: -6 }}
                                className="bg-white/80 backdrop-blur-lg border border-indigo-100 p-8 rounded-3xl shadow-md hover:shadow-xl transition-all duration-500"
                            >
                                <div className="w-12 h-12 flex items-center justify-center bg-indigo-600 text-white rounded-xl text-xl mb-5 mx-auto">
                                    {item.icon}
                                </div>

                                <h4 className="text-lg font-semibold text-indigo-700">
                                    {item.title}
                                </h4>

                                <p className="text-gray-600 mt-3 text-sm">
                                    Structured execution ensuring quality and timely delivery.
                                </p>
                            </motion.div>
                        ))}

                    </div>
                </div>
            </section>


            {/* ================= INDUSTRIES ================= */}
            <section className="py-24 bg-indigo-50 text-gray-800">

                <motion.h2
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: false }}
                    className="text-3xl font-bold text-center mb-16 text-indigo-900"
                >
                    Industries We Served
                </motion.h2>

                <div className="max-w-7xl mx-auto px-6">

                    <div className="grid grid-cols-2 md:grid-cols-5">
                        {[
                            { icon: <FaHotel />, title: "Hotels" },
                            { icon: <FaUtensils />, title: "Food" },
                            { icon: <FaCar />, title: "Automotive" },
                            { icon: <FaBuilding />, title: "Real Estate" },
                            { icon: <FaHospital />, title: "Health Care" },
                            { icon: <FaHeadset />, title: "Consultants" },
                            { icon: <FaUniversity />, title: "Financial Services" },
                            { icon: <FaBus />, title: "Transportation" },
                            { icon: <FaBook />, title: "Schools & Education" },
                            { icon: <FaCogs />, title: "Service Contractors" },
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.08 }}
                                viewport={{ once: false }}
                                className="flex flex-col items-center justify-center py-10 
border border-indigo-200 
group hover:bg-indigo-100/40 
transition-all duration-500"

                            >

                                {/* Icon Box */}
                                <div className="w-14 h-14 flex items-center justify-center rounded-xl 
                    bg-indigo-100 text-indigo-600 text-2xl mb-3 
                    group-hover:bg-indigo-600 group-hover:text-white 
                    transition-all duration-500">
                                    {item.icon}
                                </div>

                                {/* Title */}
                                <h4 className="text-sm font-semibold text-center 
                    group-hover:text-indigo-700 transition-all duration-500">
                                    {item.title}
                                </h4>

                            </motion.div>
                        ))}

                    </div>

                </div>
            </section>




            {/* 🔥 Updated CTA (Less Height) */}
            <section className="relative py-20 bg-linear-to-r from-indigo-900 via-indigo-800 to-indigo-900 overflow-hidden">

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: "easeInOut" }}
                    viewport={{ once: false }}
                    className="relative max-w-3xl mx-auto px-6 text-center"
                >

                    <div className="bg-white/15 backdrop-blur-2xl border border-white/20 p-10 rounded-3xl shadow-xl">

                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Let’s Build Something <span className="text-indigo-300">Extraordinary</span>
                        </h2>

                        <p className="text-indigo-200 mb-8 text-sm md:text-base">
                            Partner with us to accelerate your digital transformation.
                        </p>

                        <div className="flex flex-col sm:flex-row justify-center gap-4">

                            <button className="bg-white text-indigo-900 px-6 py-3 rounded-xl font-semibold hover:bg-gray-200 transition-all duration-500 hover:-translate-y-1">
                                Start Your Project
                            </button>

                            <button className="border border-white text-white px-6 py-3 rounded-xl font-semibold hover:bg-white hover:text-indigo-900 transition-all duration-500 hover:-translate-y-1">
                                Talk to Our Team
                            </button>

                        </div>

                    </div>
                </motion.div>
            </section>
        </div>
    );
};
export default AboutPage;