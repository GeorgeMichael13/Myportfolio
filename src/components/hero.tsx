// Hero.tsx
export default function Hero() {
  return (
    <section
      id="home"
      className="relative w-full py-16 md:py-24 lg:py-32 px-6 md:px-12 lg:px-16 overflow-hidden bg-gray-50/50"
    >
      {/* Subtle Colorful Paint Splash Background (professional but creative) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Larger, softer splashes with lower opacity than About section */}
        <svg
          className="absolute top-10 -left-40 w-[800px] h-[800px] opacity-20 animate-floatSlow"
          viewBox="0 0 400 400"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M100,50 Q250,20 350,100 Q380,200 320,300 Q250,380 150,340 Q80,300 50,200 Q70,100 100,50 Z"
            fill="#FF6B6B"
          />
          <path
            d="M120,80 Q220,60 300,120 Q320,180 280,250 Q220,320 140,280 Q100,220 120,80 Z"
            fill="#4ECDC4"
          />
          <path
            d="M180,120 Q280,100 320,180 Q300,260 220,300 Q140,280 180,120 Z"
            fill="#FFE66D"
          />
        </svg>

        <svg
          className="absolute bottom-0 -right-40 w-[900px] h-[900px] opacity-15 animate-floatDelaySlow"
          viewBox="0 0 400 400"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M200,50 Q350,80 380,200 Q350,320 250,380 Q150,350 100,280 Q80,180 200,50 Z"
            fill="#FF8EF1"
          />
          <path
            d="M180,100 Q300,120 340,200 Q320,280 260,340 Q180,320 140,240 Q120,160 180,100 Z"
            fill="#95E1D3"
          />
          <path
            d="M100,200 Q200,180 280,220 Q300,280 220,320 Q140,300 100,200 Z"
            fill="#A0A7F8"
          />
        </svg>

        {/* One smaller splash in the middle for balance */}
        <svg
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-10 animate-floatDelay2Slow"
          viewBox="0 0 400 400"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M50,100 Q180,50 300,120 Q350,200 300,300 Q200,380 100,320 Q50,250 50,100 Z"
            fill="#FFE66D"
          />
          <path
            d="M80,130 Q200,100 280,160 Q300,220 240,300 Q160,320 100,240 Q80,180 80,130 Z"
            fill="#FF6B6B"
          />
        </svg>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text */}
          <div className="order-2 md:order-1 text-center md:text-left">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold leading-tight mb-6">
              Hello, I’m{" "}
              <span className="block text-[#FF6B6B] drop-shadow-md">
                George Michael
              </span>
              <span className="block text-[#4ECDC4]">Omodara Victor</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8 max-w-2xl">
              A dedicated front-end developer passionate about crafting
              responsive, elegant websites with smooth interactions and
              enjoyable user experiences.
            </p>

            <a
              href="#contact"
              className="inline-block bg-gradient-to-r from-[#FF6B6B] to-[#FF8EF1] text-white px-10 py-4 rounded-xl font-semibold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              Get In Touch
            </a>
          </div>

          {/* Photo with colorful border */}
          <div className="order-1 md:order-2 flex justify-center md:justify-end">
            <div className="relative">
              <img
                src="/ME1.png"
                alt="George Victor"
                className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl object-contain drop-shadow-2xl animate-floatZoom"
              />
              {/* Colorful conic border */}
              <div
                className="absolute -inset-6 rounded-3xl -z-10 opacity-50"
                style={{
                  background:
                    "conic-gradient(#FF6B6B, #FFE66D, #4ECDC4, #FF8EF1, #95E1D3, #FF6B6B)",
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Slower, gentler animations for the hero */}
      <style jsx>{`
        @keyframes floatSlow {
          0%,
          100% {
            transform: translate(0, 0) rotate(0deg);
          }
          50% {
            transform: translate(20px, -30px) rotate(3deg);
          }
        }
        @keyframes floatDelaySlow {
          0%,
          100% {
            transform: translate(0, 0) rotate(0deg);
          }
          50% {
            transform: translate(-30px, 20px) rotate(-3deg);
          }
        }
        @keyframes floatDelay2Slow {
          0%,
          100% {
            transform: translate(0, 0) rotate(0deg);
          }
          50% {
            transform: translate(15px, 25px) rotate(2deg);
          }
        }
        .animate-floatSlow {
          animation: floatSlow 30s ease-in-out infinite;
        }
        .animate-floatDelaySlow {
          animation: floatDelaySlow 35s ease-in-out infinite;
        }
        .animate-floatDelay2Slow {
          animation: floatDelay2Slow 32s ease-in-out infinite;
        }
        @keyframes floatZoom {
          0%,
          100% {
            transform: translateY(0) scale(1);
          }
          50% {
            transform: translateY(-12px) scale(1.04);
          }
        }
        .animate-floatZoom {
          animation: floatZoom 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
