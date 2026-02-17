import React from 'react'
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-gradient-to-bl from-gray-900 via-gray-800 to-gray-900 text-gray-300 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10">

                {/* Company Info */}
                <div>
                    <h2 className="text-2xl font-bold text-white mb-4">
                        IT Company
                    </h2>
                    <p className="text-gray-400">
                        We deliver innovative digital solutions including web development,
                        mobile applications, and cloud services to grow your business.
                    </p>

                    {/* Social Icons */}
                    <div className="flex gap-4 mt-6">
                        <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-indigo-600 transition">
                            <FaFacebookF />
                        </a>
                        <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-indigo-600 transition">
                            <FaTwitter />
                        </a>
                        <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-indigo-600 transition">
                            <FaLinkedinIn />
                        </a>
                        <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-indigo-600 transition">
                            <FaInstagram />
                        </a>
                    </div>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-white font-semibold text-lg mb-4">
                        Quick Links
                    </h3>
                    <ul className="space-y-3">
                        <li><Link to="/" className="hover:text-white">Home</Link></li>
                        <li><Link to="/about" className="hover:text-white">About</Link></li>
                        <li><Link to="/services" className="hover:text-white">Services</Link></li>
                        <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
                    </ul>
                </div>

                {/* Services */}
                <div>
                    <h3 className="text-white font-semibold text-lg mb-4">
                        Services
                    </h3>
                    <ul className="space-y-3">
                        <li>Web Development</li>
                        <li>Mobile App Development</li>
                        <li>Cloud Solutions</li>
                        <li>Cyber Security</li>
                    </ul>
                </div>

                {/* Contact Info */}
                <div>
                    <h3 className="text-white font-semibold text-lg mb-4">
                        Contact Info
                    </h3>
                    <ul className="space-y-3">
                        <li>Email: info@itcompany.com</li>
                        <li>Phone: +91 76918 88950</li>
                        <li>Location: Jaipur, India</li>
                    </ul>
                </div>

            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-700 mt-12 pt-6 text-center text-gray-500 text-sm">
                © {new Date().getFullYear()} IT Company. All Rights Reserved.
            </div>
        </footer>
    )
}

export default Footer
