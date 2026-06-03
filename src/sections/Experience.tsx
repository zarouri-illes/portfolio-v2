export const Experience = () => {
    return (
        <section id="resume" className="pt-20 px-6 md:px-16 lg:px-64 w-full">
            <div className="max-w-3xl mx-auto md:mx-0">
                <div className="mb-8">
                    <h2 className="font-sans font-bold text-3xl md:text-[34px] tracking-tight text-white mb-2">My Resume / CV</h2>

                </div>

                <div className="mb-8">
                    <h3 className="font-sans font-bold text-2xl tracking-tight text-white">Work History</h3>
                </div>

                <div className="flex flex-col border-l-[1.5px] border-gray-800 ml-2.5">

                    {/* Item 1 */}
                    <div className="relative pl-8 pb-12">
                        <span className="absolute -left-[5.5px] top-1.5 size-2.5 rounded-full bg-[#3E70C9] ring-4 ring-[#0a0f1c]"></span>
                        <h4 className="text-white font-bold text-lg mb-1">Full-Stack Web Developer</h4>
                        <div className="text-gray-400 text-sm mb-4 flex items-center gap-2 font-medium tracking-wide">
                            <span>Independent & Freelance</span> &bull; <span>Worldwide</span>
                        </div>
                        <ul className="text-gray-300 text-[14px] md:text-[15px] font-light leading-relaxed list-disc list-outside ml-4 space-y-2">
                            <li>Developed a real estate management platform from the ground up, implementing residence and apartment management systems, and database architecture.</li>
                            <li>Engineered role-based authentication/authorization, RESTful APIs, custom routing strategies, and administrative dashboards.</li>
                            <li>Executed database modeling in both NoSQL and relational environments (MongoDB, Mongoose, and PostgreSQL).</li>
                            <li>Translated business needs into technical solutions using React, Next.js, Node.js, Express.js, TypeScript, and Git-based version control workflows.</li>
                            <li>Architected AI-powered business tools, including WhatsApp customer support automation and SaaS dashboard designs.</li>
                        </ul>
                    </div>

                    {/* Item 2 */}
                    <div className="relative pl-8 pb-12">
                        <span className="absolute -left-[5.5px] top-1.5 size-2.5 rounded-full bg-[#3E70C9] ring-4 ring-[#0a0f1c]"></span>
                        <h4 className="text-white font-bold text-lg mb-1">Digital Content & Marketing Manager</h4>
                        <div className="text-gray-400 text-sm mb-4 flex items-center gap-2 font-medium tracking-wide">
                            <span>Promotion Immobilière DAOUD KAMEL</span>
                        </div>
                        <ul className="text-gray-300 text-[14px] md:text-[15px] font-light leading-relaxed list-disc list-outside ml-4 space-y-2">
                            <li>Managed digital content and structured modern marketing funnels for a real estate agency.</li>
                            <li>Created promotional campaigns and managed daily social media content systems.</li>
                        </ul>
                    </div>

                    {/* Item 3 */}
                    <div className="relative pl-8">
                        <span className="absolute -left-[5.5px] top-1.5 size-2.5 rounded-full bg-[#3E70C9] ring-4 ring-[#0a0f1c]"></span>
                        <h4 className="text-white font-bold text-lg mb-1">Teacher & Mentor</h4>
                        <div className="text-gray-400 text-sm mb-4 flex items-center gap-2 font-medium tracking-wide">
                            <span>Ose It</span>
                        </div>
                        <ul className="text-gray-300 text-[14px] md:text-[15px] font-light leading-relaxed list-disc list-outside ml-4 space-y-2">
                            <li>Mentored children in new technologies, programming basics, and digital literacy at Ose It.</li>
                            <li>Designed curriculum and hands-on workshops to introduce kids to coding and tech skills.</li>
                            <li>Instructed and supervised children, building foundational soft skills.</li>
                            <li>Developed strong communication, mentoring, leadership, and problem-solving skills.</li>
                        </ul>
                    </div>

                </div>
            </div>
        </section>
    )
}