export interface BlogPost {
  id: string
  title: string
  excerpt: string
  content: string
  author: string
  publishedAt: string
  readTime: number
  category: string
  tags: string[]
  featured: boolean
  image: string
}

export interface BlogCategory {
  id: string
  name: string
  description: string
  count: number
}

// Sample blog data
export const blogCategories: Record<string, BlogCategory[]> = {
  en: [
    {
      id: "web-development",
      name: "Web Development",
      description: "Latest trends and best practices in web development",
      count: 8,
    },
    {
      id: "mobile-development",
      name: "Mobile Development",
      description: "Mobile app development insights and tutorials",
      count: 6,
    },
    {
      id: "api-development",
      name: "API Development",
      description: "API design, development, and integration guides",
      count: 5,
    },
    {
      id: "ai-integration",
      name: "AI Integration",
      description: "Artificial intelligence and machine learning applications",
      count: 4,
    },
    {
      id: "tech-insights",
      name: "Tech Insights",
      description: "Industry insights and technology trends",
      count: 7,
    },
  ],
  fr: [
    {
      id: "web-development",
      name: "Développement Web",
      description: "Dernières tendances et meilleures pratiques en développement web",
      count: 8,
    },
    {
      id: "mobile-development",
      name: "Développement Mobile",
      description: "Insights et tutoriels de développement d'applications mobiles",
      count: 6,
    },
    {
      id: "api-development",
      name: "Développement d'API",
      description: "Guides de conception, développement et intégration d'API",
      count: 5,
    },
    {
      id: "ai-integration",
      name: "Intégration IA",
      description: "Applications d'intelligence artificielle et d'apprentissage automatique",
      count: 4,
    },
    {
      id: "tech-insights",
      name: "Insights Tech",
      description: "Insights de l'industrie et tendances technologiques",
      count: 7,
    },
  ],
}

