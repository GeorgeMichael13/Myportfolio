import Navbar from "./components/navbar";
import Hero from "./components/hero";
import About from "./components/about";
import Project from "./components/project";
import Contact from "./components/contact";

export default function App() {
  return (
    <div className="bg-white text-black min-h-screen">
      <Navbar />
      <main className="w-full max-w-[95%] mx-auto px-6 md:px-12 lg:px-16">
        <Hero />
        <About />
        <Project />
        <Contact />
      </main>
    </div>
  );
}
