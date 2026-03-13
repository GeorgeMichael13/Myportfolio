// Navbar.tsx
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled ? "bg-white/70 backdrop-blur-xl shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center py-6 px-6 md:px-12">
        {/* Creative Logo */}
        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">
          <span className="bg-gradient-to-r from-[#FF6B6B] via-[#FF8EF1] to-[#4ECDC4] bg-clip-text text-transparent">
            George Michael O.
          </span>
        </h1>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex gap-10 text-lg">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`relative inline-block font-medium transition-all duration-300 ${
                  scrolled ? "text-gray-800" : "text-gray-900"
                } hover:text-transparent hover:bg-gradient-to-r hover:from-[#FF6B6B] hover:to-[#4ECDC4] hover:bg-clip-text`}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
                {/* Colorful gradient underline on hover */}
                <span className="absolute left-0 -bottom-1 h-[3px] w-0 bg-gradient-to-r from-[#FF6B6B] via-[#FFE66D] to-[#4ECDC4] rounded-full transition-all duration-500 hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        {/* Hire Me Button - colorful gradient */}
        <Link
          to="/contact"
          className={`hidden md:inline-block px-7 py-3 rounded-full font-semibold text-white shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl
            bg-gradient-to-r from-[#FF6B6B] via-[#FF8EF1] to-[#4ECDC4]`}
        >
          Hire Me
        </Link>

        {/* Mobile Hamburger - colorful lines */}
        <button
          className="md:hidden z-50 relative w-8 h-8 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span
            className={`absolute block w-8 h-1 rounded-full transition-all duration-500 ${
              menuOpen || scrolled
                ? "bg-gradient-to-r from-[#FF6B6B] to-[#4ECDC4]"
                : "bg-gray-900"
            } ${menuOpen ? "top-4 rotate-45" : "top-2"}`}
          />
          <span
            className={`absolute block w-8 h-1 rounded-full top-4 transition-all duration-500 ${
              menuOpen || scrolled
                ? "bg-gradient-to-r from-[#FF6B6B] to-[#4ECDC4] opacity-0"
                : "bg-gray-900"
            }`}
          />
          <span
            className={`absolute block w-8 h-1 rounded-full transition-all duration-500 ${
              menuOpen || scrolled
                ? "bg-gradient-to-r from-[#FF6B6B] to-[#4ECDC4] top-4 -rotate-45"
                : "bg-gray-900 top-6"
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu - creative dropdown with soft background */}
      {menuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white/90 backdrop-blur-2xl shadow-2xl border-t border-gray-200/50">
          <div className="px-8 py-10 space-y-8">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block text-2xl font-medium text-gray-800 hover:text-transparent hover:bg-gradient-to-r hover:from-[#FF6B6B] hover:to-[#FFE66D] hover:bg-clip-text transition-all duration-300"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <Link
              to="/contact"
              className="inline-block mt-6 px-8 py-4 rounded-full font-bold text-white text-lg shadow-xl bg-gradient-to-r from-[#FF6B6B] via-[#FF8EF1] to-[#4ECDC4] hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
              onClick={() => setMenuOpen(false)}
            >
              Hire Me
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
