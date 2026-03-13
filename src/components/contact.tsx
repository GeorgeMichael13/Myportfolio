// Contact.tsx
import { useState } from "react";
import { Github, Mail, Phone, Linkedin, Send } from "lucide-react"; // optional - or use inline SVGs

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you can connect to Formspree, EmailJS, etc. later
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section
      id="contact"
      className="relative w-full py-20 md:py-28 lg:py-36 px-6 md:px-12 lg:px-16 overflow-hidden bg-gray-50/50"
    >
      {/* Subtle colorful paint splashes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        <svg
          className="absolute top-10 -left-40 w-[800px] h-[800px] animate-floatSlow"
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
        </svg>
        <svg
          className="absolute bottom-0 -right-40 w-[900px] h-[900px] animate-floatDelaySlow"
          viewBox="0 0 400 400"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M200,50 Q350,80 380,200 Q350,320 250,380 Q150,350 100,280 Q80,180 200,50 Z"
            fill="#FF8EF1"
          />
          <path
            d="M180,100 Q300,120 340,200 Q320,280 260,340 Q180,320 140,240 Q120,160 180,100 Z"
            fill="#FFE66D"
          />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
            Get In <span className="text-[#FF6B6B]">Touch</span>
          </h2>
          <div className="mx-auto mt-4 w-32 h-1 bg-gradient-to-r from-[#FF8EF1] via-[#FFE66D] to-[#4ECDC4] rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left: Contact Info + Socials */}
          <div className="space-y-10">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-gray-800">
                Let's work together!
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                I'm currently open to new opportunities and exciting projects.
                Whether you have a question or just want to say hi, feel free to
                drop me a message.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <Mail className="w-6 h-6 text-[#FF6B6B]" />
                <a
                  href="mailto:michaelgomodara@gmail.com"
                  className="text-lg text-gray-700 hover:text-[#FF6B6B] transition"
                >
                  michaelgomodara@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="w-6 h-6 text-[#4ECDC4]" />
                <span className="text-lg text-gray-700">07069388250</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-6">
              <a
                href="https://github.com/GeorgeMichael13"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition"
              >
                <Github size={24} />
              </a>
              <a
                href="https://linkedin.com/in/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-[#0A66C2] text-white rounded-full hover:opacity-90 transition"
              >
                <Linkedin size={24} />
              </a>
              {/* Add Twitter, etc. */}
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl p-8 md:p-10">
            {submitted ? (
              <div className="text-center py-10">
                <p className="text-2xl font-bold text-[#4ECDC4]">
                  Thank you! I'll get back to you soon 🎉
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <input
                  type="text"
                  placeholder="Your Name"
                  required
                  className="w-full px-6 py-4 rounded-xl border border-gray-300 focus:border-[#FF8EF1] focus:outline-none transition"
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  required
                  className="w-full px-6 py-4 rounded-xl border border-gray-300 focus:border-[#4ECDC4] focus:outline-none transition"
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
                <textarea
                  rows={6}
                  placeholder="Your Message"
                  required
                  className="w-full px-6 py-4 rounded-xl border border-gray-300 focus:border-[#FFE66D] focus:outline-none transition resize-none"
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                />
                <button
                  type="submit"
                  className="w-full py-4 rounded-xl font-bold text-white bg-gradient-to-r from-[#FF6B6B] via-[#FF8EF1] to-[#4ECDC4] shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3"
                >
                  Send Message <Send size={20} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Same floating animations */}
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
        .animate-floatSlow {
          animation: floatSlow 32s ease-in-out infinite;
        }
        .animate-floatDelaySlow {
          animation: floatDelaySlow 36s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
