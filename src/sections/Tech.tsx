

const tech = [
    {
        title: "HTML",
        icon: "/icons/html.svg",
    },
    {
        title: "CSS",
        icon: "/icons/css.svg",
    },
    {
        title: "Javascript",
        icon:"/icons/js.svg",
    },
    {
        title: "Tailwind css",
        icon:"/icons/tailwindcss.svg",
    },
    {
        title: "Reactjs",
        icon:"/icons/react.svg",
    },
    {
        title: "Nextjs",
        icon:"/icons/next.svg",
    },
    {
        title: "Nodejs",
        icon:"/icons/node.svg",
    },
    {
        title: "Expressjs",
        icon:"/icons/express.svg",
    },
    {
        title: "MongoDB",
        icon:"/icons/mongo.svg",
    },
]

export const Tech = () => {
    return (
        <section className="pt-24 container">
            <div>
                <h2 className="font-serif text-3xl text-center">Teck Stack</h2>

                <div className="py-10">
                    <div className="flex items-center justify-center gap-6 md:gap-10 flex-wrap">
                        {tech.map((item, id) => (
                            <div key={id} className="flex flex-col items-center justify-center gap-2">
                                <img src={item.icon} className="w-[50px]" alt="" />
                                <h3>{item.title}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}