import React from "react";
import careerBg from "../assets/image/comingsoon.jpg";

const CareersPage = () => {
    return (
        <section
            className="
            w-full h-screen
            bg-cover bg-center bg-no-repeat
            flex items-center justify-center
            "
            style={{
                backgroundImage: `url(${careerBg})`,
            }}
        >
        </section>
    );
};

export default CareersPage;