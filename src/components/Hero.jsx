import hero_bg from "../assets/hero-bg.mp4";

function Hero() {
    return (
        <div className="relative h-[85vh] w-full overflow-hidden flex flex-col justify-center items-center gap-6">
            <div className="text-center">
                <h1 className="text-4xl font-bold mb-4">Welcome to Your Blank App</h1>
                
                <video autoPlay loop muted playsInline className="absolute top-0 left-0 w-full h-full object-cover">
                    <p className="text-xl text-gray-600">Start building your amazing project here!</p>
                    <source src={hero_bg} type="video/mp4" />
                        Your browser does not support the video tag.
                </video>

                <div className="video-overlay absolute inset-0 z-10"></div>
                <div className="grain-overlay absolute inset-0 z-20"></div>
                
                <div className="relative z-30 h-full flex flex-col items-center justify-center px-4 text-center">
                    <p className="text-white/90 text-lg md:text-xl mb-4 animate-float">
                        Empowering Your Digital Dreams
                    </p>

                    <h1 className="text-white text-4xl md:text-6xl font-bold mb-8 animate-fade-up">
                        Crafting Websites That Build Success
                    </h1>

                    <button className="glow-button bg-[#9b87f5] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#128cf0] transition">
                        Get Started Today!
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Hero
