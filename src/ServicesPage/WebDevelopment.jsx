// /* eslint-disable no-unused-vars */
// import React from "react";
// import { motion } from "framer-motion";
// import { Code, Globe, ShieldCheck, Smartphone } from "lucide-react";
// import { Link } from "react-router-dom";

// const WebDevelopment = () => {
//     return (
//         <>

//             {/* ================= HERO ================= */}
//             <section className="bg-gradient-to-r from-indigo-900 via-purple-800 to-indigo-900 text-white py-24 text-center">

//                 <motion.h1
//                     initial={{ opacity: 0, y: -40 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.6 }}
//                     className="text-4xl md:text-5xl font-bold"
//                 >
//                     Web Development Services
//                 </motion.h1>

//                 <p className="mt-4 text-lg text-gray-200 max-w-2xl mx-auto">
//                     We build modern, scalable and secure websites that help your business grow online.
//                 </p>

//             </section>


//             {/* ================= ABOUT SERVICE ================= */}
//             <section className="py-20 px-6 md:px-16 lg:px-24 bg-indigo-50">

//                 <div className="grid md:grid-cols-2 gap-10 items-center">

//                     <motion.img
//                         initial={{ opacity: 0, x: -40 }}
//                         whileInView={{ opacity: 1, x: 0 }}
//                         transition={{ duration: 0.6 }}
//                         src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
//                         className="rounded-2xl shadow-xl"
//                         alt=""
//                     />

//                     <motion.div
//                         initial={{ opacity: 0, x: 40 }}
//                         whileInView={{ opacity: 1, x: 0 }}
//                         transition={{ duration: 0.6 }}
//                     >

//                         <h2 className="text-3xl font-bold mb-4">
//                             Professional Website Development
//                         </h2>

//                         <p className="text-gray-600 mb-4">
//                             Our web development services focus on building high-performing,
//                             secure, scalable and responsive websites that align with your
//                             business goals.
//                         </p>

//                         <p className="text-gray-600">
//                             From business websites to enterprise-level applications,
//                             our expert developers create customized solutions that enhance
//                             user experience and maximize performance.
//                         </p>

//                     </motion.div>

//                 </div>

//             </section>


//             {/* ================= WHAT WE PROVIDE ================= */}
//             <section className="py-20 px-6 md:px-16 lg:px-24 bg-indigo-50">

//                 <h2 className="text-3xl font-bold text-center mb-14">
//                     What We Provide
//                 </h2>

//                 <div className="grid md:grid-cols-4 gap-8">

//                     <Service icon={<Code />} title="Custom Website Development" />
//                     <Service icon={<Globe />} title="Responsive Design" />
//                     <Service icon={<Smartphone />} title="Mobile Friendly Websites" />
//                     <Service icon={<ShieldCheck />} title="Secure Development" />

//                 </div>

//             </section>


//             {/* ================= TECHNOLOGY ================= */}
//             <section className="py-20 px-6 md:px-16 lg:px-24 bg-indigo-50">

//                 <h2 className="text-3xl font-bold text-center mb-14">
//                     Technologies We Use
//                 </h2>

//                 <div className="grid md:grid-cols-4 gap-8 text-center">

//                     <Tech name="HTML5" />
//                     <Tech name="CSS3" />
//                     <Tech name="JavaScript" />
//                     <Tech name="React.js" />
//                     <Tech name="Node.js" />
//                     <Tech name="Express.js" />
//                     <Tech name="MongoDB" />
//                     <Tech name="WordPress" />

//                 </div>

//             </section>

//             {/* ================= CTA ================= */}
//             <section className="py-20 px-6 md:px-16 lg:px-24 bg-gradient-to-r from-indigo-900 via-purple-800 to-indigo-900 text-white text-center">

//                 <h2 className="text-3xl md:text-4xl font-bold mb-4">
//                     Need a Website for Your Business?
//                 </h2>

