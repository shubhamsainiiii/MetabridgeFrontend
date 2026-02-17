// import { useState } from "react";
// import { Link } from "react-router-dom";
// import logo from "../../assets/Logo/glogo.png";

// const Navbar = () => {
//     const [open, setOpen] = useState(false);

//     const menu = [
//         { name: "Home", path: "/" },
//         { name: "About", path: "/about" },
//         { name: "Services", path: "/services" },
//         { name: "Technology", path: "/technology" },
//         { name: "Career", path: "/career" },
//         { name: "Contact", path: "/contact" },
//     ];

//     return (
//         <nav className="sticky top-0 z-50 bg-gradient-to-bl from-gray-900 via-gray-800 to-gray-900">
//             <div className="max-w-300 mx-auto px-5 min-h-17.5 flex items-center justify-between">
//                 <Link to="/">
//                     <img
//                         src={logo}
//                         alt="Metabridge Logo"
//                         className="h-12 sm:h-9 object-contain"
//                     />
//                 </Link>
//                 <ul className="hidden md:flex gap-6">
//                     {menu.map((item) => (
//                         <li key={item.name}>
//                             <Link
//                                 to={item.path}
//                                 className="text-gray-200 text-sm font-medium hover:text-indigo-500 transition-all duration-500"
//                             >
//                                 {item.name}
//                             </Link>
//                         </li>
//                     ))}
//                 </ul>
//                 <div
//                     onClick={() => setOpen(!open)}
//                     className="md:hidden w-8 h-8 relative cursor-pointer"
//                 >
//                     <span
//                         className={`absolute w-7 h-0.75 bg-white left-0 right-0 mx-auto transition-all duration-300
//             ${open ? "top-4 rotate-45" : "top-2"}`}
//                     />
//                     <span
//                         className={`absolute w-7 h-0.75 bg-white left-0 right-0 mx-auto top-4 transition-all duration-300
//             ${open ? "opacity-0" : "opacity-100"}`}
//                     />
//                     <span
//                         className={`absolute w-7 h-0.75 bg-white left-0 right-0 mx-auto transition-all duration-300
//             ${open ? "top-4 -rotate-45" : "top-6"}`}
//                     />
//                 </div>
//             </div>
//             <ul
//                 className={`md:hidden absolute w-full bg-black/1 backdrop-blur-xl
//     border-t border-white/20
//     shadow-2xl overflow-hidden
//         transition-all duration-500 ease-out
//         ${open ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0 pointer-events-none"}`}
//             >
//                 {menu.map((item, i) => (
//                     <li
//                         key={item.name}
//                         style={{ transitionDelay: `${i * 120 + 150}ms` }}
//                         className={`text-center py-3 transform
//             transition-all duration-700 ease-out
//             ${open ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"}`}
//                     >
//                         <Link
//                             to={item.path}
//                             onClick={() => setOpen(false)}
//                             className="text-[#0C2B4E] font-medium text-base hover:text-sky-500 transition"
//                         >
//                             {item.name}
//                         </Link>
//                     </li>
//                 ))}
//             </ul>
//         </nav>
//     );
// };

// export default Navbar;


import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/Logo/glogo.png";

const Navbar = () => {
    const [open, setOpen] = useState(false);

    const menu = [
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
        { name: "Services", path: "/services" },
        { name: "Technology", path: "/technology" },
        { name: "Career", path: "/career" },
        { name: "Contact", path: "/contact" },
    ];

    return (
        <nav className="sticky top-0 z-50 bg-gradient-to-bl from-gray-900 via-gray-800 to-gray-900">
            <div className="max-w-300 mx-auto px-5 min-h-17.5 flex items-center justify-between">
                <Link to="/">
                    <img
                        src={logo}
                        alt="Metabridge Logo"
                        className="h-12 sm:h-9 object-contain"
                    />
                </Link>
                <ul className="hidden md:flex gap-6">
                    {menu.map((item) => (
                        <li key={item.name}>
                            <Link
                                to={item.path}
                                className="text-gray-200 text-sm font-medium hover:text-indigo-500 transition-all duration-500"
                            >
                                {item.name}
                            </Link>
                        </li>
                    ))}
                </ul>
                <div
                    onClick={() => setOpen(!open)}
                    className="md:hidden w-8 h-8 relative cursor-pointer"
                >
                    <span
                        className={`absolute w-7 h-0.75 bg-white left-0 right-0 mx-auto transition-all duration-300
            ${open ? "top-4 rotate-45" : "top-2"}`}
                    />
                    <span
                        className={`absolute w-7 h-0.75 bg-white left-0 right-0 mx-auto top-4 transition-all duration-300
            ${open ? "opacity-0" : "opacity-100"}`}
                    />
                    <span
                        className={`absolute w-7 h-0.75 bg-white left-0 right-0 mx-auto transition-all duration-300
            ${open ? "top-4 -rotate-45" : "top-6"}`}
                    />
                </div>
            </div>
            <ul
                className={`md:hidden fixed top-[70px] left-0 w-full 
  h-[calc(100vh-70px)]
  bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900
  backdrop-blur-xl
  flex flex-col justify-center items-center gap-8
  transition-all duration-500 ease-out
  ${open ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0 pointer-events-none"}`}
            >
                {menu.map((item, i) => (
                    <li
                        key={item.name}
                        style={{ transitionDelay: `${i * 100 + 150}ms` }}
                        className={`transform transition-all duration-700 ease-out
      ${open ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"}`}
                    >
                        <Link
                            to={item.path}
                            onClick={() => setOpen(false)}
                            className="text-gray-300 text-2xl font-medium hover:text-indigo-400 transition"
                        >
                            {item.name}
                        </Link>
                    </li>
                ))}
            </ul>

        </nav>
    );
};

export default Navbar;
