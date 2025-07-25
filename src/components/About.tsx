import { Card, CardContent } from './ui/card';
import { Code, Database, Smartphone, Globe } from 'lucide-react';

export function About() {
  const highlights = [
  {
    icon: Code,
    title: "Full Stack Development",
    description: "Skilled in building complete web applications using modern tech like MERN stack, TailwindCSS, and REST APIs."
  },
  {
    icon: Database,
    title: "System Design & Architecture",
    description: "Experienced in designing scalable backend systems, database models, and integrating AI modules into EdTech products."
  },
  {
    icon: Smartphone,
    title: "Product Management & Innovation",
    description: "Founder-level product thinker with a focus on building user-centric, impactful solutions in education and business automation."
  },
  {
    icon: Globe,
    title: "AI Integration & Vision",
    description: "Focused on leveraging artificial intelligence to personalize learning, automate assessments, and improve decision-making in schools."
  }
];


  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl text-primary mb-4">About Me</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Learn more about my journey and what drives my passion for development
          </p>
          </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="space-y-4">

              <h3 className="text-2xl text-primary">My Story</h3>
             <p className="text-muted-foreground">I’m a passionate product builder and full stack developer with a strong focus on education and innovation. My journey into tech started with a deep desire to solve real problems, especially in underserved communities. With a background in both software engineering and strategic leadership, I founded ST TECH to transform how rural schools handle learning, assessment, and administration — now powered by AI. I thrive on building impactful products, leading cross-functional teams, and using technology to drive meaningful change.</p>
             
             <p className="text-muted-foreground mt-4">Right now, my focus is on scaling our EdTech platform, streamlining digital education systems, and integrating AI into classroom experiences. I enjoy the process of turning abstract ideas into functional tools that improve lives. When I’m not coding or managing product direction, I love reading about tech trends, mentoring aspiring developers, and brainstorming with fellow innovators. I'm driven by purpose and always excited to learn more.</p> 
            </div>

            <div className="space-y-4">
              <h4 className="text-lg text-primary">What I Bring!</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                  A strong vision for building products that solve real problems
                </li>
                <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                  Versatility as a full stack developer with hands-on experience across the entire development cycle
                </li>
                <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                  A collaborative mindset that values communication, growth, and shared success
                </li>
                <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                  A product-driven approach to problem-solving — always focused on user experience and efficiency
                </li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((highlight, index) => (
              <Card key={index} className="border border-border hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center space-y-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                    <highlight.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="text-primary">{highlight.title}</h4>
                  <p className="text-sm text-muted-foreground">{highlight.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}