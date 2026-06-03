import { FaPhoneAlt, FaGithub, FaLinkedin } from "react-icons/fa";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer id="contact" className="w-full px-6 md:px-16 lg:px-64 py-8 mt-24 flex flex-col md:flex-row items-center justify-between text-xs sm:text-sm text-gray-400 font-medium border-t border-white/5">
      <div className="flex items-center gap-1 mb-4 md:mb-0">
        <span>by Zarouri Illes</span>
      </div>

      <div className="flex items-center gap-6">
        <Link href="#resume" className="hover:text-white transition-colors">Resume</Link>
        <Link href="#tech-stack" className="hover:text-white transition-colors">Tech Stack</Link>
        <div className="flex items-center gap-4 ml-4">
          <Link href="https://github.com/zarouri-illes" target="_blank" className="hover:text-white transition-colors">
            <FaGithub size={16} />
          </Link>
          <Link href="https://www.linkedin.com/in/zarouri-illes-9a9640296/" target="_blank" className="hover:text-white transition-colors">
            <FaLinkedin size={16} />
          </Link>
        </div>
      </div>
    </footer>
  )
};
