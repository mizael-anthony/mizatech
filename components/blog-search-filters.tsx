"use client"

import { useState } from "react"
import { Search, Filter } from "lucide-react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface BlogSearchFiltersProps {
  searchQuery: string
  setSearchQuery: (query: string) => void
  selectedCategory: string
  setSelectedCategory: (category: string) => void
  filterType: string
  setFilterType: (type: string) => void
  categories: Array<{
    id: string
    name: string
    count: number
    description: string
  }>
  translations: {
    search: {
      placeholder: string
      button: string
    }
    filters: {
      category: string
      featured: string
      recent: string
    }
    categories: {
      title: string
    }
  }
}

export default function BlogSearchFilters({
  searchQuery,
  setSearchQuery,
  selectedCategory,
  setSelectedCategory,
  filterType,
  setFilterType,
  categories,
  translations: t
}: BlogSearchFiltersProps) {
  return (
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
  )
}