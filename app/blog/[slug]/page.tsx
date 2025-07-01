"use client"

import { use } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Calendar, Clock, User, Tag, Share2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import LayoutWrapper, { useLanguage } from "@/components/layout-wrapper"
import { getBlogPost, getBlogPosts } from "@/lib/blog-data"

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
  const { slug } = use(params)
  const { currentLang } = useLanguage()
  const t = translations[currentLang]

  const post = getBlogPost(slug, currentLang)
  const allPosts = getBlogPosts(currentLang)

  if (!post) {
    return (
      <div className="bg-white min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{t.notFound.title}</h1>
          <p className="text-xl text-gray-600 mb-8">{t.notFound.description}</p>
          <Button asChild className="bg-orange-600 hover:bg-orange-700 text-white rounded-lg px-6 py-3">
            <Link href="/blog">{t.notFound.backToBlog}</Link>
          </Button>
        </div>
      </div>
    )
  }

  const relatedPosts = allPosts.filter((p) => p.id !== post.id && p.category === post.category).slice(0, 3)

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString(currentLang === "fr" ? "fr-FR" : "en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Button asChild variant="ghost" className="mb-8 text-orange-600 hover:text-orange-700 hover:bg-orange-50">
            <Link href="/blog" className="flex items-center">
              <ArrowLeft className="w-4 h-4 mr-2" />
              {t.backToBlog}
            </Link>
          </Button>

          <div className="mb-8">
            <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
              <span className="flex items-center">
                <Calendar className="w-4 h-4 mr-1" />
                {t.publishedOn} {formatDate(post.publishedAt)}
              </span>
              <span className="flex items-center">
                <Clock className="w-4 h-4 mr-1" />
                {post.readTime} {t.readTime}
              </span>
              <span className="flex items-center">
                <User className="w-4 h-4 mr-1" />
                {t.by} {post.author}
              </span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">{post.title}</h1>
            <p className="text-xl text-gray-600 leading-relaxed">{post.excerpt}</p>
          </div>

          {/* Featured Image */}
          <div className="relative h-96 rounded-xl overflow-hidden mb-8">
            <Image src={post.image || "/images/standard.png"} alt={post.title} fill className="object-cover" />
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-8">
            <span className="text-sm font-medium text-gray-700 mr-2">{t.tags}:</span>
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-orange-100 text-orange-600"
              >
                <Tag className="w-3 h-3 mr-1" />
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <div
              className="text-gray-700 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, "<br />") }}
            />
          </div>

          {/* Share Section */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <span className="text-lg font-semibold text-gray-900">{t.share}</span>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-gray-300 text-gray-600 hover:bg-orange-50 hover:border-orange-300 hover:text-orange-600 bg-transparent"
                >
                  <Share2 className="w-4 h-4 mr-2" />
                  Share
                </Button>
              </div>
              <Button asChild variant="ghost" className="text-orange-600 hover:text-orange-700 hover:bg-orange-50">
                <Link href="/blog" className="flex items-center">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  {t.backToBlog}
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">{t.relatedPosts}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost) => (
                <Card
                  key={relatedPost.id}
                  className="border-0 shadow-lg rounded-xl overflow-hidden group hover:shadow-xl transition-shadow"
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={relatedPost.image || "/images/standard.png"}
                      alt={relatedPost.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                      <span className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {formatDate(relatedPost.publishedAt)}
                      </span>
                      <span className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {relatedPost.readTime} {t.readTime}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors">
                      <Link href={`/blog/${relatedPost.id}`}>{relatedPost.title}</Link>
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">{relatedPost.excerpt}</p>
                    <Button
                      asChild
                      variant="ghost"
                      size="sm"
                      className="text-orange-600 hover:text-orange-700 hover:bg-orange-50"
                    >
                      <Link href={`/blog/${relatedPost.id}`}>{t.readMore}</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  )
}

export default function BlogPost({ params }: BlogPostPageProps) {
  return (
    <LayoutWrapper>
      <BlogPostPage params={params} />
    </LayoutWrapper>
  )
}
