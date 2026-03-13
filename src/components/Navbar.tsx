// Navbar.tsx
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");

  const links = ["home", "about", "projects", "contact"];

  // Scroll effect for background
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Active link highlight
      links.forEach((link) => {
        const section = document.getElementById(link);
        if (section) {
          const top = section.offsetTop - 100;
          const bottom = top + section.offsetHeight;
          if (window.scrollY >= top && window.scrollY < bottom) {
            setActive(link);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "backdrop-blur-md bg-white/70 shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 flex justify-between items-center h-20">
        {/* Logo / Name */}
        <a
          href="#home"
          className="text-2xl md:text-3xl font-extrabold text-[#FF6B6B]"
        >
          George<span className="text-[#4ECDC4]">Michael O.</span>
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 font-medium text-gray-800">
          {links.map((link) => (
            <li key={link}>
              <a
                href={`#${link}`}
                className={`transition-all duration-200 hover:scale-105 ${
                  active === link
                    ? "text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B6B] via-[#FF8EF1] to-[#4ECDC4] font-bold"
                    : "hover:text-[#FF6B6B]"
                }`}
              >
                {link.charAt(0).toUpperCase() + link.slice(1)}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-0 right-0 h-full w-2/3 bg-white/95 backdrop-blur-lg shadow-lg transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <ul className="flex flex-col mt-24 gap-8 px-8 text-gray-800 font-semibold text-lg">
          {links.map((link) => (
            <li key={link}>
              <a
                href={`#${link}`}
                className="hover:text-[#FF6B6B] transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                {link.charAt(0).toUpperCase() + link.slice(1)}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
