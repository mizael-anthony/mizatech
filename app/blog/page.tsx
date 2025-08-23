"use client"

import { useState, useMemo } from "react"
import Link from "next/link"
import Image from "next/image"
import { Search, Calendar, Clock, User, Tag, Filter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import LayoutWrapper, { useLanguage } from "@/components/layout-wrapper"
import { getBlogPosts, getBlogCategories, searchPosts, getPostsByCategory, getFeaturedPosts } from "@/lib/blog-data"


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
  const { currentLang } = useLanguage()
  const t = translations[currentLang]

  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [filterType, setFilterType] = useState("all")

  const allPosts = getBlogPosts(currentLang)
  const categories = getBlogCategories(currentLang)
  const featuredPosts = getFeaturedPosts(currentLang)

  const filteredPosts = useMemo(() => {
    let posts = allPosts

    // Apply search filter
    if (searchQuery.trim()) {
      posts = searchPosts(searchQuery, currentLang)
    }

    // Apply category filter
    if (selectedCategory !== "all") {
      posts = getPostsByCategory(selectedCategory, currentLang)
    }

    // Apply type filter
    if (filterType === "featured") {
      posts = posts.filter((post) => post.featured)
    } else if (filterType === "recent") {
      posts = posts.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()).slice(0, 6)
    }

    return posts
  }, [searchQuery, selectedCategory, filterType, currentLang, allPosts])

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
      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">{t.hero.title}</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">{t.hero.subtitle}</p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-8">
            {/* Search */}
            <Card className="border-0 shadow-lg rounded-xl">
              <CardHeader className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 flex items-center">
                  <Search className="w-5 h-5 mr-2 text-orange-600" />
                  Search
                </h3>
              </CardHeader>
              <CardContent className="p-6 pt-0">
                <div className="flex space-x-2">
                  <Input
                    type="text"
                    placeholder={t.search.placeholder}
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="rounded-lg border-gray-300 focus:border-orange-500 focus:ring-orange-500"
                  />
                  <Button size="sm" className="bg-orange-600 hover:bg-orange-700 text-white rounded-lg px-4">
                    <Search className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Filters */}
            <Card className="border-0 shadow-lg rounded-xl">
              <CardHeader className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 flex items-center">
                  <Filter className="w-5 h-5 mr-2 text-orange-600" />
                  Filters
                </h3>
              </CardHeader>
              <CardContent className="p-6 pt-0 space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                  <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                    <SelectTrigger className="rounded-lg border-gray-300 focus:border-orange-500 focus:ring-orange-500">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">{t.filters.category}</SelectItem>
                      {categories.map((category) => (
                        <SelectItem key={category.id} value={category.id}>
                          {category.name} ({category.count})
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Type</label>
                  <Select value={filterType} onValueChange={setFilterType}>
                    <SelectTrigger className="rounded-lg border-gray-300 focus:border-orange-500 focus:ring-orange-500">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Articles</SelectItem>
                      <SelectItem value="featured">{t.filters.featured}</SelectItem>
                      <SelectItem value="recent">{t.filters.recent}</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>

            {/* Categories */}
            <Card className="border-0 shadow-lg rounded-xl">
              <CardHeader className="p-6">
                <h3 className="text-lg font-semibold text-gray-900">{t.categories.title}</h3>
              </CardHeader>
              <CardContent className="p-6 pt-0">
                <div className="space-y-3">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`block w-full text-left p-3 rounded-lg transition-colors ${
                        selectedCategory === category.id
                          ? "bg-orange-50 text-orange-600 border border-orange-200"
                          : "text-gray-600 hover:bg-gray-50 hover:text-orange-600"
                      }`}
                    >
                      <div className="flex justify-between items-center">
                        <span className="font-medium">{category.name}</span>
                        <span className="text-sm text-gray-400">({category.count})</span>
                      </div>
                      <p className="text-sm text-gray-500 mt-1">{category.description}</p>
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Featured Articles */}
            {!searchQuery && selectedCategory === "all" && filterType === "all" && (
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-8">{t.featured.title}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {featuredPosts.slice(0, 2).map((post) => (
                    <Card
                      key={post.id}
                      className="border-0 shadow-lg rounded-xl overflow-hidden group hover:shadow-xl transition-shadow"
                    >
                      <div className="relative h-48 overflow-hidden">
                        <Image
                          src={post.image || "/images/standard.png"}
                          alt={post.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute top-4 left-4">
                          <span className="bg-orange-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                            Featured
                          </span>
                        </div>
                      </div>
                      <CardContent className="p-6">
                        <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                          <span className="flex items-center">
                            <Calendar className="w-4 h-4 mr-1" />
                            {formatDate(post.publishedAt)}
                          </span>
                          <span className="flex items-center">
                            <Clock className="w-4 h-4 mr-1" />
                            {post.readTime} {t.article.readTime}
                          </span>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors">
                          <Link href={`/blog/${post.id}`}>{post.title}</Link>
                        </h3>
                        <p className="text-gray-600 mb-4 leading-relaxed">{post.excerpt}</p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2 text-sm text-gray-500">
                            <User className="w-4 h-4" />
                            <span>
                              {t.article.by} {post.author}
                            </span>
                          </div>
                          <Button
                            asChild
                            variant="ghost"
                            size="sm"
                            className="text-orange-600 hover:text-orange-700 hover:bg-orange-50"
                          >
                            <Link href={`/blog/${post.id}`}>{t.article.readMore}</Link>
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </section>
            )}

            {/* Articles Grid */}
            <section>
              {filteredPosts.length === 0 ? (
                <div className="text-center py-12">
                  <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Search className="w-12 h-12 text-gray-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{t.noResults.title}</h3>
                  <p className="text-gray-600">{t.noResults.description}</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {filteredPosts.map((post) => (
                    <Card
                      key={post.id}
                      className="border-0 shadow-lg rounded-xl overflow-hidden group hover:shadow-xl transition-shadow"
                    >
                      <div className="relative h-48 overflow-hidden">
                        <Image
                          src={post.image || "/images/standard.png"}
                          alt={post.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        {post.featured && (
                          <div className="absolute top-4 left-4">
                            <span className="bg-orange-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                              Featured
                            </span>
                          </div>
                        )}
                      </div>
                      <CardContent className="p-6">
                        <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                          <span className="flex items-center">
                            <Calendar className="w-4 h-4 mr-1" />
                            {formatDate(post.publishedAt)}
                          </span>
                          <span className="flex items-center">
                            <Clock className="w-4 h-4 mr-1" />
                            {post.readTime} {t.article.readTime}
                          </span>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors">
                          <Link href={`/blog/${post.id}`}>{post.title}</Link>
                        </h3>
                        <p className="text-gray-600 mb-4 leading-relaxed">{post.excerpt}</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {post.tags.slice(0, 3).map((tag) => (
                            <span
                              key={tag}
                              className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-600"
                            >
                              <Tag className="w-3 h-3 mr-1" />
                              {tag}
                            </span>
                          ))}
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2 text-sm text-gray-500">
                            <User className="w-4 h-4" />
                            <span>
                              {t.article.by} {post.author}
                            </span>
                          </div>
                          <Button
                            asChild
                            variant="ghost"
                            size="sm"
                            className="text-orange-600 hover:text-orange-700 hover:bg-orange-50"
                          >
                            <Link href={`/blog/${post.id}`}>{t.article.readMore}</Link>
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Blog() {
  return (
    <LayoutWrapper>
      <BlogPage />
    </LayoutWrapper>
  )
}
