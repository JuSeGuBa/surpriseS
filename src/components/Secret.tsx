import { useState } from "react";

const Secret = () => {
  const [step, setStep] = useState(0);
  const [showPopup, setShowPopup] = useState(false);

  const messages = [
    "¿Estás lista hermosa? 👑",
    "¿Segura??? 😬",
    "¿De veras?? 🫨",
    "¿De veritas?? 😏",
    "jaja bueno ya 😘",
    "Te amo más que a mi propia vida. Eres mi todo, mi amor eterno, lo mejor que me ha sucedido. Sin ti no sería nada… porque tú eres mi regalo más hermoso, mi razón de ser, y te amo con todas mis fuerzas. ❤️‍🩹",
  ];

  const handleClick = () => {
    if (!showPopup) {
      setShowPopup(true);
    } else if (step < messages.length - 1) {
      setStep(step + 1);
    }
  };

  return (
    <section className="mb-16 relative" style={{ padding: "3rem" }}>
      <h2
        className="text-2xl font-semibold mb-4 title-gallery 
        bg-gradient-to-r from-pink-500 via-red-400 to-rose-600 
        text-transparent bg-clip-text drop-shadow-lg tracking-wide hover-highlight"
      >
        Un pequeño secreto...
      </h2>

      <button
        onClick={handleClick}
        className="px-6 py-2 bg-pink-500 hover:bg-pink-600 text-white rounded-lg shadow transition"
      >
        Hazme click 💌
      </button>

      {/* POPUP */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50 backdrop-blur-sm">
          <div
            className="relative rounded-2xl shadow-2xl p-8 max-w-md text-center animate-zoom
                          bg-gradient-to-br from-gray-900 via-pink-900/70 to-black/90 border border-pink-600/30"
          >
            <h3
              className={`text-xl md:text-2xl font-semibold leading-relaxed 
                ${step === messages.length - 1 ? "text-pink-300 animate-bounce" : "text-pink-100"}`}
            >
              {messages[step]}
            </h3>

            {/* Corazoncitos flotando solo en el último mensaje */}
            {step === messages.length - 1 &&
              [...Array(15)].map((_, i) => (
                <span
                  key={i}
                  className="absolute text-pink-400 animate-float"
                  style={{
                    left: `${Math.random() * 100}%`,
                    bottom: "-20px",
                    fontSize: `${Math.random() * 20 + 15}px`,
                    animationDuration: `${Math.random() * 3 + 2}s`,
                  }}
                >
                  ❤️‍🩹
                </span>
              ))}

            <div className="mt-6 flex justify-center gap-4">
              {step < messages.length - 1 ? (
                <button
                  onClick={handleClick}
                  className="px-4 py-2 bg-pink-600 hover:bg-pink-700 text-white rounded-lg shadow-md"
                >
                  Siguiente 😗
                </button>
              ) : (
                <button
                  onClick={() => {
                    setShowPopup(false);
                    setStep(0);
                  }}
                  className="px-4 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded-lg shadow-md"
                >
                  Cerrar 👑
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Secret;
