import { useState } from "react";
import "../styles/Galleery.css";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<{
    src: string;
    alt: string;
  } | null>(null);

  return (
    <section className="mb-6">
      <h2
        className="title-gallery text-2xl font-semibold mb-4 
        bg-gradient-to-r from-pink-500 via-red-400 to-rose-600 
        text-transparent bg-clip-text drop-shadow-lg tracking-wide hover-highlight"
      >
        Pequeños Recuerdos
      </h2>

      <div className="relative w-96 h-96 mx-auto">
        <div className="absolute inset-0">
          <div className="relative w-full h-full gallery-circle">
            {/* Mantengo tus clases de posición para que el círculo no se rompa */}
            <img
              src="/asamblea.jpg"
              alt="Momento 1"
              className="circle-img top w-40 h-32 object-cover rounded-lg shadow-lg cursor-pointer"
              onClick={() =>
                setSelectedImage({
                  src: "/asamblea.jpg",
                  alt: "Vez mi mirada? Ya lo tenia planeado todo amor jaja",
                })
              }
            />
            <img
              src="/asamblea2.jpg"
              alt="Momento 2"
              className="circle-img right w-40 h-32 object-cover rounded-lg shadow-lg cursor-pointer"
              onClick={() =>
                setSelectedImage({
                  src: "/asamblea2.jpg",
                  alt: "Nuestro día de asamblea",
                })
              }
            />
            <img
              src="/grado2023.jpg"
              alt="Momento 3"
              className="circle-img bottom w-40 h-32 object-cover rounded-lg shadow-lg cursor-pointer"
              onClick={() =>
                setSelectedImage({
                  src: "/grado2023.jpg",
                  alt: "Nuestro reencuentro",
                })
              }
            />
            <img
              src="/videollmada.jpg"
              alt="Momento 4"
              className="circle-img left w-40 h-32 object-cover rounded-lg shadow-lg cursor-pointer"
              onClick={() =>
                setSelectedImage({
                  src: "/videollmada.jpg",
                  alt: "Nuestra primera videollamada jeje",
                })
              }
            />
          </div>
        </div>
      </div>

      {/* Modal flotante pequeño + overlay que solo opaca */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* overlay opaco (click fuera cierra) */}
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setSelectedImage(null)}
          />

          {/* cuadro flotante (click dentro no cierra) */}
          <div
            className="relative bg-[#1a1a1a] dark:bg-[#0d0d0dcb] rounded-xl shadow-2xl p-4 max-w-md w-[90%] z-10"
            onClick={(e) => e.stopPropagation()}
          >
            <h1 className="text-center text-1xl  mb-3 italic">
              {selectedImage.alt}
            </h1>

            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="mx-auto max-h-[60vh] w-auto rounded-md object-contain"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
