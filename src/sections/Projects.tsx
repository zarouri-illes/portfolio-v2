import Link from "next/link";

const portfolioProjects = [
  {
    company: "Promotion Immobilière DAOUD KAMEL",
    year: "2024",
    title: "Landing Page",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "https://youtu.be/4k7IdSLxh6w",
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
                            <div className="bg-gray-800 after:rounded-3xl relative after:content-[''] after:absolute after:inset-0 after:z-10 overflow-hidden after:outline after:outline-2 after:outline-offset-2 after:outline-white/20" key={id}>
                                <div>
                                    <span>{item.company}</span>
                                    <span>{item.year}</span>
                                </div>

                                <h3>{item.title}</h3>
                                <ul>
                                    {item.results.map((list, id) => (
                                        <li key={id}>{}</li>
                                    ))}
                                </ul>
                                <Link href={item.link}/>
                                <img src={item.image} alt="test" />
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};
