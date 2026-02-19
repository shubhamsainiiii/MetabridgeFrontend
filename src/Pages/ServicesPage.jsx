// /* eslint-disable no-unused-vars */
// import React from "react";
// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";

// const ServicePage = () => {
//     return (
//         <>
//             {/* ================= HERO ================= */}
//             <section className="bg-indigo-900 text-white py-20 text-center">
//                 <motion.h1
//                     initial={{ opacity: 0, y: -40 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.6 }}
//                     className="text-4xl md:text-5xl font-bold"
//                 >
//                     Our Services
//                 </motion.h1>

//                 <p className="mt-4 text-lg text-gray-200 max-w-2xl mx-auto">
//                     We provide modern digital solutions to help your business grow online
//                     with scalable, secure and high-performance technology.
//                 </p>
//             </section>

//             {/* ================= MAIN SERVICES ================= */}
//             <section className="py-20 px-6 md:px-16 lg:px-24 bg-gray-50">

//                 <h2 className="text-3xl font-bold text-center mb-12">
//                     Our Core Services
//                 </h2>

//                 <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">

//                     <ServiceCard title="Web Development" />
//                     <ServiceCard title="Web Designing" />
//                     <ServiceCard title="Mobile App Development" />
//                     <ServiceCard title="Digital Marketing" />
//                     <ServiceCard title="Custom Web Development" />
//                     <ServiceCard title="Custom Web Design" />
//                     <ServiceCard title="E-commerce Development" />
//                     <ServiceCard title="Layers Development" />
//                     <ServiceCard title="Cyber Security" />

//                 </div>

//             </section>


//             {/* ================= WHY CHOOSE US ================= */}
//             <section className="bg-gray-50 py-16 px-6 md:px-16 lg:px-24">
//                 <h2 className="text-3xl font-bold text-center mb-12">
//                     Why Choose Us?
//                 </h2>

//                 <div className="grid md:grid-cols-3 gap-8 text-center">
//                     <Feature title="Fast Delivery" desc="We deliver projects on time." />
//                     <Feature title="SEO Friendly" desc="Optimized for search engines." />
//                     <Feature title="24/7 Support" desc="We are always available." />
//                 </div>
//             </section>

//             {/* ================= CTA ================= */}
//             <section className="bg-indigo-900 text-white py-16 text-center">
//                 <h2 className="text-3xl font-bold">
//                     Ready to Build Your Digital Presence?
//                 </h2>

//                 <p className="mt-3">
//                     Let’s work together to grow your business online.
//                 </p>

//                 <Link
//                     to="/contact"
//                     className="inline-block mt-6 bg-white text-indigo-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition"
//                 >
//                     Contact Us
//                 </Link>
//             </section>
//         </>
//     );
// };

// export default ServicePage;


// // ================= COMPONENTS =================

// const ServiceCard = ({ title, desc }) => {
//     return (
//         <motion.div
//             whileHover={{ scale: 1.05 }}
//             className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition"
//         >
//             <h3 className="text-xl font-semibold mb-3">{title}</h3>
//             <p className="text-gray-600">{desc}</p>
//         </motion.div>
//     );
// };

// const ProcessStep = ({ step, title, desc }) => {
//     return (
//         <motion.div
//             whileHover={{ y: -5 }}
//             className="p-6 border rounded-xl"
//         >
//             <h3 className="text-xl font-semibold">
//                 {step}. {title}
//             </h3>
//             <p className="text-gray-600 mt-2">{desc}</p>
//         </motion.div>
//     );
// };

// const Feature = ({ title, desc }) => {
//     return (
//         <motion.div
//             whileHover={{ scale: 1.05 }}
//             className="p-6 bg-white rounded-2xl shadow"
//         >
//             <h3 className="text-xl font-semibold">{title}</h3>
//             <p className="text-gray-600 mt-2">{desc}</p>
//         </motion.div>
//     );
// };




// /* eslint-disable no-unused-vars */
// import React from "react";
// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";

// import {
//     Code,
//     Palette,
//     Smartphone,
//     TrendingUp,
//     ShoppingCart,
//     Globe,
//     ShieldCheck,
//     Layers
// } from "lucide-react";

// const ServicePage = () => {
//     return (
//         <>
//             {/* ================= HERO ================= */}
//             <section className="bg-indigo-900 text-white py-20 text-center">
//                 <motion.h1
//                     initial={{ opacity: 0, y: -40 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.6 }}
//                     className="text-4xl md:text-5xl font-bold"
//                 >
//                     Our Services
//                 </motion.h1>

//                 <p className="mt-4 text-lg text-gray-200 max-w-2xl mx-auto">
//                     We provide modern digital solutions to help your business grow online
//                     with scalable and secure technologies.
//                 </p>
//             </section>

//             {/* ================= MAIN SERVICES ================= */}
//             <section className="py-20 px-6 md:px-16 lg:px-24 bg-gray-50">

//                 <h2 className="text-3xl font-bold text-center mb-12">
//                     Our Core Services
//                 </h2>

