"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Search, ShoppingCart, Heart, User, Menu, X, ChevronDown, MessageCircle, Calculator } from "lucide-react"
import Link from "next/link"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [cartItems] = useState(3)
  const [wishlistItems] = useState(5)

  const categories = [
    "Cuidado Facial",
    "Maquillaje",
    "Cuidado Corporal",
    "Fragancias",
    "Cuidado Capilar",
    "Cuidado Masculino",
  ]

  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-slate-900 text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center gap-6">
              <span>📞 +57 (1) 234-5678</span>
              <span>✉️ hola@bellezastore.co</span>
            </div>
            <div className="hidden md:flex items-center gap-6">
              <span>🚚 Envío gratis en compras mayores a $150.000</span>
              <Link href="/admin" className="hover:text-slate-300 transition-colors">
                Panel Admin
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-slate-900 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">B</span>
            </div>
            <div>
              <h1 className="text-2xl font-semibold text-slate-900">BellezaStore</h1>
              <p className="text-xs text-slate-500">Productos Premium de Belleza</p>
            </div>
          </Link>

          {/* Search Bar - Desktop */}
          <div className="hidden lg:flex flex-1 max-w-2xl mx-8">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Buscar productos, marcas..."
                className="w-full px-4 py-3 pl-12 border border-slate-200 rounded-full focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent"
              />
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 h-5 w-5" />
              <Button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-slate-900 hover:bg-slate-800 rounded-full px-6">
                Buscar
              </Button>
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            {/* Chat */}
            <Link href="/chat">
              <Button variant="ghost" size="sm" className="hidden md:flex">
                <MessageCircle className="h-5 w-5" />
              </Button>
            </Link>

            {/* Calculator */}
            <Link href="/shipping-calculator">
              <Button variant="ghost" size="sm" className="hidden md:flex">
                <Calculator className="h-5 w-5" />
              </Button>
            </Link>

            {/* Search Mobile */}
            <Button variant="ghost" size="sm" className="lg:hidden">
              <Search className="h-5 w-5" />
            </Button>

            {/* Wishlist */}
            <Link href="/wishlist">
              <Button variant="ghost" size="sm" className="relative">
                <Heart className="h-5 w-5" />
                {wishlistItems > 0 && (
                  <Badge className="absolute -top-2 -right-2 bg-slate-900 text-white text-xs px-1.5 py-0.5 rounded-full min-w-[20px] h-5 flex items-center justify-center">
                    {wishlistItems}
                  </Badge>
                )}
              </Button>
            </Link>

            {/* Cart */}
            <Link href="/cart">
              <Button variant="ghost" size="sm" className="relative">
                <ShoppingCart className="h-5 w-5" />
                {cartItems > 0 && (
                  <Badge className="absolute -top-2 -right-2 bg-slate-900 text-white text-xs px-1.5 py-0.5 rounded-full min-w-[20px] h-5 flex items-center justify-center">
                    {cartItems}
                  </Badge>
                )}
              </Button>
            </Link>

            {/* User Menu */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm">
                  <User className="h-5 w-5" />
                  <ChevronDown className="h-4 w-4 ml-1" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                <DropdownMenuItem asChild>
                  <Link href="/login">Iniciar Sesión</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/register">Crear Cuenta</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/profile">Mi Perfil</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/orders">Mis Pedidos</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/seller">Panel Vendedor</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Mobile Menu */}
            <Button variant="ghost" size="sm" className="lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="border-t border-slate-200">
        <div className="container mx-auto px-4">
          <div className="hidden lg:flex items-center justify-center space-x-8 py-4">
            <Link href="/products" className="text-slate-700 hover:text-slate-900 font-medium transition-colors">
              Todos los Productos
            </Link>
            {categories.map((category) => (
              <Link
                key={category}
                href={`/products?category=${category}`}
                className="text-slate-700 hover:text-slate-900 font-medium whitespace-nowrap transition-colors"
              >
                {category}
              </Link>
            ))}
            <Link href="/offers" className="text-slate-900 font-semibold">
              Ofertas
            </Link>
            <Link href="/blog" className="text-slate-700 hover:text-slate-900 font-medium transition-colors">
              Blog
            </Link>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t border-slate-200">
          <div className="container mx-auto px-4 py-4 space-y-4">
            {/* Mobile Search */}
            <div className="relative">
              <input
                type="text"
                placeholder="Buscar productos..."
                className="w-full px-4 py-3 pl-12 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900"
              />
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 h-5 w-5" />
            </div>

            {/* Mobile Navigation */}
            <div className="space-y-2">
              <Link href="/products" className="block py-2 text-slate-700 hover:text-slate-900 font-medium">
                Todos los Productos
              </Link>
              {categories.map((category) => (
                <Link
                  key={category}
                  href={`/products?category=${category}`}
                  className="block py-2 text-slate-700 hover:text-slate-900 font-medium"
                >
                  {category}
                </Link>
              ))}
              <Link href="/offers" className="block py-2 text-slate-900 font-semibold">
                Ofertas
              </Link>
              <Link href="/blog" className="block py-2 text-slate-700 hover:text-slate-900 font-medium">
                Blog
              </Link>
              <Link href="/chat" className="block py-2 text-slate-700 hover:text-slate-900 font-medium">
                Chat en Vivo
              </Link>
              <Link href="/shipping-calculator" className="block py-2 text-slate-700 hover:text-slate-900 font-medium">
                Calculadora de Envíos
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
