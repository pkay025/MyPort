import { ArrowRight, ExternalLink } from "lucide-react";

const projects = [
    {
    id: 2,
    title: "Paakow's Portfolio",
    description: "This is a personal portfolio website. I built it to showcase my skills and projects. Check it out.",
    image: "/projects/Project1.png",
    tags: ["React", "TailwindCSS"],
    githubUrl: "https://github.com/pkay025/MyPort",
},
    {
    id: 3,
    title: "UniQ E-commerce Platform",
    description: "This is an e-commerce website. It has this simple and elegant design that is perfect for any e-commerce business.",
    image: "/projects/Project2.png",
    tags: ["React", "TailwindCSS"],
    githubUrl: "https://github.com/pkay025/UniQ",
},
    {
    id: 4,
    title: "Diary-App",
    description: "It's a diary app i built to capture thoughts and feelings anytime, anywhere.",
    image: "/projects/Project3.png",
    tags: ["React-Native", "Expo"],
    githubUrl: "https://github.com/pkay025/diary-app",
},

]

export const ProjectsSection = () => {

    return (
        <section id="projects" className="py-24 px-4 bg-background">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Featured <span className="text-primary">Projects</span></h2>
                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Here are some of my recent projects. Each project was carefully crafted with attention to detail and a focus on user experience. 
                    Explore and see how they were built. I hope you find them inspiring and informative!
                    </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, key) => (
                        <div key={key} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
                            <div className="h-48 overflow-hidden">
                                <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                                />
                            </div>
                            <div className="p-6">
                                <div className="flex flex-wrap gap-1 mb-4">
                                    {project.tags.map((tag) => (
                                        <span className="px-2 py-1 text-xs font-medium border rounded-full bg-primary/20 text-secondary-foreground ">{tag}</span>
                                    ))}                                    
                                </div>
                           
                            <h3 className="text-xl font-semibold mb-2"> {project.title}</h3>
                            <p className="text-muted-forground text-sm mb-4">{project.description}                                
                            </p>
                            <div className="flex justify-between items-center">
                                <div className="flex space-x-3">
                                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-foreground/80 hover:text-primary transition-colors duration-300">
                                        <ExternalLink size={20} />
                                    </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <a className="cosmic-button w-fit flex items-center mx-auto gap-2"
                    target="_blank"
                    href="https://github.com/pkay025"
                    >
                        Check Our GitHub <ArrowRight size={16}/>
                    </a>

                </div>
            </div>
        </section>
    );
};




