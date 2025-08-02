"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Users,
  Package,
  ShoppingCart,
  TrendingUp,
  DollarSign,
  Eye,
  Edit,
  Trash2,
  Plus,
  Search,
  Filter,
  Download,
  BarChart3,
  PieChart,
  Calendar,
  CheckCircle,
  XCircle,
  AlertTriangle,
} from "lucide-react"
import Link from "next/link"
import { Header } from "@/components/header"

const formatPrice = (price: number) => {
  return new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    minimumFractionDigits: 0,
  }).format(price)
}

const stats = [
  {
    title: "Ventas Totales",
    value: formatPrice(45231890),
    change: "+20.1%",
    icon: DollarSign,
    color: "text-green-600",
  },
  {
    title: "Pedidos",
    value: "1,234",
    change: "+15.3%",
    icon: ShoppingCart,
    color: "text-blue-600",
  },
  {
    title: "Productos",
    value: "856",
    change: "+5.2%",
    icon: Package,
    color: "text-purple-600",
  },
  {
    title: "Usuarios",
    value: "12,543",
    change: "+8.7%",
    icon: Users,
    color: "text-orange-600",
  },
]

const recentOrders = [
  {
    id: "BZ-2024-001",
    customer: "María González",
    total: 189900,
    status: "Completado",
    date: "2024-01-15",
    seller: "Beauty Expert",
    items: 3,
  },
  {
    id: "BZ-2024-002",
    customer: "Carlos Rodríguez",
    total: 65500,
    status: "Procesando",
    date: "2024-01-15",
    seller: "Makeup Master",
    items: 1,
  },
  {
    id: "BZ-2024-003",
    customer: "Ana Martínez",
    total: 234750,
    status: "Enviado",
    date: "2024-01-14",
    seller: "Skin Specialist",
    items: 4,
  },
  {
    id: "BZ-2024-004",
    customer: "Luis Pérez",
    total: 89900,
    status: "Pendiente",
    date: "2024-01-14",
    seller: "Beauty Expert",
    items: 2,
  },
]

const products = [
  {
    id: 1,
    name: "Serum Vitamina C Premium",
    category: "Cuidado Facial",
    price: 89900,
    stock: 15,
    sales: 234,
    status: "Activo",
    seller: "Beauty Expert",
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=80&h=80&fit=crop",
    approved: true,
  },
  {
    id: 2,
    name: "Base Líquida HD",
    category: "Maquillaje",
    price: 65500,
    stock: 8,
    sales: 189,
    status: "Activo",
    seller: "Makeup Master",
    image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=80&h=80&fit=crop",
    approved: true,
  },
  {
    id: 3,
    name: "Crema Anti-Edad",
    category: "Cuidado Facial",
    price: 145000,
    stock: 0,
    sales: 156,
    status: "Agotado",
    seller: "Skin Specialist",
    image: "https://images.unsplash.com/photo-1570194065650-d99fb4bedf0a?w=80&h=80&fit=crop",
    approved: true,
  },
  {
    id: 4,
    name: "Paleta de Sombras Profesional",
    category: "Maquillaje",
    price: 78900,
    stock: 25,
    sales: 0,
    status: "Pendiente Aprobación",
    seller: "New Seller",
    image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=80&h=80&fit=crop",
    approved: false,
  },
]