//                 <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">

//                     <ServiceCard
//                         icon={<Code />}
//                         title="Web Development"
//                         desc="We build fast, responsive and SEO-friendly websites for businesses."
//                     />

//                     <ServiceCard
//                         icon={<Palette />}
//                         title="Web Designing"
//                         desc="Creative UI/UX designs to enhance user engagement."
//                     />

//                     <ServiceCard
//                         icon={<Smartphone />}
//                         title="Mobile App Development"
//                         desc="Custom Android & iOS applications for your business."
//                     />

//                     <ServiceCard
//                         icon={<TrendingUp />}
//                         title="Digital Marketing"
//                         desc="SEO, social media and PPC services."
//                     />

//                     <ServiceCard
//                         icon={<Globe />}
//                         title="Custom Web Development"
//                         desc="Tailored web applications for business needs."
//                     />

//                     <ServiceCard
//                         icon={<Palette />}
//                         title="Custom Web Design"
//                         desc="Modern responsive website designs."
//                     />

//                     <ServiceCard
//                         icon={<ShoppingCart />}
//                         title="E-commerce Development"
//                         desc="Secure and scalable online store."
//                     />

//                     <ServiceCard
//                         icon={<Layers />}
//                         title="Wordpress Development"
//                         desc="Custom Wordpress websites."
//                     />

//                     <ServiceCard
//                         icon={<ShieldCheck />}
//                         title="Cyber Security"
//                         desc="Protect your website with modern security."
//                     />

//                 </div>

//             </section>

//             {/* ================= WHY CHOOSE US ================= */}
//             <section className="bg-gray-50 py-16 px-6 md:px-16 lg:px-24">
//                 <h2 className="text-3xl font-bold text-center mb-12">
//                     Why Choose Us?
//                 </h2>

//                 <div className="grid md:grid-cols-3 gap-8 text-center">
//                     <Feature
//                         title="Fast Delivery"
//                         desc="We deliver projects on time with quality."
//                     />
//                     <Feature
//                         title="SEO Friendly"
//                         desc="Optimized websites for search engines."
//                     />
//                     <Feature
//                         title="24/7 Support"
//                         desc="We are always available for support."
//                     />
//                 </div>
//             </section>

//             {/* ================= CTA ================= */}
//             <section className="bg-indigo-900 text-white py-16 text-center">
//                 <h2 className="text-3xl font-bold">
//                     Ready to Build Your Digital Presence?
//                 </h2>

//                 <p className="mt-3">
//                     Let’s work together to grow your business online.
//                 </p>

//                 <Link
//                     to="/contact"
//                     className="inline-block mt-6 bg-white text-indigo-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition"
//                 >
//                     Contact Us
//                 </Link>
//             </section>
//         </>
//     );
// };

// export default ServicePage;


// // ================= SERVICE CARD =================

// const ServiceCard = ({ icon, title, desc }) => {
//     return (
//         <motion.div
//             whileHover={{ y: -8 }}
//             className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition text-center group border hover:border-indigo-700"
//         >
//             <div className="mb-4 w-14 h-14 mx-auto flex items-center justify-center rounded-full bg-indigo-100 text-indigo-700 group-hover:bg-indigo-700 group-hover:text-white transition text-2xl">
//                 {icon}
//             </div>

//             <h3 className="text-xl font-semibold mb-2 group-hover:text-indigo-700">
//                 {title}
//             </h3>

//             <p className="text-gray-600 text-sm">
//                 {desc}
//             </p>
//         </motion.div>
//     );
// };


// // ================= FEATURE =================

// const Feature = ({ title, desc }) => {
//     return (
//         <motion.div
//             whileHover={{ scale: 1.05 }}
//             className="p-6 bg-white rounded-2xl shadow"
//         >
//             <h3 className="text-xl font-semibold">{title}</h3>
//             <p className="text-gray-600 mt-2">{desc}</p>
//         </motion.div>
//     );
// };



/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import {
    Code,
    Palette,
    Smartphone,
    TrendingUp,
    ShoppingCart,
    Globe,
    ShieldCheck,
    Layers
} from "lucide-react";