//                 <p className="text-gray-200 mb-8">
//                     Let’s build a powerful website for your brand.
//                 </p>

//                 <Link
//                     to="/contact"
//                     className="bg-white text-indigo-900 px-8 py-3 rounded-full font-semibold hover:bg-gray-200 transition-all duration-300"
//                 >
//                     Contact Us
//                 </Link>

//             </section>

//         </>
//     );
// };

// export default WebDevelopment;


// // ================= COMPONENTS =================

// const Service = ({ icon, title }) => (
//     <motion.div
//         whileHover={{ y: -6 }}
//         className="bg-white p-6 rounded-2xl shadow text-center"
//     >
//         <div className="text-indigo-600 mb-3 flex justify-center text-2xl">
//             {icon}
//         </div>
//         <h3 className="font-semibold">{title}</h3>
//     </motion.div>
// );


// const Tech = ({ name }) => (
//     <div className="bg-white p-4 rounded-xl shadow">
//         {name}
//     </div>
// );


// const Step = ({ title }) => (
//     <motion.div
//         whileHover={{ scale: 1.05 }}
//         className="bg-white p-6 rounded-xl shadow text-center"
//     >
//         {title}
//     </motion.div>
// );



/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
import { Code, Globe, ShieldCheck, Smartphone } from "lucide-react";
import { Link } from "react-router-dom";

import {
    FaHtml5,
    FaCss3Alt,
    FaJs,
    FaReact,
    FaVuejs,
    FaAngular,
    FaWordpress
} from "react-icons/fa";

import {
    SiNextdotjs,
    SiTailwindcss,
    SiRedux
} from "react-icons/si";

const WebDevelopment = () => {
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
                    Web Development Services
                </motion.h1>

                <p className="mt-4 text-lg text-gray-200 max-w-2xl mx-auto">
                    We build modern, scalable and secure websites that help your business grow online.
                </p>

            </section>


            {/* ================= ABOUT SERVICE ================= */}
            <section className="py-20 px-6 md:px-16 lg:px-24 bg-indigo-50">

                <div className="grid md:grid-cols-2 gap-10 items-center">

                    <motion.img
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
                        className="rounded-2xl shadow-xl"
                        alt=""
                    />

                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                    >

                        <h2 className="text-3xl font-bold mb-4">
                            Professional Website Development
                        </h2>

                        <p className="text-gray-600 mb-4">
                            Our web development services focus on building high-performing,
                            secure, scalable and responsive websites that align with your
                            business goals.
                        </p>

                        <p className="text-gray-600 mb-4">
                            From business websites to enterprise-level applications,
                            our expert developers create customized solutions that enhance
                            user experience and maximize performance.
                        </p>

                        <p className="text-gray-600">
                            We understand that every business has unique requirements,
                            which is why our development approach is focused on delivering
                            tailor-made solutions that ensure long-term growth, improved
                            customer engagement and a strong digital presence.
                        </p>

                    </motion.div>

                </div>

            </section>


            {/* ================= WHAT WE PROVIDE ================= */}
            <section className="py-20 px-6 md:px-16 lg:px-24 bg-indigo-50">

                <h2 className="text-3xl font-bold text-center mb-14">
                    What We Provide
                </h2>

                <div className="grid md:grid-cols-4">

                    <Service icon={<Code />} title="Custom Website Development" />
                    <Service icon={<Globe />} title="Responsive Design" />
                    <Service icon={<Smartphone />} title="Mobile Friendly Websites" />
                    <Service icon={<ShieldCheck />} title="Secure Development" />

                </div>

            </section>


            {/* ================= WHY CHOOSE US ================= */}
            <section className="py-20 px-6 md:px-16 lg:px-24 bg-indigo-50">

                <h2 className="text-3xl font-bold text-center mb-14">
                    Why Choose Our Web Development Services
                </h2>

                <div className="grid md:grid-cols-3">

                    <Step title="SEO Friendly Websites" />
                    <Step title="Fast Loading Performance" />
                    <Step title="Scalable Architecture" />
                    <Step title="User Friendly UI/UX" />
                    <Step title="Modern Technology Stack" />
                    <Step title="Ongoing Support" />

                </div>

            </section>


            {/* ================= TECHNOLOGY ================= */}
            <section className="py-20 px-6 md:px-16 lg:px-24 bg-indigo-50">

                <h2 className="text-3xl font-bold text-center mb-14">
                    Technologies We Use
                </h2>

                <div className="
                grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5
                
                ">

                    <Tech icon={<FaHtml5 className="text-orange-500" />} name="HTML5" />
                    <Tech icon={<FaCss3Alt className="text-blue-500" />} name="CSS3" />
                    <Tech icon={<FaJs className="text-yellow-400" />} name="JavaScript" />
                    <Tech icon={<FaReact className="text-cyan-400" />} name="React.js" />
                    <Tech icon={<SiNextdotjs />} name="Next.js" />
                    <Tech icon={<FaVuejs className="text-green-500" />} name="Vue.js" />
                    <Tech icon={<FaAngular className="text-red-500" />} name="Angular" />
                    <Tech icon={<FaWordpress className="text-blue-700" />} name="WordPress" />
                    <Tech icon={<SiTailwindcss className="text-sky-400" />} name="Tailwind CSS" />
                    <Tech icon={<SiRedux className="text-purple-500" />} name="Redux" />

                </div>

            </section>


            {/* ================= CTA ================= */}
            <section className="py-20 px-6 md:px-16 lg:px-24 bg-gradient-to-r from-indigo-900 via-purple-800 to-indigo-900 text-white text-center">

                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Need a Website for Your Business?
                </h2>

                <p className="text-gray-200 mb-8">
                    Let’s build a powerful website for your brand.
                </p>

                <Link
                    to="/contact"
                    className="bg-white text-indigo-900 px-8 py-3 rounded-full font-semibold hover:bg-gray-200 transition-all duration-300"
                >
                    Contact Us
                </Link>

            </section>

        </>
    );
};

