import React from 'react'
import { FaCode, FaMobileAlt, FaCloud, FaShieldAlt } from "react-icons/fa";
import { fadeUp, staggerContainer } from "../Animations/variants";

const Services = () => {

    const services = [
        { icon: <FaCode />, title: "Web Development", desc: "Modern, scalable React & MERN applications." },
        { icon: <FaMobileAlt />, title: "App Development", desc: "High-performance Android & iOS apps." },
        { icon: <FaCloud />, title: "Cloud Solutions", desc: "Secure & scalable cloud infrastructure." },
        { icon: <FaShieldAlt />, title: "Cyber Security", desc: "Advanced protection & data security." },
    ];

    return (
        <section
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="py-20 bg-gray-50"
        >
            <div className="max-w-7xl mx-auto px-6 text-center">

                <h2 className="text-3xl md:text-4xl font-bold mb-12">
                    Our Services
                </h2>

                <div className="grid md:grid-cols-4 gap-8">
                    {services.map((item, index) => (
                        <div key={index} className="bg-white p-8 rounded-xl shadow hover:shadow-xl transition duration-500">
                            <div className="text-4xl text-indigo-600 mb-4 flex justify-center">
                                {item.icon}
                            </div>
                            <h3 className="font-semibold text-xl mb-2">
                                {item.title}
                            </h3>
                            <p className="text-gray-500">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    )
}

export default Services
