export const Header = () => {
    return (
        <div className="flex justify-center items-center fixed top-0 z-50 w-full">
            <nav className="flex border-b-none border-b-purple-500 gap-1 p-0.5 px-32 border-white/10 border rounded-t-none bg-white/10 backdrop-blur rounded-[10px]">
                <a href="#" className="nav-item">Home</a>
                <a href="#" className="nav-item">Projects</a>
                <a href="#" className="nav-item">Experience</a>
                <a href="#" className="nav-item pb-2">Contact</a>
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r via-pink-500 from-purple-500 to-sky-500 rounded-b-[20px]"></div>
            </nav>
            
        </div>
    )
};