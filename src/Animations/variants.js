export const fadeUp = {
    hidden: { opacity: 0, y: 60 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: "easeOut"
        }
    }
};

export const fadeLeft = {
    hidden: { opacity: 0, x: -80 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.8 }
    }
};

export const fadeRight = {
    hidden: { opacity: 0, x: 80 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.8 }
    }
};

export const staggerContainer = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.2
        }
    }
};



// export const smoothFadeUp = {
//     hidden: { opacity: 0, y: 80 },
//     visible: {
//         opacity: 1,
//         y: 0,
//         transition: {
//             duration: 1.2,
//             ease: [0.22, 1, 0.36, 1] // super smooth cubic-bezier
//         }
//     }
// };

// export const smoothFadeLeft = {
//     hidden: { opacity: 0, x: -100 },
//     visible: {
//         opacity: 1,
//         x: 0,
//         transition: {
//             duration: 1.4,
//             ease: [0.22, 1, 0.36, 1]
//         }
//     }
// };

// export const smoothFadeRight = {
//     hidden: { opacity: 0, x: 100 },
//     visible: {
//         opacity: 1,
//         x: 0,
//         transition: {
//             duration: 1.4,
//             ease: [0.22, 1, 0.36, 1]
//         }
//     }
// };

// export const slowImageReveal = {
//     hidden: { opacity: 0, scale: 1.1 },
//     visible: {
//         opacity: 1,
//         scale: 1,
//         transition: {
//             duration: 1.8,
//             ease: [0.22, 1, 0.36, 1]
//         }
//     }
// };

// export const smoothStagger = {
//     hidden: {},
//     visible: {
//         transition: {
//             staggerChildren: 0.25
//         }
//     }
// };
