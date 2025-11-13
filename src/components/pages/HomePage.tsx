import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Mail, Phone, MapPin, MessageCircle, Linkedin, Github, Clock, Calendar, Globe } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";
import AnimatedBackground from "@/components/AnimatedBackground";

interface HomePageProps {
  onNavigate: (page: string) => void;
}

const HomePage = ({ onNavigate }: HomePageProps) => {
  return (
    <div className="min-h-screen relative">
      <AnimatedBackground />
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 hero-gradient opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-8 fade-in">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                  <span className="block">BIKAITSOTRA</span>
                  <span className="block hero-gradient bg-clip-text text-transparent">
                    Mailaka John Koji
                  </span>
                </h1>
                <h2 className="text-xl lg:text-2xl text-muted-foreground">
                  Développeur Full-Stack & Spécialiste en Intelligence Artificielle
                </h2>
              </div>

              <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
                Bonjour et bienvenue ! Je suis un étudiant en informatique passionné par l'intelligence artificielle, 
                la science des données et le développement full-stack. Je m'efforce de combiner une expertise technique 
                solide avec une vision stratégique des technologies de demain pour créer des solutions innovantes et à fort impact.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  onClick={() => onNavigate("about")}
                  className="group hero-gradient text-white hover:scale-105 transition-bounce"
                  size="lg"
                >
                  En savoir plus sur moi
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-smooth" />
                </Button>
                <Button
                  onClick={() => onNavigate("projects")}
                  variant="outline"
                  size="lg"
                  className="hover:bg-secondary transition-smooth"
                >
                  Voir mes projets
                </Button>
              </div>
            </div>

            {/* Profile Image */}
            <div className="relative slide-up">
              <div className="relative max-w-md mx-auto">
                <div className="absolute inset-0 hero-gradient rounded-full blur-3xl opacity-30 floating"></div>
                <div className="relative bg-card p-2 rounded-full glow-primary">
                  <img
                    src={`${profilePhoto}?v=${Date.now()}`}
                    alt="BIKAITSOTRA Mailaka John Koji"
                    className="w-full h-auto rounded-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Contact Section */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h3 className="text-3xl font-bold text-center mb-12 hero-gradient bg-clip-text text-transparent">Contactez-moi</h3>
            
            {/* Primary Contact Methods */}
            <div className="grid md:grid-cols-4 gap-6 mb-12">
              <Card className="card-gradient border-border hover:glow-accent transition-smooth group cursor-pointer"
                  onClick={() => window.location.href = 'mailto:johnbikaitsotra@gmail.com?subject=Demande de collaboration&body=Bonjour John, je souhaiterais discuter d\'un projet avec vous...'}
              >
                <CardContent className="p-6 text-center">
                  <Mail className="w-10 h-10 text-accent mx-auto mb-4 group-hover:scale-110 transition-smooth" />
                  <h4 className="font-semibold mb-2">Email Principal</h4>
                  <p className="text-muted-foreground text-sm mb-2">johnbikaitsotra@gmail.com</p>
                  <div className="flex items-center justify-center text-xs text-accent">
                    <Clock className="w-3 h-3 mr-1" />
                    Réponse sous 24h
                  </div>
                </CardContent>
              </Card>

             <Card className="card-gradient border-border hover:glow-accent transition-smooth group">
  <CardContent className="p-6 text-center">
    <Phone className="w-10 h-10 text-accent mx-auto mb-4 group-hover:scale-110 transition-smooth" />
    <h4 className="font-semibold mb-4">Téléphone</h4>

    {/* Numéro principal */}
    <div className="flex items-center justify-center gap-2 mb-2">
      <a
        href="tel:+261348856227"
        className="text-muted-foreground text-sm hover:text-accent transition-colors"
      >
        +261 34 88 562 27
      </a>
      <Button
        size="sm"
        variant="outline"
        className="rounded-full p-1.5 h-7 w-7 hover:bg-accent/10"
        onClick={() => window.location.href = 'tel:+261348856227'}
        aria-label="Appeler le numéro principal"
      >
        <Phone className="w-3 h-3 text-accent" />
      </Button>
    </div>

    {/* Numéro secondaire */}
    <div className="flex items-center justify-center gap-2 mb-4">
      <a
        href="tel:+261324770505"
        className="text-muted-foreground text-sm hover:text-accent transition-colors"
      >
        +261 32 47 705 05
      </a>
      <Button
        size="sm"
        variant="outline"
        className="rounded-full p-1.5 h-7 w-7 hover:bg-accent/10"
        onClick={() => window.location.href = 'tel:+261324770505'}
        aria-label="Appeler le numéro secondaire"
      >
        <Phone className="w-3 h-3 text-accent" />
      </Button>
    </div>

    <div className="flex items-center justify-center text-xs text-accent">
      <Calendar className="w-3 h-3 mr-1" />
      Lun-Ven 8h-18h
    </div>
  </CardContent>
</Card>


              <Card className="card-gradient border-border hover:glow-accent transition-smooth group cursor-pointer"
              onClick={() => window.open('https://wa.me/+261383867092', '_blank')}
              >
                <CardContent className="p-6 text-center">
                  <MessageCircle className="w-10 h-10 text-accent mx-auto mb-4 group-hover:scale-110 transition-smooth" />
                  <h4 className="font-semibold mb-2">WhatsApp</h4>
                  <p className="text-muted-foreground text-sm mb-2">+261 38 38 670 92</p>
                  <div className="flex items-center justify-center text-xs text-accent">
                    <Globe className="w-3 h-3 mr-1" />
                    Disponible 24/7
                  </div>
                </CardContent>
              </Card>

              <Card 
                className="card-gradient border-border hover:glow-accent transition-smooth group cursor-pointer"
                onClick={() => window.open('https://www.linkedin.com/in/john-koji-bikaitsotra-315379286', '_blank')}
              >
                <CardContent className="p-6 text-center">
                  <Linkedin className="w-10 h-10 text-accent mx-auto mb-4 group-hover:scale-110 transition-smooth" />
                  <h4 className="font-semibold mb-2">LinkedIn</h4>
                  <p className="text-muted-foreground text-sm mb-2">Réseau professionnel</p>
                  <div className="flex items-center justify-center text-xs text-accent">
                    <Globe className="w-3 h-3 mr-1" />
                    Connectons-nous !
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Additional Contact Info */}
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="card-gradient border-border">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <MapPin className="w-6 h-6 text-accent mr-3" />
                    <h4 className="font-semibold">Adresse Complète</h4>
                  </div>
                  <p className="text-muted-foreground mb-2">Lot 8F23 Andranomainty</p>
                  <p className="text-muted-foreground mb-2">MANAKARA, Madagascar</p>
                  <p className="text-xs text-accent">Disponible pour rendez-vous sur demande</p>
                </CardContent>
              </Card>

              <Card className="card-gradient border-border">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Globe className="w-6 h-6 text-accent mr-3" />
                    <h4 className="font-semibold">Langues Parlées</h4>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Malgache</span>
                      <span className="text-xs bg-accent/20 text-accent px-2 py-1 rounded">Natif</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Français</span>
                      <span className="text-xs bg-accent/20 text-accent px-2 py-1 rounded">Courant</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Anglais</span>
                      <span className="text-xs bg-accent/20 text-accent px-2 py-1 rounded">Technique</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Call to Action */}
            <div className="text-center mt-12">
              <h4 className="text-xl font-semibold mb-4">Prêt à collaborer ?</h4>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Que vous ayez un projet d'IA, une application web à développer ou simplement une idée à discuter, 
                je serais ravi d'échanger avec vous sur vos besoins.
              </p>
              <Button 
                onClick={() => window.location.href = 'mailto:johnbikaitsotra@gmail.com?subject=Demande de collaboration&body=Bonjour John, je souhaiterais discuter d\'un projet avec vous...'}
                className="hero-gradient text-white hover:scale-105 transition-bounce"
                size="lg"
              >
                <Mail className="w-4 h-4 mr-2" />
                Envoyer un email
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;