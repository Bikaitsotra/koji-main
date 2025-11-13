import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import ImageModal from "@/components/ui/image-modal";
import AnimatedBackground from "@/components/AnimatedBackground";
import { 
  Bot, Eye, Settings, MessageSquare, Home, 
  Mic, Building, GraduationCap, ExternalLink,
  Github, Brain, Database, Folder, LayoutDashboard, BookOpenCheck, ShoppingCart
} from "lucide-react";

// Import demo images
import chatLlmDemo from "@/assets/demo-chat-llm.jpg";
import computerVisionDemo from "@/assets/demo-computer-vision.jpg";
import fineTuningDemo from "@/assets/demo-fine-tuning.jpg";
import nlpAssistantDemo from "@/assets/demo-nlp-assistant.jpg";
import smartHomeDemo from "@/assets/demo-smart-home.jpg";
import transcriptionDemo from "@/assets/demo-transcription.jpg";
import businessAppDemo from "@/assets/demo-business-app.jpg";
import schoolManagementDemo from "@/assets/demo-school-management.jpg";
import portfolioDemo from "@/assets/imgP2.png";
import venteDemo from "@/assets/imgV1.png"

// Import Modal images
import computerVisionModal from "@/assets/facialle.png";
import assistanModal from "@/assets/imgA2.png"; 
import managingModal from "@/assets/managing.png"; 
import scolariteModal from "@/assets/imgS1.png"; 
import funtinModal from "@/assets/imgSP1.png"; 
import domotiqueModal from "@/assets/imgD1.png"; 
import llmModal from"@/assets/LLM.png";
import transcriptionModal from "@/assets/imgT1.png"; 
import portfolioModal from "@/assets/imgP3.png";
import venteModal from "@/assets/imgV2.png";

