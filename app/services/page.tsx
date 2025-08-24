import LayoutWrapper from "@/components/layout-wrapper"
import ServicesPageClient from "@/components/services-page-client"

const translations = {
  en: {
    hero: {
      title: "Our Services",
      subtitle:
        "Comprehensive technology solutions designed to accelerate your business growth and digital transformation.",
    },
    services: {
      web: {
        title: "Web Development",
        description:
          "Create powerful, responsive web applications that deliver exceptional user experiences and drive business results.",
        features: [
          "Custom Web Applications",
          "E-commerce Solutions",
          "Progressive Web Apps (PWA)",
          "Content Management Systems",
          "Performance Optimization",
          "SEO Implementation",
        ],
      },
      mobile: {
        title: "Mobile Development",
        description:
          "Build native and cross-platform mobile applications that engage users and expand your reach across all devices.",
        features: [
          "iOS & Android Development",
          "Cross-platform Solutions",
          "UI/UX Design",
          "App Store Optimization",
          "Push Notifications",
          "Offline Functionality",
        ],
      },
      api: {
        title: "API Development",
        description:
          "Design and develop robust, scalable APIs that power your applications and enable seamless integrations.",
        features: [
          "RESTful API Design",
          "GraphQL Implementation",
          "API Documentation",
          "Authentication & Security",
          "Rate Limiting & Monitoring",
          "Third-party Integrations",
        ],
      },
      ai: {
        title: "AI Integration",
        description:
          "Leverage artificial intelligence and machine learning to automate processes and gain competitive advantages.",
        features: [
          "Machine Learning Models",
          "Natural Language Processing",
          "Computer Vision",
          "Chatbots & Virtual Assistants",
          "Predictive Analytics",
          "AI-powered Automation",
        ],
      },
    },
    process: {
      title: "Our Development Process",
      subtitle: "A proven methodology that ensures quality, transparency, and timely delivery.",
      steps: [
        {
          title: "Discovery & Planning",
          description: "We analyze your requirements and create a detailed project roadmap.",
        },
        {
          title: "Design & Prototyping",
          description: "Create wireframes and prototypes to visualize the final solution.",
        },
        {
          title: "Development & Testing",
          description: "Build your solution using best practices and rigorous testing.",
        },
        {
          title: "Deployment & Support",
          description: "Launch your project and provide ongoing maintenance and support.",
        },
      ],
    },
    cta: {
      title: "Ready to Get Started?",
      subtitle: "Let's discuss your project requirements and create a solution that exceeds your expectations.",
      button: "Start Your Project",
    },
  },
  fr: {
    hero: {
      title: "Nos Services",
      subtitle:
        "Solutions technologiques complètes conçues pour accélérer la croissance de votre entreprise et votre transformation numérique.",
    },
    services: {
      web: {
        title: "Développement Web",
        description:
          "Créez des applications web puissantes et responsives qui offrent des expériences utilisateur exceptionnelles et génèrent des résultats commerciaux.",
        features: [
          "Applications Web Personnalisées",
          "Solutions E-commerce",
          "Applications Web Progressives (PWA)",
          "Systèmes de Gestion de Contenu",
          "Optimisation des Performances",
          "Implémentation SEO",
        ],
      },
      mobile: {
        title: "Développement Mobile",
        description:
          "Construisez des applications mobiles natives et multiplateformes qui engagent les utilisateurs et étendent votre portée sur tous les appareils.",
        features: [
          "Développement iOS & Android",
          "Solutions Multiplateformes",
          "Design UI/UX",
          "Optimisation App Store",
          "Notifications Push",
          "Fonctionnalité Hors Ligne",
        ],
      },
      api: {
        title: "Développement d'API",
        description:
          "Concevez et développez des API robustes et évolutives qui alimentent vos applications et permettent des intégrations transparentes.",
        features: [
          "Conception d'API RESTful",
          "Implémentation GraphQL",
          "Documentation API",
          "Authentification & Sécurité",
          "Limitation de Débit & Surveillance",
          "Intégrations Tierces",
        ],
      },
      ai: {
        title: "Intégration IA",
        description:
          "Exploitez l'intelligence artificielle et l'apprentissage automatique pour automatiser les processus et obtenir des avantages concurrentiels.",
        features: [
          "Modèles d'Apprentissage Automatique",
          "Traitement du Langage Naturel",
          "Vision par Ordinateur",
          "Chatbots & Assistants Virtuels",
          "Analyses Prédictives",
          "Automatisation Alimentée par l'IA",
        ],
      },
    },
    process: {
      title: "Notre Processus de Développement",
      subtitle: "Une méthodologie éprouvée qui garantit la qualité, la transparence et la livraison dans les délais.",
      steps: [
        {
          title: "Découverte & Planification",
          description: "Nous analysons vos exigences et créons une feuille de route détaillée du projet.",
        },
        {
          title: "Design & Prototypage",
          description: "Créer des wireframes et des prototypes pour visualiser la solution finale.",
        },
        {
          title: "Développement & Tests",
          description: "Construire votre solution en utilisant les meilleures pratiques et des tests rigoureux.",
        },
        {
          title: "Déploiement & Support",
          description: "Lancer votre projet et fournir une maintenance et un support continus.",
        },
      ],
    },
    cta: {
      title: "Prêt à Commencer ?",
      subtitle: "Discutons de vos exigences de projet et créons une solution qui dépasse vos attentes.",
      button: "Démarrer Votre Projet",
    },
  },
}

function ServicesPage() {
  return <ServicesPageClient translations={translations} />
}

export default function Services() {
  return (
    <LayoutWrapper>
      <ServicesPage />
    </LayoutWrapper>
  )
}
