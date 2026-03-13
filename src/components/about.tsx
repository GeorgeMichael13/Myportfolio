// About.tsx
import { Github } from "lucide-react"; // Install lucide-react if you haven't: npm i lucide-react

export default function About() {
  return (
    <section
      id="about"
      className="relative w-full py-20 md:py-28 lg:py-36 px-6 md:px-12 lg:px-16 overflow-hidden bg-gray-50/50"
    >
      {/* Colorful Paint Splash Background (same as before) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        <svg
          className="absolute top-20 -left-32 w-[700px] h-[700px] animate-floatSlow"
          viewBox="0 0 400 400"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M100,50 Q250,20 350,100 Q380,200 320,300 Q250,380 150,340 Q80,300 50,200 Q70,100 100,50 Z"
            fill="#FF6B6B"
          />
          <path
            d="M120,80 Q220,60 300,120 Q320,180 280,250 Q220,320 140,280 Q100,220 120,80 Z"
            fill="#FFE66D"
          />
        </svg>
        <svg
          className="absolute bottom-20 -right-32 w-[800px] h-[800px] animate-floatDelaySlow"
          viewBox="0 0 400 400"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M200,50 Q350,80 380,200 Q350,320 250,380 Q150,350 100,280 Q80,180 200,50 Z"
            fill="#4ECDC4"
          />
          <path
            d="M180,100 Q300,120 340,200 Q320,280 260,340 Q180,320 140,240 Q120,160 180,100 Z"
            fill="#FF8EF1"
          />
        </svg>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Content */}
          <div className="order-2 md:order-1 space-y-8">
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
              About <span className="text-[#FF6B6B]">Me ...</span>
            </h2>

            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              Hey there! I'm a motivated and results-driven{" "}
              <span className="font-semibold text-[#4ECDC4]">
                Frontend Engineer
              </span>{" "}
              with over 3 years of experience building scalable, responsive, and
              user-focused web applications using React.js, Next.js, TypeScript,
              and modern tools like Tailwind CSS, Firebase, and ShadCN UI.
            </p>

            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              Passionate about clean architecture, performance optimization, and
              translating complex UI/UX designs into pixel-perfect code. I love
              collaborating with teams, integrating REST APIs, and delivering
              business-impacting solutions that users enjoy.
            </p>

            {/* Education */}
            <div className="space-y-6 pt-4">
              <h3 className="text-2xl font-bold text-gray-900">Education</h3>

              <div>
                <h4 className="text-xl font-semibold text-[#FF6B6B]">
                  Bachelor of Physics with Honours
                </h4>
                <p className="text-gray-600">
                  University of Ibadan • Feb 2021 – Dec 2025
                </p>
                <p className="text-gray-700 mt-1">
                  Major coursework: Pure and Applied Physics (Atmospheric
                  Physics)
                </p>
                <p className="text-sm text-gray-600 italic">
                  Thesis: "Applications of Programming in Modern Atmospheric
                  Physics"
                </p>
              </div>

              <div>
                <h4 className="text-xl font-semibold text-[#4ECDC4]">
                  Frontend Development Training
                </h4>
                <p className="text-gray-600">
                  DGICT (Dan George Integrated Concept) • May 2022 – May 2023
                </p>
                <p className="text-gray-700 mt-1">
                  Hands-on training in React.js and Tailwind CSS with practical
                  experience in API integration and state management.
                </p>
              </div>
            </div>

            {/* GitHub Link */}
            <div className="pt-6">
              <a
                href="https://github.com/GeorgeMichael13"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-6 py-4 bg-gray-900 text-white rounded-xl font-semibold text-lg shadow-lg hover:bg-gray-800 hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
              >
                <Github size={28} />
                View My GitHub
              </a>
            </div>

            {/* Skills Tags */}
            <div className="flex flex-wrap gap-4 pt-6">
              {[
                "React",
                "Next.js",
                "TypeScript",
                "Tailwind CSS",
                "Firebase",
                "REST API",
                "Git/GitHub",
                "Responsive Design",
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-5 py-3 bg-gradient-to-r from-[#FF6B6B]/10 to-[#4ECDC4]/10 text-gray-800 font-medium rounded-full border border-gray-300 hover:shadow-md transition"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Photo with Tilt & Overlap */}
          <div className="order-1 md:order-2 flex justify-center md:justify-end">
            <div className="relative">
              <img
                src="/pic2.png"
                alt="George Michael O."
                className="w-full max-w-md lg:max-w-lg rounded-2xl shadow-2xl object-cover 
                           rotate-3 md:rotate-6 hover:rotate-2 transition-transform duration-500 
                           animate-floatZoom"
              />
              <div
                className="absolute -inset-4 rounded-3xl -rotate-6 md:-rotate-3 -z-10 opacity-40"
                style={{
                  background:
                    "conic-gradient(#FF6B6B, #FFE66D, #4ECDC4, #FF8EF1, #95E1D3, #FF6B6B)",
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Animations (same as before) */}
      <style jsx>{`
        @keyframes floatSlow {
          0%,
          100% {
            transform: translate(0, 0) rotate(0deg);
          }
          50% {
            transform: translate(15px, -25px) rotate(2deg);
          }
        }
        @keyframes floatDelaySlow {
          0%,
          100% {
            transform: translate(0, 0) rotate(0deg);
          }
          50% {
            transform: translate(-20px, 20px) rotate(-2deg);
          }
        }
        .animate-floatSlow {
          animation: floatSlow 30s ease-in-out infinite;
        }
        .animate-floatDelaySlow {
          animation: floatDelaySlow 34s ease-in-out infinite;
        }
        @keyframes floatZoom {
          0%,
          100% {
            transform: translateY(0) scale(1);
          }
          50% {
            transform: translateY(-10px) scale(1.03);
          }
        }
        .animate-floatZoom {
          animation: floatZoom 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
