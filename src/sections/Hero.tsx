import Image from "next/image";
import heroImage from '@/assets/images/hero.png'
import ArrowDown from '@/assets/icons/arrow-down.svg'
import grainImage from '@/assets/images/grain.jpg'
import { HeroOrbit } from "@/components/HeroOrbit";
import Spark from '@/assets/icons/sparkle.svg'
import Star3 from '@/assets/icons/star.svg'


export const HeroSection = () => {
    return (
        <div className="py-32 md:py-48 lg:py-60 relative z-0 overflow-x-clip">
            <div className="inset-0 absolute [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]">
            <div className="absolute inset-0 z-[-30] opacity-5 " style={{
                backgroundImage: `url(${grainImage.src})`
            }}>
            </div>

            <div className="size-[620px] hero-ring"></div>
            <div className="size-[820px] hero-ring"></div>
            <div className="size-[1020px] hero-ring"></div>
            <div className="size-[1220px] hero-ring"></div>

            <HeroOrbit size={800} rotation={-75}>
                <Star3 className="size-28"/>
            </HeroOrbit>

            <HeroOrbit size={550} rotation={20}>
                <Star3 className="size-12 text-white/60"/>
            </HeroOrbit>

            <HeroOrbit size={590} rotation={98}>
                <Star3 className="size-8"/>
            </HeroOrbit>

            <HeroOrbit size={430} rotation={-14}>
                <Spark className="size-8 text-white/40"/>
            </HeroOrbit>

            <HeroOrbit size={440} rotation={80}>
                <Spark className="size-10 text-white/50"/>
            </HeroOrbit>

            <HeroOrbit size={530} rotation={180}>
                <Spark className="size-10 text-white/10"/>
            </HeroOrbit>

            <HeroOrbit size={710} rotation={114}>
                <Spark className="size-14 text-white/10"/>
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
                    <h1 className="font-serif text-4xl md:text-5xl text-center mt-8 tracking-wide">Front-end Developer & Designer</h1>
                    <p className="font-light mt-4 md:text-lg text-white/90 text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit provident ipsa asperiores quia! Incidunt, fugit?</p>
                </div>
                <div className="flex flex-col items-center justify-center mt-4">
                    <button className="inline-flex gap-2 items-center border border-white/50 px-8 py-2 rounded-full">
                        <span className="font-semibold">Check out my Projects</span>
                        <ArrowDown className="size-4" />
                    </button>
                </div>
            </div>
        </div>
    )
};