const ServicePage = () => {
    return (
        <>
            {/* ================= HERO ================= */}
            <section className="bg-gradient-to-r from-indigo-900 via-purple-800 to-indigo-900 text-white py-24 text-center relative overflow-hidden">

                <motion.h1
                    initial={{ opacity: 0, y: -40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl md:text-5xl font-bold"
                >
                    Our Services
                </motion.h1>

                <p className="mt-4 text-lg text-gray-200 max-w-2xl mx-auto">
                    We provide modern digital solutions to help your business grow online
                    with scalable and secure technologies.
                </p>

            </section>

            {/* ================= MAIN SERVICES ================= */}
            <section className="py-20 px-6 md:px-16 lg:px-24 bg-gray-50">

                <h2 className="text-3xl font-bold text-center mb-12">
                    Our Core Services
                </h2>

                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">

                    <ServiceCard
                        icon={<Code />}
                        title="Web Development"
                        desc="We build fast, responsive and SEO-friendly websites for businesses."
                    />

                    <ServiceCard
                        icon={<Palette />}
                        title="Web Designing"
                        desc="Creative UI/UX designs to enhance user engagement."
                    />

                    <ServiceCard
                        icon={<Smartphone />}
                        title="Mobile App Development"
                        desc="Custom Android & iOS applications for your business."
                    />

                    <ServiceCard
                        icon={<TrendingUp />}
                        title="Digital Marketing"
                        desc="SEO, social media and PPC services."
                    />

                    <ServiceCard
                        icon={<Globe />}
                        title="Custom Web Development"
                        desc="Tailored web applications for business needs."
                    />

                    <ServiceCard
                        icon={<Palette />}
                        title="Custom Web Design"
                        desc="Modern responsive website designs."
                    />

                    <ServiceCard
                        icon={<ShoppingCart />}
                        title="E-commerce Development"
                        desc="Secure and scalable online store."
                    />

                    <ServiceCard
                        icon={<Layers />}
                        title="WordPress Development"
                        desc="Custom WordPress websites."
                    />

                    <ServiceCard
                        icon={<ShieldCheck />}
                        title="Cyber Security"
                        desc="Protect your website with modern security."
                    />

                </div>

            </section>

            {/* ================= WHY CHOOSE US ================= */}
            <section className="py-20 px-6 md:px-16 lg:px-24 bg-gradient-to-r from-indigo-50 via-purple-50 to-indigo-50">

                <h2 className="text-3xl font-bold text-center mb-14">
                    Why Choose Us?
                </h2>

                <div className="grid md:grid-cols-3 gap-8">

                    <WhyCard
                        number="01"
                        title="Fast Delivery"
                        desc="We deliver projects on time with quality assurance."
                    />

                    <WhyCard
                        number="02"
                        title="SEO Friendly"
                        desc="Optimized websites for better search rankings."
                    />

                    <WhyCard
                        number="03"
                        title="24/7 Support"
                        desc="Our support team is always available."
                    />

                </div>

            </section>


            {/* ================= CTA ================= */}
            <section className="py-20 px-6 md:px-16 lg:px-24 bg-gradient-to-r from-indigo-900 via-purple-800 to-indigo-900 text-white text-center relative overflow-hidden">

                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-3xl md:text-4xl font-bold mb-4"
                >
                    Ready to Grow Your Business Online?
                </motion.h2>

                <p className="text-gray-200 mb-8">
                    Let’s build your next digital product together.
                </p>

                <motion.div>
                    <Link
                        to="/contact"
                        className="bg-white text-indigo-900 px-8 py-3 rounded-full font-semibold hover:bg-gray-200 transition-all duration-500 hover:scale-105"
                    >
                        Get Started Now →
                    </Link>
                </motion.div>

            </section>

        </>
    );
};

export default ServicePage;


// ================= SERVICE CARD =================

const ServiceCard = ({ icon, title, desc }) => {
    return (
        <motion.div
            whileHover={{ y: -10 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="relative group rounded-2xl overflow-hidden p-[2px] bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-500 hover:scale-105 transition duration-300"
        >
            <div className="bg-white rounded-2xl p-6 text-center h-full shadow-md group-hover:bg-gradient-to-br from-indigo-50 to-purple-50 transition">

                <div className="mb-4 w-14 h-14 mx-auto flex items-center justify-center rounded-full 
                bg-indigo-100 text-indigo-700 
                group-hover:bg-indigo-700 group-hover:text-white 
                transition duration-300 text-2xl">
                    {icon}
                </div>

                <h3 className="text-xl font-semibold mb-2 
                group-hover:text-indigo-700 transition">
                    {title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed">
                    {desc}
                </p>

                <div className="w-0 h-1 bg-indigo-700 mt-4 mx-auto group-hover:w-16 transition-all duration-300"></div>

            </div>
        </motion.div>
    );
};


// ================= FEATURE =================

const Feature = ({ title, desc }) => {
    return (
        <motion.div
            whileHover={{ scale: 1.05 }}
            className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition"
        >
            <h3 className="text-xl font-semibold">{title}</h3>
            <p className="text-gray-600 mt-2">{desc}</p>
        </motion.div>
    );
};

const WhyCard = ({ number, title, desc }) => {
    return (
        <motion.div
            whileHover={{ y: -8 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="group relative bg-white border border-indigo-300 rounded-2xl p-6 text-center shadow-md hover:shadow-xl hover:border-transparent transition duration-300 hover:bg-gradient-to-br from-indigo-50 to-purple-50"
        >

            {/* Glow Border on Hover */}
            <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-indigo-500 transition duration-300"></div>

            <h1 className="text-4xl font-bold text-indigo-600 mb-3">
                {number}
            </h1>

            <h3 className="text-xl font-semibold mb-2">
                {title}
            </h3>

            <p className="text-gray-600 text-sm">
                {desc}
            </p>

        </motion.div>
    );
};
