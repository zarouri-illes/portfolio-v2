import Link from "next/link";
import CheckIcon from "@/assets/icons/check.svg"
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import grainImage from "@/assets/images/grain.jpg"
const portfolioProjects = [
  {
    company: "Promotion Immobilière DAOUD KAMEL",
    year: "2024",
    title: "Landing Page",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa eius itaque ullam rerum amet! Ab.",
    results: [
      { title: "HTML" },
      { title: "CSS" },
      { title: "React Js" },
      { title: "Tailwindcss" },
    ],
    link: "/contact",
    image: '/pdk.jpg',
  },
  {
    company: "Innovative Co",
    year: "2021",
    title: "Light Saas Landing Page",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa eius itaque ullam rerum amet! Ab.",
    results: [
      { title: "Boosted sales by 20%" },
      { title: "Expanded customer reach by 35%" },
      { title: "Increased brand awareness by 15%" },
    ],
    link: "https://youtu.be/7hi5zwO75yc",
    image: '/pdk.jpg',
  },
  {
    company: "Quantum Dynamics",
    year: "2023",
    title: "AI Startup Landing Page",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa eius itaque ullam rerum amet! Ab.",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "https://youtu.be/Z7I5uSRHMHg",
    image: '/pdk.jpg',

  },
];

export const ProjectsSection = () => {
    return (
        <section className="pb-16 lg:py-24">
            <div className="container">
                <p></p>
                <h2 className="font-serif text-3xl text-center">Featured Projects</h2>
                
                <div className="flex flex-col gap-20 mt-10 md:mt-16">
                    {
                        portfolioProjects.map((item, id) => (
                            <div className="bg-gray-700/55 relative rounded-[20px] overflow-hidden border-[1px] border-white/20 outline-white pb-0 md:pb-8 px-10" key={id}>
                              <div className="absolute opacity-0 inset-0 z-[99]"
                                style={{
                                  backgroundImage: `url(${grainImage.src})`
                                }}
                              ></div>
                              <div className="lg:grid lg:grid-cols-2">
                                <div>
                                <div className="iniline-flex z-[99] font-bold uppercase relative tracking-widest text-sm gap-2 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-sky-400 py-8">
                                    <span className="font-sans text-md lg:text-xl mt-2">{item.company}</span>
                                </div>

                                <div className="text-gray-400 pb-8 text-sm pr-6 font-light relative z-[99]">
                                  <p>{item.description}</p>
                                </div>
                                <hr className="border-t border-white/50 z-20"/>
                                
                                <ul className="py-8 flex gap-2 flex-col relative z-[99] ">
                                    {item.results.map((list, id) => (
                                        <li key={id} className="flex items-center gap-2 justify-start">
                                          <CheckIcon className="size-4 text-white animate-[changeColor_5s_infinite]" />
                                          <span className="text-sm">{list.title}</span>
                                        </li>
                                    ))}
                                </ul>

                                <Link href={item.link} className="relative z-[99]">
                                    <button className="bg-white text-gray-900 h-10 rounded-xl w-full md:w-auto md:px-8 flex items-center justify-center gap-2 text-sm">
                                      Visit Website
                                      <MdKeyboardDoubleArrowRight size={20} />
                                    </button>
                                </Link>
                                </div>
                                <div className="md:pt-14 relative z-[99]">
                                  <img src={item.image} className="rounded-t-[20px] h-full md:mb-0 -mb-4 mt-8" alt="test" />
                                </div>
                                </div >
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    );
};
