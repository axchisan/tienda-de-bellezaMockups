"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Minus, Plus, Trash2, ShoppingBag, ArrowLeft, Gift, Percent } from "lucide-react"
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

const initialCartItems = [
  {
    id: 1,
    name: "Serum Vitamina C Premium",
    price: 8999,
    originalPrice: 12000,
    image: "/placeholder.svg?height=150&width=150",
    quantity: 2,
    category: "Cuidado Facial",
    brand: "SkinCare Pro",
    seller: "Beauty Expert",
    inStock: true,
  },
  {
    id: 2,
    name: "Base Líquida HD Cobertura Total",
    price: 6550,
    image: "/placeholder.svg?height=150&width=150",
    quantity: 1,
    category: "Maquillaje",
    brand: "Glamour",
    seller: "Makeup Master",
    inStock: true,
  },
  {
    id: 3,
    name: "Crema Hidratante Anti-Edad",
    price: 14500,
    image: "/placeholder.svg?height=150&width=150",
    quantity: 1,
    category: "Cuidado Facial",
    brand: "Age Defense",
    seller: "Skin Specialist",
    inStock: false,
  },
]

export default function CartPage() {
  const [cartItems, setCartItems] = useState(initialCartItems)
  const [promoCode, setPromoCode] = useState("")
  const [appliedPromo, setAppliedPromo] = useState<string | null>(null)

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity <= 0) {
      removeItem(id)
      return
    }
    setCartItems((items) => items.map((item) => (item.id === id ? { ...item, quantity: newQuantity } : item)))
  }

  const removeItem = (id: number) => {
    setCartItems((items) => items.filter((item) => item.id !== id))
  }

  const applyPromoCode = () => {
    if (promoCode.toLowerCase() === "belleza10") {
      setAppliedPromo("BELLEZA10")
      setPromoCode("")
    }
  }

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const savings = cartItems.reduce((sum, item) => {
    const itemSavings = item.originalPrice ? (item.originalPrice - item.price) * item.quantity : 0
    return sum + itemSavings
  }, 0)
  const promoDiscount = appliedPromo ? subtotal * 0.1 : 0
  const shipping = subtotal >= 5000 ? 0 : 899
  const total = subtotal - promoDiscount + shipping

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 overflow-x-hidden">
        <Header />
        <div className="container mx-auto px-4 py-16">
          <div className="text-center max-w-md mx-auto">
            <ShoppingBag className="h-24 w-24 text-gray-300 mx-auto mb-6" />
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Tu carrito está vacío</h1>
            <p className="text-gray-600 mb-8">Parece que no has agregado ningún producto a tu carrito todavía.</p>
            <Link href="/products">
              <Button className="bg-rose-500 hover:bg-rose-600">Explorar Productos</Button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 overflow-x-hidden">
      <Header />

      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-8">
          <Link href="/products">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Seguir Comprando
            </Button>
          </Link>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
            Carrito de Compras ({cartItems.length} productos)
          </h1>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cartItems.map((item) => (
              <Card key={item.id}>
                <CardContent className="p-4 sm:p-6">
                  <div className="flex flex-col sm:flex-row gap-4">
                    <div className="relative flex-shrink-0 w-full sm:w-24">
                      <img
                        src={item.image || "/placeholder.svg"}
                        alt={item.name}
                        className="w-full sm:w-24 h-24 object-cover rounded-lg max-w-full"
                      />
                      {!item.inStock && (
                        <div className="absolute inset-0 bg-black/50 rounded-lg flex items-center justify-center">
                          <span className="text-white text-xs font-medium">Agotado</span>
                        </div>
                      )}
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex flex-col sm:flex-row justify-between items-start mb-2 gap-2">
                        <div className="min-w-0 flex-1">
                          <h3 className="font-semibold text-gray-900 line-clamp-2 text-sm sm:text-base">{item.name}</h3>
                          <p className="text-xs sm:text-sm text-gray-600">
                            {item.brand} • {item.category}
                          </p>
                          <p className="text-xs text-gray-500">Vendido por: {item.seller}</p>
                        </div>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => removeItem(item.id)}
                          className="text-red-500 hover:text-red-700 hover:bg-red-50 p-2"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>

                      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                        <div className="flex items-center gap-2">
                          <span className="text-lg font-bold text-gray-900">{formatPrice(item.price * 100)}</span>
                          {item.originalPrice && (
                            <span className="text-sm text-gray-500 line-through">
                              {formatPrice(item.originalPrice * 100)}
                            </span>
                          )}
                        </div>

                        <div className="flex items-center gap-3">
                          {!item.inStock && (
                            <Badge variant="destructive" className="mr-2 text-xs">
                              Agotado
                            </Badge>
                          )}
                          <div className="flex items-center border border-gray-300 rounded-lg">
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              disabled={!item.inStock}
                              className="p-2"
                            >
                              <Minus className="h-4 w-4" />
                            </Button>
                            <span className="px-3 py-2 text-center min-w-[50px] text-sm">{item.quantity}</span>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              disabled={!item.inStock}
                              className="p-2"
                            >
                              <Plus className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </div>

                      <div className="mt-2 text-right">
                        <span className="text-sm text-gray-600">
                          Subtotal:{" "}
                          <span className="font-semibold">{formatPrice(item.price * item.quantity * 100)}</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24">
              <CardContent className="p-4 sm:p-6">
                <h2 className="text-lg sm:text-xl font-semibold mb-6">Resumen del Pedido</h2>

                {/* Promo Code */}
                <div className="mb-6">
                  <div className="flex gap-2 mb-2">
                    <input
                      type="text"
                      placeholder="Código promocional"
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500 text-sm min-w-0"
                    />
                    <Button
                      variant="outline"
                      onClick={applyPromoCode}
                      disabled={!promoCode}
                      className="p-2 bg-transparent"
                    >
                      <Percent className="h-4 w-4" />
                    </Button>
                  </div>
                  {appliedPromo && (
                    <div className="flex items-center gap-2 text-green-600 text-sm">
                      <Gift className="h-4 w-4" />
                      <span>Código {appliedPromo} aplicado (-10%)</span>
                    </div>
                  )}
                </div>

                {/* Price Breakdown */}
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between text-sm">
                    <span>Subtotal ({cartItems.reduce((sum, item) => sum + item.quantity, 0)} productos)</span>
                    <span>{formatPrice(subtotal * 100)}</span>
                  </div>

                  {savings > 0 && (
                    <div className="flex justify-between text-green-600 text-sm">
                      <span>Ahorros</span>
                      <span>-{formatPrice(savings * 100)}</span>
                    </div>
                  )}

                  {appliedPromo && (
                    <div className="flex justify-between text-green-600 text-sm">
                      <span>Descuento promocional</span>
                      <span>-{formatPrice(promoDiscount * 100)}</span>
                    </div>
                  )}

                  <div className="flex justify-between text-sm">
                    <span>Envío</span>
                    <span className={shipping === 0 ? "text-green-600" : ""}>
                      {shipping === 0 ? "Gratis" : `${formatPrice(shipping * 100)}`}
                    </span>
                  </div>

                  {shipping > 0 && <p className="text-xs text-gray-600">Envío gratis en compras mayores a $150.000</p>}
                </div>

                <div className="border-t pt-4 mb-6">
                  <div className="flex justify-between text-lg sm:text-xl font-bold">
                    <span>Total</span>
                    <span>{formatPrice(total * 100)}</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <Link href="/checkout">
                    <Button
                      className="w-full bg-rose-500 hover:bg-rose-600 py-3 text-sm sm:text-base"
                      disabled={cartItems.some((item) => !item.inStock)}
                    >
                      Proceder al Checkout
                    </Button>
                  </Link>

                  <Link href="/products">
                    <Button variant="outline" className="w-full bg-transparent text-sm sm:text-base">
                      Continuar Comprando
                    </Button>
                  </Link>
                </div>

                {/* Trust Badges */}
                <div className="mt-6 pt-6 border-t">
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-2xl mb-1">🔒</div>
                      <p className="text-xs text-gray-600">Pago Seguro</p>
                    </div>
                    <div>
                      <div className="text-2xl mb-1">🚚</div>
                      <p className="text-xs text-gray-600">Envío Rápido</p>
                    </div>
                    <div>
                      <div className="text-2xl mb-1">↩️</div>
                      <p className="text-xs text-gray-600">30 días devolución</p>
                    </div>
                    <div>
                      <div className="text-2xl mb-1">💎</div>
                      <p className="text-xs text-gray-600">100% Original</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