const ProjectsPage = () => {
  const [selectedProject, setSelectedProject] = useState<{
    title: string;
    description: string;
    demoImage: string;
    demoImgModal: string;
    githubUrl?: string;
  } | null>(null);
  const projects = [
    {
      icon: Bot,
      title: "Chat avec LLM",
      description: "Création d'un agent conversationnel intelligent utilisant un grand modèle de langage pour des interactions naturelles et contextuelles.",
      descriptionModal: "Un agent conversationnel intelligent qui utilise un modèle de langage avancé pour des interactions naturelles.",
      technologies: ["Python", "Transformers", "FastAPI", "React"],
      category: "Intelligence Artificielle",
      color: "text-ai-purple",
      demoImage: chatLlmDemo,
      demoImgModal: llmModal,
      githubUrl: "https://github.com/Johnkoji2/chat-ui"
    },
    {
      icon: Eye,
      title: "Vision par Ordinateur",
      description: "Développement de solutions pour l'analyse et l'interprétation d'images dans une reconnaissence facial utilisant des réseaux de neurones convolutionnels.",
      descriptionModal: "Un projet de vision par ordinateur qui utilise des techniques avancées pour une reconnaissance facial.",
      technologies: ["OpenCV", "TensorFlow", "Python"],
      category: "Computer Vision",
      color: "text-tech-blue",
      demoImage: computerVisionDemo,
      demoImgModal: computerVisionModal,
      githubUrl: "https://github.com/username/vision-ordinateur"
    },
    {
      icon: Settings,
      title: "Script de Fine-tuning pour LLM",
      description: "Optimisation et spécialisation de modèles de langage pour des tâches précises et des domaines spécifiques.",
      descriptionModal: "Un script de fine-tuning qui adapte un modèle de langage à des besoins spécifiques.",
      technologies: ["PyTorch", "Hugging Face", "CUDA", "LoRA"],
      category: "Machine Learning",
      color: "text-accent",
      demoImage: fineTuningDemo,
      demoImgModal: funtinModal,
      githubUrl: "https://github.com/Johnkoji2/tiniLLama"
    },
    {
      icon: MessageSquare,
      title: "Assistant Virtuel Intelligent (NLP)",
      description: "Conception d'un assistant capable de comprendre et de traiter le langage naturel avec une compréhension contextuelle avancée.",
      descriptionModal: "Un assistant virtuel qui utilise le traitement du langage naturel pour interagir de manière intelligente.",
      technologies: ["NLTK", "spaCy", "Transformers", "Speech Recognition"],
      category: "Natural Language Processing",
      color: "text-primary",
      demoImage: nlpAssistantDemo,
      demoImgModal: assistanModal,
      githubUrl: "https://github.com/username/assistant-nlp"
    },
    {
      icon: Home,
      title: "Maison Intelligente",
      description: "Projet de domotique pour automatiser et contrôler un environnement domestique avec des capteurs IoT.",
      descriptionModal: "Un système de maison intelligente qui permet de contrôler les appareils domestiques.",
      technologies: ["C++", "Arduino", "Raspberry Pi", "Flutter", "MQTT"],
      category: "IoT & Automation",
      color: "text-ai-purple",
      demoImage: smartHomeDemo,
      demoImgModal: domotiqueModal,
      githubUrl: "https://www.tinkercad.com/things/iccIEfPcCc8-home-automation"
    },
    {
      icon: Mic,
      title: "Transcription Automatique",
      description: "Mise en place d'un système pour convertir la parole en texte en temps réel avec support multilingue.",
      descriptionModal: "Un système de transcription automatique qui convertit la parole en texte en temps réel.",
      technologies: ["Whisper", "Python", "SpeechRecognition", "WebRTC", "Node.js"],
      category: "Audio Processing",
      color: "text-tech-blue",
      demoImage: transcriptionDemo,
      demoImgModal: transcriptionModal,
      githubUrl: "https://github.com/Johnkoji2/transcription"
    },
    {
      icon: Building,
      title: "Application de Gestion d'Entreprise",
      description: "Développement d'une plateforme complète pour la gestion des ressources, des projets et des employés d'une entreprise.",
      descriptionModal: "Une application de gestion d'entreprise qui centralise les ressources et les projets pour une meilleure efficacité.",
      technologies: ["JAVA", "JAVAFX", "MySQL", "Bootstrap"],
      category: "Desktop Application",
      color: "text-accent",
      demoImage: businessAppDemo,
      demoImgModal: managingModal,
      githubUrl: "https://github.com/username/gestion-entreprise"
    },
    {
      icon: GraduationCap,
      title: "Gestion de Scolarité",
      description: "Système de gestion académique pour le suivi des étudiants, des notes, des cours et de l'administration scolaire.",
      descriptionModal: "Un système de gestion de scolarité qui facilite le suivi des étudiants et des cours.",
      technologies: ["Python", "MySQL", "JavaScript", "Chart.js"],
      category: "Education Technology",
      color: "text-primary",
      demoImage: schoolManagementDemo,
      demoImgModal: scolariteModal,
      githubUrl: "https://github.com/Johnkoji2/Scolarite"
    },
    {
      icon: Folder,
      title: "Portfolio",
      description: "Un simple portfolio qui me represente,intuitif est bien ilustre.",
      descriptionModal: "Un simple portfolio. Un sit web statique.",
      technologies: ["HTML", "CSS", "JavaScript", "PHP"],
      category: "Web Development",
      color: "text-primary",
      demoImage: portfolioDemo,
      demoImgModal: portfolioModal,
      githubUrl: "https://github.com/Johnkoji2/Scolarite"
    },
    {
      icon: ShoppingCart,
      title: "Vente en Ligne", 
      description: "Un système de gestion de vente qui facilite le suivi des commendes de produit.", 
      descriptionModal: "Système de gestion de vente de Vin.",
      technologies: ["Node.js", "MySQL", "JavaScript", "React"],
      category: "Web Development",
      color: "text-primary",
      demoImage: venteDemo,
      demoImgModal: venteModal,
      githubUrl: "https://github.com/Johnkoji2/eden-wine"
    }
  ];

  const categories = [...new Set(projects.map(p => p.category))];

  return (
    <div className="py-20">
      <AnimatedBackground />
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Header */}
          <div className="text-center space-y-4 fade-in">
            <h1 className="text-4xl lg:text-5xl font-bold">
              Mes <span className="hero-gradient bg-clip-text text-transparent">Réalisations</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Ma passion pour l'IA et le développement se traduit par des projets concrets et innovants
            </p>
          </div>

          {/* Categories */}
          <div className="flex flex-wrap justify-center gap-3 slide-up">
            {categories.map((category, index) => (
              <Badge key={index} variant="outline" className="px-4 py-2 text-sm">
                {category}
              </Badge>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => {
              const Icon = project.icon;
              return (
                <Card key={index} className="card-gradient border-border hover:glow-accent transition-smooth slide-up group overflow-hidden">
                  {/* Demo Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={project.demoImage} 
                      alt={`Démonstration de ${project.title}`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-smooth" />
                  </div>
                  
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-secondary/50">
                          <Icon className={`w-6 h-6 ${project.color} group-hover:scale-110 transition-bounce`} />
                        </div>
                        <div>
                          <CardTitle className="text-lg">{project.title}</CardTitle>
                          <Badge variant="secondary" className="mt-1 text-xs">
                            {project.category}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {project.descriptionModal}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge 
                          key={techIndex} 
                          variant="outline" 
                          className="text-xs border-border hover:border-primary transition-smooth"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex gap-2 pt-2">
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="flex items-center gap-2"
                        asChild
                      >
                        <a 
                          href={project.githubUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                        >
                          <Github className="w-4 h-4" />
                          Code
                        </a>
                      </Button>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="flex items-center gap-2"
                      onClick={() => setSelectedProject({
                        title: project.title,
                        description: project.description,
                        demoImage: project.demoImage,
                        demoImgModal: project.demoImgModal
                      })}
                      >
                        <ExternalLink className="w-4 h-4" />
                        Demo
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Skills Showcase */}
          <div className="grid md:grid-cols-3 gap-6 mt-16">
            <Card className="card-gradient border-border text-center p-6 hover:glow-primary transition-smooth slide-up">
              <Brain className="w-12 h-12 text-ai-purple mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">IA & Machine Learning</h3>
              <p className="text-muted-foreground text-sm">
                Solutions intelligentes utilisant l'apprentissage automatique et les réseaux de neurones
              </p>
            </Card>

            <Card className="card-gradient border-border text-center p-6 hover:glow-primary transition-smooth slide-up">
              <Database className="w-12 h-12 text-tech-blue mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Applications Full-Stack</h3>
              <p className="text-muted-foreground text-sm">
                Développement complet d'applications web et mobiles avec bases de données
              </p>
            </Card>

            <Card className="card-gradient border-border text-center p-6 hover:glow-primary transition-smooth slide-up">
              <Settings className="w-12 h-12 text-accent mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Automatisation & IoT</h3>
              <p className="text-muted-foreground text-sm">
                Systèmes automatisés et objets connectés pour l'amélioration du quotidien
              </p>
            </Card>
          </div>
        </div>
      </div>

      {/* Image Modal */}
      <ImageModal
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
        imageSrc={selectedProject?.demoImgModal || ""}
        title={selectedProject?.title || ""}
        description={selectedProject?.description}
      />
    </div>
  );
};

export default ProjectsPage;
