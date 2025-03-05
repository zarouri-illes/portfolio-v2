import { MdEmail } from "react-icons/md";
import { FaPhoneAlt, FaGithub, FaLinkedin } from "react-icons/fa";
import Link from "next/link";

export const Footer = () => {
  return (
    <div className="flex justify-center px-[340px] items-center z-[999] w-full mt-24">
      <footer className="flex border-purple-500 gap-4 justify-between px-12 w-full p-0.5  border-white/10 border bg-white/10 backdrop-blur rounded-[10px] rounded-b-none ">
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r via-pink-500 from-purple-500 to-sky-500 rounded-b-[20px]"></div>
      <div className="flex items-center py-3 gap-6 w-full">
        <p className="flex items-center gap-2"><MdEmail size={20}/>illeszarouri@gmail.com</p>
        <p className="flex items-center gap-2"><FaPhoneAlt size={20} />0793080567</p>
      </div>

      <div className="flex items-center gap-6">
        <Link href="https://github.com/zarouri-illes" target="_blank" className="flex items-center justify-center gap-2">
          <FaGithub size={30}/>
        </Link>
        <Link href="https://www.linkedin.com/in/zarouri-illes-9a9640296/" target="_blank" className="flex items-center justify-center gap-2">
          <FaLinkedin size={30}/>
        </Link>
      </div>
    </footer> 
    </div>
  )
};
