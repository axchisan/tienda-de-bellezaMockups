"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Star, ShoppingCart, Heart, Share2, Minus, Plus, Truck, Shield, RotateCcw, MessageCircle } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const formatPrice = (price: number) => {
  return new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    minimumFractionDigits: 0,
  }).format(price)
}

const product = {
  id: 1,
  name: "Serum Vitamina C Premium",
  price: 89.99,
  originalPrice: 120.0,
  images: [
    "/placeholder.svg?height=500&width=500",
    "/placeholder.svg?height=500&width=500",
    "/placeholder.svg?height=500&width=500",
    "/placeholder.svg?height=500&width=500",
  ],
  rating: 4.8,
  reviews: 234,
  category: "Cuidado Facial",
  brand: "SkinCare Pro",
  seller: "Beauty Expert",
  discount: 25,
  inStock: true,
  stockQuantity: 15,
  description:
    "Serum concentrado con Vitamina C pura al 20% que ayuda a iluminar, unificar el tono de la piel y reducir los signos del envejecimiento. Formulado con ácido hialurónico y vitamina E para una hidratación profunda.",
  benefits: [
    "Ilumina y unifica el tono de la piel",
    "Reduce manchas y signos de envejecimiento",
    "Hidratación profunda con ácido hialurónico",
    "Antioxidante natural con vitamina E",
    "Textura ligera de rápida absorción",
  ],
  ingredients:
    "Aqua, Magnesium Ascorbyl Phosphate (Vitamin C), Sodium Hyaluronate, Tocopherol (Vitamin E), Glycerin, Propylene Glycol, Carbomer, Triethanolamine",
  howToUse:
    "Aplicar 2-3 gotas sobre el rostro limpio por las mañanas. Masajear suavemente hasta su completa absorción. Usar protector solar durante el día.",
  specifications: {
    volume: "30ml",
    skinType: "Todo tipo de piel",
    age: "25+ años",
    origin: "Corea del Sur",
    expiry: "24 meses",
  },
}

const reviews = [
  {
    id: 1,
    user: "María González",
    rating: 5,
    date: "2024-01-15",
    comment: "Excelente producto! He notado una gran mejora en la luminosidad de mi piel después de 3 semanas de uso.",
    verified: true,
  },
  {
    id: 2,
    user: "Carlos Rodríguez",
    rating: 4,
    date: "2024-01-10",
    comment: "Muy buen serum, la textura es perfecta y no deja sensación pegajosa. Lo recomiendo.",
    verified: true,
  },
  {
    id: 3,
    user: "Ana Martínez",
    rating: 5,
    date: "2024-01-05",
    comment:
      "Mi piel se ve más radiante y las manchas han disminuido notablemente. Definitivamente lo volvería a comprar.",
    verified: true,
  },
]

const relatedProducts = [
  {
    id: 2,
    name: "Crema Hidratante Anti-Edad",
    price: 145.0,
    image: "/placeholder.svg?height=200&width=200",
    rating: 4.7,
  },
  {
    id: 3,
    name: "Tónico Facial Equilibrante",
    price: 55.9,
    image: "/placeholder.svg?height=200&width=200",
    rating: 4.5,
  },
  {
    id: 4,
    name: "Limpiador Facial Suave",
    price: 42.5,
    image: "/placeholder.svg?height=200&width=200",
    rating: 4.6,
  },
]

