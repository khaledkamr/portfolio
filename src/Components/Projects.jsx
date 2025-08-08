export default function Projects() {
    return (
        <div id="projects" className="relative z-10 px-6 lg:px-20 py-20">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl lg:text-5xl font-bold gradient-text mb-4">Featured Projects</h2>
                    <p className="text-gray-300 text-xl max-w-2xl mx-auto">
                        A showcase of my recent work, from sleek frontends to powerful backends, built with precision and passion.
                    </p>
                </div>

                <div className="max-w-6xl mx-auto">
                    <div className="mb-16">
                        <div className="grid lg:grid-cols-2 items-center gap-14">
                            <div className="z-10 relative space-y-6 animate-slide-in-left">
                                <div>
                                    <span className="text-purple-400 text-sm font-medium">Featured Project</span>
                                    <h3 className="text-3xl font-bold text-white mt-2">MUSTER</h3>
                                </div>
                                <p className="absolute project-desc bg-white/5 backdrop-blur-md left-0 top-18 rounded-lg p-5 text-white text-lg leading-relaxed">
                                    A web-based platform designed to centralize and visualize academic data 
                                    (attendance, grades, assignments) with dashboards for professors, students, 
                                    and parents. with AI-driven insights including predictive analytics, clustering, 
                                    and course recommendations.
                                </p>
                                <div className="h-40"></div>
                                <div className="flex items-center space-x-6 mt-6">
                                    <a href="https://github.com/khaledkamr/muster" className="ml-6 text-purple-500 hover:purple-glow transition-all duration-300 cursor-pointer project-icon">
                                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                        </svg>
                                    </a>
                                    <a href="https://github.com/khaledkamr/muster" className="text-purple-500 hover:purple-glow transition-all duration-300 cursor-pointer project-icon">
                                        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-10a2 2 0 00-2-2h-4M14 4h6m0 0v6m0-6L10 14"></path>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                           <div className="z-5 rounded-lg overflow-hidden border-4 border-purple-400 shadow-purple animate-slide-in-right">
                                <img src={require("../Assets/muster.png")} className="opacity-80 hover:opacity-100 transition-opacity duration-300 cursor-pointer" alt="MUSTER Project" />
                           </div>
                        </div>
                    </div>
                </div>

                <div className="max-w-6xl mx-auto">
                    <div className="mb-16">
                        <div className="grid lg:grid-cols-2 items-center gap-14">
                            <div className="z-10 rounded-lg overflow-hidden border-4 border-purple-400 shadow-purple animate-slide-in-right">
                                <img src={require("../Assets/muster.png")} className="opacity-80 hover:opacity-100 transition-opacity duration-300 cursor-pointer" alt="MUSTER Project" />
                            </div>
                            <div className="z-20 relative space-y-6 animate-slide-in-left">
                                <div className="flex flex-col items-end">
                                    <span className="text-purple-400 text-sm font-medium">Featured Project</span>
                                    <h3 className="text-3xl font-bold text-white mt-2">MUSTER</h3>
                                </div>
                                <p className="absolute project-desc bg-white/5 backdrop-blur-md right-0 top-18 rounded-lg p-5 text-white text-lg leading-relaxed">
                                    A web-based platform designed to centralize and visualize academic data 
                                    (attendance, grades, assignments) with dashboards for professors, students, 
                                    and parents. with AI-driven insights including predictive analytics, clustering, 
                                    and course recommendations.
                                </p>
                                <div className="h-40"></div>
                                <div className="flex justify-end items-center space-x-6 mt-6">
                                    <div className="text-purple-500 hover:purple-glow transition-all duration-300 cursor-pointer project-icon">
                                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                        </svg>
                                    </div>
                                    <div className="text-purple-500 hover:purple-glow transition-all duration-300 cursor-pointer project-icon">
                                        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-10a2 2 0 00-2-2h-4M14 4h6m0 0v6m0-6L10 14"></path>
                                        </svg>
                                    </div>
                                    <div className></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="text-center">
                    <button className="purple-glow bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 rounded-lg font-medium transition-all duration-300 hover:scale-105 transform">
                        View All Projects →
                    </button>
                </div>
            </div>
        </div>
    );
}