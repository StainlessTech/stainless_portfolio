import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ExternalLink, Github } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Projects() {
  const projects = [
    {
      title: "Piggyvest Design",
      description: "A clone of the Piggyvest website, showcasing a modern and responsive design with interactive features.",
      image: "/logo.jpeg",
      technologies: ["HTML", "TailwindCss", "Javascript", "Typescript"],
      liveUrl: "https://stainless-piggyvest.vercel.app/",
      githubUrl: "https://github.com/StainlessTech/stainless_piggyvest.git"
    },
    {
      title: "Moove",
      description: "A car rental website that allows users to book cars online, view available cars, and manage their bookings.",
      image: "/logo2.jpg",
      technologies: ["HTML", "TailwindCss", "Javascript", "Typescript"],
      liveUrl: "https://project-3-moove.vercel.app/",
      githubUrl: "https://github.com/StainlessTech/project_3_moove.git"
    },
    {
      title: "Abode App", 
      description: " A real estate website that allows users to search for properties, view details, and contact agents.",
      image: "/why-top-choice-img.png",
      technologies: ["HTML", "TailwindCss", "Javascript", "Typescript"],
      liveUrl: "https://project-4-abode.vercel.app/",
      githubUrl: "https://github.com/StainlessTech/project_4_abode.git"
    },
    {
      title: "Moniepoint",
      description: " A financial services platform that provides users with various banking and investment options.",
      image: "/personal-1.png",
      technologies: ["HTML", "TailwindCss", "Javascript", "Typescript"],
      liveUrl: "https://moniepoint-orcin.vercel.app/", 
      githubUrl: "https://github.com/StainlessTech/moniepoint.git"
    }
  ];

  return (
    <section id="projects" className=" py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl text-primary mb-4">Featured Projects</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            A selection of projects that demonstrate my skills and passion for creating meaningful digital experiences
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="border border-border overflow-hidden hover:shadow-xl transition-shadow group">
              <div className="relative overflow-hidden">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300"></div>
              </div>
              
              <CardHeader>
                <CardTitle className="text-primary">{project.title}</CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">{project.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex gap-3 pt-2">
                  <Button size="sm" className="flex items-center gap-2" asChild>
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" className="flex items-center gap-2" asChild>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                  </Button>
                  {/* {project.githubUrl ? (
                    <Button variant="outline" size="sm" className="flex items-center gap-2" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4" />
                        Code
                      </a>
                    </Button>) : (
                  <div className="relative group">
                    <Button 
                        variant="outline"
                        size="sm"
                        className="flex items-center gap-2 opacity-50 cursor-not-allowed"
                        onClick={(e) => e.preventDefault()}>
                          <Github className="w-4 h-4" />
                          Code
                    </Button>
                    <div className=" flex-shrink absolute top-full mt-1 left-1/2 -translate-x-1/2 bg-black text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-50">
                    Code not available
                    </div>
                  </div>)} */}
              </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" asChild>
            <a href="https://github.com/StainlessTech" target="_blank" rel="noopener noreferrer">
              View All Projects
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}