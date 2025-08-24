import LayoutWrapper from "@/components/layout-wrapper"
import BlogPageClient from "@/components/blog-page-client"


// FIXME: We add blog page when needed
const translations = {
  en: {
    hero: {
      title: "Tech Insights & Tutorials",
      subtitle:
        "Stay updated with the latest trends, best practices, and insights in web development, mobile apps, APIs, and AI integration.",
    },
    search: {
      placeholder: "Search articles...",
      button: "Search",
    },
    filters: {
      category: "All Categories",
      featured: "Featured Articles",
      recent: "Recent Posts",
    },
    article: {
      readTime: "min read",
      by: "By",
      in: "in",
      readMore: "Read More",
    },
    categories: {
      title: "Categories",
      viewAll: "View All",
    },
    featured: {
      title: "Featured Articles",
    },
    noResults: {
      title: "No articles found",
      description: "Try adjusting your search terms or browse our categories.",
    },
  },
  fr: {
    hero: {
      title: "Insights Tech & Tutoriels",
      subtitle:
        "Restez à jour avec les dernières tendances, meilleures pratiques et insights en développement web, applications mobiles, APIs et intégration IA.",
    },
    search: {
      placeholder: "Rechercher des articles...",
      button: "Rechercher",
    },
    filters: {
      category: "Toutes les Catégories",
      featured: "Articles en Vedette",
      recent: "Articles Récents",
    },
    article: {
      readTime: "min de lecture",
      by: "Par",
      in: "dans",
      readMore: "Lire Plus",
    },
    categories: {
      title: "Catégories",
      viewAll: "Voir Tout",
    },
    featured: {
      title: "Articles en Vedette",
    },
    noResults: {
      title: "Aucun article trouvé",
      description: "Essayez d'ajuster vos termes de recherche ou parcourez nos catégories.",
    },
  },
}

function BlogPage() {
  return <BlogPageClient translations={translations} />
}

export default function Blog() {
  return (
    <LayoutWrapper>
      <BlogPage />
    </LayoutWrapper>
  )
}