export default WebDevelopment;


// ================= COMPONENTS =================

const Service = ({ icon, title }) => (
    <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: false }}
        className="
        flex flex-col items-center justify-center
        py-12 px-4
        border border-indigo-200
hover:bg-indigo-100/50           transition-all duration-300
        group"
    >

        <div className="
        w-16 h-16 rounded-2xl
        bg-indigo-100
        flex items-center justify-center
        mb-4
        group-hover:scale-110
        transition">

            <div className="text-indigo-600 text-3xl">
                {icon}
            </div>

        </div>

        <h3 className="text-sm md:text-base font-medium text-gray-700 text-center">
            {title}
        </h3>

    </motion.div>
);


const Tech = ({ icon, name }) => (
    <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: false }}
        className="
        flex flex-col items-center justify-center
        py-12 px-4
        border border-indigo-200 hover:bg-indigo-100/50   
        
        transition-all duration-500
        group"
    >

        <div className="
        w-16 h-16 rounded-2xl
        bg-indigo-100
        flex items-center justify-center
        mb-4
        group-hover:scale-110
        transition">

            <div className="text-3xl">
                {icon}
            </div>

        </div>

        <h3 className="text-sm md:text-base font-medium text-gray-700 text-center">
            {name}
        </h3>

    </motion.div>
);

const Step = ({ title }) => (
    <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: false }}
        className="
        flex flex-col items-center justify-center
        py-12 px-4
        border border-indigo-200
        hover:bg-indigo-100/50   
        transition-all duration-300
        group"
    >

        <div className="
        w-12 h-12 rounded-xl
        bg-indigo-100
        flex items-center justify-center
        mb-3
        text-indigo-600 font-bold
        text-lg
        group-hover:scale-110
        transition">
            ✓
        </div>

        <h3 className="text-sm md:text-base font-medium text-gray-700 text-center">
            {title}
        </h3>

    </motion.div>
);