"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Package, Truck, CheckCircle, Clock, ArrowLeft, Eye } from "lucide-react"
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

const orders = [
  {
    id: "BZ-2024-001",
    date: "2024-01-15",
    total: 189900,
    status: "Entregado",
    items: [
      {
        name: "Serum Vitamina C Premium",
        image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=80&h=80&fit=crop",
        quantity: 2,
        price: 89900,
      },
    ],
    tracking: "TRK123456789",
    estimatedDelivery: "2024-01-18",
  },
  {
    id: "BZ-2024-002",
    date: "2024-01-10",
    total: 65500,
    status: "Enviado",
    items: [
      {
        name: "Base Líquida HD",
        image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=80&h=80&fit=crop",
        quantity: 1,
        price: 65500,
      },
    ],
    tracking: "TRK987654321",
    estimatedDelivery: "2024-01-16",
  },
  {
    id: "BZ-2024-003",
    date: "2024-01-05",
    total: 234750,
    status: "Procesando",
    items: [
      {
        name: "Crema Hidratante Anti-Edad",
        image: "https://images.unsplash.com/photo-1570194065650-d99fb4bedf0a?w=80&h=80&fit=crop",
        quantity: 1,
        price: 145000,
      },
      {
        name: "Paleta de Sombras Profesional",
        image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=80&h=80&fit=crop",
        quantity: 1,
        price: 78900,
      },
    ],
    estimatedDelivery: "2024-01-20",
  },
]

export default function OrdersPage() {
  const [selectedOrder, setSelectedOrder] = useState<string | null>(null)

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "entregado":
        return "bg-green-100 text-green-800"
      case "enviado":
        return "bg-blue-100 text-blue-800"
      case "procesando":
        return "bg-yellow-100 text-yellow-800"
      case "cancelado":
        return "bg-red-100 text-red-800"
      default:
        return "bg-slate-100 text-slate-800"
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status.toLowerCase()) {
      case "entregado":
        return <CheckCircle className="h-4 w-4" />
      case "enviado":
        return <Truck className="h-4 w-4" />
      case "procesando":
        return <Clock className="h-4 w-4" />
      default:
        return <Package className="h-4 w-4" />
    }
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <Header />

      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <Link href="/profile">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Volver al Perfil
            </Button>
          </Link>
          <h1 className="text-3xl font-light text-slate-900">Mis Pedidos</h1>
        </div>

        <div className="space-y-6">
          {orders.map((order) => (
            <Card key={order.id} className="border-0 overflow-hidden">
              <CardHeader className="bg-slate-50 border-b border-slate-200">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                  <div>
                    <CardTitle className="text-lg font-semibold text-slate-900">{order.id}</CardTitle>
                    <p className="text-sm text-slate-600">Realizado el {order.date}</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <Badge className={`${getStatusColor(order.status)} flex items-center gap-1`}>
                      {getStatusIcon(order.status)}
                      {order.status}
                    </Badge>
                    <span className="text-lg font-semibold text-slate-900">{formatPrice(order.total)}</span>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="p-6">
                <div className="space-y-4">
                  {/* Order Items */}
                  <div className="space-y-3">
                    {order.items.map((item, index) => (
                      <div key={index} className="flex items-center gap-4">
                        <img
                          src={item.image || "/placeholder.svg"}
                          alt={item.name}
                          className="w-16 h-16 object-cover rounded-lg"
                        />
                        <div className="flex-1">
                          <h4 className="font-medium text-slate-900">{item.name}</h4>
                          <p className="text-sm text-slate-600">Cantidad: {item.quantity}</p>
                        </div>
                        <span className="font-semibold text-slate-900">{formatPrice(item.price)}</span>
                      </div>
                    ))}
                  </div>

                  {/* Order Details */}
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 pt-4 border-t border-slate-200">
                    <div className="space-y-1">
                      {order.tracking && (
                        <p className="text-sm text-slate-600">
                          <span className="font-medium">Seguimiento:</span> {order.tracking}
                        </p>
                      )}
                      <p className="text-sm text-slate-600">
                        <span className="font-medium">Entrega estimada:</span> {order.estimatedDelivery}
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-slate-200 hover:bg-slate-50 bg-transparent"
                        onClick={() => setSelectedOrder(selectedOrder === order.id ? null : order.id)}
                      >
                        <Eye className="h-4 w-4 mr-2" />
                        {selectedOrder === order.id ? "Ocultar Detalles" : "Ver Detalles"}
                      </Button>
                      {order.status.toLowerCase() === "enviado" && (
                        <Button size="sm" className="bg-slate-900 hover:bg-slate-800">
                          Rastrear Paquete
                        </Button>
                      )}
                    </div>
                  </div>

                  {/* Expanded Details */}
                  {selectedOrder === order.id && (
                    <div className="pt-4 border-t border-slate-200 space-y-4">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold text-slate-900 mb-2">Dirección de Envío</h4>
                          <div className="text-sm text-slate-600 space-y-1">
                            <p>María González</p>
                            <p>Calle 123 #45-67, Apto 4B</p>
                            <p>Bogotá, Colombia 110111</p>
                          </div>
                        </div>
                        <div>
                          <h4 className="font-semibold text-slate-900 mb-2">Método de Pago</h4>
                          <div className="text-sm text-slate-600">
                            <p>•••• •••• •••• 1234</p>
                            <p>Visa terminada en 1234</p>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold text-slate-900 mb-2">Resumen del Pedido</h4>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span>Subtotal:</span>
                            <span>{formatPrice(Math.round(order.total * 0.85))}</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Envío:</span>
                            <span>Gratis</span>
                          </div>
                          <div className="flex justify-between">
                            <span>IVA (19%):</span>
                            <span>{formatPrice(Math.round(order.total * 0.15))}</span>
                          </div>
                          <div className="flex justify-between font-semibold border-t border-slate-200 pt-2">
                            <span>Total:</span>
                            <span>{formatPrice(order.total)}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Empty State */}
        {orders.length === 0 && (
          <div className="text-center py-16">
            <Package className="h-24 w-24 text-slate-300 mx-auto mb-6" />
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">No tienes pedidos aún</h2>
            <p className="text-slate-600 mb-8">Cuando realices tu primer pedido, aparecerá aquí.</p>
            <Link href="/products">
              <Button className="bg-slate-900 hover:bg-slate-800">Comenzar a Comprar</Button>
            </Link>
          </div>
        )}
      </div>

      <Footer />
    </div>
  )
}
