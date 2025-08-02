"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, ShoppingCart, Heart, Clock, Percent, Gift, Zap } from "lucide-react"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const formatPrice = (price: number) => {
  return new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    minimumFractionDigits: 0,
  }).format(price)
}

const flashDeals = [
  {
    id: 1,
    name: "Serum Vitamina C Premium",
    price: 59900,
    originalPrice: 89900,
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=300&h=300&fit=crop",
    rating: 4.8,
    reviews: 234,
    discount: 33,
    timeLeft: "2h 15m",
    sold: 45,
    total: 100,
  },
  {
    id: 2,
    name: "Base Líquida HD Cobertura Total",
    price: 45500,
    originalPrice: 65500,
    image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=300&h=300&fit=crop",
    rating: 4.9,
    reviews: 189,
    discount: 30,
    timeLeft: "1h 45m",
    sold: 78,
    total: 120,
  },
  {
    id: 3,
    name: "Paleta de Sombras Profesional",
    price: 55900,
    originalPrice: 78900,
    image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=300&h=300&fit=crop",
    rating: 4.6,
    reviews: 298,
    discount: 29,
    timeLeft: "3h 20m",
    sold: 23,
    total: 80,
  },
]

const dailyDeals = [
  {
    id: 4,
    name: "Kit Cuidado Facial Completo",
    price: 189900,
    originalPrice: 245000,
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=300&h=300&fit=crop",
    rating: 4.7,
    reviews: 156,
    discount: 22,
    category: "Cuidado Facial",
  },
  {
    id: 5,
    name: "Perfume Elegance Premium",
    price: 159900,
    originalPrice: 199900,
    image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=300&h=300&fit=crop",
    rating: 4.5,
    reviews: 87,
    discount: 20,
    category: "Fragancias",
  },
  {
    id: 6,
    name: "Set Maquillaje Profesional",
    price: 299900,
    originalPrice: 399900,
    image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=300&h=300&fit=crop",
    rating: 4.8,
    reviews: 203,
    discount: 25,
    category: "Maquillaje",
  },
  {
    id: 7,
    name: "Tratamiento Capilar Intensivo",
    price: 89900,
    originalPrice: 120000,
    image: "https://images.unsplash.com/photo-1522338242992-e1a54906a8da?w=300&h=300&fit=crop",
    rating: 4.4,
    reviews: 145,
    discount: 25,
    category: "Cuidado Capilar",
  },
  {
    id: 8,
    name: "Crema Corporal Hidratante",
    price: 45900,
    originalPrice: 65000,
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=300&fit=crop",
    rating: 4.3,
    reviews: 112,
    discount: 29,
    category: "Cuidado Corporal",
  },
  {
    id: 9,
    name: "Kit Cuidado Masculino",
    price: 129900,
    originalPrice: 179900,
    image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=300&h=300&fit=crop",
    rating: 4.6,
    reviews: 98,
    discount: 28,
    category: "Cuidado Masculino",
  },
]

const categories = [
  { name: "Cuidado Facial", discount: "Hasta 40% OFF", color: "bg-pink-100 text-pink-800" },
  { name: "Maquillaje", discount: "Hasta 35% OFF", color: "bg-purple-100 text-purple-800" },
  { name: "Fragancias", discount: "Hasta 30% OFF", color: "bg-blue-100 text-blue-800" },
  { name: "Cuidado Capilar", discount: "Hasta 25% OFF", color: "bg-green-100 text-green-800" },
]