export const blogPosts: Record<string, BlogPost[]> = {
  en: [
    {
      id: "modern-web-development-trends-2024",
      title: "Modern Web Development Trends in 2024",
      excerpt:
        "Explore the latest trends shaping web development in 2024, from AI-powered tools to advanced frameworks.",
      content: `
# Modern Web Development Trends in 2024

The web development landscape continues to evolve at a rapid pace. As we progress through 2024, several key trends are shaping how we build and deploy web applications.

## 1. AI-Powered Development Tools

Artificial intelligence is revolutionizing how developers write code. Tools like GitHub Copilot and ChatGPT are becoming integral parts of the development workflow, helping developers:

- Generate boilerplate code faster
- Debug complex issues
- Optimize performance
- Write better documentation

## 2. Server-Side Rendering Renaissance

With frameworks like Next.js, Nuxt.js, and SvelteKit leading the charge, server-side rendering (SSR) is making a strong comeback. Benefits include:

- Improved SEO performance
- Faster initial page loads
- Better user experience
- Enhanced accessibility

## 3. Edge Computing Integration

Edge computing is bringing computation closer to users, resulting in:

- Reduced latency
- Improved performance
- Better user experience globally
- More efficient resource utilization

## 4. Progressive Web Apps (PWAs)

PWAs continue to bridge the gap between web and native applications, offering:

- Offline functionality
- Push notifications
- App-like experience
- Cross-platform compatibility

## Conclusion

Staying current with these trends is crucial for delivering modern, performant web applications that meet user expectations and business requirements.
      `,
      author: "Mizael",
      publishedAt: "2024-01-15",
      readTime: 8,
      category: "web-development",
      tags: ["trends", "web development", "AI", "SSR", "PWA"],
      featured: true,
      image: "/images/standard.png?height=400&width=600",
    },
    {
      id: "building-scalable-apis-best-practices",
      title: "Building Scalable APIs: Best Practices and Design Patterns",
      excerpt:
        "Learn essential patterns and practices for creating APIs that can handle growth and maintain performance.",
      content: `
# Building Scalable APIs: Best Practices and Design Patterns

Creating APIs that can scale effectively is crucial for modern applications. Here are the key principles and patterns we follow at Mizatech.

## RESTful Design Principles

Following REST principles ensures your API is intuitive and maintainable:

- Use HTTP methods appropriately (GET, POST, PUT, DELETE)
- Implement proper status codes
- Design clear, hierarchical URLs
- Maintain statelessness

## Authentication and Security

Security should be built into your API from the ground up:

- Implement OAuth 2.0 or JWT tokens
- Use HTTPS everywhere
- Validate all inputs
- Implement rate limiting

## Performance Optimization

- Use caching strategies (Redis, CDN)
- Implement pagination for large datasets
- Optimize database queries
- Use compression for responses

## Documentation and Testing

- Maintain comprehensive API documentation
- Implement automated testing
- Use tools like Swagger/OpenAPI
- Provide code examples

## Conclusion

Building scalable APIs requires careful planning and adherence to best practices. The investment in proper architecture pays dividends as your application grows.
      `,
      author: "Mizael",
      publishedAt: "2024-01-10",
      readTime: 12,
      category: "api-development",
      tags: ["API", "scalability", "REST", "security", "performance"],
      featured: true,
      image: "/images/standard.png?height=400&width=600",
    },
    {
      id: "mobile-app-development-react-native-vs-flutter",
      title: "Mobile App Development: React Native vs Flutter in 2024",
      excerpt: "A comprehensive comparison of React Native and Flutter for cross-platform mobile development.",
      content: `
# Mobile App Development: React Native vs Flutter in 2024

Choosing the right framework for cross-platform mobile development is crucial for project success. Let's compare React Native and Flutter.

## React Native

### Advantages:
- JavaScript ecosystem
- Large community
- Code sharing with web
- Mature platform

### Disadvantages:
- Performance limitations
- Platform-specific code needed
- Bridge architecture overhead

## Flutter

### Advantages:
- Single codebase
- Excellent performance
- Rich UI components
- Growing ecosystem

### Disadvantages:
- Dart learning curve
- Larger app size
- Newer platform

## Our Recommendation

At Mizatech, we choose the framework based on project requirements:

- **React Native**: When you have existing web developers and need rapid prototyping
- **Flutter**: When performance is critical and you want pixel-perfect UI

## Conclusion

Both frameworks have their strengths. The choice depends on your team's expertise, project requirements, and long-term maintenance considerations.
      `,
      author: "Mizael",
      publishedAt: "2024-01-05",
      readTime: 10,
      category: "mobile-development",
      tags: ["mobile", "React Native", "Flutter", "cross-platform"],
      featured: false,
      image: "/images/standard.png?height=400&width=600",
    },
    {
      id: "ai-integration-practical-guide",
      title: "AI Integration: A Practical Guide for Business Applications",
      excerpt:
        "Discover how to effectively integrate AI capabilities into your business applications with real-world examples.",
      content: `
# AI Integration: A Practical Guide for Business Applications

Artificial Intelligence is no longer a futuristic concept—it's a practical tool that can enhance business applications today.

## Common AI Use Cases

### 1. Chatbots and Virtual Assistants
- Customer support automation
- Lead qualification
- FAQ handling
- 24/7 availability

### 2. Predictive Analytics
- Sales forecasting
- Inventory management
- Customer behavior prediction
- Risk assessment

### 3. Content Generation
- Marketing copy
- Product descriptions
- Email templates
- Social media posts

### 4. Image and Document Processing
- OCR for document digitization
- Image recognition and tagging
- Quality control automation
- Medical image analysis

## Implementation Strategy

1. **Start Small**: Begin with a single use case
2. **Data Quality**: Ensure clean, relevant data
3. **User Training**: Educate users on AI capabilities
4. **Continuous Improvement**: Monitor and refine models

## Challenges and Solutions

- **Data Privacy**: Implement proper security measures
- **Model Accuracy**: Regular training and validation
- **User Adoption**: Clear communication of benefits
- **Cost Management**: Start with cloud-based solutions

## Conclusion

AI integration doesn't have to be overwhelming. Start with clear objectives, choose the right tools, and iterate based on results.
      `,
      author: "Mizael",
      publishedAt: "2023-12-28",
      readTime: 15,
      category: "ai-integration",
      tags: ["AI", "machine learning", "business applications", "automation"],
      featured: true,
      image: "/images/standard.png?height=400&width=600",
    },
    {
      id: "web-performance-optimization-techniques",
      title: "Web Performance Optimization: Techniques That Actually Work",
      excerpt: "Proven strategies to improve your website's loading speed and user experience.",
      content: `
# Web Performance Optimization: Techniques That Actually Work

Website performance directly impacts user experience, SEO rankings, and conversion rates. Here are proven techniques to optimize your web applications.

## Core Web Vitals

Focus on Google's Core Web Vitals:

- **Largest Contentful Paint (LCP)**: < 2.5 seconds
- **First Input Delay (FID)**: < 100 milliseconds
- **Cumulative Layout Shift (CLS)**: < 0.1

## Image Optimization

Images often account for the majority of page weight:

- Use modern formats (WebP, AVIF)
- Implement lazy loading
- Serve responsive images
- Compress images appropriately

## Code Optimization

- Minify CSS, JavaScript, and HTML
- Remove unused code
- Use tree shaking
- Implement code splitting

## Caching Strategies

- Browser caching with proper headers
- CDN implementation
- Service worker caching
- Database query caching

## Network Optimization

- Enable GZIP compression
- Use HTTP/2
- Minimize HTTP requests
- Implement resource hints

## Monitoring and Measurement

- Use tools like Lighthouse
- Implement Real User Monitoring (RUM)
- Set up performance budgets
- Regular performance audits

## Conclusion

Performance optimization is an ongoing process. Regular monitoring and incremental improvements lead to significant gains in user experience and business metrics.
      `,
      author: "Mizael",
      publishedAt: "2023-12-20",
      readTime: 11,
      category: "web-development",
      tags: ["performance", "optimization", "web vitals", "user experience"],
      featured: false,
      image: "/images/standard.png?height=400&width=600",
    },
  ],
  fr: [
    {
      id: "tendances-developpement-web-moderne-2024",
      title: "Tendances du Développement Web Moderne en 2024",
      excerpt:
        "Explorez les dernières tendances qui façonnent le développement web en 2024, des outils alimentés par l'IA aux frameworks avancés.",
      content: `
# Tendances du Développement Web Moderne en 2024

Le paysage du développement web continue d'évoluer à un rythme rapide. Alors que nous progressons en 2024, plusieurs tendances clés façonnent la façon dont nous construisons et déployons les applications web.

## 1. Outils de Développement Alimentés par l'IA

L'intelligence artificielle révolutionne la façon dont les développeurs écrivent du code. Des outils comme GitHub Copilot et ChatGPT deviennent des parties intégrantes du flux de travail de développement, aidant les développeurs à :

- Générer du code standard plus rapidement
- Déboguer des problèmes complexes
- Optimiser les performances
- Écrire une meilleure documentation

## 2. Renaissance du Rendu Côté Serveur

Avec des frameworks comme Next.js, Nuxt.js et SvelteKit en tête, le rendu côté serveur (SSR) fait un retour en force. Les avantages incluent :

- Amélioration des performances SEO
- Chargements de page initiaux plus rapides
- Meilleure expérience utilisateur
- Accessibilité améliorée

## 3. Intégration de l'Edge Computing

L'edge computing rapproche le calcul des utilisateurs, résultant en :

- Latence réduite
- Performances améliorées
- Meilleure expérience utilisateur globalement
- Utilisation plus efficace des ressources

## 4. Applications Web Progressives (PWA)

Les PWA continuent de combler l'écart entre les applications web et natives, offrant :

- Fonctionnalité hors ligne
- Notifications push
- Expérience similaire aux applications
- Compatibilité multiplateforme

## Conclusion

Rester à jour avec ces tendances est crucial pour livrer des applications web modernes et performantes qui répondent aux attentes des utilisateurs et aux exigences commerciales.
      `,
      author: "Mizael",
      publishedAt: "2024-01-15",
      readTime: 8,
      category: "web-development",
      tags: ["tendances", "développement web", "IA", "SSR", "PWA"],
      featured: true,
      image: "/images/standard.png?height=400&width=600",
    },
    {
      id: "construction-apis-evolutives-meilleures-pratiques",
      title: "Construction d'APIs Évolutives : Meilleures Pratiques et Modèles de Conception",
      excerpt:
        "Apprenez les modèles et pratiques essentiels pour créer des APIs qui peuvent gérer la croissance et maintenir les performances.",
      content: `
# Construction d'APIs Évolutives : Meilleures Pratiques et Modèles de Conception

Créer des APIs qui peuvent évoluer efficacement est crucial pour les applications modernes. Voici les principes clés et les modèles que nous suivons chez Mizatech.

## Principes de Conception RESTful

Suivre les principes REST assure que votre API est intuitive et maintenable :

- Utiliser les méthodes HTTP de manière appropriée (GET, POST, PUT, DELETE)
- Implémenter les codes de statut appropriés
- Concevoir des URLs claires et hiérarchiques
- Maintenir l'absence d'état

## Authentification et Sécurité

La sécurité doit être intégrée dans votre API dès le départ :

- Implémenter OAuth 2.0 ou les tokens JWT
- Utiliser HTTPS partout
- Valider toutes les entrées
- Implémenter la limitation de débit

## Optimisation des Performances

- Utiliser des stratégies de mise en cache (Redis, CDN)
- Implémenter la pagination pour les grands ensembles de données
- Optimiser les requêtes de base de données
- Utiliser la compression pour les réponses

## Documentation et Tests

- Maintenir une documentation API complète
- Implémenter des tests automatisés
- Utiliser des outils comme Swagger/OpenAPI
- Fournir des exemples de code

## Conclusion

Construire des APIs évolutives nécessite une planification soigneuse et l'adhésion aux meilleures pratiques. L'investissement dans une architecture appropriée porte ses fruits à mesure que votre application grandit.
      `,
      author: "Mizael",
      publishedAt: "2024-01-10",
      readTime: 12,
      category: "api-development",
      tags: ["API", "évolutivité", "REST", "sécurité", "performance"],
      featured: true,
      image: "/images/standard.png?height=400&width=600",
    },
  ],
}

export function getBlogPosts(lang: "en" | "fr"): BlogPost[] {
  return blogPosts[lang] || []
}

export function getBlogPost(id: string, lang: "en" | "fr"): BlogPost | undefined {
  return getBlogPosts(lang).find((post) => post.id === id)
}

export function getBlogCategories(lang: "en" | "fr"): BlogCategory[] {
  return blogCategories[lang] || []
}

export function getFeaturedPosts(lang: "en" | "fr"): BlogPost[] {
  return getBlogPosts(lang).filter((post) => post.featured)
}

export function getPostsByCategory(category: string, lang: "en" | "fr"): BlogPost[] {
  return getBlogPosts(lang).filter((post) => post.category === category)
}

export function searchPosts(query: string, lang: "en" | "fr"): BlogPost[] {
  const posts = getBlogPosts(lang)
  const lowercaseQuery = query.toLowerCase()

  return posts.filter(
    (post) =>
      post.title.toLowerCase().includes(lowercaseQuery) ||
      post.excerpt.toLowerCase().includes(lowercaseQuery) ||
      post.tags.some((tag) => tag.toLowerCase().includes(lowercaseQuery)),
  )
}
