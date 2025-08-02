"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, ShoppingCart, Trash2, Heart, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const wishlistItems = [
  {
    id: 1,
    name: "Vitamin C Serum Premium",
    price: 89.99,
    originalPrice: 120.0,
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=300&h=300&fit=crop",
    rating: 4.8,
    reviews: 234,
    category: "Skincare",
    brand: "SkinCare Pro",
    inStock: true,
    discount: 25,
  },
  {
    id: 2,
    name: "Professional Eyeshadow Palette",
    price: 78.9,
    image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=300&h=300&fit=crop",
    rating: 4.6,
    reviews: 298,
    category: "Makeup",
    brand: "Color Pro",
    inStock: true,
  },
  {
    id: 3,
    name: "Anti-Aging Moisturizer",
    price: 145.0,
    image: "https://images.unsplash.com/photo-1570194065650-d99fb4bedf0a?w=300&h=300&fit=crop",
    rating: 4.7,
    reviews: 156,
    category: "Skincare",
    brand: "Age Defense",
    inStock: false,
  },
]

export default function WishlistPage() {
  const [items, setItems] = useState(wishlistItems)

  const removeFromWishlist = (id: number) => {
    setItems((prev) => prev.filter((item) => item.id !== id))
  }

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <div className="container mx-auto px-4 py-16">
          <div className="text-center max-w-md mx-auto">
            <Heart className="h-24 w-24 text-slate-300 mx-auto mb-6" />
            <h1 className="text-2xl font-semibold text-slate-900 mb-4">Your wishlist is empty</h1>
            <p className="text-slate-600 mb-8">Save your favorite products to your wishlist for easy access later.</p>
            <Link href="/products">
              <Button className="bg-slate-900 hover:bg-slate-800">Explore Products</Button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <Link href="/products">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Continue Shopping
            </Button>
          </Link>
          <h1 className="text-3xl font-light text-slate-900">My Wishlist ({items.length} items)</h1>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {items.map((item) => (
            <Card key={item.id} className="group hover:shadow-lg transition-all duration-300 overflow-hidden border-0">
              <div className="relative">
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 flex flex-col gap-2">
                  {item.discount && <Badge className="bg-slate-900 text-white text-xs">-{item.discount}%</Badge>}
                  {!item.inStock && <Badge className="bg-slate-600 text-white text-xs">Out of Stock</Badge>}
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  className="absolute top-4 right-4 bg-white/90 hover:bg-white shadow-sm text-slate-600 hover:text-slate-900"
                  onClick={() => removeFromWishlist(item.id)}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>

              <CardContent className="p-6">
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-slate-500 mb-1">{item.category}</p>
                    <h3 className="font-semibold text-slate-900 line-clamp-2">{item.name}</h3>
                    <p className="text-sm text-slate-600 mt-1">by {item.brand}</p>
                  </div>

                  <div className="flex items-center gap-2">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${i < Math.floor(item.rating) ? "fill-slate-400 text-slate-400" : "text-slate-200"}`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-slate-600">({item.reviews})</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-xl font-semibold text-slate-900">${item.price}</span>
                      {item.originalPrice && (
                        <span className="text-sm text-slate-500 line-through">${item.originalPrice}</span>
                      )}
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Link href={`/product/${item.id}`} className="flex-1">
                      <Button
                        variant="outline"
                        className="w-full border-slate-200 text-slate-700 hover:bg-slate-50 bg-transparent"
                      >
                        View Details
                      </Button>
                    </Link>
                    <Button className="bg-slate-900 hover:bg-slate-800 text-white" disabled={!item.inStock}>
                      <ShoppingCart className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Recommendations */}
        <div className="mt-16">
          <h2 className="text-2xl font-light text-slate-900 mb-8">You might also like</h2>
          <div className="text-center">
            <Link href="/products">
              <Button variant="outline" className="border-slate-300 text-slate-700 hover:bg-slate-50 bg-transparent">
                Explore More Products
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