export default function ProductPage() {
  const [selectedImage, setSelectedImage] = useState(0)
  const [quantity, setQuantity] = useState(1)
  const [isWishlisted, setIsWishlisted] = useState(false)

  const handleQuantityChange = (change: number) => {
    const newQuantity = quantity + change
    if (newQuantity >= 1 && newQuantity <= product.stockQuantity) {
      setQuantity(newQuantity)
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-600 mb-8">
          <span>Inicio</span> / <span>Productos</span> / <span>{product.category}</span> /{" "}
          <span className="text-gray-900">{product.name}</span>
        </nav>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="relative">
              <img
                src={product.images[selectedImage] || "/placeholder.svg"}
                alt={product.name}
                className="w-full h-96 lg:h-[500px] object-cover rounded-lg"
              />
              {product.discount && (
                <Badge className="absolute top-4 left-4 bg-red-500 text-white text-lg px-3 py-1">
                  -{product.discount}%
                </Badge>
              )}
            </div>

            <div className="grid grid-cols-4 gap-4">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`border-2 rounded-lg overflow-hidden ${
                    selectedImage === index ? "border-rose-500" : "border-gray-200"
                  }`}
                >
                  <img
                    src={image || "/placeholder.svg"}
                    alt={`${product.name} ${index + 1}`}
                    className="w-full h-20 object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <p className="text-sm text-gray-600 mb-2">
                {product.category} • {product.brand}
              </p>
              <h1 className="text-3xl font-bold text-gray-900 mb-4">{product.name}</h1>

              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${i < Math.floor(product.rating) ? "fill-amber-400 text-amber-400" : "text-gray-300"}`}
                    />
                  ))}
                </div>
                <span className="text-sm text-gray-600">
                  {product.rating} ({product.reviews} reseñas)
                </span>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">{product.description}</p>
            </div>

            {/* Price */}
            <div className="flex items-center gap-4">
              <span className="text-3xl font-bold text-gray-900">{formatPrice(product.price * 100)}</span>
              {product.originalPrice && (
                <span className="text-xl text-gray-500 line-through">{formatPrice(product.originalPrice * 100)}</span>
              )}
              {product.discount && (
                <Badge className="bg-green-100 text-green-800">
                  Ahorra {formatPrice((product.originalPrice! - product.price) * 100)}
                </Badge>
              )}
            </div>

            {/* Stock Status */}
            <div className="flex items-center gap-2">
              <div className={`w-3 h-3 rounded-full ${product.inStock ? "bg-green-500" : "bg-red-500"}`}></div>
              <span className={`text-sm font-medium ${product.inStock ? "text-green-700" : "text-red-700"}`}>
                {product.inStock ? `En stock (${product.stockQuantity} disponibles)` : "Agotado"}
              </span>
            </div>

            {/* Seller Info */}
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-sm text-gray-600">Vendido por:</p>
              <p className="font-semibold text-gray-900">{product.seller}</p>
              <div className="flex items-center gap-2 mt-1">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-3 w-3 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="text-xs text-gray-600">4.9 (1,234 ventas)</span>
              </div>
            </div>

            {/* Quantity and Add to Cart */}
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <span className="text-sm font-medium">Cantidad:</span>
                <div className="flex items-center border border-gray-300 rounded-lg">
                  <Button variant="ghost" size="sm" onClick={() => handleQuantityChange(-1)} disabled={quantity <= 1}>
                    <Minus className="h-4 w-4" />
                  </Button>
                  <span className="px-4 py-2 text-center min-w-[60px]">{quantity}</span>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleQuantityChange(1)}
                    disabled={quantity >= product.stockQuantity}
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <div className="flex gap-4">
                <Button className="flex-1 bg-rose-500 hover:bg-rose-600 text-white py-3" disabled={!product.inStock}>
                  <ShoppingCart className="mr-2 h-5 w-5" />
                  Agregar al Carrito
                </Button>
                <Button variant="outline" onClick={() => setIsWishlisted(!isWishlisted)} className="px-4">
                  <Heart className={`h-5 w-5 ${isWishlisted ? "fill-red-500 text-red-500" : ""}`} />
                </Button>
                <Button variant="outline" className="px-4 bg-transparent">
                  <Share2 className="h-5 w-5" />
                </Button>
              </div>

              <Button variant="outline" className="w-full py-3 bg-transparent" disabled={!product.inStock}>
                Comprar Ahora
              </Button>
            </div>

            {/* Benefits */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t">
              <div className="text-center">
                <Truck className="h-6 w-6 text-rose-500 mx-auto mb-2" />
                <p className="text-xs text-gray-600">Envío gratis +$150k</p>
              </div>
              <div className="text-center">
                <Shield className="h-6 w-6 text-rose-500 mx-auto mb-2" />
                <p className="text-xs text-gray-600">Producto original</p>
              </div>
              <div className="text-center">
                <RotateCcw className="h-6 w-6 text-rose-500 mx-auto mb-2" />
                <p className="text-xs text-gray-600">30 días devolución</p>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="mb-16">
          <Tabs defaultValue="description" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="description">Descripción</TabsTrigger>
              <TabsTrigger value="ingredients">Ingredientes</TabsTrigger>
              <TabsTrigger value="usage">Modo de Uso</TabsTrigger>
              <TabsTrigger value="specifications">Especificaciones</TabsTrigger>
            </TabsList>

            <TabsContent value="description" className="mt-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Descripción del Producto</h3>
                  <p className="text-gray-700 leading-relaxed mb-6">{product.description}</p>

                  <h4 className="font-semibold mb-3">Beneficios Principales:</h4>
                  <ul className="space-y-2">
                    {product.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-rose-500 mt-1">•</span>
                        <span className="text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="ingredients" className="mt-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Ingredientes</h3>
                  <p className="text-gray-700 leading-relaxed">{product.ingredients}</p>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="usage" className="mt-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Modo de Uso</h3>
                  <p className="text-gray-700 leading-relaxed">{product.howToUse}</p>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="specifications" className="mt-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Especificaciones</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {Object.entries(product.specifications).map(([key, value]) => (
                      <div key={key} className="flex justify-between py-2 border-b border-gray-100">
                        <span className="font-medium capitalize">{key.replace(/([A-Z])/g, " $1")}:</span>
                        <span className="text-gray-700">{value}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        {/* Reviews Section */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">Reseñas de Clientes</h2>
            <Button variant="outline">
              <MessageCircle className="mr-2 h-4 w-4" />
              Escribir Reseña
            </Button>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Rating Summary */}
            <div className="lg:col-span-1">
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="text-4xl font-bold text-gray-900 mb-2">{product.rating}</div>
                  <div className="flex items-center justify-center mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-5 w-5 ${i < Math.floor(product.rating) ? "fill-amber-400 text-amber-400" : "text-gray-300"}`}
                      />
                    ))}
                  </div>
                  <p className="text-gray-600">Basado en {product.reviews} reseñas</p>

                  <div className="mt-6 space-y-2">
                    {[5, 4, 3, 2, 1].map((stars) => (
                      <div key={stars} className="flex items-center gap-2 text-sm">
                        <span>{stars}★</span>
                        <div className="flex-1 bg-gray-200 rounded-full h-2">
                          <div
                            className="bg-amber-400 h-2 rounded-full"
                            style={{
                              width: `${stars === 5 ? 70 : stars === 4 ? 20 : stars === 3 ? 5 : stars === 2 ? 3 : 2}%`,
                            }}
                          ></div>
                        </div>
                        <span className="text-gray-600">
                          {stars === 5 ? "70%" : stars === 4 ? "20%" : stars === 3 ? "5%" : stars === 2 ? "3%" : "2%"}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Reviews List */}
            <div className="lg:col-span-2 space-y-6">
              {reviews.map((review) => (
                <Card key={review.id}>
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-semibold">{review.user}</span>
                          {review.verified && (
                            <Badge variant="secondary" className="text-xs">
                              Compra verificada
                            </Badge>
                          )}
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="flex items-center">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`h-4 w-4 ${i < review.rating ? "fill-amber-400 text-amber-400" : "text-gray-300"}`}
                              />
                            ))}
                          </div>
                          <span className="text-sm text-gray-600">{review.date}</span>
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-700">{review.comment}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Productos Relacionados</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {relatedProducts.map((relatedProduct) => (
              <Card key={relatedProduct.id} className="group hover:shadow-lg transition-shadow">
                <div className="relative">
                  <img
                    src={relatedProduct.image || "/placeholder.svg"}
                    alt={relatedProduct.name}
                    className="w-full h-48 object-cover"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">{relatedProduct.name}</h3>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-3 w-3 ${i < Math.floor(relatedProduct.rating) ? "fill-amber-400 text-amber-400" : "text-gray-300"}`}
                        />
                      ))}
                    </div>
                    <span className="text-xs text-gray-600">({relatedProduct.rating})</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-gray-900">{formatPrice(relatedProduct.price * 100)}</span>
                    <Button size="sm" className="bg-rose-500 hover:bg-rose-600">
                      <ShoppingCart className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
