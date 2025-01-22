import hero_bg from '../assets/hero-bg.mp4';
import Services from './Services';

function Hero() {
  return (
    <div className='w-full'>
      {/* Background video */}
      <div className='relative w-full'>
        <video
          autoPlay
          loop
          muted
          playsInline
          className='absolute top-0 left-0 w-full h-full object-cover z-0'
        >
          <source
            src={hero_bg}
            type='video/mp4'
          />
          Your browser does not support the video tag.
        </video>

        {/* Overlay to make text more readable */}
        <div className='video-overlay absolute inset-0 z-10 bg-black opacity-50'></div>

        {/* Main content */}
        <div className='relative z-20 h-[85vh] flex flex-col justify-center items-center text-center px-4'>
          <h1 className='text-4xl font-bold text-white mb-4'>
            Welcome to Your Blank App
          </h1>
          <p className='text-xl text-white mb-4'>
            Start building your amazing project here!
          </p>

          <p className='text-white/90 text-lg md:text-xl mb-4 animate-float'>
            Empowering Your Digital Dreams
          </p>

          <h1 className='text-white text-4xl md:text-6xl font-bold mb-8 animate-fade-up'>
            Crafting Websites That Build Success
          </h1>

          <button className='glow-button bg-[#9b87f5] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#128cf0] transition'>
            Get Started Today!
          </button>
        </div>
      </div>

      <div className='mt-12'>
        <Services />
      </div>
    </div>
  );
}

export default Hero;
