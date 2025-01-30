import { Link } from 'react-router-dom';
import portfolio1 from "../assets/portfolio-bg1.jpg"
import portfolio2 from "../assets/portfolio-bg2.jpg"
import portfolio3 from "../assets/portfolio-bg3.jpg"

const Projects = () => {
    return (
        <section className="py-12 px-6 lg:h-[85vh] lg:mt-0 pt-20 w-full overflow-hidden flex justify-center items-center">
            <div className="container mx-auto text-center">
                <h3 className="text-[#128cf0] text-sm font-bold uppercase mb-2 mt-10">Projects</h3>
                <h1 className="text-4xl font-bold mb-6">Recent Portfolios</h1>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                    <div className="relative group overflow-hidden rounded-lg shadow-lg">
                        <img src={ portfolio1 } alt="Business Planning" className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300" />
                        <div className="absolute inset-0 bg-black bg-opacity-50 group-hover:bg-opacity-70 transition-all duration-300 flex items-end p-4">
                            <div className="text-white flex flex-col items-start">
                                <p className="text-sm uppercase">Shopping</p>
                                <h3 className="text-xl font-bold">E-Commerce Excellence</h3>
                                <Link to="#" className="mt-2 hover:inline-block text-sm font-bold underline">View Portfolio</Link>
                            </div>
                        </div>
                    </div>

                    <div className="relative group overflow-hidden rounded-lg shadow-lg">
                        <img src={ portfolio2 } alt="Business Planning" className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300" />
                        <div className="absolute inset-0 bg-black bg-opacity-50 group-hover:bg-opacity-70 transition-all duration-300 flex items-end p-4">
                            <div className="text-white flex flex-col items-start">
                                <p className="text-sm uppercase">Analytics</p>
                                <h3 className="text-xl font-bold">Business Insights Platform</h3>
                                <Link to="#" className="mt-2 hover:inline-block text-sm font-bold underline">View Portfolio</Link>
                            </div>
                        </div>
                    </div>

                    <div className="relative group overflow-hidden rounded-lg shadow-lg">
                        <img src={ portfolio3 } alt="Business Planning" className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300" />
                        <div className="absolute inset-0 bg-black bg-opacity-50 group-hover:bg-opacity-70 transition-all duration-300 flex items-end p-4">
                            <div className="text-white flex flex-col items-start">
                                <p className="text-sm uppercase">Design</p>
                                <h3 className="text-xl font-bold">Creative Portfolio Showcase</h3>
                                <Link to="#" className="mt-2 hover:inline-block text-sm font-bold underline">View Portfolio</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <button className="mt-8 bg-[#128cf0] text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"> View Projects </button>
            </div>
        </section>
    );
};

export default Projects;
