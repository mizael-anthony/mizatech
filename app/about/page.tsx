import LayoutWrapper from "@/components/layout-wrapper"
import AboutPageClient from "@/components/about-page-client"

const translations = {
  en: {
    hero: {
      title: "About Mizatech",
      subtitle:
        "We are passionate technologists dedicated to transforming businesses through innovative digital solutions.",
    },
    founder: {
      title: "Meet Our Founder",
      name: "Mizael",
      role: "Founder & Lead Developer",
      bio: "With over 5 years of experience in software development, Mizael founded Mizatech with a vision to help businesses leverage cutting-edge technology to achieve their goals. His expertise spans full-stack development, AI integration, and scalable system architecture.",
      quote:
        '"Technology should empower businesses, not complicate them. That\'s why we focus on creating solutions that are both powerful and intuitive."',
    },
    values: {
      title: "Our Values",
      subtitle: "The principles that guide everything we do",
      innovation: {
        title: "Innovation",
        description: "We stay at the forefront of technology, constantly exploring new solutions and methodologies.",
      },
      quality: {
        title: "Quality",
        description:
          "We deliver exceptional results through rigorous testing, best practices, and attention to detail.",
      },
      collaboration: {
        title: "Collaboration",
        description: "We work closely with our clients as partners, ensuring transparent communication throughout.",
      },
    },
    mission: {
      title: "Our Mission",
      description:
        "To empower businesses with innovative technology solutions that drive growth, efficiency, and competitive advantage in the digital age.",
    },
    vision: {
      title: "Our Vision",
      description:
        "To be the trusted technology partner for businesses worldwide, known for delivering transformative digital solutions that exceed expectations.",
    },
    timeline: {
      title: "Our Journey",
      subtitle: "Key milestones in our growth and evolution",
      events: [
        {
          year: "2019",
          title: "Company Founded",
          description: "Mizatech was established with a focus on web development and digital solutions.",
        },
        {
          year: "2020",
          title: "Mobile Expansion",
          description: "Expanded services to include native and cross-platform mobile development.",
        },
        {
          year: "2022",
          title: "AI Integration",
          description: "Added artificial intelligence and machine learning capabilities to our service portfolio.",
        },
        {
          year: "2023",
          title: "API Specialization",
          description: "Became specialists in API development and system integrations.",
        },
        {
          year: "2024",
          title: "Global Reach",
          description: "Serving clients worldwide with a focus on scalable, enterprise-grade solutions.",
        },
      ],
    },
    cta: {
      title: "Let's Work Together",
      subtitle: "Ready to transform your business with innovative technology solutions?",
      button: "Start Your Project",
    },
  },
  fr: {
    hero: {
      title: "À Propos de Mizatech",
      subtitle:
        "Nous sommes des technologues passionnés dédiés à transformer les entreprises grâce à des solutions numériques innovantes.",
    },
    founder: {
      title: "Rencontrez Notre Fondateur",
      name: "Mizael",
      role: "Fondateur & Développeur Principal",
      bio: "Avec plus de 5 ans d'expérience en développement logiciel, Mizael a fondé Mizatech avec la vision d'aider les entreprises à exploiter la technologie de pointe pour atteindre leurs objectifs. Son expertise couvre le développement full-stack, l'intégration IA et l'architecture de systèmes évolutifs.",
      quote:
        '"La technologie devrait autonomiser les entreprises, pas les compliquer. C\'est pourquoi nous nous concentrons sur la création de solutions à la fois puissantes et intuitives."',
    },
    values: {
      title: "Nos Valeurs",
      subtitle: "Les principes qui guident tout ce que nous faisons",
      innovation: {
        title: "Innovation",
        description:
          "Nous restons à la pointe de la technologie, explorant constamment de nouvelles solutions et méthodologies.",
      },
      quality: {
        title: "Qualité",
        description:
          "Nous livrons des résultats exceptionnels grâce à des tests rigoureux, aux meilleures pratiques et à l'attention aux détails.",
      },
      collaboration: {
        title: "Collaboration",
        description:
          "Nous travaillons étroitement avec nos clients en tant que partenaires, assurant une communication transparente.",
      },
    },
    mission: {
      title: "Notre Mission",
      description:
        "Autonomiser les entreprises avec des solutions technologiques innovantes qui stimulent la croissance, l'efficacité et l'avantage concurrentiel à l'ère numérique.",
    },
    vision: {
      title: "Notre Vision",
      description:
        "Être le partenaire technologique de confiance pour les entreprises du monde entier, reconnu pour livrer des solutions numériques transformatrices qui dépassent les attentes.",
    },
    cta: {
      title: "Travaillons Ensemble",
      subtitle: "Prêt à transformer votre entreprise avec des solutions technologiques innovantes ?",
      button: "Démarrer Votre Projet",
    },
  },
}

function AboutPage() {
  return <AboutPageClient translations={translations} />
}

export default function About() {
  return (
    <LayoutWrapper>
      <AboutPage />
    </LayoutWrapper>
  )
}
