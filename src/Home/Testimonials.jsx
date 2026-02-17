import React from 'react'

const Testimonials = () => {

    const reviews = [
        {
            name: "Amit Sharma",
            text: "Excellent development team! Delivered our project before deadline."
        },
        {
            name: "Neha Verma",
            text: "Professional service and great communication throughout."
        }
    ];

    return (
        <section className="py-20 bg-gray-50">
            <div className="max-w-5xl mx-auto px-6 text-center">

                <h2 className="text-3xl md:text-4xl font-bold mb-12">
                    Client Testimonials
                </h2>

                <div className="grid md:grid-cols-2 gap-8">
                    {reviews.map((review, index) => (
                        <div key={index} className="bg-white p-8 rounded-xl shadow">
                            <p className="italic text-gray-600">
                                "{review.text}"
                            </p>
                            <h4 className="mt-4 font-semibold text-indigo-600">
                                {review.name}
                            </h4>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    )
}

export default Testimonials
