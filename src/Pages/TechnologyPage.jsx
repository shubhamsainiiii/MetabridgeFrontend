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
                <TechCard icon={<FaHtml5 />} name="HTML5" />
                <TechCard icon={<FaCss3Alt />} name="CSS3" />
                <TechCard icon={<FaJs />} name="JavaScript" />
                <TechCard icon={<FaReact />} name="React.js" />
                <TechCard icon={<SiNextdotjs />} name="Next.js" />
                <TechCard icon={<FaVuejs />} name="Vue.js" />
                <TechCard icon={<FaAngular />} name="Angular" />
                <TechCard icon={<FaWordpress />} name="WordPress" />
                <TechCard icon={<SiTailwindcss />} name="Tailwind CSS" />
                <TechCard icon={<SiRedux />} name="Redux" />
            </TechSection>

            {/* ================= MOBILE ================= */}
            <TechSection title="Mobile App Technologies">
                <TechCard icon={<FaAndroid />} name="Android" />
                <TechCard icon={<FaApple />} name="iOS" />
                <TechCard icon={<SiFlutter />} name="Flutter" />
                <TechCard icon={<SiKotlin />} name="Kotlin" />
                <TechCard icon={<SiReact />} name="React Native" />
                <TechCard icon={<SiFirebase />} name="Firebase" />
            </TechSection>

            {/* ================= DEVOPS ================= */}
            <TechSection title="DevOps & Cloud">
                <TechCard icon={<FaDocker />} name="Docker" />
                <TechCard icon={<FaAws />} name="AWS" />
                <TechCard icon={<SiKubernetes />} name="Kubernetes" />
                <TechCard icon={<SiGrafana />} name="Grafana" />
            </TechSection>

            {/* ================= PAYMENT ================= */}
            <TechSection title="Payment Integration">
                <TechCard icon={<SiStripe />} name="Stripe" />
                <TechCard icon={<FaPaypal />} name="PayPal" />
            </TechSection>

            {/* ================= BACKEND ================= */}
            <TechSection title="Backend Technologies">
                <TechCard icon={<FaNodeJs />} name="Node.js" />
                <TechCard icon={<SiExpress />} name="Express.js" />
                <TechCard icon={<FaPython />} name="Python" />
                <TechCard icon={<FaPhp />} name="PHP" />
                <TechCard icon={<SiLaravel />} name="Laravel" />
            </TechSection>

            {/* ================= DATABASE ================= */}
            <TechSection title="Database Technologies">
                <TechCard icon={<SiMongodb />} name="MongoDB" />
                <TechCard icon={<SiMysql />} name="MySQL" />
                <TechCard icon={<SiPostgresql />} name="PostgreSQL" />
            </TechSection>
        </>
    );
};

export default TechnologyPage;


// ================= TECH SECTION =================

const TechSection = ({ title, children }) => {
    return (
        <section className="py-10 px-6 md:px-16 lg:px-24 bg-indigo-50">
            <h2 className="text-3xl font-bold text-center mb-12">
                {title}
            </h2>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {children}
            </div>
        </section>
    );
};


// ================= TECH CARD =================

const TechCard = ({ icon, name }) => {
    return (
        <motion.div
            whileHover={{ y: -10 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="relative group rounded-2xl overflow-hidden p-[2px]
            bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-500 
            hover:scale-105 transition-all duration-300"
        >
            <div className="bg-white rounded-2xl p-6 text-center shadow-md 
            group-hover:bg-gradient-to-br from-indigo-50 to-purple-50 transition-all duration-300">

                <div className="text-4xl text-indigo-600 mb-3 
                group-hover:text-purple-700 transition-all duration-300">
                    {icon}
                </div>

                <h3 className="text-lg font-semibold 
                group-hover:text-indigo-700 transition-all duration-300">
                    {name}
                </h3>

                <div className="w-0 h-1 bg-indigo-700 mt-3 mx-auto 
                group-hover:w-16 transition-all duration-300"></div>

            </div>
        </motion.div>
    );
};
