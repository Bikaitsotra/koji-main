import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Code, Database, Monitor, Settings, Terminal, 
  Layers, Globe, Cpu, Smartphone
} from "lucide-react";

const SkillsPage = () => {
  const skillCategories = [
    {
      icon: Code,
      title: "Langages de Programmation",
      color: "text-ai-purple",
      skills: ["HTML", "CSS", "JavaScript", "PHP", "Python", "Java", "C++"]
    },
    {
      icon: Layers,
      title: "Frameworks & Librairies",
      color: "text-tech-blue",
      skills: ["Bootstrap", "jQuery", "Ajax", "Node.js", "Laravel", "Django", "Flask","FastAPI", "JavaFX"]
    },
    {
      icon: Monitor,
      title: "IDE et Éditeurs",
      color: "text-accent",
      skills: ["VSCode", "Atom", "Spyder", "IntelliJ", "kWrite", "Shell", "Anaconda"]
    },
    {
      icon: Settings,
      title: "Logiciels",
      color: "text-primary",
      skills: ["Microsoft Office (Word, Excel, PowerPoint)", "Cisco Packet Tracer", "Proteus", "Gimp"]
    },
    {
      icon: Terminal,
      title: "Systèmes d'Exploitation",
      color: "text-ai-purple",
      skills: ["Linux (Ubuntu, Kali Linux, Debian)", "Windows"]
    },
    {
      icon: Database,
      title: "Méthodologies",
      color: "text-tech-blue",
      skills: ["MERISE", "UML"]
    }
  ];

  const techStack = [
    { category: "Frontend", technologies: ["React", "Vue.js", "Angular", "TypeScript"] },
    { category: "Backend", technologies: ["Python", "Node.js", "PHP", "Java"] },
    { category: "Database", technologies: ["MySQL", "PostgreSQL", "MongoDB", "Redis"] },
    { category: "DevOps", technologies: ["Docker", "Git", "Linux", "CI/CD"] },
    { category: "AI/ML", technologies: ["TensorFlow", "PyTorch", "Scikit-learn", "OpenCV"] },
    { category: "Cloud", technologies: ["AWS", "Google Cloud", "Azure", "Heroku"] }
  ];

  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Header */}
          <div className="text-center space-y-4 fade-in">
            <h1 className="text-4xl lg:text-5xl font-bold">
              Mes <span className="hero-gradient bg-clip-text text-transparent">Compétences</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Voici un aperçu des technologies et des outils que je maîtrise pour donner vie à vos projets
            </p>
          </div>

          {/* Main Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <Card key={index} className="card-gradient border-border hover:glow-accent transition-smooth slide-up group">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-lg flex items-center gap-3">
                      <Icon className={`w-6 h-6 ${category.color} group-hover:scale-110 transition-bounce`} />
                      {category.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, skillIndex) => (
                        <Badge 
                          key={skillIndex} 
                          variant="secondary" 
                          className="text-xs hover:bg-primary hover:text-primary-foreground transition-smooth cursor-default"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Tech Stack Overview */}
          <Card className="card-gradient border-border slide-up">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-3">
                <Cpu className="w-6 h-6 text-primary" />
                Stack Technologique Complète
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {techStack.map((stack, index) => (
                  <div key={index} className="space-y-3">
                    <h4 className="font-semibold text-foreground flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-primary"></div>
                      {stack.category}
                    </h4>
                    <div className="flex flex-wrap gap-1">
                      {stack.technologies.map((tech, techIndex) => (
                        <Badge 
                          key={techIndex} 
                          variant="outline" 
                          className="text-xs border-border hover:border-primary transition-smooth"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Skills Highlights */}
          <div className="grid lg:grid-cols-3 gap-6">
            <Card className="card-gradient border-border text-center p-6 hover:glow-primary transition-smooth slide-up">
              <Globe className="w-12 h-12 text-ai-purple mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Développement Web</h3>
              <p className="text-muted-foreground text-sm">
                Création d'applications web modernes et responsives avec les dernières technologies
              </p>
            </Card>

            <Card className="card-gradient border-border text-center p-6 hover:glow-primary transition-smooth slide-up">
              <Cpu className="w-12 h-12 text-tech-blue mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Intelligence Artificielle</h3>
              <p className="text-muted-foreground text-sm">
                Développement de solutions IA pour l'analyse de données et l'apprentissage automatique
              </p>
            </Card>

            <Card className="card-gradient border-border text-center p-6 hover:glow-primary transition-smooth slide-up">
              <Smartphone className="w-12 h-12 text-accent mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Applications Full-Stack</h3>
              <p className="text-muted-foreground text-sm">
                Conception complète d'applications de la base de données à l'interface utilisateur
              </p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsPage;