"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, ShoppingCart, Heart, Grid3X3, List, Search } from "lucide-react"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Checkbox } from "@/components/ui/checkbox"
import { Slider } from "@/components/ui/slider"

const formatPrice = (price: number) => {
  return new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    minimumFractionDigits: 0,
  }).format(price)
}

const products = [
  {
    id: 1,
    name: "Serum Vitamina C Premium",
    price: 89900,
    originalPrice: 120000,
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=300&h=300&fit=crop",
    rating: 4.8,
    reviews: 234,
    category: "Cuidado Facial",
    brand: "SkinCare Pro",
    isNew: true,
    discount: 25,
    seller: "Beauty Expert",
  },
  {
    id: 2,
    name: "Base Líquida HD",
    price: 65500,
    image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=300&h=300&fit=crop",
    rating: 4.9,
    reviews: 189,
    category: "Maquillaje",
    brand: "Glamour",
    isBestseller: true,
    seller: "Makeup Master",
  },
  {
    id: 3,
    name: "Crema Hidratante Anti-Edad",
    price: 145000,
    image: "https://images.unsplash.com/photo-1570194065650-d99fb4bedf0a?w=300&h=300&fit=crop",
    rating: 4.7,
    reviews: 156,
    category: "Cuidado Facial",
    brand: "Age Defense",
    seller: "Skin Specialist",
  },
  {
    id: 4,
    name: "Paleta de Sombras Profesional",
    price: 78900,
    image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=300&h=300&fit=crop",
    rating: 4.6,
    reviews: 298,
    category: "Maquillaje",
    brand: "Color Pro",
    seller: "Makeup Master",
  },
  {
    id: 5,
    name: "Colonia Masculina Clásica",
    price: 120000,
    image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=300&h=300&fit=crop",
    rating: 4.5,
    reviews: 87,
    category: "Fragancias",
    brand: "Elegance",
    seller: "Fragrance Expert",
  },
  {
    id: 6,
    name: "Shampoo Reparador",
    price: 45900,
    image: "https://images.unsplash.com/photo-1522338242992-e1a54906a8da?w=300&h=300&fit=crop",
    rating: 4.4,
    reviews: 203,
    category: "Cuidado Capilar",
    brand: "Hair Care",
    seller: "Hair Specialist",
  },
  {
    id: 7,
    name: "Crema Corporal Hidratante",
    price: 35500,
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=300&fit=crop",
    rating: 4.3,
    reviews: 145,
    category: "Cuidado Corporal",
    brand: "Body Care",
    seller: "Beauty Expert",
  },
  {
    id: 8,
    name: "Kit Cuidado Masculino",
    price: 95000,
    image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=300&h=300&fit=crop",
    rating: 4.6,
    reviews: 112,
    category: "Cuidado Masculino",
    brand: "Men's Care",
    isNew: true,
    seller: "Men's Grooming",
  },
]

const categories = [
  "Cuidado Facial",
  "Maquillaje",
  "Cuidado Corporal",
  "Fragancias",
  "Cuidado Capilar",
  "Cuidado Masculino",
]

const brands = [
  "SkinCare Pro",
  "Glamour",
  "Age Defense",
  "Color Pro",
  "Elegance",
  "Hair Care",
  "Body Care",
  "Men's Care",
]

export default function ProductsPage() {
  const [filteredProducts, setFilteredProducts] = useState(products)
  const [wishlist, setWishlist] = useState<number[]>([])
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [sortBy, setSortBy] = useState("featured")
  const [priceRange, setPriceRange] = useState([0, 200000])
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [selectedBrands, setSelectedBrands] = useState<string[]>([])
  const [searchQuery, setSearchQuery] = useState("")

  const toggleWishlist = (productId: number) => {
    setWishlist((prev) => (prev.includes(productId) ? prev.filter((id) => id !== productId) : [...prev, productId]))
  }

  const handleCategoryChange = (category: string, checked: boolean) => {
    if (checked) {
      setSelectedCategories((prev) => [...prev, category])
    } else {
      setSelectedCategories((prev) => prev.filter((c) => c !== category))
    }
  }

  const handleBrandChange = (brand: string, checked: boolean) => {
    if (checked) {
      setSelectedBrands((prev) => [...prev, brand])
    } else {
      setSelectedBrands((prev) => prev.filter((b) => b !== brand))
    }
  }

  useEffect(() => {
    let filtered = products

    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter(
        (product) =>
          product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.category.toLowerCase().includes(searchQuery.toLowerCase()),
      )
    }

    // Filter by categories
    if (selectedCategories.length > 0) {
      filtered = filtered.filter((product) => selectedCategories.includes(product.category))
    }

    // Filter by brands
    if (selectedBrands.length > 0) {
      filtered = filtered.filter((product) => selectedBrands.includes(product.brand))
    }

    // Filter by price range
    filtered = filtered.filter((product) => product.price >= priceRange[0] && product.price <= priceRange[1])

    // Sort products
    switch (sortBy) {
      case "price-low":
        filtered.sort((a, b) => a.price - b.price)
        break
      case "price-high":
        filtered.sort((a, b) => b.price - a.price)
        break
      case "rating":
        filtered.sort((a, b) => b.rating - a.rating)
        break
      case "newest":
        filtered.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0))
        break
      default:
        // Keep original order for featured
        break
    }

    setFilteredProducts(filtered)
  }, [searchQuery, selectedCategories, selectedBrands, priceRange, sortBy])

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Header />

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className="lg:w-1/4">
            <Card className="sticky top-24 border-0">
              <CardContent className="p-4 sm:p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-lg sm:text-xl font-semibold text-slate-900">Filtros</h2>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => {
                      setSelectedCategories([])
                      setSelectedBrands([])
                      setPriceRange([0, 200000])
                      setSearchQuery("")
                    }}
                    className="text-xs sm:text-sm"
                  >
                    Limpiar Todo
                  </Button>
                </div>

                {/* Search */}
                <div className="mb-6">
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Buscar productos..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full px-4 py-2 pl-10 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900 text-sm"
                    />
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-4 w-4" />
                  </div>
                </div>

                <Accordion type="multiple" defaultValue={["categories", "brands", "price"]}>
                  {/* Categories */}
                  <AccordionItem value="categories">
                    <AccordionTrigger className="text-slate-900 text-sm sm:text-base">Categorías</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-3">
                        {categories.map((category) => (
                          <div key={category} className="flex items-center space-x-2">
                            <Checkbox
                              id={category}
                              checked={selectedCategories.includes(category)}
                              onCheckedChange={(checked) => handleCategoryChange(category, checked as boolean)}
                            />
                            <label
                              htmlFor={category}
                              className="text-xs sm:text-sm cursor-pointer text-slate-700 leading-tight"
                            >
                              {category}
                            </label>
                          </div>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  {/* Brands */}
                  <AccordionItem value="brands">
                    <AccordionTrigger className="text-slate-900 text-sm sm:text-base">Marcas</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-3">
                        {brands.map((brand) => (
                          <div key={brand} className="flex items-center space-x-2">
                            <Checkbox
                              id={brand}
                              checked={selectedBrands.includes(brand)}
                              onCheckedChange={(checked) => handleBrandChange(brand, checked as boolean)}
                            />
                            <label htmlFor={brand} className="text-xs sm:text-sm cursor-pointer text-slate-700">
                              {brand}
                            </label>
                          </div>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  {/* Price Range */}
                  <AccordionItem value="price">
                    <AccordionTrigger className="text-slate-900 text-sm sm:text-base">Rango de Precio</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-4">
                        <Slider
                          value={priceRange}
                          onValueChange={setPriceRange}
                          max={200000}
                          step={5000}
                          className="w-full"
                        />
                        <div className="flex justify-between text-xs sm:text-sm text-slate-600">
                          <span>{formatPrice(priceRange[0])}</span>
                          <span>{formatPrice(priceRange[1])}</span>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>
          </div>

          {/* Products Grid */}
          <div className="lg:w-3/4">
            {/* Header */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
              <div>
                <h1 className="text-2xl sm:text-3xl font-light text-slate-900 mb-2">Productos de Belleza</h1>
                <p className="text-slate-600 text-sm sm:text-base">{filteredProducts.length} productos encontrados</p>
              </div>

              <div className="flex items-center gap-4 w-full sm:w-auto">
                {/* Sort */}
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-full sm:w-48 border-slate-200 text-sm">
                    <SelectValue placeholder="Ordenar por" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="featured">Destacados</SelectItem>
                    <SelectItem value="newest">Más Nuevos</SelectItem>
                    <SelectItem value="price-low">Precio: Menor a Mayor</SelectItem>
                    <SelectItem value="price-high">Precio: Mayor a Menor</SelectItem>
                    <SelectItem value="rating">Mejor Calificados</SelectItem>
                  </SelectContent>
                </Select>

                {/* View Mode */}
                <div className="flex border border-slate-200 rounded-lg">
                  <Button
                    variant={viewMode === "grid" ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setViewMode("grid")}
                    className={`rounded-r-none p-2 ${viewMode === "grid" ? "bg-slate-900 text-white" : ""}`}
                  >
                    <Grid3X3 className="h-4 w-4" />
                  </Button>
                  <Button
                    variant={viewMode === "list" ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setViewMode("list")}
                    className={`rounded-l-none p-2 ${viewMode === "list" ? "bg-slate-900 text-white" : ""}`}
                  >
                    <List className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Products */}
            {filteredProducts.length === 0 ? (
              <div className="text-center py-16">
                <p className="text-slate-500 text-lg mb-4">
                  No se encontraron productos con los filtros seleccionados.
                </p>
                <Button
                  onClick={() => {
                    setSelectedCategories([])
                    setSelectedBrands([])
                    setPriceRange([0, 200000])
                    setSearchQuery("")
                  }}
                  className="bg-slate-900 hover:bg-slate-800"
                >
                  Limpiar Filtros
                </Button>
              </div>
            ) : (
              <div
                className={
                  viewMode === "grid" ? "grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6" : "space-y-4"
                }
              >
                {filteredProducts.map((product) => (
                  <Card
                    key={product.id}
                    className={`group hover:shadow-xl transition-all duration-300 overflow-hidden border-0 ${
                      viewMode === "list" ? "flex flex-col sm:flex-row" : ""
                    }`}
                  >
                    <div className={`relative ${viewMode === "list" ? "w-full sm:w-48 flex-shrink-0" : ""}`}>
                      <img
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        className={`object-cover group-hover:scale-105 transition-transform duration-300 max-w-full ${
                          viewMode === "list" ? "w-full h-48 sm:h-full" : "w-full h-48 sm:h-64"
                        }`}
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

                    <CardContent className={`p-4 sm:p-6 ${viewMode === "list" ? "flex-1" : ""}`}>
                      <div className="space-y-3 sm:space-y-4">
                        <div>
                          <p className="text-sm text-slate-500 mb-1">{product.category}</p>
                          <h3 className="font-semibold text-slate-900 line-clamp-2 text-sm sm:text-base">
                            {product.name}
                          </h3>
                          <p className="text-xs sm:text-sm text-slate-600 mt-1">por {product.brand}</p>
                          <p className="text-xs text-slate-500">Vendido por: {product.seller}</p>
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
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
