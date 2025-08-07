export default function Projects() {
    return (
        <div id="projects" className="relative z-10 px-6 lg:px-20 py-20">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl lg:text-5xl font-bold gradient-text mb-4">Featured Projects</h2>
                    <p className="text-gray-300 text-xl max-w-2xl mx-auto">
                        A showcase of my recent work and contributions to the developer community
                    </p>
                </div>
                
                <div className="grid lg:grid-cols-2 gap-12 mb-12">
                    <div className="project-card rounded-2xl p-8 hover:purple-glow">
                        <div className="space-y-6">
                            <div>
                                <span className="text-purple-400 text-sm font-medium">Featured Project</span>
                                <h3 className="text-3xl font-bold text-white mt-2">Muster</h3>
                            </div>
                            
                            <p className="text-gray-300 text-lg leading-relaxed">
                                A web-based platform designed to centralize and visualize academic data (attendance, grades, assignments) with dashboards for professors, students, and parents. with AI-driven insights including predictive analytics, clustering, and course recommendations.                        
                            </p>
                            
                            <div className="flex space-x-4">
                                <div className="text-purple-400 hover:text-white transition-colors cursor-pointer">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-10a2 2 0 00-2-2h-4M14 4h6m0 0v6m0-6L10 14"></path>
                                    </svg>
                                </div>
                                <div className="text-purple-400 hover:text-white transition-colors cursor-pointer">
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                    </svg>
                                </div>
                            </div>
                        </div>
                        
                        <div className="mt-8">
                            <div className="project-image h-64 p-6 flex items-center justify-center">
                                <div className="w-full h-full bg-white rounded-lg p-4 shadow-xl">
                                <img src={require("../Assets/muster.png")} alt="muster" />
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="project-card rounded-2xl p-8 hover:purple-glow">
                        <div className="space-y-6">
                            <div>
                                <span className="text-purple-400 text-sm font-medium">Featured Project</span>
                                <h3 className="text-3xl font-bold text-white mt-2">Portfolio Analytics</h3>
                            </div>
                            
                            <p className="text-gray-300 text-lg leading-relaxed">
                                A web app for visualizing personalized Spotify data. View your top artists, top tracks, 
                                recently played tracks, and detailed audio information about each track. Create and save 
                                new playlists of recommended tracks based on your existing playlists and more.
                            </p>
                            
                            <div className="flex space-x-4">
                                <div className="text-purple-400 hover:text-white transition-colors cursor-pointer">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-10a2 2 0 00-2-2h-4M14 4h6m0 0v6m0-6L10 14"></path>
                                    </svg>
                                </div>
                                <div className="text-purple-400 hover:text-white transition-colors cursor-pointer">
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                    </svg>
                                </div>
                            </div>
                        </div>
                        
                        <div className="mt-8">
                            <div className="project-image h-64 p-6 flex items-center justify-center">
                                <div className="w-full h-full bg-white rounded-lg p-4 shadow-xl">
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="text-gray-700 font-medium">Analytics Dashboard</div>
                                        <div className="flex space-x-1">
                                            <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                                            <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                                            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                                        </div>
                                    </div>
                                    
                                    <div className="space-y-3">
                                        <div className="text-sm font-semibold text-gray-800">Easy & Affordable</div>
                                        <div className="space-y-2">
                                            <div className="flex items-center justify-between">
                                                <div className="w-20 h-2 bg-gray-200 rounded"></div>
                                                <div className="text-xs text-gray-400">Progress</div>
                                            </div>
                                            <div className="w-full h-16 border border-gray-200 rounded flex items-center justify-center">
                                                <div className="w-full h-8 bg-gradient-to-r from-purple-200 to-blue-200 rounded-sm opacity-60"></div>
                                            </div>
                                        </div>
                                        <div className="text-center text-xs text-gray-400 mt-2">OPPORTUNITY (47px)</div>
                                    </div>
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