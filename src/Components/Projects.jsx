import { Link } from "react-router-dom";

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
                                <p className="absolute project-desc bg-white/10 backdrop-blur-md left-0 top-18 rounded-lg p-5 text-white text-lg leading-relaxed">
                                    A web-based platform designed to centralize and visualize academic data 
                                    (attendance, grades, assignments) with dashboards for professors, students, 
                                    and parents. with AI-driven insights including predictive analytics, clustering, 
                                    and course recommendations.
                                </p>
                                <div className="h-40"></div>
                                <div className="flex items-center space-x-6 mt-6">
                                    <a href="https://github.com/khaledkamr/muster" className="ml-6 text-purple-500 transition-all duration-300 cursor-pointer project-icon">
                                        <i className="fa-brands fa-github fa-xl"></i>
                                    </a>
                                    <a href="https://github.com/khaledkamr/muster" className="text-purple-500 transition-all duration-300 cursor-pointer project-icon">
                                        <i className="fa-solid fa-arrow-up-right-from-square fa-lg"></i>
                                    </a>
                                </div>
                            </div>
                           <div className="z-5 rounded-lg overflow-hidden border-4 border-purple-500 shadow-purple animate-slide-in-right">
                                <img src={require("../Assets/muster.png")} className="opacity-80 hover:opacity-100 transition-opacity duration-300 cursor-pointer" alt="MUSTER Project" />
                           </div>
                        </div>
                    </div>
                </div>

                <div className="max-w-6xl mx-auto">
                    <div className="mb-16">
                        <div className="grid lg:grid-cols-2 items-center gap-14">
                            <div className="z-10 rounded-lg overflow-hidden border-4 border-purple-500 shadow-purple animate-slide-in-right">
                                <img src={require("../Assets/imdb.png")} className="opacity-80 hover:opacity-100 transition-opacity duration-300 cursor-pointer" alt="MUSTER Project" />
                            </div>
                            <div className="z-20 relative space-y-6 animate-slide-in-left">
                                <div className="flex flex-col items-end">
                                    <span className="text-purple-400 text-sm font-medium">Featured Project</span>
                                    <h3 className="text-3xl font-bold text-white mt-2">FilmFan</h3>
                                </div>
                                <p className="absolute project-desc bg-white/10 backdrop-blur-md right-0 top-18 rounded-lg p-5 text-white text-lg leading-relaxed">
                                    FilmFan is a full-stack web application for discovering, rating, and reviewing movies and TV shows. 
                                    Built with Django, it provides a comprehensive platform for cinephiles to explore featured films, 
                                    stay updated with entertainment news. inspired by IMDB.
                                </p>
                                <div className="h-40"></div>
                                <div className="flex justify-end items-center space-x-6 mt-6">
                                    <div className="text-purple-500 hover:purple-glow transition-all duration-300 cursor-pointer project-icon">
                                        <i className="fa-brands fa-github fa-xl"></i>
                                    </div>
                                    <div className="text-purple-500 hover:purple-glow transition-all duration-300 cursor-pointer project-icon">
                                        <i className="fa-solid fa-arrow-up-right-from-square fa-lg"></i>
                                    </div>
                                    <div className></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="text-center">
                    <Link to="/projects" className="purple-glow bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 rounded-lg font-medium transition-all duration-300 hover:scale-105 transform">
                        View All Projects <i className="fa-solid fa-arrow-right"></i>
                    </Link>
                </div>
            </div>
            <img src={require("../Assets/astronaut-8.png")} className="absolute top-20 left-[150px] w-[150px] floating-2" alt="astronaut" />
            <img src={require("../Assets/project-1.png")} className="absolute top-[150px] right-[100px] w-[150px] floating-2" style={{ rotate: "25deg" }} alt="project-1" />
            <img src={require("../Assets/project-2.png")} className="absolute top-[500px] left-10 w-[150px] floating-3" alt="project-2" />
            <img src={require("../Assets/astronaut-2.png")} className="absolute top-[800px] right-10 w-[150px] floating-2" alt="astronaut" />
            <img src={require("../Assets/project-3.png")} className="absolute top-[700px] right-20 w-[100px] floating" alt="project-3" />
        </div>
    );
}