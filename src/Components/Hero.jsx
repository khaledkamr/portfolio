export default function Hero() {
    return (
        <div className="relative z-10 px-6 lg:px-20 py-20">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-8">
                    <div className="text-4xl lg:text-6xl font-bold text-white flex items-center space-x-4">
                        <span>Hi There!</span>
                        <div className="wave text-5xl">👋</div>
                    </div>
                    
                    <div className="text-4xl lg:text-6xl font-bold">
                        <span className="text-white">I'M </span>
                        <span className="gradient-text">KHALED KAMR</span>
                    </div>
                
                    <div className="typing-animation text-3xl lg:text-4xl font-semibold gradient-text">
                        Full-stack Web Developer
                    </div>
                    
                    <p className="text-gray-300 text-lg lg:text-xl leading-relaxed max-w-2xl">
                        Passionate full-stack developer with expertise in modern web technologies. 
                        I love creating innovative solutions and contributing to the open source community.
                    </p>
                    
                    <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
                        <a href="#connect" className="purple-glow bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 rounded-lg font-medium transition-all duration-300 hover:scale-105 transform">
                            Let's Connect
                        </a>
                        <a href="#projects" className="border-2 border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white px-8 py-4 text-center rounded-lg font-medium transition-all duration-300">
                            View My Work
                        </a>
                    </div>
                </div>
                
                <div className="hidden lg:flex lg:justify-end">
                    <div className="floating">
                        <div className="relative w-80 h-80">
                            <img src={require('../Assets/coding.png')} alt="coding" />
                        </div>
                    </div>
                </div>
            </div>
            <img src={require("../Assets/astronaut-6.png")} className="absolute bottom-10 right-[350px] w-[250px] floating-2" alt="astronaut" />
        </div>
    );
}