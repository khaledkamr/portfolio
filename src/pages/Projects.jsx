export default function Projects() {
    return (
        <div id="projects" className="relative z-10 px-6 lg:px-20 py-20">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl lg:text-5xl font-bold gradient-text mb-4">My Projects</h2>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 mb-12">
                    <div className="project-card rounded-2xl p-8">
                        <div className="space-y-6">
                            <div>
                                <span className="text-purple-400 text-sm font-medium">Featured Project</span>
                                <h3 className="text-3xl font-bold text-white mt-2">Muster</h3>
                            </div>
                            <p className="text-gray-300 text-lg leading-relaxed">
                                A web-based platform designed to centralize and visualize academic data (attendance, grades, assignments) with dashboards for professors, students, and parents. with AI-driven insights including predictive analytics, clustering, and course recommendations.                        
                            </p>
                            <div className="flex space-x-4">
                                <a href="https://github.com/khaledkamr/muster" className="text-purple-500 hover:text-white transition-all duration-300 cursor-pointer">
                                    <i className="fa-brands fa-github fa-xl"></i>
                                </a>
                                <a href="https://github.com/khaledkamr/muster" className="text-purple-500 hover:text-white transition-all duration-300 cursor-pointer">
                                    <i className="fa-solid fa-arrow-up-right-from-square fa-lg"></i>
                                </a>
                            </div>
                        </div>
                        
                        <div className="mt-8">
                            <div className="project-image h-66 p-6 flex items-center justify-center">
                                <div className="w-full h-full rounded-lg shadow-xl">
                                    <img src={require("../Assets/muster.png")} className="rounded-lg" alt="muster" />
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="project-card rounded-2xl p-8">
                        <div className="space-y-6">
                            <div>
                                <span className="text-purple-400 text-sm font-medium">Featured Project</span>
                                <h3 className="text-3xl font-bold text-white mt-2">FilmFan</h3>
                            </div>
                            <p className="text-gray-300 text-lg leading-relaxed">
                                FilmFan is a full-stack web application for discovering, rating, and reviewing movies and TV shows. 
                                Built with Django and tailwind CSS, it provides a comprehensive platform for cinephiles to explore featured films, 
                                stay updated with entertainment news, and discover new releases. inspired by IMDB.
                            </p>
                            <div className="flex space-x-4">
                                <a href="https://github.com/khaledkamr/filmfan" className="text-purple-500 hover:text-white transition-all duration-300 cursor-pointer">
                                    <i className="fa-brands fa-github fa-xl"></i>
                                </a>
                                <a href="https://github.com/khaledkamr/filmfan" className="text-purple-500 hover:text-white transition-all duration-300 cursor-pointer">
                                    <i className="fa-solid fa-arrow-up-right-from-square fa-lg"></i>
                                </a>
                            </div>
                        </div>
                        
                        <div className="mt-8">
                            <div className="project-image h-66 p-6 flex items-center justify-center">
                                <div className="w-full h-full rounded-lg shadow-xl">
                                    <img src={require("../Assets/imdb.png")} className="rounded-lg" alt="filmfan" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 mb-12">
                    <div className="project-card rounded-2xl p-8">
                        <div className="space-y-6">
                            <div>
                                <h3 className="text-3xl font-bold text-white mt-2">E-Commerce</h3>
                            </div>
                            <p className="text-gray-300 text-lg leading-relaxed">
                                An e-commerce platform built with Laravel and React, offering a seamless shopping 
                                experience with product browsing, cart management, and secure checkout. 
                                Includes dashboards for admins, sellers, and customers, with analytics for 
                                sales trends, inventory tracking.
                            </p>
                            <div className="flex space-x-4">
                                <a href="https://github.com/khaledkamr/E-commerce-project" className="text-purple-500 hover:text-white transition-all duration-300 cursor-pointer">
                                    <i className="fa-brands fa-github fa-xl"></i>
                                </a>
                                <a href="https://github.com/khaledkamr/E-commerce-project" className="text-purple-500 hover:text-white transition-all duration-300 cursor-pointer">
                                    <i className="fa-solid fa-arrow-up-right-from-square fa-lg"></i>
                                </a>
                            </div>
                        </div>
                        
                        <div className="mt-8">
                            <div className="project-image h-66 p-6 flex items-center justify-center">
                                <div className="w-full h-full rounded-lg shadow-xl">
                                    <img src={require("../Assets/e-commerce.png")} className="rounded-lg" alt="e-commerce" />
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="project-card rounded-2xl p-8">
                        <div className="space-y-6">
                            <div>
                                <h3 className="text-3xl font-bold text-white mt-2">Image Classify</h3>
                            </div>
                            <p className="text-gray-300 text-lg leading-relaxed">
                                An intelligent web application built with Laravel and Flask API, 
                                enabling image uploads for accurate fruit and vegetable classification. 
                                Provides real-time predictions powered by AI models, Includes analytics for 
                                classification accuracy, model training progress, and category distribution insights.
                            </p>
                            <div className="flex space-x-4">
                                <a href="https://github.com/khaledkamr/image_classify_laravel" className="text-purple-500 hover:text-white transition-all duration-300 cursor-pointer">
                                    <i className="fa-brands fa-github fa-xl"></i>
                                </a>
                                <a href="https://github.com/khaledkamr/image_classify_laravel" className="text-purple-500 hover:text-white transition-all duration-300 cursor-pointer">
                                    <i className="fa-solid fa-arrow-up-right-from-square fa-lg"></i>
                                </a>
                            </div>
                        </div>
                        
                        <div className="mt-8">
                            <div className="project-image h-66 p-6 flex items-center justify-center">
                                <div className="w-full h-full rounded-lg shadow-xl">
                                    <img src={require("../Assets/image-classify.png")} className="rounded-lg" alt="image-classify" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}