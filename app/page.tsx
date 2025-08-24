import LayoutWrapper from "@/components/layout-wrapper"
import HeroSection from "@/components/hero-section"
import ServicesSection from "@/components/services-section"
import TechnologiesSection from "@/components/technologies-section"
import FAQSection from "@/components/faq-section"
import CTASection from "@/components/cta-section"

const translations = {
  en: {
    hero: {
      title: "Building Tomorrow's",
      titleAccent: "Digital Solutions",
      subtitle:
        "Specialized in web & mobile development, API creation, and AI integration. We transform your ideas into powerful, scalable technology solutions.",
      cta: "Get a Quote",
    },
    services: {
      title: "Our Expertise",
      subtitle: "Comprehensive technology solutions tailored to your business needs",
      web: {
        title: "Web Development",
        description: "Modern, responsive websites and web applications built with cutting-edge technologies.",
      },
      mobile: {
        title: "Mobile Development",
        description: "Native and cross-platform mobile applications for iOS and Android.",
      },
      api: {
        title: "API Creation",
        description: "Robust, scalable APIs that power your applications and integrate seamlessly.",
      },
      ai: {
        title: "AI Integration",
        description: "Intelligent solutions that leverage machine learning and artificial intelligence.",
      },
    },
    stats: {
      title: "Trusted by Forward-Thinking Companies",
      projects: "Projects Completed",
      clients: "Happy Clients",
      experience: "Years Experience",
      satisfaction: "Client Satisfaction",
    },
    technologies: {
      title: "Technologies We Use",
      subtitle: "We work with modern, industry-leading technologies to deliver robust and scalable solutions.",
    },
    faq: {
      title: "Frequently Asked Questions",
      subtitle: "Get answers to common questions about our services and development process.",
      items: [
        {
          question: "How long does an MVP development take?",
          answer: "Our MVP development process typically takes 14 days from contract signature. This streamlined timeline ensures rapid time-to-market while maintaining high quality standards."
        },
        {
          question: "Do you provide ongoing support and maintenance?",
          answer: "Yes, we offer comprehensive support and maintenance packages to ensure your application remains secure, up-to-date, and performing optimally. Our services include regular updates, security patches, performance monitoring, and dedicated technical support."
        },
        {
          question: "What if I don't have a clear project vision?",
          answer: "Absolutely. We specialize in discovery workshops and requirements analysis. Our team will work closely with you to define your project scope, identify key objectives, and develop a comprehensive solution strategy that exceeds your expectations."
        }
      ]
    },
    cta: {
      title: "Ready to Start Your Project?",
      subtitle: "Let's discuss how we can help bring your vision to life with cutting-edge technology solutions.",
      button: "Get Started Today",
    },
  },
  fr: {
    hero: {
      title: "Construire les",
      titleAccent: "Solutions Numériques de Demain",
      subtitle:
        "Spécialisés dans le développement web et mobile, la création d'API et l'intégration IA. Nous transformons vos idées en solutions technologiques puissantes et évolutives.",
      cta: "Obtenir un devis",
    },
    services: {
      title: "Notre Expertise",
      subtitle: "Solutions technologiques complètes adaptées aux besoins de votre entreprise",
      web: {
        title: "Développement Web",
        description:
          "Sites web et applications web modernes et responsives construits avec des technologies de pointe.",
      },
      mobile: {
        title: "Développement Mobile",
        description: "Applications mobiles natives et multiplateformes pour iOS et Android.",
      },
      api: {
        title: "Création d'API",
        description: "APIs robustes et évolutives qui alimentent vos applications et s'intègrent parfaitement.",
      },
      ai: {
        title: "Intégration IA",
        description:
          "Solutions intelligentes qui exploitent l'apprentissage automatique et l'intelligence artificielle.",
      },
    },
    stats: {
      title: "Approuvé par des Entreprises Visionnaires",
      projects: "Projets Réalisés",
      clients: "Clients Satisfaits",
      experience: "Années d'Expérience",
      satisfaction: "Satisfaction Client",
    },
    technologies: {
      title: "Technologies Utilisées",
      subtitle: "Nous travaillons avec des technologies modernes et reconnues pour fournir des solutions robustes et évolutives.",
    },
    faq: {
      title: "Questions Fréquemment Posées",
      subtitle: "Obtenez des réponses aux questions courantes sur nos services et notre processus de développement.",
      items: [
        {
          question: "Combien de temps prend le développement d'un MVP ?",
          answer: "Notre processus de développement MVP prend généralement 14 jours à partir de la signature du contrat. Ce délai optimisé garantit une mise sur le marché rapide tout en maintenant des standards de qualité élevés."
        },
        {
          question: "Fournissez-vous un support et une maintenance continus ?",
          answer: "Oui, nous offrons des packages complets de support et maintenance pour garantir que votre application reste sécurisée, à jour et performante. Nos services incluent des mises à jour régulières, des correctifs de sécurité, la surveillance des performances et un support technique dédié."
        },
        {
          question: "Que faire si je n'ai pas une vision claire de mon projet ?",
          answer: "Absolument. Nous nous spécialisons dans les ateliers de découverte et l'analyse des exigences. Notre équipe travaillera étroitement avec vous pour définir la portée de votre projet, identifier les objectifs clés et développer une stratégie de solution complète qui dépasse vos attentes."
        }
      ]
    },
    cta: {
      title: "Prêt à Démarrer Votre Projet ?",
      subtitle:
        "Discutons de la façon dont nous pouvons vous aider à concrétiser votre vision avec des solutions technologiques de pointe.",
      button: "Commencer Aujourd'hui",
    },
  },
}

function HomePage() {
  const heroTranslations = {
    en: translations.en.hero,
    fr: translations.fr.hero,
  }

  const servicesTranslations = {
    en: translations.en.services,
    fr: translations.fr.services,
  }

  const statsTranslations = {
    en: translations.en.stats,
    fr: translations.fr.stats,
  }

  const technologiesTranslations = {
    en: translations.en.technologies,
    fr: translations.fr.technologies,
  }

  const faqTranslations = {
    en: translations.en.faq,
    fr: translations.fr.faq,
  }

  const ctaTranslations = {
    en: translations.en.cta,
    fr: translations.fr.cta,
  }

  return (
    <div className="bg-white">
      <HeroSection translations={heroTranslations} />
      <ServicesSection translations={servicesTranslations} />
      <TechnologiesSection translations={technologiesTranslations} />
      <FAQSection translations={faqTranslations} />
      <CTASection translations={ctaTranslations} />
    </div>
  )
}

export default function Home() {
  return (
    <LayoutWrapper>
      <HomePage />
    </LayoutWrapper>
  )
}
