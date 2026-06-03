"use client";

import { useState, useCallback } from "react";
import Link from "next/link";
import { HiMiniCodeBracket } from "react-icons/hi2";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { FaGithub, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import grainImage from "@/assets/images/grain.jpg"

const portfolioProjects = [
  {
    company: "BacPrep Hub",
    description: "A full-stack educational web platform offering interactive quiz engines, an AI chatbot powered by Gemini API, and dynamic performance tracking for Algerian Baccalaureate students.",
    results: [
      { title: "React, Tailwind CSS & Framer Motion" },
      { title: "Node.js, PostgreSQL & Prisma ORM" },
      { title: "Gemini AI Chatbot Integration" },
      { title: "Chargily Pay SDK (Atomic Transactions)" },
    ],
    link: "https://bacprephub.vercel.app/",
    github: "#",
    image: '/projects/bacprep.png',
  },
  {
    company: "Promotion Immobilière DAOUD KAMEL",
    description: "Landing page show cases 'Promotion Immobilière DAOUD KAMEL' (A real estate agency based in Bouira) and It's services.",
    results: [
      { title: "HTML" },
      { title: "CSS" },
      { title: "React Js" },
      { title: "Tailwindcss" },
    ],
    link: "https://promotiondaoudkamel.com/",
    github: "#",
    image: '/projects/dk.jpg',
  },
  {
    company: "Ose it",
    description: "An early version of the landing page of Ose it, (A center that offers courses for kids in new technologies)",
    results: [
      { title: "HTML" },
      { title: "CSS" },
      { title: "React Js" },
      { title: "Tailwindcss" }
    ],
    link: "https://ose-it-v1.vercel.app/",
    github: "#",
    image: '/projects/oseit.JPG',
  },
  {
    company: "ambully",
    description: "My entry with the CtrlAltDel_Team in the MicroClub hackathon, Its an application that connects police and health departement in urgent cases.",
    results: [
      { title: "React Js" },
      { title: "Tailwindcss" },
      { title: "Next Js" },
      { title: "Node Js" },
      { title: "Express js" },
      { title: "MongoDB" },
    ],
    link: "https://emergify.vercel.app/",
    github: "https://github.com/zarouri-illes/Emergify",
    image: '/projects/ambully.JPG',
  },
  {
    company: "EduAccess",
    description: "My entry with the CtrlAltDel_Team in the MicroClub hackathon, Its an application that connects police and health departement in urgent cases.",
    results: [
      { title: "HTML" },
      { title: "CSS" },
      { title: "React Js" },
      { title: "Tailwindcss" },
    ],
    link: "https://edu-access.vercel.app/",
    github: "",
    image: '/projects/edd.JPG',
  },
  {
    company: "SEDJELNI",
    description: "A small software that I made to solve the problem of tickets and long waiting lines in Algeria, Made it in 2021",
    results: [
      { title: "HTML" },
      { title: "CSS" },
      { title: "jQuery" },
    ],
    link: "https://sedjelni.vercel.app/Sedjelni.html",
    github: "https://github.com/zarouri-illes/Sedjelni",
    image: '/projects/sedjelni.PNG',
  },
];

export const ProjectsSection = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState<"left" | "right" | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const total = portfolioProjects.length;

  const animate = useCallback((newIndex: number, dir: "left" | "right") => {
    if (isAnimating) return;
    setIsAnimating(true);
    setDirection(dir);

    setTimeout(() => {
      setCurrent(newIndex);
      setDirection(null);
      setIsAnimating(false);
    }, 350);
  }, [isAnimating]);

  const prev = () => animate(current === 0 ? total - 1 : current - 1, "right");
  const next = () => animate(current === total - 1 ? 0 : current + 1, "left");

  const item = portfolioProjects[current];

  const slideClass = direction === "left"
    ? "animate-slide-out-left"
    : direction === "right"
      ? "animate-slide-out-right"
      : "animate-slide-in";

  return (
    <section id="projects" className="pb-16 lg:py-24 px-4 sm:px-6 md:px-16 lg:px-64 overflow-hidden">
      <div className="max-w-5xl mx-auto md:mx-0">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 md:mb-14 gap-4">
          <h2 className="font-sans font-bold text-2xl sm:text-3xl md:text-[34px] tracking-tight text-white">Featured Projects</h2>
          <div className="flex items-center gap-3">
            <button onClick={prev} disabled={isAnimating} className="size-10 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:text-white hover:border-[#3E70C9] transition-all duration-300 disabled:opacity-30" aria-label="Previous project">
              <FaChevronLeft size={14} />
            </button>
            <span className="text-gray-500 text-sm font-medium tabular-nums min-w-[40px] text-center select-none">{current + 1} / {total}</span>
            <button onClick={next} disabled={isAnimating} className="size-10 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:text-white hover:border-[#3E70C9] transition-all duration-300 disabled:opacity-30" aria-label="Next project">
              <FaChevronRight size={14} />
            </button>
          </div>
        </div>

        {/* Card */}
        <div className={`relative bg-[#0f1629] rounded-3xl overflow-hidden border border-gray-800 transition-all duration-300 shadow-md min-h-[500px] sm:min-h-[480px] md:min-h-[420px] lg:min-h-[400px] ${slideClass}`}>
          <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none"
            style={{ backgroundImage: `url(${grainImage.src})` }}
          ></div>

          <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 relative z-10 w-full h-full p-5 sm:p-6 md:p-8">
            {/* Text Content */}
            <div className="flex-1 flex flex-col justify-between min-h-0">
              <div>
                <h3 className="font-bold text-xl sm:text-2xl lg:text-3xl text-[#3E70C9] mb-3 lg:mb-4">
                  {item.company}
                </h3>
                <p className="text-gray-300 text-xs sm:text-sm md:text-base font-light leading-relaxed mb-5 md:mb-6 line-clamp-3">
                  {item.description}
                </p>

                <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-5 md:mb-6">
                  {item.results.map((list, id) => (
                    <span key={id} className="text-[11px] sm:text-xs md:text-sm px-2 sm:px-3 py-1 sm:py-1.5 bg-white/5 rounded-full border border-white/10 flex items-center gap-1 sm:gap-1.5 text-gray-200">
                      <HiMiniCodeBracket className="size-2.5 sm:size-3 text-[#3E70C9]" />
                      {list.title}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
                <Link href={item.link} target="_blank">
                  <button className="bg-white hover:bg-gray-200 text-gray-900 h-9 sm:h-11 rounded-xl px-5 sm:px-8 flex items-center justify-center gap-2 text-xs sm:text-sm font-semibold transition-all duration-300">
                    Visit Website
                    <MdKeyboardDoubleArrowRight size={18} />
                  </button>
                </Link>
                <Link href={item.github} target="_blank">
                  <button className="bg-transparent hover:bg-white/10 text-white h-9 sm:h-11 rounded-xl px-4 sm:px-6 flex items-center justify-center gap-2 text-xs sm:text-sm font-semibold transition-all duration-300 border border-gray-700 hover:border-[#3E70C9]">
                    <FaGithub size={16} />
                    GitHub
                  </button>
                </Link>
              </div>
            </div>

            {/* Image */}
            <div className="flex-1 w-full rounded-2xl overflow-hidden h-[200px] sm:h-[220px] lg:h-auto lg:min-h-[280px] relative">
              <img
                src={item.image}
                className="w-full h-full object-cover object-top absolute inset-0 border border-white/10 rounded-2xl"
                alt={item.company}
              />
            </div>
          </div>
        </div>

        {/* Dot indicators */}
        <div className="flex items-center justify-center gap-2 mt-6">
          {portfolioProjects.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                if (i === current || isAnimating) return;
                animate(i, i > current ? "left" : "right");
              }}
              className={`rounded-full transition-all duration-300 ${i === current
                ? "w-6 h-2 bg-[#3E70C9]"
                : "size-2 bg-gray-700 hover:bg-gray-500"
                }`}
              aria-label={`Go to project ${i + 1}`}
            />
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes slideOutLeft {
          from { transform: translateX(0); opacity: 1; }
          to { transform: translateX(-60px); opacity: 0; }
        }
        @keyframes slideOutRight {
          from { transform: translateX(0); opacity: 1; }
          to { transform: translateX(60px); opacity: 0; }
        }
        @keyframes slideIn {
          from { transform: translateX(30px); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        .animate-slide-out-left {
          animation: slideOutLeft 0.35s ease-in-out forwards;
        }
        .animate-slide-out-right {
          animation: slideOutRight 0.35s ease-in-out forwards;
        }
        .animate-slide-in {
          animation: slideIn 0.3s ease-out forwards;
        }
      `}</style>
    </section>
  );
};
