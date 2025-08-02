"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Plus, Search, Filter, Edit, Trash2, Eye, ArrowLeft, Percent, Calendar, Package, Users } from "lucide-react"
import Link from "next/link"
import { Header } from "@/components/header"

const formatPrice = (price: number) => {
  return new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    minimumFractionDigits: 0,
  }).format(price)
}

const offers = [
  {
    id: 1,
    title: "Flash Sale - Cuidado Facial",
    type: "Flash Sale",
    discount: 35,
    startDate: "2024-01-15",
    endDate: "2024-01-17",
    status: "Activa",
    products: 12,
    sales: 45,
    revenue: 2340000,
    description: "Descuento especial en productos de cuidado facial por tiempo limitado",
  },
  {
    id: 2,
    title: "Descuento Maquillaje Premium",
    type: "Descuento por Categoría",
    discount: 25,
    startDate: "2024-01-10",
    endDate: "2024-01-31",
    status: "Activa",
    products: 28,
    sales: 123,
    revenue: 5670000,
    description: "25% de descuento en toda la línea de maquillaje premium",
  },
  {
    id: 3,
    title: "Combo Skincare Routine",
    type: "Bundle",
    discount: 30,
    startDate: "2024-01-01",
    endDate: "2024-01-30",
    status: "Activa",
    products: 5,
    sales: 67,
    revenue: 3450000,
    description: "Combo especial de rutina de cuidado facial completa",
  },
  {
    id: 4,
    title: "Black Friday Beauty",
    type: "Evento Especial",
    discount: 50,
    startDate: "2023-11-24",
    endDate: "2023-11-26",
    status: "Finalizada",
    products: 156,
    sales: 890,
    revenue: 45600000,
    description: "Mega descuentos en toda la tienda por Black Friday",
  },
  {
    id: 5,
    title: "Día de la Madre - Fragancias",
    type: "Fecha Especial",
    discount: 20,
    startDate: "2024-05-01",
    endDate: "2024-05-15",
    status: "Programada",
    products: 34,
    sales: 0,
    revenue: 0,
    description: "Descuentos especiales en fragancias para el Día de la Madre",
  },
]

const stats = [
  {
    title: "Ofertas Activas",
    value: "3",
    change: "+1",
    icon: Percent,
    color: "text-green-600",
  },
  {
    title: "Ventas por Ofertas",
    value: formatPrice(11460000),
    change: "+18.2%",
    icon: Package,
    color: "text-blue-600",
  },
  {
    title: "Productos en Oferta",
    value: "45",
    change: "+12",
    icon: Package,
    color: "text-purple-600",
  },
  {
    title: "Conversión",
    value: "12.5%",
    change: "+2.1%",
    icon: Users,
    color: "text-orange-600",
  },
]

