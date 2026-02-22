/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";

import {
    FaReact,
    FaNodeJs,
    FaHtml5,
    FaCss3Alt,
    FaJs,
    FaAndroid,
    FaApple,
    FaAws,
    FaDocker,
    FaVuejs,
    FaAngular,
    FaWordpress,
    FaPaypal,
    FaPython,
    FaPhp
} from "react-icons/fa";

import {
    SiMongodb,
    SiExpress,
    SiTailwindcss,
    SiFirebase,
    SiRedux,
    SiNextdotjs,
    SiFlutter,
    SiKubernetes,
    SiMysql,
    SiKotlin,
    SiReact,
    SiGrafana,
    SiStripe,
    SiPostgresql,
    SiLaravel
} from "react-icons/si";

const TechnologyPage = () => {
    return (
        <>
            {/* ================= HERO ================= */}
            <section className="bg-gradient-to-r from-indigo-900 via-purple-800 to-indigo-900 text-white py-24 text-center">
                <motion.h1
                    initial={{ opacity: 0, y: -40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl md:text-5xl font-bold"
                >
                    Technologies We Use
                </motion.h1>

                <p className="mt-4 text-lg text-gray-200 max-w-2xl mx-auto">
                    We use modern tools & technologies to build scalable digital products.
                </p>
            </section>

            {/* ================= WEB ================= */}
            <TechSection title="Web Technologies">
                <TechCard icon={<FaHtml5 className="text-orange-500" />} name="HTML5" />
                <TechCard icon={<FaCss3Alt className="text-blue-500" />} name="CSS3" />
                <TechCard icon={<FaJs className="text-yellow-400" />} name="JavaScript" />
                <TechCard icon={<FaReact className="text-cyan-400" />} name="React.js" />
                <TechCard icon={<SiNextdotjs />} name="Next.js" />
                <TechCard icon={<FaVuejs className="text-green-500" />} name="Vue.js" />
                <TechCard icon={<FaAngular className="text-red-500" />} name="Angular" />
                <TechCard icon={<FaWordpress className="text-blue-700" />} name="WordPress" />
                <TechCard icon={<SiTailwindcss className="text-sky-400" />} name="Tailwind CSS" />
                <TechCard icon={<SiRedux className="text-purple-500" />} name="Redux" />
            </TechSection>

            {/* ================= MOBILE ================= */}
            <TechSection title="Mobile App Technologies">
                <TechCard icon={<FaAndroid className="text-green-600" />} name="Android" />
                <TechCard icon={<FaApple className="text-black" />} name="iOS" />
                <TechCard icon={<SiFlutter className="text-sky-500" />} name="Flutter" />
                <TechCard icon={<SiKotlin className="text-purple-600" />} name="Kotlin" />
                <TechCard icon={<SiReact className="text-cyan-400" />} name="React Native" />
                <TechCard icon={<SiFirebase className="text-yellow-500" />} name="Firebase" />
            </TechSection>

            {/* ================= DEVOPS ================= */}
            <TechSection title="DevOps & Cloud">
                <TechCard icon={<FaDocker className="text-blue-500" />} name="Docker" />
                <TechCard icon={<FaAws className="text-orange-500" />} name="AWS" />
                <TechCard icon={<SiKubernetes className="text-blue-600" />} name="Kubernetes" />
                <TechCard icon={<SiGrafana className="text-orange-600" />} name="Grafana" />
            </TechSection>

            {/* ================= PAYMENT ================= */}
            <TechSection title="Payment Integration">
                <TechCard icon={<SiStripe className="text-indigo-500" />} name="Stripe" />
                <TechCard icon={<FaPaypal className="text-blue-700" />} name="PayPal" />
            </TechSection>

            {/* ================= BACKEND ================= */}
            <TechSection title="Backend Technologies">
                <TechCard icon={<FaNodeJs className="text-green-600" />} name="Node.js" />
                <TechCard icon={<SiExpress />} name="Express.js" />
                <TechCard icon={<FaPython className="text-yellow-500" />} name="Python" />
                <TechCard icon={<FaPhp className="text-indigo-600" />} name="PHP" />
                <TechCard icon={<SiLaravel className="text-red-600" />} name="Laravel" />
            </TechSection>

            {/* ================= DATABASE ================= */}
            <TechSection title="Database Technologies">
                <TechCard icon={<SiMongodb className="text-green-500" />} name="MongoDB" />
                <TechCard icon={<SiMysql className="text-blue-600" />} name="MySQL" />
                <TechCard icon={<SiPostgresql className="text-blue-800" />} name="PostgreSQL" />
            </TechSection>
        </>
    );
};

export default TechnologyPage;


// ================= TECH SECTION =================

const TechSection = ({ title, children }) => {
    return (
        <section className="py-14 px-6 md:px-16 lg:px-24 bg-indigo-50">

            <h2 className="text-3xl font-bold text-center mb-12">
                {title}
            </h2>

            <div className="
                grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
                {children}
            </div>

        </section>
    );
};


// ================= TECH CARD =================

const TechCard = ({ icon, name }) => {
    return (
        <motion.div
            whileHover={{ scale: 1.001 }}
            transition={{ duration: 0.3 }}
            className="
            flex flex-col items-center justify-center
            py-12 px-4
            border border-indigo-200 bg-indigo-50
            hover:bg-indigo-100/50   
            transition-all duration-300
            group"
        >

            <div className="
            w-16 h-16 rounded-2xl
            bg-indigo-100 hover:bg-indigo-200
            flex items-center justify-center
            mb-4
            group-hover:scale-110
            transition-all duration-500">

                <div className="text-3xl">
                    {icon}
                </div>

            </div>

            <h3 className="text-sm md:text-base font-medium text-gray-700 text-center">
                {name}
            </h3>

        </motion.div>
    );
};