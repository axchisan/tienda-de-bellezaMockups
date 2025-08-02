"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, ShoppingCart, Heart, Package, Shield, Truck, Award, MessageCircle, Calculator } from "lucide-react"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const featuredProducts = [
  {
    id: 1,
    name: "Serum Vitamina C Premium",
    price: 89900,
    originalPrice: 120000,
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=300&h=300&fit=crop",
    rating: 4.8,
    reviews: 234,
    category: "Cuidado Facial",
    isNew: true,
    discount: 25,
  },
  {
    id: 2,
    name: "Base Líquida HD Cobertura Total",
    price: 65500,
    image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=300&h=300&fit=crop",
    rating: 4.9,
    reviews: 189,
    category: "Maquillaje",
    isBestseller: true,
  },
  {
    id: 3,
    name: "Crema Hidratante Anti-Edad",
    price: 145000,
    image: "https://images.unsplash.com/photo-1570194065650-d99fb4bedf0a?w=300&h=300&fit=crop",
    rating: 4.7,
    reviews: 156,
    category: "Cuidado Facial",
  },
  {
    id: 4,
    name: "Paleta de Sombras Profesional",
    price: 78900,
    image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=300&h=300&fit=crop",
    rating: 4.6,
    reviews: 298,
    category: "Maquillaje",
  },
]

const categories = [
  {
    name: "Cuidado Facial",
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400&h=300&fit=crop",
    count: 156,
  },
  {
    name: "Maquillaje",
    image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&h=300&fit=crop",
    count: 234,
  },
  {
    name: "Cuidado Corporal",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
    count: 89,
  },
  {
    name: "Fragancias",
    image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=400&h=300&fit=crop",
    count: 67,
  },
  {
    name: "Cuidado Capilar",
    image: "https://images.unsplash.com/photo-1522338242992-e1a54906a8da?w=400&h=300&fit=crop",
    count: 123,
  },
  {
    name: "Cuidado Masculino",
    image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=400&h=300&fit=crop",
    count: 78,
  },
]

const benefits = [
  {
    icon: Truck,
    title: "Envío Gratis",
    description: "En compras mayores a $150.000",
  },
  {
    icon: Shield,
    title: "Productos Originales",
    description: "100% garantizados y certificados",
  },
  {
    icon: Award,
    title: "Asesoría Experta",
    description: "Consultores de belleza disponibles",
  },
  {
    icon: Package,
    title: "Devoluciones Fáciles",
    description: "30 días para cambios y devoluciones",
  },
]

const formatPrice = (price: number) => {
  return new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    minimumFractionDigits: 0,
  }).format(price)
}

