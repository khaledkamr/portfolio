export default function About() {
    return (
        <div className="relative z-10 px-6 lg:px-20 py-20">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl lg:text-5xl font-bold gradient-text mb-4">About Me</h2>
                    <p className="text-gray-300 text-xl max-w-2xl mx-auto">
                        Passionate about creating digital experiences that make a difference
                    </p>
                </div>
                
                <div className="relative flex justify-center items-center mb-20">
                    <div className="relative z-10">
                        <div className="w-40 h-40 rounded-full bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center text-6xl font-bold text-white shadow-2xl">
                            K
                        </div>
                        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-600 to-blue-600 animate-pulse opacity-20"></div>
                    </div>
                    
                    <div className="orbital-ring w-80 h-80 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <div className="tech-icon absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center text-white text-2xl">
                            <img src="https://skillicons.dev/icons?i=c" height="40" alt="c logo"  />
                        </div>
                        <div className="tech-icon absolute top-1/2 -right-6 transform -translate-y-1/2 w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center text-white text-2xl">
                            <img src="https://skillicons.dev/icons?i=cpp" height="40" alt="cplusplus logo"  />
                        </div>
                        <div className="tech-icon absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-yellow-500 rounded-xl flex items-center justify-center text-black text-2xl">
                            <img src="https://skillicons.dev/icons?i=css" height="40" alt="css3 logo"  />
                        </div>
                        <div className="tech-icon absolute top-1/2 -left-6 transform -translate-y-1/2 w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-white text-2xl">
                            <img src="https://skillicons.dev/icons?i=html" height="40" alt="html5 logo"  />
                        </div>
                    </div>
                    
                    <div className="orbital-ring reverse w-96 h-96 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <div className="tech-icon absolute -top-6 left-1/4 transform -translate-x-1/2 w-12 h-12 bg-pink-500 rounded-xl flex items-center justify-center text-white text-sm font-bold">
                            <img src="https://skillicons.dev/icons?i=js" height="40" alt="javascript logo"  />
                        </div>
                        <div className="tech-icon absolute top-1/4 -right-6 transform -translate-y-1/2 w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center text-white text-2xl">
                            <img src="https://skillicons.dev/icons?i=bootstrap" height="40" alt="bootstrap logo"  />
                        </div>
                        <div className="tech-icon absolute -bottom-6 right-1/4 transform -translate-x-1/2 w-12 h-12 bg-gray-700 rounded-xl flex items-center justify-center text-white text-sm font-bold">
                            <img src="https://skillicons.dev/icons?i=tailwind" height="40" alt="tailwindcss logo"  />
                        </div>
                        <div className="tech-icon absolute bottom-1/4 -left-6 transform -translate-y-1/2 w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center text-white text-2xl">
                            <img src="https://skillicons.dev/icons?i=py" height="40" alt="python logo"  />
                        </div>
                        <div className="tech-icon absolute top-8 right-8 w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center text-white text-2xl">
                            <img src="https://skillicons.dev/icons?i=git" height="40" alt="git logo"  />
                        </div>
                        <div className="tech-icon absolute bottom-8 left-8 w-12 h-12 bg-blue-400 rounded-xl flex items-center justify-center text-white text-2xl">
                            <img src="https://skillicons.dev/icons?i=linux" height="40" alt="linux logo"  />
                        </div>
                    </div>
                    
                    <div className="tech-icon absolute top-20 left-20 w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center text-white animate-pulse">
                        <img src="https://skillicons.dev/icons?i=laravel" height="40" alt="laravel logo"  />
                    </div>
                    <div className="tech-icon absolute bottom-20 right-20 w-10 h-10 bg-indigo-500 rounded-lg flex items-center justify-center text-white animate-pulse">
                        <img src="https://skillicons.dev/icons?i=mysql" height="40" alt="mysql logo"  />
                    </div>
                    <div className="tech-icon absolute top-32 right-32 w-10 h-10 bg-pink-500 rounded-lg flex items-center justify-center text-white animate-pulse">
                        <img src="https://skillicons.dev/icons?i=php" height="40" alt="php logo"  />
                    </div>
                    <div className="tech-icon absolute bottom-32 left-32 w-10 h-10 bg-cyan-500 rounded-lg flex items-center justify-center text-white animate-pulse">
                        <img src="https://skillicons.dev/icons?i=postman" height="40" alt="postman logo"  />
                    </div>
                </div>
                
                <div className="grid lg:grid-cols-3 gap-8 text-center">
                    <div className="space-y-4">
                        <div className="text-3xl mb-4">🎯</div>
                        <h3 className="text-xl font-semibold text-white">Full Stack Development</h3>
                        <p className="text-gray-300">Building end-to-end web applications with modern technologies and best practices.</p>
                    </div>
                    <div className="space-y-4">
                        <div className="text-3xl mb-4">🚀</div>
                        <h3 className="text-xl font-semibold text-white">Open Source Contributor</h3>
                        <p className="text-gray-300">Contributing to the developer community through open source projects and knowledge sharing.</p>
                    </div>
                    <div className="space-y-4">
                        <div className="text-3xl mb-4">💡</div>
                        <h3 className="text-xl font-semibold text-white">Innovation Focused</h3>
                        <p className="text-gray-300">Always exploring new technologies and creative solutions to complex problems.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}