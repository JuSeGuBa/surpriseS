import "../styles/hero.css";

const Hero = () => {
  return (
    <section className="mb-16 text-center">
      <h2
        className="text-4xl md:text-6xl font-extrabold mb-6 
        bg-gradient-to-r from-pink-500 via-red-400 to-rose-600 
        text-transparent bg-clip-text drop-shadow-lg tracking-wide hover-soft hover-highlight"
      >
        Mi Bebé Hermosa 👑
      </h2>

      <p className="max-w-xl mx-auto text-lg md:text-xl text-white leading-relaxed hover-soft">
        <span className="light">
          {" "}
          Desde entonces mi amor es por ti <br /> Porque al mirarte logré
          descubrir un mundo nuevo <br /> Donde plenamente soy feliz{" "}
        </span>
        <br /> Y por eso serás para mí
        <br />
        <span
          className="md:text-5xl font-extrabold  
          bg-gradient-to-r from-pink-500 via-red-400 to-rose-600 
          text-transparent bg-clip-text drop-shadow-lg tracking-wide hover-highlight"
        >
          Mi Amor Eterno
        </span>
      </p>
    </section>
  );
};

export default Hero;
