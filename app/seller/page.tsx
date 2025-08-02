"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  DollarSign,
  Package,
  ShoppingCart,
  TrendingUp,
  Eye,
  Edit,
  Trash2,
  Plus,
  Search,
  Download,
  BarChart3,
  AlertTriangle,
  CheckCircle,
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

const sellerStats = [
  {
    title: "Mis Ventas",
    value: formatPrice(1234567),
    change: "+18.2%",
    icon: DollarSign,
    color: "text-green-600",
  },
  {
    title: "Pedidos",
    value: "234",
    change: "+12.5%",
    icon: ShoppingCart,
    color: "text-blue-600",
  },
  {
    title: "Mis Productos",
    value: "45",
    change: "+3.1%",
    icon: Package,
    color: "text-purple-600",
  },
  {
    title: "Calificación",
    value: "4.9★",
    change: "+0.1",
    icon: TrendingUp,
    color: "text-orange-600",
  },
]

const myOrders = [
  {
    id: "BZ-2024-001",
    customer: "María González",
    product: "Serum Vitamina C Premium",
    total: 89900,
    commission: 13485,
    status: "Completado",
    date: "2024-01-15",
  },
  {
    id: "BZ-2024-005",
    customer: "Ana Martínez",
    product: "Crema Hidratante Anti-Edad",
    total: 145000,
    commission: 21750,
    status: "Enviado",
    date: "2024-01-14",
  },
  {
    id: "BZ-2024-008",
    customer: "Laura Silva",
    product: "Serum Vitamina C Premium",
    total: 89900,
    commission: 13485,
    status: "Procesando",
    date: "2024-01-13",
  },
]

const myProducts = [
  {
    id: 1,
    name: "Serum Vitamina C Premium",
    category: "Cuidado Facial",
    price: 89900,
    stock: 15,
    sales: 234,
    commission: "15%",
    status: "Activo",
    approved: true,
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=80&h=80&fit=crop",
  },
  {
    id: 2,
    name: "Crema Hidratante Anti-Edad",
    category: "Cuidado Facial",
    price: 145000,
    stock: 8,
    sales: 156,
    commission: "15%",
    status: "Activo",
    approved: true,
    image: "https://images.unsplash.com/photo-1570194065650-d99fb4bedf0a?w=80&h=80&fit=crop",
  },
  {
    id: 3,
    name: "Tónico Facial Equilibrante",
    category: "Cuidado Facial",
    price: 55900,
    stock: 0,
    sales: 89,
    commission: "15%",
    status: "Agotado",
    approved: true,
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=80&h=80&fit=crop",
  },
  {
    id: 4,
    name: "Mascarilla Purificante",
    category: "Cuidado Facial",
    price: 67900,
    stock: 20,
    sales: 0,
    commission: "15%",
    status: "Pendiente Aprobación",
    approved: false,
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=80&h=80&fit=crop",
  },
]

