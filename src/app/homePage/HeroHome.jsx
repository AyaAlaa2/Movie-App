import LiquidEther from "../../components/ui/LiquidEther";

const HeroHome = () => {
  return (
    <section className="relative w-full h-[600px] overflow-hidden bg-black">
      
      {/* Background Animation */}
      <LiquidEther
      colors={["#ff4d4d", "#ff1a1a", "#cc0000"]}
color0="#ff4d4d"
color1="#ff1a1a"
color2="#cc0000"

        mouseForce={15}
        autoIntensity={1.6}
        viscous={25}
      />

      {/* Overlay */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center text-white pointer-events-none px-4">
        
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight drop-shadow-2xl">
          Movie App
        </h1>

        <p className="mt-5 max-w-xl text-lg md:text-xl text-gray-300">
         Discover the latest movies and TV shows in high quality with a true cinematic experience
        </p>

        <div className="mt-8 flex gap-4 pointer-events-auto">
          <button className="bg-red-600 hover:bg-red-700 transition px-6 py-3 rounded-full font-semibold">
            Explore Movies
          </button>

          <button className="border border-red-600 text-red-500 hover:bg-red-600 hover:text-white transition px-6 py-3 rounded-full font-semibold">
            Watch Trailer
          </button>
        </div>
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40 z-[5]" />
    </section>
  );
};

export default HeroHome;
