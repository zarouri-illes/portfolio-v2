import { FaHtml5, FaCss3Alt, FaReact, FaRust, FaPython, FaNodeJs } from "react-icons/fa";
import { SiJavascript, SiTailwindcss, SiExpress, SiPostgresql, SiMongodb, SiPostman, SiC } from "react-icons/si";

const tech = [
    {
        title: "HTML",
        icon: FaHtml5,
    },
    {
        title: "CSS",
        icon: FaCss3Alt,
    },
    {
        title: "Javascript",
        icon: SiJavascript,
    },
    {
        title: "Tailwind css",
        icon: SiTailwindcss,
    },
    {
        title: "Reactjs",
        icon: FaReact,
    },
    {
        title: "Rust",
        icon: FaRust,
    },
    {
        title: "Python",
        icon: FaPython,
    },
    {
        title: "Nodejs",
        icon: FaNodeJs,
    },
    {
        title: "Expressjs",
        icon: SiExpress,
    },
    {
        title: "PostgreSQL",
        icon: SiPostgresql,
    },
    {
        title: "MongoDB",
        icon: SiMongodb,
    },
    {
        title: "C Lang",
        icon: SiC,
    },
    {
        title: "Postman",
        icon: SiPostman,
    },
]

export const Tech = () => {
    return (
        <section id="tech-stack" className="pt-20 px-6 md:px-16 lg:px-64 w-full">
            <div className="max-w-2xl mx-auto md:mx-0">
                <div className="mb-4">
                    <h2 className="font-sans font-bold text-3xl md:text-[34px] tracking-tight text-white mb-2">Tech Stack</h2>
                </div>


                <div className="flex flex-wrap items-center gap-3">
                    {tech.map((item, id) => {
                        const IconComponent = item.icon;
                        return (
                            <div key={id} className="flex items-center gap-1.5 px-3 py-1.5 bg-[#ffffff0a] border border-[#ffffff15] rounded-full hover:bg-[#ffffff15] transition-colors cursor-pointer select-none">
                                <IconComponent className="text-[14px] text-[#3E70C9]" />
                                <span className="text-[12px] sm:text-[13px] text-gray-300 font-medium tracking-wide">{item.title}</span>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}