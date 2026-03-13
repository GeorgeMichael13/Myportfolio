// Projects.tsx
import { useState } from "react";

// Update these with your real data later
const projects = [
  {
    id: 1,
    title: "Project One",
    thumbnail: "/prj1.png",
    fullImage: "/prj1.png",
    technologies: ["React", "TypeScript", "Tailwind"],
    description:
      "A modern  Movie web application built with cutting-edge technologies. Focused on performance, responsive design, and smooth user interactions.",
  },
  {
    id: 2,
    title: "Project Two",
    thumbnail: "/prj2.png",
    fullImage: "/prj2.png",
    technologies: ["React", "Tailwind", "Node.js", "MongoDB"],
    description:
      "An animated Bussiness website showcase with smooth transitions and interactive elements that bring ideas to life, made in Collaboration with a Team of elite Developers .",
  },
  {
    id: 3,
    title: "Project Three",
    thumbnail: "/prj3.png",
    fullImage: "/prj3.png",
    technologies: ["React.js", "Tailwind", "Php", "Typescript"],
    description:
      "Full-stack Quiz platform with secure authentication,user dashboard.",
  },
  {
    id: 4,
    title: "Project Four",
    thumbnail: "/prj4.png",
    fullImage: "/prj4.png",
    technologies: ["React", "Tailwind", "Shadcn"],
    description:
      " I collaborated with a team to develop a company website, to showcase skills and services rendered.",
  },
  {
    id: 5,
    title: "Project Five",
    thumbnail: "/prj5.png",
    fullImage: "/prj5.png",
    technologies: ["Next.js", "Tailwind", "firebase", "Nodejs"],
    description:
      "Beautiful E-commerce website GLOWMART with API integrations. ",
  },
  {
    id: 6,
    title: "Project Six",
    thumbnail: "/prj7.png",
    fullImage: "/prj7.png",
    technologies: ["React", "tailwindCss", "HTML"],
    description: "Creative weather forcast website  .",
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<
    (typeof projects)[0] | null
  >(null);

  return (
    <section
      id="projects"
      className="relative w-full py-20 md:py-28 lg:py-36 px-6 md:px-12 lg:px-16 overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #FAF5FF 0%, #FFF7F0 50%, #F0FDFF 100%)",
      }}
    >
      {/* Subtle background splashes */}
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
      </div>

      {/* Heading */}
      <div className="relative z-10 text-center mb-16 md:mb-24">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
          My <span className="text-[#56e2ec]">Projects</span>
        </h2>
        <div className="mx-auto mt-4 w-32 h-1 bg-gradient-to-r from-[#FF8EF1] via-[#FFE66D] to-[#4ECDC4] rounded-full" />
      </div>

      {/* Project Grid - 6 bordered cards */}
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-14">
          {projects.map((project) => (
            <button
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group relative block overflow-hidden rounded-2xl border-4 border-gray-200/70 bg-white shadow-lg transition-all duration-500 hover:border-[#FF8EF1]/50 hover:shadow-2xl hover:-translate-y-3"
            >
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-8">
                <p className="text-white text-xl font-bold">
                  Click to view details
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/70 backdrop-blur-sm"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="relative max-w-5xl w-full max-h-[90vh] overflow-y-auto bg-white rounded-3xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/80 backdrop-blur flex items-center justify-center shadow-lg hover:bg-white transition"
            >
              ✕
            </button>

            {/* Modal Content */}
            <div className="p-8 md:p-12">
              <img
                src={selectedProject.fullImage}
                alt={selectedProject.title}
                className="w-full rounded-2xl shadow-xl mb-8"
              />

              <h3 className="text-3xl md:text-4xl font-extrabold mb-4">
                {selectedProject.title}
              </h3>

              {/* Technologies */}
              <div className="flex flex-wrap gap-3 mb-6">
                {selectedProject.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-5 py-2 bg-gradient-to-r from-[#FF6B6B]/10 to-[#4ECDC4]/10 text-gray-800 font-medium rounded-full border border-gray-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <p className="text-lg text-gray-700 leading-relaxed">
                {selectedProject.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
