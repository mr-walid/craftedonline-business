import { useState } from "react";

const About = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="bg-gray-50 py-16 px-4 md:px-20 lg:px-32">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="relative">
                      <img src="https://via.placeholder.com/500x400" alt="Business Consulting" className="rounded-lg shadow-lg" />
                      <div className="absolute top-4 left-4 w-20 h-20 bg-blue-500 -z-10 transform rotate-6"></div>
                </div>

                <div>
                    <h5 className="text-blue-500 text-sm font-semibold uppercase mb-2">
                        About Us
                    </h5>
                    <h2 className="text-gray-900 text-3xl font-bold mb-4">
                        We are crafting your unique business consulting ideas
                    </h2>
                    <p className="text-gray-600 mb-6">
                        We denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms.
                    </p>

                    <div className="space-y-4">
                        {[
                            {
                                title: "Responsive & Pixel Perfect Design",
                                content:
                                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo data communication.",
                            },
                            {
                                title: "Elementor Page Builder Used",
                                content:
                                  "This project uses Elementor for creating a professional and visually appealing layout.",
                            },
                            {
                                title: "Full Website Design Concept Discussion",
                                content:
                                  "We provide full discussions to finalize design concepts and meet client expectations.",
                            },
                        ].map((item, index) => (
                            <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                                <button onClick={() => toggleAccordion(index)} className="w-full flex justify-between items-center px-4 py-3 bg-white text-gray-900">
                                    <span>{item.title}</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 text-gray-500 transform transition-transform ${ activeIndex ===index ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </button>
                                {activeIndex === index && (
                                    <div className="px-4 py-3 bg-gray-100">
                                        <p className="text-gray-600">{item.content}</p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