export default function SellerDashboard() {
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

  const pendingProducts = myProducts.filter((product) => !product.approved)
  const activeProducts = myProducts.filter((product) => product.approved)

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Panel de Vendedor</h1>
            <p className="text-gray-600">Bienvenido, Beauty Expert</p>
          </div>
          <div className="flex gap-4">
            <Button variant="outline">
              <Download className="mr-2 h-4 w-4" />
              Descargar Reporte
            </Button>
            <Link href="/seller/products/new">
              <Button className="bg-rose-500 hover:bg-rose-600">
                <Plus className="mr-2 h-4 w-4" />
                Nuevo Producto
              </Button>
            </Link>
          </div>
        </div>

        {/* Pending Approvals Alert */}
        {pendingProducts.length > 0 && (
          <Card className="mb-6 border-orange-200 bg-orange-50">
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <AlertTriangle className="h-5 w-5 text-orange-600" />
                <div>
                  <p className="font-medium text-orange-800">
                    Tienes {pendingProducts.length} producto(s) pendiente(s) de aprobación
                  </p>
                  <p className="text-sm text-orange-700">
                    Los productos estarán disponibles para la venta una vez sean aprobados por el administrador.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="overview">Resumen</TabsTrigger>
            <TabsTrigger value="orders">Mis Pedidos</TabsTrigger>
            <TabsTrigger value="products">Mis Productos</TabsTrigger>
            <TabsTrigger value="inventory">Inventario</TabsTrigger>
            <TabsTrigger value="analytics">Analíticas</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            {/* Stats Cards */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {sellerStats.map((stat, index) => (
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

            {/* Performance Chart */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="h-5 w-5" />
                  Rendimiento de Ventas
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-64 flex items-center justify-center bg-gray-50 rounded-lg">
                  <p className="text-gray-500">Gráfico de rendimiento de ventas</p>
                </div>
              </CardContent>
            </Card>

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
                        <th className="text-left py-3 px-4">Producto</th>
                        <th className="text-left py-3 px-4">Total</th>
                        <th className="text-left py-3 px-4">Comisión</th>
                        <th className="text-left py-3 px-4">Estado</th>
                        <th className="text-left py-3 px-4">Fecha</th>
                      </tr>
                    </thead>
                    <tbody>
                      {myOrders.slice(0, 5).map((order) => (
                        <tr key={order.id} className="border-b hover:bg-gray-50">
                          <td className="py-3 px-4 font-medium">{order.id}</td>
                          <td className="py-3 px-4">{order.customer}</td>
                          <td className="py-3 px-4">{order.product}</td>
                          <td className="py-3 px-4">{formatPrice(order.total)}</td>
                          <td className="py-3 px-4 text-green-600 font-medium">{formatPrice(order.commission)}</td>
                          <td className="py-3 px-4">
                            <Badge className={getStatusColor(order.status)}>{order.status}</Badge>
                          </td>
                          <td className="py-3 px-4">{order.date}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="orders" className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle>Mis Pedidos</CardTitle>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                    <input
                      type="text"
                      placeholder="Buscar pedidos..."
                      className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500"
                    />
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-3 px-4">ID Pedido</th>
                        <th className="text-left py-3 px-4">Cliente</th>
                        <th className="text-left py-3 px-4">Producto</th>
                        <th className="text-left py-3 px-4">Total</th>
                        <th className="text-left py-3 px-4">Mi Comisión</th>
                        <th className="text-left py-3 px-4">Estado</th>
                        <th className="text-left py-3 px-4">Fecha</th>
                        <th className="text-left py-3 px-4">Acciones</th>
                      </tr>
                    </thead>
                    <tbody>
                      {myOrders.map((order) => (
                        <tr key={order.id} className="border-b hover:bg-gray-50">
                          <td className="py-3 px-4 font-medium">{order.id}</td>
                          <td className="py-3 px-4">{order.customer}</td>
                          <td className="py-3 px-4">{order.product}</td>
                          <td className="py-3 px-4">{formatPrice(order.total)}</td>
                          <td className="py-3 px-4 text-green-600 font-medium">{formatPrice(order.commission)}</td>
                          <td className="py-3 px-4">
                            <Badge className={getStatusColor(order.status)}>{order.status}</Badge>
                          </td>
                          <td className="py-3 px-4">{order.date}</td>
                          <td className="py-3 px-4">
                            <Button variant="ghost" size="sm">
                              <Eye className="h-4 w-4" />
                            </Button>
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
                  <CardTitle>Mis Productos</CardTitle>
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
                    <Link href="/seller/products/new">
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
                        <th className="text-left py-3 px-4">Comisión</th>
                        <th className="text-left py-3 px-4">Estado</th>
                        <th className="text-left py-3 px-4">Acciones</th>
                      </tr>
                    </thead>
                    <tbody>
                      {myProducts.map((product) => (
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
                                <div className="flex items-center gap-2 mt-1">
                                  {product.approved ? (
                                    <CheckCircle className="h-4 w-4 text-green-500" />
                                  ) : (
                                    <AlertTriangle className="h-4 w-4 text-orange-500" />
                                  )}
                                  <span className="text-xs text-gray-500">
                                    {product.approved ? "Aprobado" : "Pendiente"}
                                  </span>
                                </div>
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
                          <td className="py-3 px-4 text-green-600 font-medium">{product.commission}</td>
                          <td className="py-3 px-4">
                            <Badge className={getStatusColor(product.status)}>{product.status}</Badge>
                          </td>
                          <td className="py-3 px-4">
                            <div className="flex gap-2">
                              <Link href={`/seller/products/${product.id}`}>
                                <Button variant="ghost" size="sm">
                                  <Eye className="h-4 w-4" />
                                </Button>
                              </Link>
                              <Link href={`/seller/products/${product.id}/edit`}>
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

          <TabsContent value="inventory" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Gestión de Inventario</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6 mb-6">
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-red-800 mb-2">Stock Bajo</h3>
                    <p className="text-2xl font-bold text-red-600">
                      {myProducts.filter((p) => p.stock < 10 && p.stock > 0).length}
                    </p>
                    <p className="text-sm text-red-700">productos con stock bajo</p>
                  </div>
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-red-800 mb-2">Agotados</h3>
                    <p className="text-2xl font-bold text-red-600">{myProducts.filter((p) => p.stock === 0).length}</p>
                    <p className="text-sm text-red-700">productos agotados</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-green-800 mb-2">Stock Saludable</h3>
                    <p className="text-2xl font-bold text-green-600">
                      {myProducts.filter((p) => p.stock >= 10).length}
                    </p>
                    <p className="text-sm text-green-700">productos con buen stock</p>
                  </div>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-3 px-4">Producto</th>
                        <th className="text-left py-3 px-4">Stock Actual</th>
                        <th className="text-left py-3 px-4">Stock Mínimo</th>
                        <th className="text-left py-3 px-4">Ventas (30d)</th>
                        <th className="text-left py-3 px-4">Estado</th>
                        <th className="text-left py-3 px-4">Acciones</th>
                      </tr>
                    </thead>
                    <tbody>
                      {myProducts.map((product) => (
                        <tr key={product.id} className="border-b hover:bg-gray-50">
                          <td className="py-3 px-4">
                            <div className="flex items-center gap-3">
                              <img
                                src={product.image || "/placeholder.svg"}
                                alt={product.name}
                                className="w-10 h-10 object-cover rounded"
                              />
                              <span className="font-medium">{product.name}</span>
                            </div>
                          </td>
                          <td className="py-3 px-4">
                            <span
                              className={`font-semibold ${
                                product.stock === 0
                                  ? "text-red-600"
                                  : product.stock < 10
                                    ? "text-yellow-600"
                                    : "text-green-600"
                              }`}
                            >
                              {product.stock}
                            </span>
                          </td>
                          <td className="py-3 px-4">5</td>
                          <td className="py-3 px-4">{Math.floor(product.sales / 12)}</td>
                          <td className="py-3 px-4">
                            {product.stock === 0 ? (
                              <Badge className="bg-red-100 text-red-800">Agotado</Badge>
                            ) : product.stock < 10 ? (
                              <Badge className="bg-yellow-100 text-yellow-800">Stock Bajo</Badge>
                            ) : (
                              <Badge className="bg-green-100 text-green-800">Disponible</Badge>
                            )}
                          </td>
                          <td className="py-3 px-4">
                            <Button variant="outline" size="sm">
                              Actualizar Stock
                            </Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Ventas por Mes</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-64 flex items-center justify-center bg-gray-50 rounded-lg">
                    <p className="text-gray-500">Gráfico de ventas mensuales</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Productos Más Vendidos</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {myProducts
                      .filter((p) => p.sales > 0)
                      .sort((a, b) => b.sales - a.sales)
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

              <Card>
                <CardHeader>
                  <CardTitle>Comisiones Ganadas</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-64 flex items-center justify-center bg-gray-50 rounded-lg">
                    <p className="text-gray-500">Gráfico de comisiones</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Calificaciones de Clientes</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-gray-900 mb-2">4.9</div>
                    <div className="text-yellow-400 text-2xl mb-2">★★★★★</div>
                    <p className="text-gray-600">Basado en 234 reseñas</p>

                    <div className="mt-6 space-y-2">
                      {[5, 4, 3, 2, 1].map((stars) => (
                        <div key={stars} className="flex items-center gap-2 text-sm">
                          <span>{stars}★</span>
                          <div className="flex-1 bg-gray-200 rounded-full h-2">
                            <div
                              className="bg-yellow-400 h-2 rounded-full"
                              style={{
                                width: `${stars === 5 ? 85 : stars === 4 ? 10 : stars === 3 ? 3 : stars === 2 ? 1 : 1}%`,
                              }}
                            ></div>
                          </div>
                          <span className="text-gray-600 w-10">
                            {stars === 5 ? "85%" : stars === 4 ? "10%" : stars === 3 ? "3%" : stars === 2 ? "1%" : "1%"}
                          </span>
                        </div>
                      ))}
                    </div>
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
