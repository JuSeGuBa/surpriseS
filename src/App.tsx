import Hero from "./components/Hero";
import Story from "./components/Story";
import Gallery from "./components/Gallery";
import Secret from "./components/Secret";

function App() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-4 font-sans text-center">
      <div className="w-full max-w-2xl">
        <Hero />
        <Story />
        <Gallery />
        <Secret />
        {/* <footer className=" text-gray-500">
          <p>Hecho con 💻 + ❤️ para ti</p>
        </footer> */}
      </div>
    </main>
  );
}

export default App;
