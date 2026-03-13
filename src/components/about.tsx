import { Github } from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      className="relative w-full py-20 md:py-28 lg:py-36 px-6 md:px-12 lg:px-16 overflow-hidden bg-gray-50/50"
    >
      {/* Background Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        <svg
          className="absolute top-20 -left-32 w-[700px] h-[700px]"
          viewBox="0 0 400 400"
        >
          <path
            d="M100,50 Q250,20 350,100 Q380,200 320,300 Q250,380 150,340 Q80,300 50,200 Q70,100 100,50 Z"
            fill="#FF6B6B"
          />
        </svg>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-extrabold mb-12">
          About <span className="text-[#FF6B6B]">Me ...</span>
        </h2>

        {/* Image floated like a magazine */}
        <img
          src="/pic2.jpg"
          alt="George Michael"
          className="float-none md:float-right 
          w-full md:w-[380px] lg:w-[420px]
          mb-8 md:mb-6 md:ml-10
          rounded-2xl shadow-2xl object-cover"
        />

        {/* Article Text */}
        <div className="text-lg md:text-xl text-gray-700 leading-relaxed space-y-6">
          <p>
            Hey there! I'm a motivated and results-driven{" "}
            <span className="font-semibold text-[#4ECDC4]">
              Frontend Engineer
            </span>{" "}
            with over 3 years of experience building scalable, responsive, and
            user-focused web applications using React.js, Next.js, TypeScript,
            and modern tools like Tailwind CSS, Firebase, and ShadCN UI.
          </p>

          <p>
            Passionate about clean architecture, performance optimization, and
            translating complex UI/UX designs into pixel-perfect code. I enjoy
            collaborating with teams, integrating REST APIs, and delivering
            solutions that users love interacting with.
          </p>

          <p>
            My background in Physics at the University of Ibadan also shaped my
            analytical thinking and problem-solving ability, allowing me to
            approach software engineering with a structured mindset.
          </p>

          {/* Education Section */}
          <div className="pt-8 space-y-5 clear-both">
            <h3 className="text-2xl font-bold text-gray-900">Education</h3>

            <div>
              <h4 className="text-xl font-semibold text-[#FF6B6B]">
                Bachelor of Physics with Honours
              </h4>
              <p className="text-gray-600">
                University of Ibadan • Feb 2021 – Dec 2025
              </p>
              <p className="text-gray-700 mt-1">
                Major coursework: Pure and Applied Physics (Atmospheric Physics)
              </p>
            </div>

            <div>
              <h4 className="text-xl font-semibold text-[#4ECDC4]">
                Frontend Development Training
              </h4>
              <p className="text-gray-600">DGICT • May 2022 – May 2023</p>
              <p className="text-gray-700 mt-1">
                Hands-on training in React.js and Tailwind CSS with real-world
                project experience and API integration.
              </p>
            </div>
          </div>

          {/* GitHub Button */}
          <div className="pt-8">
            <a
              href="https://github.com/GeorgeMichael13"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 py-4 bg-gray-900 text-white rounded-xl font-semibold text-lg shadow-lg hover:bg-gray-800 transition"
            >
              <Github size={26} />
              View My GitHub
            </a>
          </div>

          {/* Skills */}
          <div className="flex flex-wrap gap-3 pt-8">
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
                className="px-4 py-2 bg-gray-100 rounded-full text-sm font-medium border"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