export default function AdminOffersPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "activa":
        return "bg-green-100 text-green-800"
      case "programada":
        return "bg-blue-100 text-blue-800"
      case "finalizada":
        return "bg-gray-100 text-gray-800"
      case "pausada":
        return "bg-yellow-100 text-yellow-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getTypeColor = (type: string) => {
    switch (type.toLowerCase()) {
      case "flash sale":
        return "bg-red-100 text-red-800"
      case "descuento por categoría":
        return "bg-purple-100 text-purple-800"
      case "bundle":
        return "bg-orange-100 text-orange-800"
      case "evento especial":
        return "bg-pink-100 text-pink-800"
      case "fecha especial":
        return "bg-blue-100 text-blue-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const filteredOffers = offers.filter((offer) => {
    const matchesSearch =
      offer.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      offer.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = statusFilter === "all" || offer.status.toLowerCase() === statusFilter
    return matchesSearch && matchesStatus
  })

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <Link href="/admin">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Volver al Panel
            </Button>
          </Link>
          <h1 className="text-3xl font-bold text-gray-900">Gestión de Ofertas</h1>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
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

        {/* Filters and Actions */}
        <Card className="mb-8">
          <CardHeader>
            <div className="flex justify-between items-center">
              <CardTitle>Todas las Ofertas</CardTitle>
              <Link href="/admin/offers/new">
                <Button className="bg-rose-500 hover:bg-rose-600">
                  <Plus className="mr-2 h-4 w-4" />
                  Nueva Oferta
                </Button>
              </Link>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <input
                  type="text"
                  placeholder="Buscar ofertas..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500"
                />
              </div>
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500"
              >
                <option value="all">Todos los estados</option>
                <option value="activa">Activas</option>
                <option value="programada">Programadas</option>
                <option value="finalizada">Finalizadas</option>
                <option value="pausada">Pausadas</option>
              </select>
              <Button variant="outline">
                <Filter className="mr-2 h-4 w-4" />
                Más Filtros
              </Button>
            </div>

            {/* Offers Table */}
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 px-4">Oferta</th>
                    <th className="text-left py-3 px-4">Tipo</th>
                    <th className="text-left py-3 px-4">Descuento</th>
                    <th className="text-left py-3 px-4">Período</th>
                    <th className="text-left py-3 px-4">Estado</th>
                    <th className="text-left py-3 px-4">Productos</th>
                    <th className="text-left py-3 px-4">Ventas</th>
                    <th className="text-left py-3 px-4">Ingresos</th>
                    <th className="text-left py-3 px-4">Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredOffers.map((offer) => (
                    <tr key={offer.id} className="border-b hover:bg-gray-50">
                      <td className="py-3 px-4">
                        <div>
                          <p className="font-medium text-gray-900">{offer.title}</p>
                          <p className="text-sm text-gray-500 line-clamp-1">{offer.description}</p>
                        </div>
                      </td>
                      <td className="py-3 px-4">
                        <Badge className={getTypeColor(offer.type)}>{offer.type}</Badge>
                      </td>
                      <td className="py-3 px-4">
                        <span className="font-semibold text-green-600">{offer.discount}%</span>
                      </td>
                      <td className="py-3 px-4">
                        <div className="text-sm">
                          <p>{offer.startDate}</p>
                          <p className="text-gray-500">hasta {offer.endDate}</p>
                        </div>
                      </td>
                      <td className="py-3 px-4">
                        <Badge className={getStatusColor(offer.status)}>{offer.status}</Badge>
                      </td>
                      <td className="py-3 px-4 text-center">{offer.products}</td>
                      <td className="py-3 px-4 text-center">{offer.sales}</td>
                      <td className="py-3 px-4">
                        <span className="font-medium">{formatPrice(offer.revenue)}</span>
                      </td>
                      <td className="py-3 px-4">
                        <div className="flex gap-2">
                          <Link href={`/admin/offers/${offer.id}`}>
                            <Button variant="ghost" size="sm">
                              <Eye className="h-4 w-4" />
                            </Button>
                          </Link>
                          <Link href={`/admin/offers/${offer.id}/edit`}>
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

            {filteredOffers.length === 0 && (
              <div className="text-center py-8">
                <p className="text-gray-500 mb-4">No se encontraron ofertas con los filtros aplicados</p>
                <Button
                  variant="outline"
                  onClick={() => {
                    setSearchTerm("")
                    setStatusFilter("all")
                  }}
                >
                  Limpiar Filtros
                </Button>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardContent className="p-6 text-center">
              <Percent className="h-12 w-12 text-rose-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Flash Sale</h3>
              <p className="text-gray-600 text-sm mb-4">Crear oferta por tiempo limitado</p>
              <Link href="/admin/offers/new?type=flash">
                <Button className="w-full bg-rose-500 hover:bg-rose-600">Crear Flash Sale</Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardContent className="p-6 text-center">
              <Package className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Descuento por Categoría</h3>
              <p className="text-gray-600 text-sm mb-4">Aplicar descuento a una categoría</p>
              <Link href="/admin/offers/new?type=category">
                <Button className="w-full bg-blue-500 hover:bg-blue-600">Crear Descuento</Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardContent className="p-6 text-center">
              <Calendar className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Evento Especial</h3>
              <p className="text-gray-600 text-sm mb-4">Programar oferta para fecha especial</p>
              <Link href="/admin/offers/new?type=event">
                <Button className="w-full bg-green-500 hover:bg-green-600">Programar Evento</Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
