// /* eslint-disable no-unused-vars */
// import { motion } from "framer-motion";
// import { Link } from "react-router-dom";

// export default function Hero() {
//   return (
//     <section className="bg-linear-to-r from-indigo-900 via-blue-800 to-indigo-900 text-white py-30">
//       <div className="max-w-7xl mx-auto px-6 text-center">

//         <motion.h1
//           initial={{ opacity: 0, y: -40 }}
//           animate={{ opacity: 1, y: 0 }}
//           className="text-4xl md:text-6xl font-bold"
//         >
//           Build Smart Digital Solutions for Your Business
//         </motion.h1>

//         <p className="mt-6 text-lg text-gray-200 max-w-2xl mx-auto">
//           We design modern websites, scalable applications & powerful software
//           solutions for startups and enterprises.
//         </p>

//         <div className="mt-8 flex justify-center gap-5">
//           <Link to="/contact" className="bg-white text-indigo-900 px-6 py-3 rounded-lg font-semibold">
//             Get Started
//           </Link>

//           <Link to="/services" className="border border-white px-6 py-3 rounded-lg">
//             Our Services
//           </Link>
//         </div>
//       </div>
//     </section>
//   );
// }



/* eslint-disable no-unused-vars */
import React from 'react'
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat text-white py-50 md:py-0 md:min-h-screen flex md:items-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1498050108023-c5249f4df085')",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative max-w-7xl mx-auto px-6 text-center">

        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold"
        >
          Build Smart Digital Solutions for Your Business
        </motion.h1>

        <p className="mt-6 text-lg text-gray-200 max-w-2xl mx-auto">
          We design modern websites, scalable applications & powerful software
          solutions for startups and enterprises.
        </p>

        <div className="mt-8 flex justify-center gap-5">
          <Link
            to="/contact"
            className="bg-white text-indigo-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition"
          >
            Get Started
          </Link>

          <Link
            to="/services"
            className="border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-indigo-900 transition"
          >
            Our Services
          </Link>
        </div>

      </div>
    </section>
  )
}

export default Hero


