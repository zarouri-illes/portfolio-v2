import { FaGithub, FaLinkedin } from "react-icons/fa";
import Link from "next/link";

export const HeroSection = () => {
    return (
        <section id="home" className="pt-16 md:pt-24 pb-16 px-6 md:px-16 lg:px-64 w-full">
            <div className="flex flex-col items-start text-left max-w-2xl mx-auto md:mx-0">
                <h1 className="font-sans font-bold text-3xl sm:text-4xl md:text-5xl lg:text-[42px] tracking-tight text-white mb-6">
                    Hey, I'm <span className="text-[#3E70C9]">Zarouri Illes</span>!
                </h1>

                <div className="text-gray-300 text-sm sm:text-base md:text-lg font-light leading-relaxed mb-6">
                    <p className="mb-2">A Full Stack Developer combining aesthetics and technical structure.</p>
                    <p>I specialize in building applications using modern frameworks including Next.js, React, Node, and more.</p>
                </div>

                <div className="mb-12">
                    <div className="w-[150px] h-[3px] bg-[#3E70C9]">

                    </div>
                </div>

                <div className="mb-10 w-full">
                    <h3 className="text-white font-bold mb-4 text-sm tracking-wide">Find me on</h3>
                    <div className="flex flex-wrap items-center gap-6">
                        <Link href="https://github.com/zarouri-illes" target="_blank" className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors">
                            <FaGithub size={16} />
                            <span className="text-[13px] font-medium tracking-wide">GitHub</span>
                        </Link>
                        <Link href="https://www.linkedin.com/in/zarouri-illes-9a9640296/" target="_blank" className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors">
                            <FaLinkedin size={16} />
                            <span className="text-[13px] font-medium tracking-wide">LinkedIn</span>
                        </Link>
                    </div>
                </div>

                <div className="w-full">
                    <h3 className="text-white font-bold mb-3 text-sm tracking-wide">Contact</h3>
                    <p className="text-gray-300 text-sm md:text-[15px] font-light">
                        You can reach me out anytime at <a href="mailto:illeszarouri@gmail.com" className="text-white hover:text-gray-200 transition-colors border-b-[1.5px] border-[#3E70C9] font-medium pb-[1px]">illeszarouri@gmail.com</a>
                    </p>
                </div>
            </div>
        </section>
    )
};
