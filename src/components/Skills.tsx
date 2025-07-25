import { Progress } from './ui/progress';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';

export function Skills() {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "React.js", level: 80 },
        { name: "Next.js", level: 80 },
        { name: "Tailwind CSS", level: 90 },
        { name: "JavaScript (ES5+) (ES6+)", level: 85 }
      ]
    },
    {
      title: "Backend Development", 
      skills: [
         { name: "Node.js", level: 80 },
        { name: "Express.js", level: 75 },
        { name: "MongoDB", level: 82 },
        { name: "REST APIs", level: 78 }
      ]
    },
    {
      title: "Tools & Others",
      skills: [
        { name: "Git & GitHub", level: 85 },
        { name: "Vite/Webpack", level: 70 },
        { name: "Firebase", level: 75 },
        { name: "Product Management", level: 90 }
      ]
    }
  ];

  const technologies = [
    "HTML5", "CSS3", "TypeScript", "React.js",
    "Next.js", "Node.js", "Express.js", "MongoDB",
    "Firebase", "Tailwind CSS", "Vite", "Git",
    "GitHub", "Figma", "Framer Motion", "AI Integration"
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl text-primary mb-4">Skills & Technologies</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            A comprehensive overview of my technical skills and the technologies I work with
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <Card key={index} className="border border-border">
              <CardHeader>
                <CardTitle className="text-center text-primary">{category.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">{skill.name}</span>
                      <span className="text-xs text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="space-y-6">
          <h3 className="text-2xl text-primary text-center">Technologies & Tools</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {technologies.map((tech, index) => (
              <Badge 
                key={index} 
                variant="secondary" 
                className="px-4 py-2 text-sm hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}