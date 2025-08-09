export default function Connect() {
    return (
        <div id="connect" className="relative px-6 lg:px-20 py-20">
            <div className="max-w-7xl mx-auto">
                <div className="z-10 text-center mb-16">
                    <h2 className="text-4xl lg:text-5xl font-bold gradient-text mb-4">Connect With Me</h2>
                    <p className="text-gray-300 text-xl max-w-2xl mx-auto">
                        Have an idea, a project, or just want to say hi? My inbox is always open.
                    </p>
                </div>
                <div className="flex justify-center space-x-6">
                    <a href="https://twitter.com/khaledkamrr" target="_blank" rel="noopener noreferrer"
                        className="floating-3 icon-glow group relative p-4 rounded-full bg-gray-800 hover:bg-black transition-all duration-300 transform hover:scale-110"
                        aria-label="Twitter" >
                        <i className="fab fa-x-twitter text-2xl text-gray-300 group-hover:text-white"></i>
                        <span className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                            Twitter
                        </span>
                    </a>
                    <a href="https://github.com/khaledkamr" target="_blank" rel="noopener noreferrer"
                        className="floating icon-glow group relative p-4 rounded-full bg-gray-800 hover:bg-purple-900 hover:purple-glow transition-all duration-300 transform hover:scale-110"
                        aria-label="GitHub" >
                        <i className="fab fa-github text-2xl text-gray-300 group-hover:text-white"></i>
                        <span className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                            GitHub
                        </span>
                    </a>
                    <a href="https://linkedin.com/in/khaledkamr" target="_blank" rel="noopener noreferrer"
                        className="floating-2 icon-glow group relative p-4 rounded-full bg-gray-800 hover:bg-blue-700 transition-all duration-300 transform hover:scale-110"
                        aria-label="LinkedIn" >
                        <i className="fab fa-linkedin text-2xl text-gray-300 group-hover:text-white"></i>
                        <span className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                            LinkedIn
                        </span>
                    </a>
                    <a href="mailto:khaledkamar3333@gmail.com" 
                        className="floating-3 icon-glow group relative p-4 rounded-full bg-gray-800 hover:bg-red-500 transition-all duration-300 transform hover:scale-110"
                        aria-label="Email" >
                        <i className="fas fa-envelope text-2xl text-gray-300 group-hover:text-white"></i>
                        <span className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                            Email
                        </span>
                    </a>
                    <a href="https://discord.gg/khaledkamr" target="_blank" rel="noopener noreferrer"
                        className="floating-2 icon-glow group relative p-4 rounded-full bg-gray-800 hover:bg-indigo-600 transition-all duration-300 transform hover:scale-110"
                        aria-label="Discord" >
                        <i className="fab fa-discord text-2xl text-gray-300 group-hover:text-white"></i>
                        <span className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                            Discord
                        </span>
                    </a>
                    <a href="https://tiktok.com/khaledkamrr" target="_blank" rel="noopener noreferrer"
                        className="floating icon-glow group relative p-4 rounded-full bg-gray-800 hover:bg-black transition-all duration-300 transform hover:scale-110"
                        aria-label="TikTok" >
                        <i className="fab fa-tiktok text-2xl text-gray-300 group-hover:text-white"></i>
                        <span className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                            TikTok
                        </span>
                    </a>
                </div>
            </div>
            <img src={require("../Assets/connect-1.png")} className="absolute bottom-20 right-20 w-[200px] floating" alt="connect-1" />
            {/* <img src={require("../Assets/connect-2.png")} className="absolute bottom-20 left-20 w-[150px] floating" alt="connect-2" /> */}
            <img src={require("../Assets/astronaut-5.png")} className="absolute bottom-0 left-[300px] w-[150px] floating-2" alt="astronaut" />
        </div>
    );
}