import React from 'react'
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

    return (
        <section className="bg-indigo-900 text-white py-20">
            <div className="max-w-6xl mx-auto px-6 text-center">

                <h2 className="text-3xl md:text-4xl font-bold mb-12">
                    Why Choose Us
                </h2>

                <div className="grid md:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div key={index} className="flex items-center gap-4 bg-indigo-800 p-6 rounded-lg">
                            <FaCheckCircle className="text-green-400 text-2xl" />
                            <span className="text-lg">{feature}</span>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    )
}

export default Features
