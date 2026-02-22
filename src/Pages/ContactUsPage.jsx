/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const ContactUsPage = () => {
    return (
        <>
            {/* ================= HERO ================= */}
            <section className="bg-gradient-to-r from-indigo-900 via-purple-800 to-indigo-900 text-white py-20 text-center">
                <motion.h1
                    initial={{ opacity: 0, y: -40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl md:text-5xl font-bold"
                >
                    Contact Us
                </motion.h1>

                <p className="mt-4 text-lg text-gray-200 max-w-2xl mx-auto">
                    Have a project in mind? Let’s discuss how we can help your business grow with modern digital solutions.
                </p>
            </section>


            {/* ================= CONTACT SECTION ================= */}
            {/* ================= CONTACT SECTION ================= */}
            <section className="py-16 bg-[#f4f6ff] px-6 md:px-16 lg:px-24">

                <div className="grid md:grid-cols-2 gap-12 items-stretch">

                    {/* LEFT INFO */}
                    <motion.div
                        initial={{ opacity: 0, x: -60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="border border-gray-300 rounded-2xl p-8 flex flex-col justify-center h-full"
                    >
                        <h2 className="text-3xl font-bold mb-4">
                            Get in Touch With Our Team
                        </h2>

                        <p className="text-gray-600 mb-6">
                            We'd love to hear from you. Whether you have a question about our services,
                            need assistance with your project, or want to discuss a new business idea —
                            our team is here to help you.
                        </p>

                        <p className="text-gray-600 mb-8">
                            Fill out the contact form or reach us directly using the information below.
                            Our team will get back to you as soon as possible.
                        </p>

                        {/* CONTACT INFO */}
                        <div className="space-y-5">

                            <div className="flex items-center gap-4">
                                <Mail className="text-indigo-600" />
                                <p className="text-gray-700">
                                    info@yourcompany.com
                                </p>
                            </div>

                            <div className="flex items-center gap-4">
                                <Phone className="text-indigo-600" />
                                <p className="text-gray-700">
                                    +91 98765 43210
                                </p>
                            </div>

                            <div className="flex items-center gap-4">
                                <MapPin className="text-indigo-600" />
                                <p className="text-gray-700">
                                    Jaipur, Rajasthan, India
                                </p>
                            </div>

                            <div className="flex items-center gap-4">
                                <Clock className="text-indigo-600" />
                                <p className="text-gray-700">
                                    Mon - Sat : 10 AM - 7 PM
                                </p>
                            </div>

                        </div>
                    </motion.div>


                    {/* RIGHT FORM */}
                    <motion.div
                        initial={{ opacity: 0, x: 60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="border border-gray-300 rounded-2xl p-8 flex flex-col justify-center h-full"
                    >

                        <h3 className="text-2xl font-bold mb-6">
                            Send Message
                        </h3>

                        <form className="space-y-5">

                            <motion.input
                                type="text"
                                placeholder="Your Name"
                                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none "
                            />

                            <motion.input
                                type="email"
                                placeholder="Email Address"
                                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none "
                            />

                            <motion.input
                                type="text"
                                placeholder="Phone Number"
                                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none "
                            />

                            <motion.textarea
                                rows="4"
                                placeholder="Your Message"
                                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none "
                            ></motion.textarea>

                            <motion.button
                                whileHover={{ scale: 1.009 }}
                                whileTap={{ scale: 0.95 }}
                                type="submit"
                                className="w-full bg-indigo-600 text-white py-3 rounded-lg font-medium hover:bg-indigo-700 transition-all duration-300 cursor-pointer"
                            >
                                Submit
                            </motion.button>

                        </form>

                    </motion.div>

                </div>
            </section>


            {/* ================= GOOGLE MAP ================= */}
            {/* <section className="w-full h-[400px]">
                <iframe
                    title="map"
                    src="https://www.google.com/maps?q=Jaipur&output=embed"
                    className="w-full h-full border-0"
                    loading="lazy"
                ></iframe>
            </section> */}

        </>
    );
};

export default ContactUsPage;