export default function OffersPage() {
  const [wishlist, setWishlist] = useState<number[]>([])

  const toggleWishlist = (productId: number) => {
    setWishlist((prev) => (prev.includes(productId) ? prev.filter((id) => id !== productId) : [...prev, productId]))
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-rose-500 to-pink-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-5xl font-bold mb-4">🔥 Ofertas Especiales</h1>
            <p className="text-xl mb-8 opacity-90">
              Descuentos increíbles en tus productos de belleza favoritos. ¡Por tiempo limitado!
            </p>
            <div className="flex items-center justify-center gap-8 text-lg">
              <div className="flex items-center gap-2">
                <Percent className="h-6 w-6" />
                <span>Hasta 40% OFF</span>
              </div>
              <div className="flex items-center gap-2">
                <Gift className="h-6 w-6" />
                <span>Envío Gratis</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="h-6 w-6" />
                <span>Ofertas Flash</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Flash Deals */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">⚡ Ofertas Flash</h2>
              <p className="text-gray-600">Descuentos por tiempo muy limitado</p>
            </div>
            <div className="bg-red-100 text-red-800 px-4 py-2 rounded-full font-semibold">
              <Clock className="inline h-4 w-4 mr-2" />
              ¡Termina pronto!
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {flashDeals.map((product) => (
              <Card key={product.id} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="relative">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 flex flex-col gap-2">
                    <Badge className="bg-red-500 text-white font-bold">-{product.discount}%</Badge>
                    <Badge className="bg-orange-500 text-white text-xs">FLASH</Badge>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="absolute top-4 right-4 bg-white/90 hover:bg-white shadow-sm"
                    onClick={() => toggleWishlist(product.id)}
                  >
                    <Heart
                      className={`h-4 w-4 ${wishlist.includes(product.id) ? "fill-red-500 text-red-500" : "text-gray-600"}`}
                    />
                  </Button>

                  {/* Timer */}
                  <div className="absolute bottom-4 left-4 bg-black/80 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    <Clock className="inline h-3 w-3 mr-1" />
                    {product.timeLeft}
                  </div>
                </div>

                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold text-gray-900 line-clamp-2">{product.name}</h3>
                      <div className="flex items-center gap-2 mt-2">
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-4 w-4 ${i < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-200"}`}
                            />
                          ))}
                        </div>
                        <span className="text-sm text-gray-600">({product.reviews})</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-2xl font-bold text-gray-900">{formatPrice(product.price)}</span>
                        <span className="text-lg text-gray-500 line-through">{formatPrice(product.originalPrice)}</span>
                      </div>
                    </div>

                    {/* Progress Bar */}
                    <div>
                      <div className="flex justify-between text-sm text-gray-600 mb-2">
                        <span>Vendidos: {product.sold}</span>
                        <span>Disponibles: {product.total - product.sold}</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-red-500 h-2 rounded-full transition-all duration-300"
                          style={{ width: `${(product.sold / product.total) * 100}%` }}
                        ></div>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <Link href={`/product/${product.id}`} className="flex-1">
                        <Button
                          variant="outline"
                          className="w-full border-gray-200 text-gray-700 hover:bg-gray-50 bg-transparent"
                        >
                          Ver Detalles
                        </Button>
                      </Link>
                      <Button className="bg-red-500 hover:bg-red-600 text-white">
                        <ShoppingCart className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Category Offers */}
        <section className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">🎯 Ofertas por Categoría</h2>
            <p className="text-gray-600">Descuentos especiales en cada categoría</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <Link key={index} href={`/products?category=${category.name}&sale=true`}>
                <Card className="group hover:shadow-lg transition-all duration-300 cursor-pointer text-center p-8">
                  <div className="space-y-4">
                    <div className="text-4xl mb-4">
                      {index === 0 && "🧴"}
                      {index === 1 && "💄"}
                      {index === 2 && "🌸"}
                      {index === 3 && "💇‍♀️"}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">{category.name}</h3>
                    <Badge className={`${category.color} text-lg px-4 py-2`}>{category.discount}</Badge>
                    <Button className="w-full bg-gray-900 hover:bg-gray-800 text-white">Ver Ofertas</Button>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </section>

        {/* Daily Deals */}
        <section>
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">📅 Ofertas del Día</h2>
            <p className="text-gray-600">Descuentos especiales que cambian cada día</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {dailyDeals.map((product) => (
              <Card key={product.id} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="relative">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 flex flex-col gap-2">
                    <Badge className="bg-green-500 text-white font-bold">-{product.discount}%</Badge>
                    <Badge className="bg-blue-500 text-white text-xs">{product.category}</Badge>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="absolute top-4 right-4 bg-white/90 hover:bg-white shadow-sm"
                    onClick={() => toggleWishlist(product.id)}
                  >
                    <Heart
                      className={`h-4 w-4 ${wishlist.includes(product.id) ? "fill-red-500 text-red-500" : "text-gray-600"}`}
                    />
                  </Button>
                </div>

                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm text-gray-500 mb-1">{product.category}</p>
                      <h3 className="font-semibold text-gray-900 line-clamp-2">{product.name}</h3>
                      <div className="flex items-center gap-2 mt-2">
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-4 w-4 ${i < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-200"}`}
                            />
                          ))}
                        </div>
                        <span className="text-sm text-gray-600">({product.reviews})</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-xl font-bold text-gray-900">{formatPrice(product.price)}</span>
                        <span className="text-sm text-gray-500 line-through">{formatPrice(product.originalPrice)}</span>
                      </div>
                      <Badge className="bg-green-100 text-green-800">
                        Ahorra {formatPrice(product.originalPrice - product.price)}
                      </Badge>
                    </div>

                    <div className="flex gap-2">
                      <Link href={`/product/${product.id}`} className="flex-1">
                        <Button
                          variant="outline"
                          className="w-full border-gray-200 text-gray-700 hover:bg-gray-50 bg-transparent"
                        >
                          Ver Detalles
                        </Button>
                      </Link>
                      <Button className="bg-gray-900 hover:bg-gray-800 text-white">
                        <ShoppingCart className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="mt-16 bg-gradient-to-r from-rose-50 to-pink-50 rounded-2xl p-12 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">🎁 No te pierdas nuestras ofertas</h2>
            <p className="text-gray-600 mb-8">
              Suscríbete y recibe notificaciones de ofertas flash, descuentos exclusivos y lanzamientos especiales
            </p>

            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Ingresa tu email"
                className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-rose-500"
              />
              <Button className="bg-rose-500 hover:bg-rose-600 text-white px-8">Suscribirse</Button>
            </div>

            <p className="text-sm mt-4 text-gray-500">
              Al suscribirte, aceptas recibir emails promocionales. Puedes cancelar en cualquier momento.
            </p>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  )
}
