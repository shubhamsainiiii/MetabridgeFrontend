import React from 'react'
import { Link } from "react-router-dom";

const ContactCTA = () => {
    return (
        <section className="bg-indigo-700 text-white py-16 text-center">
            <div className="max-w-4xl mx-auto px-6">

                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    Ready to Start Your Project?
                </h2>

                <p className="mb-8 text-gray-200">
                    Let’s build something amazing together. Contact us today.
                </p>

                <Link
                    to="/contact"
                    className="bg-white text-indigo-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-200 transition"
                >
                    Contact Us
                </Link>

            </div>
        </section>
    )
}

export default ContactCTA
