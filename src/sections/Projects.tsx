import Link from "next/link";
import CheckIcon from "@/assets/icons/check.svg"
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const portfolioProjects = [
  {
    company: "Promotion Immobilière DAOUD KAMEL",
    year: "2024",
    title: "Landing Page",
    results: [
      { title: "HTML" },
      { title: "CSS" },
      { title: "React Js" },
      { title: "Tailwindcss" },
    ],
    link: "#",
    image: '/pdk.jpg',
  },
  {
    company: "Innovative Co",
    year: "2021",
    title: "Light Saas Landing Page",
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
        <div>
            <div className="container">
                <p></p>
                <h2 className="font-serif text-3xl text-center">Featured Projects</h2>
                <img src="@/assets/images/hero.png" alt="" />
                <div className="flex flex-col mt-10">
                    {
                        portfolioProjects.map((item, id) => (
                            <div className="bg-gray-800 after:rounded-t-3xl relative after:content-[''] after:absolute after:inset-0 after:z-10 rounded-t-[20px] overflow-hidden after:outline after:outline-2 after:outline-offset-2 after:outline-white/20 px-8" key={id}>
                                <div className="iniline-flex font-bold uppercase tracking-widest text-sm gap-2 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-sky-400 py-8">
                                    <span className="font-sans text-md lg:text-xl mt-2">{item.company}</span>
                                </div>

                                
                                <hr className="border-t border-white/5"/>
                                <ul className="py-8 flex gap-2 flex-col ">
                                    {item.results.map((list, id) => (
                                        <li key={id} className="flex items-center gap-2 justify-start">
                                          <CheckIcon className="size-4 text-white animate-[changeColor_5s_infinite]" />
                                          <span className="text-sm">{list.title}</span>
                                        </li>
                                    ))}
                                </ul>
                                <Link href={item.link}>
                                    <button className="bg-white text-gray-900 h-10 rounded-xl w-full flex items-center justify-center gap-2 text-sm">
                                      Visit Website
                                      <MdKeyboardDoubleArrowRight size={20} />
                                    </button>
                                </Link>
                                <div className="pt-8">
                                  <img src={item.image} className="rounded-t-[20px] -mb-4 mt-4" alt="test" />
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};
