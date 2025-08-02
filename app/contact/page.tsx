"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageCircle,
  Package,
  HelpCircle,
  Send,
  CheckCircle,
  ArrowRight,
} from "lucide-react"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const contactMethods = [
  {
    icon: MessageCircle,
    title: "Chat en Vivo",
    description: "Respuesta inmediata de nuestros expertos",
    action: "Iniciar Chat",
    available: "24/7",
    color: "bg-green-100 text-green-800",
  },
  {
    icon: Phone,
    title: "Teléfono",
    description: "+57 (1) 234-5678",
    action: "Llamar Ahora",
    available: "Lun-Vie 8AM-6PM",
    color: "bg-blue-100 text-blue-800",
  },
  {
    icon: Mail,
    title: "Email",
    description: "hola@beautystore.co",
    action: "Enviar Email",
    available: "Respuesta en 24h",
    color: "bg-purple-100 text-purple-800",
  },
]

const quickActions = [
  {
    icon: Package,
    title: "Rastrear Pedido",
    description: "Consulta el estado de tu pedido",
    link: "/orders",
  },
  {
    icon: HelpCircle,
    title: "Centro de Ayuda",
    description: "Encuentra respuestas rápidas",
    link: "/help",
  },
  {
    icon: MessageCircle,
    title: "Chat de Soporte",
    description: "Habla con un experto",
    link: "/chat",
  },
]

const offices = [
  {
    city: "Bogotá",
    address: "Calle 93 #11-27, Oficina 501",
    phone: "+57 (1) 234-5678",
    hours: "Lun-Vie: 8:00 AM - 6:00 PM",
    isMain: true,
  },
  {
    city: "Medellín",
    address: "Carrera 43A #1-50, Local 201",
    phone: "+57 (4) 234-5678",
    hours: "Lun-Vie: 9:00 AM - 5:00 PM",
    isMain: false,
  },
  {
    city: "Cali",
    address: "Avenida 6N #28-10, Piso 3",
    phone: "+57 (2) 234-5678",
    hours: "Lun-Vie: 9:00 AM - 5:00 PM",
    isMain: false,
  },
]

const faqs = [
  {
    question: "¿Cómo puedo rastrear mi pedido?",
    answer:
      "Puedes rastrear tu pedido ingresando a tu cuenta y visitando la sección 'Mis Pedidos', o usando el número de seguimiento que enviamos por email.",
  },
  {
    question: "¿Cuál es la política de devoluciones?",
    answer:
      "Aceptamos devoluciones dentro de los 30 días posteriores a la compra. Los productos deben estar sin usar y en su empaque original.",
  },
  {
    question: "¿Los productos son originales?",
    answer:
      "Sí, todos nuestros productos son 100% originales. Trabajamos directamente con marcas autorizadas y distribuidores oficiales.",
  },
  {
    question: "¿Hacen envíos a toda Colombia?",
    answer:
      "Sí, realizamos envíos a todas las ciudades principales de Colombia. El tiempo de entrega varía según la ubicación.",
  },
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    category: "general",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate form submission
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-rose-50 to-pink-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="bg-rose-100 text-rose-800 mb-4 px-4 py-2">Contacto</Badge>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">¿Necesitas Ayuda?</h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Estamos aquí para ayudarte. Contáctanos a través de cualquiera de nuestros canales y te responderemos lo
              más pronto posible.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {contactMethods.map((method, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow group cursor-pointer">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <method.icon className="h-8 w-8 text-rose-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{method.title}</h3>
                  <p className="text-gray-600 mb-4">{method.description}</p>
                  <Badge className={method.color}>{method.available}</Badge>
                  <Button className="w-full mt-4 bg-rose-600 hover:bg-rose-700">
                    {method.action}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Quick Actions */}
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Acciones Rápidas</h2>
            <p className="text-gray-600">Resuelve tu consulta de forma inmediata</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {quickActions.map((action, index) => (
              <Link key={index} href={action.link}>
                <Card className="border-0 shadow-md hover:shadow-lg transition-shadow group cursor-pointer">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center group-hover:bg-rose-100 transition-colors">
                        <action.icon className="h-6 w-6 text-gray-600 group-hover:text-rose-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">{action.title}</h3>
                        <p className="text-sm text-gray-600">{action.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl">Envíanos un Mensaje</CardTitle>
                <p className="text-gray-600">Completa el formulario y te responderemos pronto</p>
              </CardHeader>
              <CardContent>
                {isSubmitted ? (
                  <div className="text-center py-8">
                    <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">¡Mensaje Enviado!</h3>
                    <p className="text-gray-600">Te responderemos dentro de las próximas 24 horas.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Nombre *</label>
                        <input
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500"
                          placeholder="Tu nombre completo"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500"
                          placeholder="tu@email.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Categoría</label>
                      <select
                        name="category"
                        value={formData.category}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500"
                      >
                        <option value="general">Consulta General</option>
                        <option value="order">Problema con Pedido</option>
                        <option value="product">Consulta de Producto</option>
                        <option value="return">Devolución</option>
                        <option value="seller">Ser Vendedor</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Asunto *</label>
                      <input
                        type="text"
                        name="subject"
                        required
                        value={formData.subject}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500"
                        placeholder="Describe brevemente tu consulta"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Mensaje *</label>
                      <textarea
                        name="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500"
                        placeholder="Cuéntanos más detalles sobre tu consulta..."
                      />
                    </div>

                    <Button type="submit" className="w-full bg-rose-600 hover:bg-rose-700 py-3">
                      <Send className="mr-2 h-4 w-4" />
                      Enviar Mensaje
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>

            {/* Office Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Nuestras Oficinas</h2>
                <div className="space-y-6">
                  {offices.map((office, index) => (
                    <Card key={index} className={`border-0 shadow-md ${office.isMain ? "ring-2 ring-rose-200" : ""}`}>
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between mb-4">
                          <h3 className="text-xl font-semibold text-gray-900">{office.city}</h3>
                          {office.isMain && <Badge className="bg-rose-100 text-rose-800">Oficina Principal</Badge>}
                        </div>
                        <div className="space-y-3">
                          <div className="flex items-start gap-3">
                            <MapPin className="h-5 w-5 text-gray-400 mt-0.5" />
                            <span className="text-gray-600">{office.address}</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <Phone className="h-5 w-5 text-gray-400" />
                            <span className="text-gray-600">{office.phone}</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <Clock className="h-5 w-5 text-gray-400" />
                            <span className="text-gray-600">{office.hours}</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* FAQ Section */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Preguntas Frecuentes</h2>
                <div className="space-y-4">
                  {faqs.map((faq, index) => (
                    <Card key={index} className="border-0 shadow-md">
                      <CardContent className="p-6">
                        <h3 className="font-semibold text-gray-900 mb-2">{faq.question}</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">{faq.answer}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
                <div className="mt-6">
                  <Link href="/help">
                    <Button
                      variant="outline"
                      className="w-full border-rose-300 text-rose-700 hover:bg-rose-50 bg-transparent"
                    >
                      Ver Todas las Preguntas Frecuentes
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Encuéntranos</h2>
            <p className="text-gray-600">Visítanos en nuestras oficinas principales</p>
          </div>

          <div className="bg-gray-200 rounded-2xl h-96 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600">Mapa interactivo próximamente</p>
              <p className="text-sm text-gray-500 mt-2">Mientras tanto, puedes usar las direcciones listadas arriba</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