export default function HomePage() {
  const [wishlist, setWishlist] = useState<number[]>([])

  const toggleWishlist = (productId: number) => {
    setWishlist((prev) => (prev.includes(productId) ? prev.filter((id) => id !== productId) : [...prev, productId]))
  }

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-slate-50 py-12 sm:py-20 lg:py-32 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-6 sm:space-y-8 text-center lg:text-left">
              <div className="space-y-4 sm:space-y-6">
                <Badge className="bg-slate-900 text-white px-4 py-2 text-sm font-medium">Nueva Colección 2024</Badge>
                <h1 className="text-4xl sm:text-5xl lg:text-7xl font-light text-slate-900 leading-tight">
                  Descubre
                  <br />
                  <span className="font-medium">Tu Belleza</span>
                </h1>
                <p className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-lg mx-auto lg:mx-0">
                  Productos de belleza premium para todos. Calidad, autenticidad y asesoría experta en cada compra.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link href="/products">
                  <Button
                    size="lg"
                    className="bg-slate-900 hover:bg-slate-800 text-white px-6 sm:px-8 py-3 sm:py-4 text-base font-medium w-full sm:w-auto"
                  >
                    Comprar Ahora
                    <ShoppingCart className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-slate-300 text-slate-700 hover:bg-slate-50 px-6 sm:px-8 py-3 sm:py-4 text-base font-medium bg-transparent w-full sm:w-auto"
                >
                  Ver Colección
                </Button>
              </div>

              <div className="flex items-center justify-center lg:justify-start gap-6 sm:gap-12 pt-4 sm:pt-8">
                <div className="text-center">
                  <div className="text-xl sm:text-2xl font-semibold text-slate-900">50K+</div>
                  <div className="text-xs sm:text-sm text-slate-500">Clientes Felices</div>
                </div>
                <div className="text-center">
                  <div className="text-xl sm:text-2xl font-semibold text-slate-900">1000+</div>
                  <div className="text-xs sm:text-sm text-slate-500">Productos</div>
                </div>
                <div className="text-center">
                  <div className="text-xl sm:text-2xl font-semibold text-slate-900">4.9★</div>
                  <div className="text-xs sm:text-sm text-slate-500">Calificación</div>
                </div>
              </div>
            </div>

            <div className="relative order-first lg:order-last">
              <div className="relative z-10">
                <img
                  src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=600&h=700&fit=crop"
                  alt="Productos de Belleza"
                  className="rounded-2xl shadow-2xl w-full h-[400px] sm:h-[500px] lg:h-[600px] object-cover max-w-full"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-full h-full bg-slate-200 rounded-2xl -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 sm:py-20 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-slate-100 rounded-full mb-6 group-hover:bg-slate-200 transition-colors">
                  <benefit.icon className="h-8 w-8 text-slate-700" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{benefit.title}</h3>
                <p className="text-slate-600 text-sm sm:text-base">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-12 sm:py-20 bg-slate-50 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-light text-slate-900 mb-4">Compra por Categoría</h2>
            <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto">
              Encuentra exactamente lo que necesitas en nuestras categorías especializadas
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {categories.map((category, index) => (
              <Link key={index} href={`/products?category=${category.name}`}>
                <Card className="group hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden border-0 bg-white">
                  <div className="relative">
                    <img
                      src={category.image || "/placeholder.svg"}
                      alt={category.name}
                      className="w-full h-48 sm:h-64 object-cover group-hover:scale-105 transition-transform duration-300 max-w-full"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-6 left-6 text-white">
                      <h3 className="text-lg sm:text-xl font-semibold mb-1">{category.name}</h3>
                      <p className="text-sm opacity-90">{category.count} productos</p>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-12 sm:py-20 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-light text-slate-900 mb-4">Productos Destacados</h2>
            <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto">
              Los favoritos de nuestros clientes con las mejores calificaciones
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {featuredProducts.map((product) => (
              <Card
                key={product.id}
                className="group hover:shadow-xl transition-all duration-300 overflow-hidden border-0"
              >
                <div className="relative">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-48 sm:h-64 object-cover group-hover:scale-105 transition-transform duration-300 max-w-full"
                  />
                  <div className="absolute top-4 left-4 flex flex-col gap-2">
                    {product.isNew && <Badge className="bg-slate-900 text-white text-xs">Nuevo</Badge>}
                    {product.isBestseller && <Badge className="bg-slate-700 text-white text-xs">Más Vendido</Badge>}
                    {product.discount && (
                      <Badge className="bg-slate-600 text-white text-xs">-{product.discount}%</Badge>
                    )}
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="absolute top-4 right-4 bg-white/90 hover:bg-white shadow-sm p-2"
                    onClick={() => toggleWishlist(product.id)}
                  >
                    <Heart
                      className={`h-4 w-4 ${wishlist.includes(product.id) ? "fill-slate-900 text-slate-900" : "text-slate-600"}`}
                    />
                  </Button>
                </div>

                <CardContent className="p-4 sm:p-6">
                  <div className="space-y-3 sm:space-y-4">
                    <div>
                      <p className="text-sm text-slate-500 mb-1">{product.category}</p>
                      <h3 className="font-semibold text-slate-900 line-clamp-2 text-sm sm:text-base">{product.name}</h3>
                    </div>

                    <div className="flex items-center gap-2">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-3 w-3 sm:h-4 sm:w-4 ${i < Math.floor(product.rating) ? "fill-slate-400 text-slate-400" : "text-slate-200"}`}
                          />
                        ))}
                      </div>
                      <span className="text-xs sm:text-sm text-slate-600">({product.reviews})</span>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 min-w-0">
                        <span className="text-lg sm:text-xl font-semibold text-slate-900 truncate">
                          {formatPrice(product.price)}
                        </span>
                        {product.originalPrice && (
                          <span className="text-xs sm:text-sm text-slate-500 line-through">
                            {formatPrice(product.originalPrice)}
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <Link href={`/product/${product.id}`} className="flex-1">
                        <Button
                          variant="outline"
                          className="w-full border-slate-200 text-slate-700 hover:bg-slate-50 bg-transparent text-xs sm:text-sm"
                        >
                          Ver Detalles
                        </Button>
                      </Link>
                      <Button className="bg-slate-900 hover:bg-slate-800 text-white p-2 sm:px-4">
                        <ShoppingCart className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8 sm:mt-12">
            <Link href="/products">
              <Button
                size="lg"
                variant="outline"
                className="border-slate-300 text-slate-700 hover:bg-slate-50 bg-transparent"
              >
                Ver Todos los Productos
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 sm:py-20 bg-slate-50 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-light text-slate-900 mb-4">¿Por qué elegirnos?</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <Card className="text-center p-6 sm:p-8 border-0">
              <MessageCircle className="h-10 w-10 sm:h-12 sm:w-12 text-slate-700 mx-auto mb-4" />
              <h3 className="text-lg sm:text-xl font-semibold text-slate-900 mb-2">Chat en Vivo</h3>
              <p className="text-slate-600 text-sm sm:text-base">
                Asesoría personalizada con nuestros expertos en belleza
              </p>
            </Card>

            <Card className="text-center p-6 sm:p-8 border-0">
              <Calculator className="h-10 w-10 sm:h-12 sm:w-12 text-slate-700 mx-auto mb-4" />
              <h3 className="text-lg sm:text-xl font-semibold text-slate-900 mb-2">Calculadora de Envíos</h3>
              <p className="text-slate-600 text-sm sm:text-base">Conoce el costo exacto de envío a tu ciudad</p>
            </Card>

            <Card className="text-center p-6 sm:p-8 border-0">
              <Award className="h-10 w-10 sm:h-12 sm:w-12 text-slate-700 mx-auto mb-4" />
              <h3 className="text-lg sm:text-xl font-semibold text-slate-900 mb-2">Programa de Puntos</h3>
              <p className="text-slate-600 text-sm sm:text-base">Acumula puntos y obtén descuentos en tus compras</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-12 sm:py-20 bg-slate-900 overflow-hidden">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto text-white">
            <h2 className="text-3xl sm:text-4xl font-light mb-4">Mantente Actualizada</h2>
            <p className="text-lg sm:text-xl mb-6 sm:mb-8 text-slate-300">
              Recibe ofertas exclusivas, tips de belleza y lanzamientos de productos antes que nadie
            </p>

            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Ingresa tu email"
                className="flex-1 px-4 py-3 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-white min-w-0"
              />
              <Button className="bg-white text-slate-900 hover:bg-slate-100 px-6 sm:px-8 whitespace-nowrap">
                Suscribirse
              </Button>
            </div>

            <p className="text-sm mt-4 text-slate-400">Sin spam. Cancela cuando quieras.</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
