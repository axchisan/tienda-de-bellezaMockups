"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, User, ArrowRight, Search } from "lucide-react"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const blogPosts = [
  {
    id: 1,
    title: "Rutina de Cuidado Facial para Principiantes",
    excerpt:
      "Descubre los pasos básicos para comenzar una rutina de cuidado facial efectiva y adaptada a tu tipo de piel.",
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400&h=250&fit=crop",
    author: "María González",
    date: "2024-01-15",
    category: "Cuidado Facial",
    readTime: "5 min",
  },
  {
    id: 2,
    title: "Tendencias de Maquillaje 2024",
    excerpt:
      "Las últimas tendencias en maquillaje que dominarán este año, desde colores vibrantes hasta técnicas naturales.",
    image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&h=250&fit=crop",
    author: "Ana Martínez",
    date: "2024-01-12",
    category: "Maquillaje",
    readTime: "7 min",
  },
  {
    id: 3,
    title: "Cuidado Capilar en Clima Húmedo",
    excerpt:
      "Tips y productos esenciales para mantener tu cabello saludable y manejable durante la temporada de lluvias.",
    image: "https://images.unsplash.com/photo-1522338242992-e1a54906a8da?w=400&h=250&fit=crop",
    author: "Carlos Rodríguez",
    date: "2024-01-10",
    category: "Cuidado Capilar",
    readTime: "6 min",
  },
  {
    id: 4,
    title: "Productos de Belleza Masculina",
    excerpt:
      "Guía completa de productos esenciales para el cuidado personal masculino, desde limpieza hasta hidratación.",
    image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=400&h=250&fit=crop",
    author: "Diego López",
    date: "2024-01-08",
    category: "Cuidado Masculino",
    readTime: "8 min",
  },
  {
    id: 5,
    title: "Fragancias para Cada Ocasión",
    excerpt: "Aprende a elegir la fragancia perfecta según el momento del día, la estación y el evento.",
    image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=400&h=250&fit=crop",
    author: "Sofía Herrera",
    date: "2024-01-05",
    category: "Fragancias",
    readTime: "4 min",
  },
  {
    id: 6,
    title: "Ingredientes Naturales en Cosmética",
    excerpt: "Conoce los beneficios de los ingredientes naturales más populares en productos de belleza.",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=250&fit=crop",
    author: "Laura Jiménez",
    date: "2024-01-03",
    category: "Cuidado Natural",
    readTime: "9 min",
  },
]

const categories = [
  "Todos",
  "Cuidado Facial",
  "Maquillaje",
  "Cuidado Capilar",
  "Cuidado Masculino",
  "Fragancias",
  "Cuidado Natural",
]

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-light text-slate-900 mb-4">Blog de Belleza</h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Consejos, tendencias y guías de expertos para realzar tu belleza natural
          </p>
        </div>

        {/* Search and Categories */}
        <div className="flex flex-col md:flex-row gap-6 mb-12">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Buscar artículos..."
                className="w-full pl-12 pr-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900"
              />
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant="outline"
                size="sm"
                className="border-slate-200 hover:bg-slate-50 bg-transparent"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Featured Post */}
        <div className="mb-12">
          <Card className="overflow-hidden border-0 shadow-lg">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="relative">
                <img
                  src={blogPosts[0].image || "/placeholder.svg"}
                  alt={blogPosts[0].title}
                  className="w-full h-64 md:h-full object-cover"
                />
                <Badge className="absolute top-4 left-4 bg-slate-900 text-white">Destacado</Badge>
              </div>
              <div className="p-8 flex flex-col justify-center">
                <Badge className="w-fit mb-4 bg-slate-100 text-slate-700">{blogPosts[0].category}</Badge>
                <h2 className="text-2xl font-semibold text-slate-900 mb-4">{blogPosts[0].title}</h2>
                <p className="text-slate-600 mb-6 leading-relaxed">{blogPosts[0].excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-sm text-slate-500">
                    <div className="flex items-center gap-1">
                      <User className="h-4 w-4" />
                      {blogPosts[0].author}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {blogPosts[0].date}
                    </div>
                    <span>{blogPosts[0].readTime} lectura</span>
                  </div>
                  <Link href={`/blog/${blogPosts[0].id}`}>
                    <Button className="bg-slate-900 hover:bg-slate-800">
                      Leer Más
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.slice(1).map((post) => (
            <Card key={post.id} className="group hover:shadow-xl transition-all duration-300 overflow-hidden border-0">
              <div className="relative">
                <img
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <Badge className="absolute top-4 left-4 bg-white/90 text-slate-700 text-xs">{post.category}</Badge>
              </div>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-slate-900 line-clamp-2 group-hover:text-slate-700 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-slate-600 text-sm line-clamp-3 leading-relaxed">{post.excerpt}</p>
                  <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                    <div className="flex items-center gap-3 text-xs text-slate-500">
                      <div className="flex items-center gap-1">
                        <User className="h-3 w-3" />
                        {post.author}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {post.date}
                      </div>
                    </div>
                    <span className="text-xs text-slate-500">{post.readTime}</span>
                  </div>
                  <Link href={`/blog/${post.id}`}>
                    <Button
                      variant="outline"
                      className="w-full border-slate-200 hover:bg-slate-50 bg-transparent group-hover:border-slate-900 group-hover:text-slate-900 transition-colors"
                    >
                      Leer Artículo
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button
            variant="outline"
            size="lg"
            className="border-slate-300 text-slate-700 hover:bg-slate-50 bg-transparent"
          >
            Cargar Más Artículos
          </Button>
        </div>
      </div>

      <Footer />
    </div>
  )
}
