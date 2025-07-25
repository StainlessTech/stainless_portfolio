import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { MapPin, Calendar, Building } from 'lucide-react';

// export function Experience() {
//   const experiences = [
//     {
//       title: "Your Current Job Title",
//       company: "Your Current Company", 
//       location: "Your Location",
//       period: "Start Date - Present",
//       type: "Full-time", // or "Part-time", "Contract", "Freelance"
//       description: [
//         "Your key responsibility or achievement #1",
//         "Your key responsibility or achievement #2", 
//         "Your key responsibility or achievement #3",
//         "Your key responsibility or achievement #4"
//       ],
//       technologies: ["Tech1", "Tech2", "Tech3", "Tech4"]
//     },
//     {
//       title: "Your Previous Job Title",
//       company: "Previous Company Name",
//       location: "Previous Location", 
//       period: "Start Date - End Date",
//       type: "Full-time",
//       description: [
//         "What you accomplished in this role #1",
//         "What you accomplished in this role #2",
//         "What you accomplished in this role #3", 
//         "What you accomplished in this role #4"
//       ],
//       technologies: ["Tech1", "Tech2", "Tech3", "Tech4"]
//     }
//     // Add more experiences as needed
//   ];

//   return (
//     <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-7xl mx-auto">
//         <div className="text-center mb-16">
//           <h2 className="text-3xl md:text-4xl text-primary mb-4">Work Experience</h2>
//           <p className="text-muted-foreground max-w-3xl mx-auto">
//             My professional journey and the experiences that have shaped my development career
//           </p>
//         </div>

//         <div className="relative">
//           {/* Timeline line */}
//           <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border transform md:-translate-x-0.5"></div>

//           <div className="space-y-12">
//             {experiences.map((exp, index) => (
//               <div key={index} className="relative">
//                 {/* Timeline dot */}
//                 <div className="absolute left-2 md:left-1/2 w-4 h-4 bg-primary rounded-full transform md:-translate-x-2 mt-6"></div>

//                 <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:ml-auto md:pl-8'}`}>
//                   <Card className="border border-border hover:shadow-lg transition-shadow">
//                     <CardHeader>
//                       <div className="flex items-start justify-between flex-wrap gap-2">
//                         <div>
//                           <CardTitle className="text-primary">{exp.title}</CardTitle>
//                           <div className="flex items-center gap-2 mt-1 text-muted-foreground">
//                             <Building className="w-4 h-4" />
//                             <span>{exp.company}</span>
//                           </div>
//                         </div>
//                         <Badge variant={exp.type === 'Full-time' ? 'default' : 'secondary'}>
//                           {exp.type}
//                         </Badge>
//                       </div>
                      
//                       <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
//                         <div className="flex items-center gap-1">
//                           <Calendar className="w-4 h-4" />
//                           <span>{exp.period}</span>
//                         </div>
//                         <div className="flex items-center gap-1">
//                           <MapPin className="w-4 h-4" />
//                           <span>{exp.location}</span>
//                         </div>
//                       </div>
//                     </CardHeader>
                    
//                     <CardContent className="space-y-4">
//                       <ul className="space-y-2">
//                         {exp.description.map((item, itemIndex) => (
//                           <li key={itemIndex} className="flex items-start gap-2 text-muted-foreground">
//                             <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
//                             <span>{item}</span>
//                           </li>
//                         ))}
//                       </ul>
                      
//                       <div className="flex flex-wrap gap-2 pt-2">
//                         {exp.technologies.map((tech, techIndex) => (
//                           <Badge key={techIndex} variant="outline" className="text-xs">
//                             {tech}
//                           </Badge>
//                         ))}
//                       </div>
//                     </CardContent>
//                   </Card>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
export function Experience() {
  const experiences = [
    {
      title: "Founder || TPM & Full Stack Developer",
      company: "Stainless Technology & Innovation Laboratory (ST TECH)",
      location: "Lagos, Nigeria",
      period: "Jan 2025 – Present",
      type: "Full-time",
      description: [
        "Led the development of an AI-integrated EdTech platform automating results and payment systems for rural schools.",
        "Managed a cross-functional tech team including frontend, backend, and AI engineers.",
        "Oversaw UI/UX strategy and system architecture for ST TECH’s digital products.",
        "Built client solutions including business websites and custom tech platforms."
      ],
      technologies: ["React", "Node.js", "MongoDB", "Tailwind CSS", "OpenAI API"]
    },
    {
      title: "Frontend Developer (Freelance & Practice Projects)",
      company: "Self-Driven / Independent",
      location: "Remote",
      period: "2021 – 2022",
      type: "Freelance",
      description: [
        "Built over 10 responsive replicas of real-world banking and tech platforms (e.g., Meta, PiggyVest).",
        "Designed and developed dynamic interfaces using HTML, CSS, and JavaScript.",
        "Practiced full-stack implementation using React, Vite, and Express.js.",
        "Focused on performance, accessibility, and mobile responsiveness."
      ],
      technologies: ["HTML", "CSS", "JavaScript", "React", "Vite", "Tailwind CSS"]
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl text-primary mb-4">Work Experience</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            My professional journey and the experiences that have shaped my development career
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border transform md:-translate-x-0.5"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative">
                <div className="absolute left-2 md:left-1/2 w-4 h-4 bg-primary rounded-full transform md:-translate-x-2 mt-6"></div>

                <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:ml-auto md:pl-8'}`}>
                  <Card className="border border-border hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-start justify-between flex-wrap gap-2">
                        <div>
                          <CardTitle className="text-primary">{exp.title}</CardTitle>
                          <div className="flex items-center gap-2 mt-1 text-muted-foreground">
                            <Building className="w-4 h-4" />
                            <span>{exp.company}</span>
                          </div>
                        </div>
                        <Badge variant={exp.type === 'Full-time' ? 'default' : 'secondary'}>
                          {exp.type}
                        </Badge>
                      </div>

                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </CardHeader>

                    <CardContent className="space-y-4">
                      <ul className="space-y-2">
                        {exp.description.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start gap-2 text-muted-foreground">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-2 pt-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <Badge key={techIndex} variant="outline" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
