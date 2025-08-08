export default function About() {
    return (
        <div id="about" className="relative px-6 lg:px-20 py-20">
            <div className="max-w-7xl mx-auto">
                <div className="z-10 text-center mb-16">
                    <h2 className="text-4xl lg:text-5xl font-bold gradient-text mb-4">What I Do</h2>
                    <p className="text-gray-300 text-xl max-w-2xl mx-auto">
                       Designing and developing dynamic web applications that solve real-world problems.
                    </p>
                </div>
                
                <div className="z-5 relative mb-20 p-6">
                    <div className="animate-pulse">
                        <div className="tech-icon absolute -top-8 left-2 bg-purple-500 rounded-lg floating">
                            <img src="https://skillicons.dev/icons?i=php" width="40" alt="php logo" />
                        </div>
                    </div>
                    <div className="animate-pulse">
                        <div className="tech-icon absolute top-20 left-20 bg-red-500 rounded-lg floating-2">
                            <img src="https://skillicons.dev/icons?i=laravel" width="40" alt="laravel logo" />
                        </div>
                    </div>
                    <div className="animate-pulse">
                        <div className="tech-icon absolute bottom-32 left-32 bg-white rounded-lg floating-3">
                            <img src="https://skillicons.dev/icons?i=postman" width="40" alt="postman logo" />
                        </div>
                    </div>
                    <div className="animate-pulse">
                        <div className="tech-icon absolute -top-8 left-[250px] bg-white rounded-lg floating">
                            <img src="https://skillicons.dev/icons?i=git" width="40" alt="git logo" />
                        </div>
                    </div>
                    <div className="animate-pulse">
                        <div className="tech-icon absolute top-20 left-[350px] bg-yellow-500 rounded-lg floating-2">
                            <img src="https://skillicons.dev/icons?i=py" width="40" alt="python logo" />
                        </div>
                    </div>
                    <div className="animate-pulse">
                        <div className="tech-icon absolute -top-[70px] left-[400px] bg-white rounded-lg floating-3">
                            <img src="https://skillicons.dev/icons?i=flask" width="40" alt="flask logo" />
                        </div>
                    </div>
                    <div className="animate-pulse">
                        <div className="tech-icon absolute -top-0 left-[550px] bg-blue-500 rounded-lg floating">
                            <img src="https://skillicons.dev/icons?i=mysql" width="40" alt="mysql logo" />
                        </div>
                    </div>
                    <div className="animate-pulse">
                        <div className="tech-icon absolute top-8 right-[530px] bg-black rounded-lg floating-2">
                            <img src="https://skillicons.dev/icons?i=js" width="40" alt="js logo" />
                        </div>
                    </div>
                    <div className="animate-pulse">
                        <div className="tech-icon absolute -top-[50px] right-[400px] bg-white rounded-lg floating-3">
                            <img src="https://skillicons.dev/icons?i=html" width="40" alt="html logo" />
                        </div>
                    </div>
                    <div className="animate-pulse">
                        <div className="tech-icon absolute top-20 right-[350px] bg-white rounded-lg floating">
                            <img src="https://skillicons.dev/icons?i=css" width="40" alt="css logo" />
                        </div>
                    </div>
                    <div className="animate-pulse">
                        <div className="tech-icon absolute -top-8 right-[250px] bg-white rounded-lg floating-2">
                            <img src="https://skillicons.dev/icons?i=cpp" width="40" alt="cpp logo" />
                        </div>
                    </div>
                    <div className="animate-pulse">
                        <div className="tech-icon absolute top-32 right-32 bg-blue-500 rounded-lg floating-3">
                            <img src="https://skillicons.dev/icons?i=react" width="40" alt="react logo" />
                        </div>
                    </div>
                    <div className="animate-pulse">
                        <div className="tech-icon absolute bottom-20 right-20 bg-blue-500 rounded-lg floating">
                            <img src="https://skillicons.dev/icons?i=bootstrap" width="40" alt="bootstrap logo" />
                        </div>
                    </div>
                    <div className="animate-pulse">
                        <div className="tech-icon absolute top-8 right-2 bg-blue-500 rounded-lg floating-2">
                            <img src="https://skillicons.dev/icons?i=tailwind" width="40" alt="tailwind logo" />
                        </div>
                    </div>
                </div>
                
                <div className="grid lg:grid-cols-3 gap-8 text-center">
                    <div className="space-y-4">
                        <i className="fa-solid fa-server fa-2xl text-purple-500 p-4"></i>
                        <h3 className="text-xl font-semibold gradient-text">Backend Development</h3>
                        <p className="text-gray-300 px-6">
                            Building secure, scalable server-side applications with clean, maintainable code. 
                            Experienced in RESTful APIs, authentication, and performance optimization to handle real-world demands.
                        </p>
                    </div>
                    <div className="z-30 space-y-4">
                        <i className="fa-solid fa-database fa-2xl text-purple-500 p-4"></i>
                        <h3 className="text-xl font-semibold gradient-text">Database Management</h3>
                        <p className="text-gray-300 px-6">
                            Designing and managing reliable database systems that ensure performance and scalability. 
                            Skilled in SQL, query optimization, and maintaining data integrity across complex applications.
                        </p>
                    </div>
                    <div className="space-y-4">
                        <i className="fa-solid fa-laptop-code fa-2xl text-purple-500 p-4"></i>
                        <h3 className="text-xl font-semibold gradient-text">Frontend Development</h3>
                        <p className="text-gray-300 px-6">
                            Creating responsive, user-friendly interfaces with modern frameworks and clean design principles. 
                            Focused on accessibility, performance, and delivering engaging, interactive user experiences.
                        </p>
                    </div>
                </div>
            </div>
            <img src={require("../Assets/astronaut-1.png")} className="absolute top-20 right-[250px] w-[150px] floating-2 " alt="astronaut" />
        </div>
    );
}