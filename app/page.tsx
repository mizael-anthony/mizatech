import LayoutWrapper from "@/components/layout-wrapper"
import HeroSection from "@/components/hero-section"
import ServicesSection from "@/components/services-section"
import StatsSection from "@/components/stats-section"
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
          question: "How long does a typical project take?",
          answer: "Project timelines vary depending on complexity and scope. Simple websites typically take 2-4 weeks, while complex web applications can take 2-6 months. We'll provide a detailed timeline during our initial consultation."
        },
        {
          question: "Do you provide ongoing support and maintenance?",
          answer: "Yes, we offer comprehensive support and maintenance packages to ensure your application stays secure, up-to-date, and performing optimally. This includes regular updates, security patches, and technical support."
        },
        {
          question: "What technologies do you specialize in?",
          answer: "We work with modern technologies including React, Next.js, Node.js, Python, React Native, and various cloud platforms. We choose the best tech stack based on your specific requirements and long-term goals."
        },
        {
          question: "Can you integrate AI into existing systems?",
          answer: "Absolutely! We specialize in integrating AI and machine learning solutions into existing applications. Whether it's chatbots, data analysis, or automation, we can enhance your current systems with intelligent features."
        },
        {
          question: "What is your development process?",
          answer: "We follow an agile development approach with regular communication and updates. Our process includes discovery, planning, design, development, testing, and deployment phases, with client feedback incorporated throughout."
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
          question: "Combien de temps prend un projet typique ?",
          answer: "Les délais des projets varient selon la complexité et l'étendue. Les sites web simples prennent généralement 2 à 4 semaines, tandis que les applications web complexes peuvent prendre 2 à 6 mois. Nous fournirons un calendrier détaillé lors de notre consultation initiale."
        },
        {
          question: "Fournissez-vous un support et une maintenance continus ?",
          answer: "Oui, nous offrons des forfaits complets de support et de maintenance pour garantir que votre application reste sécurisée, à jour et performante. Cela inclut les mises à jour régulières, les correctifs de sécurité et le support technique."
        },
        {
          question: "Dans quelles technologies vous spécialisez-vous ?",
          answer: "Nous travaillons avec des technologies modernes incluant React, Next.js, Node.js, Python, React Native, et diverses plateformes cloud. Nous choisissons la meilleure pile technologique basée sur vos besoins spécifiques et objectifs à long terme."
        },
        {
          question: "Pouvez-vous intégrer l'IA dans les systèmes existants ?",
          answer: "Absolument ! Nous nous spécialisons dans l'intégration de solutions d'IA et d'apprentissage automatique dans les applications existantes. Qu'il s'agisse de chatbots, d'analyse de données ou d'automatisation, nous pouvons améliorer vos systèmes actuels avec des fonctionnalités intelligentes."
        },
        {
          question: "Quel est votre processus de développement ?",
          answer: "Nous suivons une approche de développement agile avec une communication et des mises à jour régulières. Notre processus comprend les phases de découverte, planification, conception, développement, test et déploiement, avec les commentaires des clients intégrés tout au long."
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
