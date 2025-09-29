import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  GraduationCap, Award, Calendar, MapPin, 
  Star, Book, Users, Trophy
} from "lucide-react";

const EducationPage = () => {
  const education = [
    {
      year: "2024-2025",
      degree: "Master en Science des Données et Intelligence Artificielle",
      status: "en cours",
      institution: "EMIT - Fianarantsoa",
      description: "Formation avancée en IA, machine learning, deep learning et science des données",
      color: "text-ai-purple",
      current: true
    },
    {
      year: "2022-2023",
      degree: "Licence en Informatique et Programmation (Bacc+3)",
      institution: "IFT - Fianarantsoa",
      mention: "Bien",
      description: "Formation complète en développement logiciel et systèmes informatiques",
      color: "text-tech-blue"
    },
    {
      year: "2021-2022",
      degree: "Diplôme en Informatique (Bacc+2)",
      institution: "ASJA - Antsirabe",
      description: "Bases solides en programmation et architecture des systèmes",
      color: "text-accent"
    },
    {
      year: "2017-2018",
      degree: "Baccalauréat Scientifique (Série D)",
      institution: "LPM - Manakara",
      description: "Formation scientifique avec spécialisation en mathématiques et sciences",
      color: "text-primary"
    }
  ];

  const certifications = [
    {
      title: "Prévention de l'exploitation et des abus sexuels (PSEA)",
      organization: "UNICEF",
      date: "Juillet 2024",
      icon: Award,
      color: "text-ai-purple"
    },
    {
      title: "Formation en Communication",
      subtitle: "Animateur, Enquêteur, Agent de terrain...",
      organization: "NEXT GENERATION",
      date: "Octobre 2023",
      icon: Users,
      color: "text-tech-blue"
    },
    {
      title: "Formation des Formateurs Professionnels",
      organization: "I.T.E.P.E",
      date: "Novembre 2022",
      mention: "Bien",
      icon: Book,
      color: "text-accent"
    }
  ];

  const skills = [
    "Intelligence Artificielle", "Machine Learning", "Deep Learning", 
    "Science des Données", "Développement Full-Stack", "Bases de Données",
    "Communication", "Formation", "Leadership", "Gestion de Projet"
  ];

  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Header */}
          <div className="text-center space-y-4 fade-in">
            <h1 className="text-4xl lg:text-5xl font-bold">
              Mon <span className="hero-gradient bg-clip-text text-transparent">Parcours</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Formation académique et certifications professionnelles
            </p>
          </div>

          {/* Education Timeline */}
          <div className="space-y-8">
            <h2 className="text-2xl font-bold text-center mb-8 flex items-center justify-center gap-3 slide-up">
              <GraduationCap className="w-6 h-6 text-primary" />
              Parcours Académique
            </h2>
            
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-0.5 bg-border h-full"></div>
              
              {education.map((edu, index) => (
                <div key={index} className={`relative flex items-center mb-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} slide-up`}>
                  {/* Timeline dot */}
                  <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background z-10"></div>
                  
                  <div className={`ml-12 md:ml-0 md:w-5/12 ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}>
                    <Card className="card-gradient border-border hover:glow-accent transition-smooth">
                      <CardHeader className="pb-3">
                        <div className="flex items-start justify-between">
                          <div className="space-y-2">
                            <div className="flex items-center gap-2">
                              <Calendar className="w-4 h-4 text-muted-foreground" />
                              <span className="text-sm font-medium">{edu.year}</span>
                              {edu.current && (
                                <Badge variant="secondary" className="text-xs bg-primary/20 text-primary">
                                  En cours
                                </Badge>
                              )}
                            </div>
                            <CardTitle className="text-lg leading-tight">
                              {edu.degree}
                            </CardTitle>
                            <div className="flex items-center gap-2 text-muted-foreground">
                              <MapPin className="w-4 h-4" />
                              <span className="text-sm">{edu.institution}</span>
                            </div>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-3">
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {edu.description}
                        </p>
                        {edu.mention && (
                          <div className="flex items-center gap-2">
                            <Star className="w-4 h-4 text-yellow-500" />
                            <Badge variant="outline" className="text-xs">
                              Mention: {edu.mention}
                            </Badge>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="space-y-8">
            <h2 className="text-2xl font-bold text-center mb-8 flex items-center justify-center gap-3 slide-up">
              <Trophy className="w-6 h-6 text-primary" />
              Mes Certifications
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {certifications.map((cert, index) => {
                const Icon = cert.icon;
                return (
                  <Card key={index} className="card-gradient border-border hover:glow-accent transition-smooth slide-up group">
                    <CardHeader className="pb-4">
                      <div className="flex items-start gap-3">
                        <div className="p-2 rounded-lg bg-secondary/50">
                          <Icon className={`w-5 h-5 ${cert.color} group-hover:scale-110 transition-bounce`} />
                        </div>
                        <div className="flex-1">
                          <CardTitle className="text-base leading-tight">
                            {cert.title}
                          </CardTitle>
                          {cert.subtitle && (
                            <p className="text-xs text-muted-foreground mt-1">
                              {cert.subtitle}
                            </p>
                          )}
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-medium">{cert.organization}</span>
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Calendar className="w-4 h-4" />
                          <span className="text-sm">{cert.date}</span>
                        </div>
                      </div>
                      {cert.mention && (
                        <div className="flex items-center gap-2">
                          <Star className="w-4 h-4 text-yellow-500" />
                          <Badge variant="outline" className="text-xs">
                            Mention: {cert.mention}
                          </Badge>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Skills Summary */}
          <Card className="card-gradient border-border slide-up">
            <CardHeader>
              <CardTitle className="text-xl flex items-center gap-3">
                <Star className="w-5 h-5 text-primary" />
                Compétences Acquises
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <Badge 
                    key={index} 
                    variant="secondary" 
                    className="px-3 py-1 hover:bg-primary hover:text-primary-foreground transition-smooth cursor-default"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default EducationPage;