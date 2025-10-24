import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Mail, Phone, MessageCircle, MapPin, Globe, 
  Plane, Users, Waves, Trophy, FileText, Download 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedBackground from "@/components/AnimatedBackground";
import cvPdf from "@/assets/CV.pdf";

const AboutPage = () => {
  const contactInfo = [
    { icon: Mail, label: "Email", value: "johnbikaitsotra@gmail.com" },
    { icon: Phone, label: "Téléphone", value: "+261 34 88 562 27 / +261 32 47 705 05" },
    { icon: MessageCircle, label: "WhatsApp", value: "+261 38 38 670 92" },
    { icon: MapPin, label: "Adresse", value: "Lot 8F23 Andranomainty MANAKARA" },
  ];

  const languages = ["Malgache", "Français", "Anglais"];
  const hobbies = [
    { icon: Plane, label: "Voyages", description: "Manakara, Vohipeno, Fianarantsoa, Tananarive" },
    { icon: Waves, label: "Natation", description: "Sport aquatique pour me ressourcer" },
    { icon: Trophy, label: "Football", description: "Sport d'équipe et de stratégie" },
  ];

  return (
    <div className="py-20 relative">
      <AnimatedBackground />
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Header */}
          <div className="text-center space-y-4 fade-in">
            <h1 className="text-4xl lg:text-5xl font-bold">
              À Propos de <span className="hero-gradient bg-clip-text text-transparent">Moi</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Découvrez mon parcours, mes passions et mes aspirations professionnelles
            </p>
          </div>

          {/* Qui suis-je */}
          <Card className="card-gradient border-border slide-up">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-3">
                <Users className="w-6 h-6 text-primary" />
                Qui suis-je ?
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="prose prose-lg max-w-none text-muted-foreground">
                <p className="leading-relaxed">
                  Actuellement en <strong className="text-foreground">Master en Science des Données et Intelligence Artificielle à l'EMIT</strong>, 
                  ma passion est de repousser les limites de la technologie pour résoudre des problèmes concrets. 
                  Mon objectif est de développer des solutions IA qui sont non seulement performantes et scalables, 
                  mais aussi éthiques, particulièrement dans des secteurs essentiels comme la santé, l'éducation ou l'automatisation.
                </p>
                <p className="leading-relaxed">
                  Ma curiosité ne s'arrête pas au code. Je suis un grand amateur de voyages, ayant exploré de nombreuses villes 
                  comme Manakara, Vohipeno, Fianarantsoa, et Tananarive. Côté sport, je pratique la natation et le football pour me ressourcer.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <Card className="card-gradient border-border slide-up">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-3">
                <Mail className="w-6 h-6 text-primary" />
                Informations de Contact
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                {contactInfo.map((contact, index) => {
                  const Icon = contact.icon;
                  return (
                    <div key={index} className="flex items-start gap-4 p-4 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-smooth">
                      <Icon className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-foreground">{contact.label}</h4>
                        <p className="text-muted-foreground text-sm mt-1">{contact.value}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>

          {/* Languages & Hobbies */}
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Languages */}
            <Card className="card-gradient border-border slide-up">
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-3">
                  <Globe className="w-5 h-5 text-primary" />
                  Langues
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex flex-wrap gap-2">
                  {languages.map((language, index) => (
                    <Badge key={index} variant="secondary" className="px-3 py-1">
                      {language}
                    </Badge>
                  ))}
                </div>
                
                {/* CV Download Button */}
                <Button 
                  className="w-full group relative overflow-hidden"
                  variant="default"
                  onClick={() => window.open(cvPdf, '_blank')}
                >
                  <div className="flex items-center justify-center gap-2 relative z-10">
                    <FileText className="w-4 h-4" />
                    <span>Télécharger mon CV</span>
                    <Download className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
                  </div>
                </Button>
              </CardContent>
            </Card>

            {/* Hobbies */}
            <Card className="card-gradient border-border slide-up">
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-3">
                  <Trophy className="w-5 h-5 text-primary" />
                  Passions & Loisirs
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {hobbies.map((hobby, index) => {
                    const Icon = hobby.icon;
                    return (
                      <div key={index} className="flex items-start gap-3">
                        <Icon className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold text-foreground">{hobby.label}</h4>
                          <p className="text-muted-foreground text-sm">{hobby.description}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
