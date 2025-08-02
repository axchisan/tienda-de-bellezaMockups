"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calculator, Package, Truck, ArrowLeft, MapPin } from "lucide-react"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const cities = [
  { name: "Bogotá", price: 0, days: "1-2" },
  { name: "Medellín", price: 8000, days: "2-3" },
  { name: "Cali", price: 10000, days: "2-3" },
  { name: "Barranquilla", price: 12000, days: "3-4" },
  { name: "Cartagena", price: 15000, days: "3-4" },
  { name: "Bucaramanga", price: 9000, days: "2-3" },
  { name: "Pereira", price: 8000, days: "2-3" },
  { name: "Manizales", price: 8000, days: "2-3" },
  { name: "Ibagué", price: 7000, days: "2-3" },
  { name: "Pasto", price: 15000, days: "4-5" },
  { name: "Villavicencio", price: 6000, days: "1-2" },
  { name: "Neiva", price: 10000, days: "3-4" },
]

const formatPrice = (price: number) => {
  return new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    minimumFractionDigits: 0,
  }).format(price)
}

export default function ShippingCalculatorPage() {
  const [selectedCity, setSelectedCity] = useState("")
  const [orderValue, setOrderValue] = useState("")
  const [shippingInfo, setShippingInfo] = useState<any>(null)

  const calculateShipping = () => {
    if (!selectedCity || !orderValue) return

    const city = cities.find((c) => c.name === selectedCity)
    const orderAmount = Number.parseInt(orderValue)

    if (city && orderAmount) {
      const isFreeShipping = orderAmount >= 150000
      const shippingCost = isFreeShipping ? 0 : city.price

      setShippingInfo({
        city: city.name,
        cost: shippingCost,
        days: city.days,
        isFree: isFreeShipping,
        orderValue: orderAmount,
        total: orderAmount + shippingCost,
      })
    }
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <Header />

      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <Link href="/">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Volver al Inicio
            </Button>
          </Link>
          <h1 className="text-3xl font-light text-slate-900">Calculadora de Envíos</h1>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Calculator */}
          <Card className="border-0">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calculator className="h-5 w-5" />
                Calcular Costo de Envío
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Ciudad de Destino *</label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-5 w-5" />
                  <select
                    value={selectedCity}
                    onChange={(e) => setSelectedCity(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900"
                  >
                    <option value="">Selecciona tu ciudad</option>
                    {cities.map((city) => (
                      <option key={city.name} value={city.name}>
                        {city.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Valor del Pedido *</label>
                <div className="relative">
                  <Package className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-5 w-5" />
                  <input
                    type="number"
                    value={orderValue}
                    onChange={(e) => setOrderValue(e.target.value)}
                    placeholder="Ej: 100000"
                    className="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900"
                  />
                </div>
                <p className="text-xs text-slate-500 mt-1">Ingresa el valor en pesos colombianos (COP)</p>
              </div>

              <Button
                onClick={calculateShipping}
                className="w-full bg-slate-900 hover:bg-slate-800"
                disabled={!selectedCity || !orderValue}
              >
                <Calculator className="mr-2 h-4 w-4" />
                Calcular Envío
              </Button>

              {/* Results */}
              {shippingInfo && (
                <div className="mt-6 p-6 bg-slate-100 rounded-lg">
                  <h3 className="text-lg font-semibold text-slate-900 mb-4">Resultado del Cálculo</h3>

                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-slate-600">Ciudad:</span>
                      <span className="font-medium text-slate-900">{shippingInfo.city}</span>
                    </div>

                    <div className="flex justify-between">
                      <span className="text-slate-600">Valor del pedido:</span>
                      <span className="font-medium text-slate-900">{formatPrice(shippingInfo.orderValue)}</span>
                    </div>

                    <div className="flex justify-between">
                      <span className="text-slate-600">Costo de envío:</span>
                      <span className={`font-medium ${shippingInfo.isFree ? "text-green-600" : "text-slate-900"}`}>
                        {shippingInfo.isFree ? "GRATIS" : formatPrice(shippingInfo.cost)}
                      </span>
                    </div>

                    <div className="flex justify-between">
                      <span className="text-slate-600">Tiempo de entrega:</span>
                      <span className="font-medium text-slate-900">{shippingInfo.days} días hábiles</span>
                    </div>

                    <div className="border-t border-slate-300 pt-3 mt-3">
                      <div className="flex justify-between text-lg">
                        <span className="font-semibold text-slate-900">Total a pagar:</span>
                        <span className="font-bold text-slate-900">{formatPrice(shippingInfo.total)}</span>
                      </div>
                    </div>

                    {shippingInfo.isFree && (
                      <div className="bg-green-100 text-green-800 p-3 rounded-lg text-sm">
                        🎉 ¡Felicidades! Tu pedido califica para envío gratis
                      </div>
                    )}

                    {!shippingInfo.isFree && shippingInfo.orderValue < 150000 && (
                      <div className="bg-blue-100 text-blue-800 p-3 rounded-lg text-sm">
                        💡 Agrega {formatPrice(150000 - shippingInfo.orderValue)} más para obtener envío gratis
                      </div>
                    )}
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Shipping Info */}
          <div className="space-y-6">
            <Card className="border-0">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Truck className="h-5 w-5" />
                  Información de Envíos
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-800 mb-2">Envío Gratis</h4>
                  <p className="text-green-700 text-sm">
                    En compras mayores a <strong>{formatPrice(150000)}</strong> el envío es completamente gratis a
                    cualquier ciudad de Colombia.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">Tiempos de Entrega</h4>
                  <ul className="text-sm text-slate-600 space-y-1">
                    <li>• Bogotá: 1-2 días hábiles</li>
                    <li>• Ciudades principales: 2-3 días hábiles</li>
                    <li>• Otras ciudades: 3-5 días hábiles</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">Métodos de Envío</h4>
                  <ul className="text-sm text-slate-600 space-y-1">
                    <li>• Servientrega</li>
                    <li>• Coordinadora</li>
                    <li>• Interrapidísimo</li>
                    <li>• Envía</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">Seguimiento</h4>
                  <p className="text-sm text-slate-600">
                    Recibirás un código de seguimiento por email y SMS para rastrear tu pedido en tiempo real.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0">
              <CardHeader>
                <CardTitle>¿Necesitas Ayuda?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Link href="/chat">
                  <Button
                    variant="outline"
                    className="w-full justify-start border-slate-200 hover:bg-slate-50 bg-transparent"
                  >
                    💬 Chat en Vivo
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button
                    variant="outline"
                    className="w-full justify-start border-slate-200 hover:bg-slate-50 bg-transparent"
                  >
                    📞 Contactar Soporte
                  </Button>
                </Link>
                <Link href="/faq">
                  <Button
                    variant="outline"
                    className="w-full justify-start border-slate-200 hover:bg-slate-50 bg-transparent"
                  >
                    ❓ Preguntas Frecuentes
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
