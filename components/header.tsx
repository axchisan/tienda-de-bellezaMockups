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
    <header className="bg-white border-b border-slate-200 sticky top-0 z-50 w-full">
      {/* Top Bar */}
      <div className="bg-slate-900 text-white py-2 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center text-xs sm:text-sm">
            <div className="flex items-center gap-2 sm:gap-6 min-w-0">
              <span className="hidden sm:inline">📞 +57 (1) 234-5678</span>
              <span className="hidden md:inline">✉️ hola@bellezastore.co</span>
            </div>
            <div className="hidden lg:flex items-center gap-6 min-w-0">
              <span className="truncate">🚚 Envío gratis en compras mayores a $150.000</span>
              <Link href="/admin" className="hover:text-slate-300 transition-colors whitespace-nowrap">
                Panel Admin
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 min-w-0 flex-shrink-0">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-slate-900 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm sm:text-lg">B</span>
            </div>
            <div className="hidden sm:block min-w-0">
              <h1 className="text-lg sm:text-2xl font-semibold text-slate-900 truncate">BellezaStore</h1>
              <p className="text-xs text-slate-500 truncate">Productos Premium de Belleza</p>
            </div>
          </Link>

          {/* Search Bar - Desktop */}
          <div className="hidden lg:flex flex-1 max-w-2xl mx-8">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Buscar productos, marcas..."
                className="w-full px-4 py-3 pl-12 border border-slate-200 rounded-full focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent text-sm"
              />
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 h-5 w-5" />
              <Button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-slate-900 hover:bg-slate-800 rounded-full px-4 sm:px-6 text-sm">
                Buscar
              </Button>
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-2 sm:space-x-4 flex-shrink-0">
            {/* Chat */}
            <Link href="/chat">
              <Button variant="ghost" size="sm" className="hidden md:flex p-2">
                <MessageCircle className="h-4 w-4 sm:h-5 sm:w-5" />
              </Button>
            </Link>

            {/* Calculator */}
            <Link href="/shipping-calculator">
              <Button variant="ghost" size="sm" className="hidden md:flex p-2">
                <Calculator className="h-4 w-4 sm:h-5 sm:w-5" />
              </Button>
            </Link>

            {/* Search Mobile */}
            <Button variant="ghost" size="sm" className="lg:hidden p-2">
              <Search className="h-4 w-4 sm:h-5 sm:w-5" />
            </Button>

            {/* Wishlist */}
            <Link href="/wishlist">
              <Button variant="ghost" size="sm" className="relative p-2">
                <Heart className="h-4 w-4 sm:h-5 sm:w-5" />
                {wishlistItems > 0 && (
                  <Badge className="absolute -top-1 -right-1 bg-slate-900 text-white text-xs px-1.5 py-0.5 rounded-full min-w-[18px] h-[18px] flex items-center justify-center">
                    {wishlistItems}
                  </Badge>
                )}
              </Button>
            </Link>

            {/* Cart */}
            <Link href="/cart">
              <Button variant="ghost" size="sm" className="relative p-2">
                <ShoppingCart className="h-4 w-4 sm:h-5 sm:w-5" />
                {cartItems > 0 && (
                  <Badge className="absolute -top-1 -right-1 bg-slate-900 text-white text-xs px-1.5 py-0.5 rounded-full min-w-[18px] h-[18px] flex items-center justify-center">
                    {cartItems}
                  </Badge>
                )}
              </Button>
            </Link>

            {/* User Menu */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="p-2">
                  <User className="h-4 w-4 sm:h-5 sm:w-5" />
                  <ChevronDown className="h-3 w-3 sm:h-4 sm:w-4 ml-1" />
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
            <Button variant="ghost" size="sm" className="lg:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-4 w-4 sm:h-5 sm:w-5" /> : <Menu className="h-4 w-4 sm:h-5 sm:w-5" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="border-t border-slate-200 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="hidden lg:flex items-center justify-center space-x-8 py-4 overflow-x-auto">
            <Link
              href="/products"
              className="text-slate-700 hover:text-slate-900 font-medium transition-colors whitespace-nowrap"
            >
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
            <Link href="/offers" className="text-slate-900 font-semibold whitespace-nowrap">
              Ofertas
            </Link>
            <Link
              href="/blog"
              className="text-slate-700 hover:text-slate-900 font-medium transition-colors whitespace-nowrap"
            >
              Blog
            </Link>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t border-slate-200 absolute w-full z-40 shadow-lg">
          <div className="container mx-auto px-4 py-4 space-y-4 max-h-[80vh] overflow-y-auto">
            {/* Mobile Search */}
            <div className="relative">
              <input
                type="text"
                placeholder="Buscar productos..."
                className="w-full px-4 py-3 pl-12 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900 text-sm"
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
