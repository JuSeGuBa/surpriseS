import { useState } from "react";

const Secret = () => {
  const [showMessage, setShowMessage] = useState(false);

  return (
    <section className="mb-16">
      <h2 className="text-2xl font-semibold mb-4">Un pequeño secreto...</h2>
      {!showMessage ? (
        <button
          onClick={() => setShowMessage(true)}
          className="px-6 py-2 bg-pink-500 hover:bg-pink-600 text-white rounded-lg shadow transition"
        >
          Hazme clic 💌
        </button>
      ) : (
        <p className="text-xl text-pink-600 mt-4 animate-bounce">
          Te amo hasta el infinito ✨
        </p>
      )}
    </section>
  );
};

export default Secret;
