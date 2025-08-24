import LayoutWrapper from "@/components/layout-wrapper"
import BlogPostClient from "@/components/blog-post-client"

const translations = {
  en: {
    backToBlog: "Back to Blog",
    readTime: "min read",
    by: "By",
    publishedOn: "Published on",
    tags: "Tags",
    share: "Share Article",
    relatedPosts: "Related Articles",
    readMore: "Read More",
    notFound: {
      title: "Article Not Found",
      description: "The article you're looking for doesn't exist or has been moved.",
      backToBlog: "Back to Blog",
    },
  },
  fr: {
    backToBlog: "Retour au Blog",
    readTime: "min de lecture",
    by: "Par",
    publishedOn: "Publié le",
    tags: "Étiquettes",
    share: "Partager l'Article",
    relatedPosts: "Articles Connexes",
    readMore: "Lire Plus",
    notFound: {
      title: "Article Non Trouvé",
      description: "L'article que vous recherchez n'existe pas ou a été déplacé.",
      backToBlog: "Retour au Blog",
    },
  },
}

interface BlogPostPageProps {
  params: Promise<{ slug: string }>
}

function BlogPostPage({ params }: BlogPostPageProps) {
  return <BlogPostClient params={params} translations={translations} />
}

export default function BlogPost({ params }: BlogPostPageProps) {
  return (
    <LayoutWrapper>
      <BlogPostPage params={params} />
    </LayoutWrapper>
  )
}
