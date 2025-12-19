import Link from "next/link";
import CheckIcon from "@/assets/icons/check.svg"
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import grainImage from "@/assets/images/grain.jpg"
const portfolioProjects = [
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
    image: '/projects/sedjelni.PNG',
  },
];

export const ProjectsSection = () => {
    return (
        <section className="pb-16 lg:py-24">
            <div className="container">
                <p></p>
                <h2 className="font-serif text-3xl text-center">Featured Projects</h2>
                
                <div className="flex flex-col gap-20 mt-10 md:mt-16 scroll-smooth">
                    {
                        portfolioProjects.map((item, id) => (
                            <div className="bg-gray-700 top-0 rounded-[20px] overflow-hidden border-[1px] border-white/20 outline-white pb-0 md:pb-8 px-10 sticky" key={id}>
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

                                <Link href={item.link} target="_blank" className="relative z-[99]">
                                    <button className="bg-white text-gray-900 h-10 rounded-xl w-full md:w-auto md:px-8 flex items-center justify-center gap-2 text-sm hover:opacity-70 [transition:0.5s_all]">
                                      Visit Website
                                      <MdKeyboardDoubleArrowRight size={20} />
                                    </button>
                                </Link>
                                </div>
                                <div className="md:pt-14 relative z-[99]">
                                  <img src={item.image} className="rounded-t-[20px] mb-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none md:mb-0 lg:mt-0 mt-8" alt="test" />
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
