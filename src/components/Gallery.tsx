const Gallery = () => {
  return (
    <section className="mb-16">
      <h2 className="text-2xl font-semibold mb-6">Momentos Juntos</h2>
      <div className="grid grid-cols-2 gap-4">
        {/* Cambia estas imágenes por las tuyas */}
        <img
          src="/img1.jpg"
          alt="Momento 1"
          className="w-full h-40 object-cover rounded-lg shadow"
        />
        <img
          src="/img2.jpg"
          alt="Momento 2"
          className="w-full h-40 object-cover rounded-lg shadow"
        />
        <img
          src="/img3.jpg"
          alt="Momento 3"
          className="w-full h-40 object-cover rounded-lg shadow"
        />
        <img
          src="/img4.jpg"
          alt="Momento 4"
          className="w-full h-40 object-cover rounded-lg shadow"
        />
      </div>
    </section>
  );
};

export default Gallery;