const sellers = [
  {
    id: 1,
    name: "Beauty Expert",
    email: "expert@beauty.com",
    sales: 4523189,
    orders: 234,
    products: 45,
    rating: 4.9,
    status: "Activo",
    joinDate: "2023-01-15",
    commission: 15,
  },
  {
    id: 2,
    name: "Makeup Master",
    email: "master@makeup.com",
    sales: 3214567,
    orders: 189,
    products: 32,
    rating: 4.8,
    status: "Activo",
    joinDate: "2023-03-20",
    commission: 15,
  },
  {
    id: 3,
    name: "Skin Specialist",
    email: "skin@specialist.com",
    sales: 2897643,
    orders: 156,
    products: 28,
    rating: 4.7,
    status: "Activo",
    joinDate: "2023-05-10",
    commission: 15,
  },
]

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("overview")
  const [searchTerm, setSearchTerm] = useState("")

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "completado":
        return "bg-green-100 text-green-800"
      case "procesando":
        return "bg-blue-100 text-blue-800"
      case "enviado":
        return "bg-purple-100 text-purple-800"
      case "pendiente":
        return "bg-yellow-100 text-yellow-800"
      case "activo":
        return "bg-green-100 text-green-800"
      case "agotado":
        return "bg-red-100 text-red-800"
      case "pendiente aprobación":
        return "bg-orange-100 text-orange-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const approveProduct = (productId: number) => {
    // Lógica para aprobar producto
    console.log("Aprobar producto:", productId)
  }

  const rejectProduct = (productId: number) => {
    // Lógica para rechazar producto
    console.log("Rechazar producto:", productId)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Panel de Administración</h1>
            <p className="text-gray-600">Gestiona tu marketplace de belleza</p>
          </div>
          <div className="flex gap-4">
            <Button variant="outline">
              <Download className="mr-2 h-4 w-4" />
              Exportar Datos
            </Button>
            <Link href="/admin/products/new">
              <Button className="bg-rose-500 hover:bg-rose-600">
                <Plus className="mr-2 h-4 w-4" />
                Nuevo Producto
              </Button>
            </Link>
          </div>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-6">
            <TabsTrigger value="overview">Resumen</TabsTrigger>
            <TabsTrigger value="orders">Pedidos</TabsTrigger>
            <TabsTrigger value="products">Productos</TabsTrigger>
            <TabsTrigger value="sellers">Vendedores</TabsTrigger>
            <TabsTrigger value="approvals">Aprobaciones</TabsTrigger>
            <TabsTrigger value="analytics">Analíticas</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            {/* Stats Cards */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                        <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                        <p className={`text-sm ${stat.color}`}>{stat.change} desde el mes pasado</p>
                      </div>
                      <div className={`p-3 rounded-full bg-gray-100`}>
                        <stat.icon className={`h-6 w-6 ${stat.color}`} />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Charts */}
            <div className="grid lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BarChart3 className="h-5 w-5" />
                    Ventas por Mes
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-64 flex items-center justify-center bg-gray-50 rounded-lg">
                    <p className="text-gray-500">Gráfico de ventas mensuales</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <PieChart className="h-5 w-5" />
                    Productos por Categoría
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-64 flex items-center justify-center bg-gray-50 rounded-lg">
                    <p className="text-gray-500">Gráfico de categorías</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Recent Orders */}
            <Card>
              <CardHeader>
                <CardTitle>Pedidos Recientes</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-3 px-4">ID Pedido</th>
                        <th className="text-left py-3 px-4">Cliente</th>
                        <th className="text-left py-3 px-4">Total</th>
                        <th className="text-left py-3 px-4">Estado</th>
                        <th className="text-left py-3 px-4">Vendedor</th>
                        <th className="text-left py-3 px-4">Fecha</th>
                        <th className="text-left py-3 px-4">Acciones</th>
                      </tr>
                    </thead>
                    <tbody>
                      {recentOrders.map((order) => (
                        <tr key={order.id} className="border-b hover:bg-gray-50">
                          <td className="py-3 px-4 font-medium">{order.id}</td>
                          <td className="py-3 px-4">{order.customer}</td>
                          <td className="py-3 px-4">{formatPrice(order.total)}</td>
                          <td className="py-3 px-4">
                            <Badge className={getStatusColor(order.status)}>{order.status}</Badge>
                          </td>
                          <td className="py-3 px-4">{order.seller}</td>
                          <td className="py-3 px-4">{order.date}</td>
                          <td className="py-3 px-4">
                            <div className="flex gap-2">
                              <Button variant="ghost" size="sm">
                                <Eye className="h-4 w-4" />
                              </Button>
                              <Button variant="ghost" size="sm">
                                <Edit className="h-4 w-4" />
                              </Button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="products" className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle>Gestión de Productos</CardTitle>
                  <div className="flex gap-2">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                      <input
                        type="text"
                        placeholder="Buscar productos..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500"
                      />
                    </div>
                    <Button variant="outline">
                      <Filter className="mr-2 h-4 w-4" />
                      Filtros
                    </Button>
                    <Link href="/admin/products/new">
                      <Button className="bg-rose-500 hover:bg-rose-600">
                        <Plus className="mr-2 h-4 w-4" />
                        Nuevo Producto
                      </Button>
                    </Link>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-3 px-4">Producto</th>
                        <th className="text-left py-3 px-4">Categoría</th>
                        <th className="text-left py-3 px-4">Precio</th>
                        <th className="text-left py-3 px-4">Stock</th>
                        <th className="text-left py-3 px-4">Ventas</th>
                        <th className="text-left py-3 px-4">Estado</th>
                        <th className="text-left py-3 px-4">Vendedor</th>
                        <th className="text-left py-3 px-4">Acciones</th>
                      </tr>
                    </thead>
                    <tbody>
                      {products.map((product) => (
                        <tr key={product.id} className="border-b hover:bg-gray-50">
                          <td className="py-3 px-4">
                            <div className="flex items-center gap-3">
                              <img
                                src={product.image || "/placeholder.svg"}
                                alt={product.name}
                                className="w-12 h-12 object-cover rounded-lg"
                              />
                              <div>
                                <p className="font-medium">{product.name}</p>
                                <p className="text-sm text-gray-500">ID: {product.id}</p>
                              </div>
                            </div>
                          </td>
                          <td className="py-3 px-4">{product.category}</td>
                          <td className="py-3 px-4">{formatPrice(product.price)}</td>
                          <td className="py-3 px-4">
                            <span
                              className={
                                product.stock === 0
                                  ? "text-red-600"
                                  : product.stock < 10
                                    ? "text-yellow-600"
                                    : "text-green-600"
                              }
                            >
                              {product.stock}
                            </span>
                          </td>
                          <td className="py-3 px-4">{product.sales}</td>
                          <td className="py-3 px-4">
                            <Badge className={getStatusColor(product.status)}>{product.status}</Badge>
                          </td>
                          <td className="py-3 px-4">{product.seller}</td>
                          <td className="py-3 px-4">
                            <div className="flex gap-2">
                              <Link href={`/admin/products/${product.id}`}>
                                <Button variant="ghost" size="sm">
                                  <Eye className="h-4 w-4" />
                                </Button>
                              </Link>
                              <Link href={`/admin/products/${product.id}/edit`}>
                                <Button variant="ghost" size="sm">
                                  <Edit className="h-4 w-4" />
                                </Button>
                              </Link>
                              <Button variant="ghost" size="sm" className="text-red-500 hover:text-red-700">
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="sellers" className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle>Gestión de Vendedores</CardTitle>
                  <div className="flex gap-2">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                      <input
                        type="text"
                        placeholder="Buscar vendedores..."
                        className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500"
                      />
                    </div>
                    <Button className="bg-rose-500 hover:bg-rose-600">
                      <Plus className="mr-2 h-4 w-4" />
                      Nuevo Vendedor
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-3 px-4">Vendedor</th>
                        <th className="text-left py-3 px-4">Email</th>
                        <th className="text-left py-3 px-4">Ventas Totales</th>
                        <th className="text-left py-3 px-4">Pedidos</th>
                        <th className="text-left py-3 px-4">Productos</th>
                        <th className="text-left py-3 px-4">Calificación</th>
                        <th className="text-left py-3 px-4">Comisión</th>
                        <th className="text-left py-3 px-4">Estado</th>
                        <th className="text-left py-3 px-4">Acciones</th>
                      </tr>
                    </thead>
                    <tbody>
                      {sellers.map((seller) => (
                        <tr key={seller.id} className="border-b hover:bg-gray-50">
                          <td className="py-3 px-4">
                            <div>
                              <p className="font-medium">{seller.name}</p>
                              <p className="text-sm text-gray-500">Desde {seller.joinDate}</p>
                            </div>
                          </td>
                          <td className="py-3 px-4">{seller.email}</td>
                          <td className="py-3 px-4">{formatPrice(seller.sales)}</td>
                          <td className="py-3 px-4">{seller.orders}</td>
                          <td className="py-3 px-4">{seller.products}</td>
                          <td className="py-3 px-4">
                            <div className="flex items-center gap-1">
                              <span>{seller.rating}</span>
                              <span className="text-yellow-400">★</span>
                            </div>
                          </td>
                          <td className="py-3 px-4">{seller.commission}%</td>
                          <td className="py-3 px-4">
                            <Badge className={getStatusColor(seller.status)}>{seller.status}</Badge>
                          </td>
                          <td className="py-3 px-4">
                            <div className="flex gap-2">
                              <Button variant="ghost" size="sm">
                                <Eye className="h-4 w-4" />
                              </Button>
                              <Button variant="ghost" size="sm">
                                <Edit className="h-4 w-4" />
                              </Button>
                              <Button variant="ghost" size="sm" className="text-red-500 hover:text-red-700">
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="approvals" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5 text-orange-500" />
                  Productos Pendientes de Aprobación
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {products
                    .filter((product) => !product.approved)
                    .map((product) => (
                      <div key={product.id} className="border border-orange-200 rounded-lg p-4 bg-orange-50">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-4">
                            <img
                              src={product.image || "/placeholder.svg"}
                              alt={product.name}
                              className="w-16 h-16 object-cover rounded-lg"
                            />
                            <div>
                              <h3 className="font-semibold text-gray-900">{product.name}</h3>
                              <p className="text-sm text-gray-600">
                                {product.category} • {formatPrice(product.price)}
                              </p>
                              <p className="text-sm text-gray-500">Vendedor: {product.seller}</p>
                            </div>
                          </div>
                          <div className="flex gap-2">
                            <Button
                              size="sm"
                              className="bg-green-500 hover:bg-green-600"
                              onClick={() => approveProduct(product.id)}
                            >
                              <CheckCircle className="mr-2 h-4 w-4" />
                              Aprobar
                            </Button>
                            <Button
                              size="sm"
                              variant="outline"
                              className="border-red-300 text-red-600 hover:bg-red-50 bg-transparent"
                              onClick={() => rejectProduct(product.id)}
                            >
                              <XCircle className="mr-2 h-4 w-4" />
                              Rechazar
                            </Button>
                            <Link href={`/admin/products/${product.id}`}>
                              <Button size="sm" variant="outline">
                                <Eye className="mr-2 h-4 w-4" />
                                Ver Detalles
                              </Button>
                            </Link>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="h-5 w-5" />
                    Tendencias de Ventas
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-64 flex items-center justify-center bg-gray-50 rounded-lg">
                    <p className="text-gray-500">Gráfico de tendencias de ventas</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="h-5 w-5" />
                    Rendimiento por Vendedor
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-64 flex items-center justify-center bg-gray-50 rounded-lg">
                    <p className="text-gray-500">Gráfico de rendimiento por vendedor</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calendar className="h-5 w-5" />
                    Ventas por Período
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-64 flex items-center justify-center bg-gray-50 rounded-lg">
                    <p className="text-gray-500">Gráfico de ventas por período</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Package className="h-5 w-5" />
                    Productos Más Vendidos
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {products
                      .filter((p) => p.sales > 0)
                      .sort((a, b) => b.sales - a.sales)
                      .slice(0, 5)
                      .map((product, index) => (
                        <div key={product.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-rose-100 rounded-full flex items-center justify-center">
                              <span className="text-sm font-bold text-rose-600">#{index + 1}</span>
                            </div>
                            <img
                              src={product.image || "/placeholder.svg"}
                              alt={product.name}
                              className="w-10 h-10 object-cover rounded"
                            />
                            <div>
                              <p className="font-medium">{product.name}</p>
                              <p className="text-sm text-gray-600">{product.sales} ventas</p>
                            </div>
                          </div>
                          <span className="font-bold">{formatPrice(product.price)}</span>
                        </div>
                      ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
