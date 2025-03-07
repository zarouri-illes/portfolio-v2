import Image from "next/image";
import heroImage from '@/assets/images/hero.png'
import { FaGithub, FaLinkedin  } from "react-icons/fa";
import { HeroOrbit } from "@/components/HeroOrbit";
import Spark from '@/assets/icons/sparkle.svg'
import Star3 from '@/assets/icons/star.svg'
import Link from "next/link";


export const HeroSection = () => {
    return (
        <div className="py-32 md:py-48 lg:py-60 relative z-0 overflow-x-clip">
            <div className="inset-0 absolute [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]">
           

            <div className="size-[620px] hero-ring"></div>
            <div className="size-[820px] hero-ring"></div>
            <div className="size-[1020px] hero-ring"></div>
            <div className="size-[1220px] hero-ring"></div>

            <HeroOrbit size={800} rotation={-75}>
                <Star3 className="size-28 animate-[glow_5s_infinite]"/>
            </HeroOrbit>

            <HeroOrbit size={550} rotation={20}>
                <Star3 className="size-12 animate-[glow_5s_infinite]"/>
            </HeroOrbit>

            <HeroOrbit size={590} rotation={98}>
                <Star3 className="size-8 animate-[glow_5s_infinite]"/>
            </HeroOrbit>

            <HeroOrbit size={430} rotation={-14}>
                <Spark className="size-8 text-pink-500 animate-[glow_5s_infinite]"/>
            </HeroOrbit>

            <HeroOrbit size={440} rotation={80}>
                <Spark className="size-10 text-purple-500 animate-[glow_5s_infinite]"/>
            </HeroOrbit>

            <HeroOrbit size={530} rotation={180}>
                <Spark className="size-10 text-sky-500 animate-[glow_5s_infinite]"/>
            </HeroOrbit>

            <HeroOrbit size={710} rotation={114}>
                <Spark className="size-14 text-pink-500 animate-[glow_5s_infinite]"/>
            </HeroOrbit>
            </div>
            

            <div className="container">
                <div className="flex flex-col items-center">
                    <Image
                        className="size-[100px]"
                        src={heroImage}
                        alt="Zarouri Illes"
                    />
                </div>
                <div className="max-w-lg mx-auto">
                    <h1 className="font-serif text-4xl md:text-4xl text-center mt-8 tracking-wide">Zarouri Illes<br /> Full Stack Developer</h1>
                    <div className="pt-8 flex items-center gap-6 justify-center">
                        <Link href="https://github.com/zarouri-illes" target="_blank" className="flex items-center justify-center gap-2">
                            <FaGithub size={40} className="animate-[glow_5s_infinite]"/>
                        </Link>
                        <Link href="https://www.linkedin.com/in/zarouri-illes-9a9640296/" target="_blank" className="flex items-center justify-center gap-2">
                            <FaLinkedin size={40} className="animate-[glow_5s_infinite]"/>
                        </Link>
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center mt-8">
                    <a href="#_" className="relative p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-md">
                        <span className="w-full h-full bg-gradient-to-br from-sky-500 via-pink-500  to-purple-500 group-hover:from-purple-500 group-hover:via-pink-500  group-hover:to-sky-500 absolute"></span>
                            <span className="relative px-14 py-2 transition-all ease-out bg-gray-700 rounded-md group-hover:bg-opacity-0 duration-400">
                            <span className="relative text-white font-bold">Check my projects</span>
                        </span>
                    </a>
                </div>
            </div>
        </div>
    )
};
