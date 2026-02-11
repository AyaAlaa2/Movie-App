import ColorBends from "../ui/ColorBends";
import GradientText from "../ui/GradientText";

const HeroHome = () => {
  return (
    <section className="relative w-full h-[100vh] overflow-hidden bg-black">
      {/* Background Animation */}
      <ColorBends
        colors={["#ff0000", "#b30000", "#4d0000"]}
        rotation={0}
        speed={0.2}
        scale={1}
        frequency={1}
        warpStrength={1}
        mouseInfluence={1}
        parallax={0.5}
        noise={0.1}
        transparent
        autoRotate={0}
        color="#ff0000"
      />

      {/* Overlay */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center text-white pointer-events-none px-4">
        <GradientText
          colors={["#000000", "#ffffff", "#ec1313"]}
          className="custom-class text-5xl md:text-6xl font-extrabold tracking-tight drop-shadow-2xl"
        >
          Movie App
        </GradientText>

        <p className="mt-5 max-w-xl text-lg md:text-xl text-gray-300">
          Discover the latest movies and TV shows in high quality with a true
          cinematic experience
        </p>
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40 z-[5]" />
    </section>
  );
};

export default HeroHome;
