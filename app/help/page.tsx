"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Search,
  Package,
  CreditCard,
  RotateCcw,
  User,
  Shield,
  ChevronDown,
  ChevronRight,
  MessageCircle,
  Phone,
  Mail,
  HelpCircle,
} from "lucide-react"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const categories = [
  {
    icon: Package,
    title: "Pedidos y Envíos",
    description: "Todo sobre tus compras y entregas",
    count: 12,
    color: "bg-blue-100 text-blue-800",
  },
  {
    icon: CreditCard,
    title: "Pagos y Facturación",
    description: "Métodos de pago y facturas",
    count: 8,
    color: "bg-green-100 text-green-800",
  },
  {
    icon: RotateCcw,
    title: "Devoluciones",
    description: "Política de devoluciones y cambios",
    count: 6,
    color: "bg-orange-100 text-orange-800",
  },
  {
    icon: User,
    title: "Mi Cuenta",
    description: "Gestión de perfil y configuración",
    count: 10,
    color: "bg-purple-100 text-purple-800",
  },
  {
    icon: Shield,
    title: "Seguridad",
    description: "Privacidad y protección de datos",
    count: 5,
    color: "bg-red-100 text-red-800",
  },
  {
    icon: HelpCircle,
    title: "General",
    description: "Preguntas generales sobre BeautyStore",
    count: 15,
    color: "bg-gray-100 text-gray-800",
  },
]

const quickActions = [
  {
    icon: Package,
    title: "Rastrear mi pedido",
    description: "Consulta el estado de tu envío",
    link: "/orders",
  },
  {
    icon: MessageCircle,
    title: "Chat en vivo",
    description: "Habla con un agente ahora",
    link: "/chat",
  },
  {
    icon: RotateCcw,
    title: "Solicitar devolución",
    description: "Inicia el proceso de devolución",
    link: "/returns",
  },
  {
    icon: CreditCard,
    title: "Problemas de pago",
    description: "Resuelve issues con tu pago",
    link: "/payment-help",
  },
]

const faqs = [
  {
    id: 1,
    category: "Pedidos y Envíos",
    question: "¿Cuánto tiempo tarda en llegar mi pedido?",
    answer:
      "Los tiempos de entrega varían según tu ubicación: Bogotá y área metropolitana: 1-2 días hábiles. Ciudades principales: 2-4 días hábiles. Otras ciudades: 3-7 días hábiles. Recibirás un email con el número de seguimiento una vez que tu pedido sea despachado.",
  },
  {
    id: 2,
    category: "Pedidos y Envíos",
    question: "¿Cómo puedo rastrear mi pedido?",
    answer:
      "Puedes rastrear tu pedido de varias formas: 1) Ingresa a tu cuenta y ve a 'Mis Pedidos', 2) Usa el número de seguimiento que enviamos por email, 3) Contacta nuestro chat en vivo para asistencia personalizada.",
  },
  {
    id: 3,
    category: "Pagos y Facturación",
    question: "¿Qué métodos de pago aceptan?",
    answer:
      "Aceptamos múltiples métodos de pago: Tarjetas de crédito y débito (Visa, Mastercard, American Express), PSE (Pago Seguro en Línea), PayPal, y transferencias bancarias. Todos los pagos son procesados de forma segura.",
  },
  {
    id: 4,
    category: "Devoluciones",
    question: "¿Cuál es la política de devoluciones?",
    answer:
      "Aceptamos devoluciones dentro de los 30 días posteriores a la compra. Los productos deben estar: Sin usar, en su empaque original, con todos los accesorios incluidos. Los costos de envío de devolución corren por cuenta del cliente, excepto en casos de productos defectuosos.",
  },
  {
    id: 5,
    category: "Mi Cuenta",
    question: "¿Cómo cambio mi contraseña?",
    answer:
      "Para cambiar tu contraseña: 1) Inicia sesión en tu cuenta, 2) Ve a 'Mi Perfil' > 'Configuración', 3) Selecciona 'Cambiar Contraseña', 4) Ingresa tu contraseña actual y la nueva, 5) Confirma los cambios. También puedes usar 'Olvidé mi contraseña' en la página de login.",
  },
  {
    id: 6,
    category: "General",
    question: "¿Los productos son originales?",
    answer:
      "Sí, garantizamos que todos nuestros productos son 100% originales. Trabajamos directamente con marcas autorizadas y distribuidores oficiales. Cada producto incluye certificado de autenticidad y está respaldado por nuestra garantía de originalidad.",
  },
  {
    id: 7,
    category: "Seguridad",
    question: "¿Es seguro comprar en BeautyStore?",
    answer:
      "Absolutamente. Utilizamos encriptación SSL de 256 bits para proteger tus datos, cumplimos con estándares PCI DSS para pagos seguros, y nunca almacenamos información sensible de tarjetas. Tu privacidad y seguridad son nuestra prioridad.",
  },
  {
    id: 8,
    category: "Pedidos y Envíos",
    question: "¿Puedo cambiar mi dirección de envío?",
    answer:
      "Puedes cambiar la dirección de envío solo si tu pedido aún no ha sido despachado. Contacta inmediatamente nuestro servicio al cliente con tu número de pedido. Una vez despachado, no es posible cambiar la dirección.",
  },
]

export default function HelpPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null)

  const filteredFaqs = faqs.filter((faq) => {
    const matchesSearch =
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory === "all" || faq.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-rose-50 to-pink-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="bg-rose-100 text-rose-800 mb-4 px-4 py-2">Centro de Ayuda</Badge>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">¿En qué podemos ayudarte?</h1>
            <p className="text-xl text-gray-600 mb-8">
              Encuentra respuestas rápidas a tus preguntas o contacta nuestro equipo de soporte
            </p>

            {/* Search Bar */}
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Busca tu pregunta aquí..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 text-lg border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-rose-500 shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Acciones Rápidas</h2>
            <p className="text-gray-600">Resuelve tu consulta de forma inmediata</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickActions.map((action, index) => (
              <Link key={index} href={action.link}>
                <Card className="border-0 shadow-lg hover:shadow-xl transition-all group cursor-pointer h-full">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                      <action.icon className="h-8 w-8 text-rose-600" />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">{action.title}</h3>
                    <p className="text-sm text-gray-600">{action.description}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Explora por Categoría</h2>
            <p className="text-gray-600">Encuentra información organizada por temas</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category, index) => (
              <Card
                key={index}
                className={`border-0 shadow-lg hover:shadow-xl transition-all group cursor-pointer ${
                  selectedCategory === category.title ? "ring-2 ring-rose-500" : ""
                }`}
                onClick={() => setSelectedCategory(category.title)}
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center group-hover:bg-rose-100 transition-colors">
                      <category.icon className="h-6 w-6 text-gray-600 group-hover:text-rose-600" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-semibold text-gray-900">{category.title}</h3>
                        <Badge className={category.color}>{category.count}</Badge>
                      </div>
                      <p className="text-sm text-gray-600">{category.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Preguntas Frecuentes</h2>
              <p className="text-gray-600">
                {selectedCategory === "all" ? "Todas las preguntas" : `Preguntas sobre ${selectedCategory}`} (
                {filteredFaqs.length} resultados)
              </p>
            </div>

            {/* Category Filter */}
            <div className="mb-8">
              <div className="flex flex-wrap gap-2 justify-center">
                <Button
                  variant={selectedCategory === "all" ? "default" : "outline"}
                  onClick={() => setSelectedCategory("all")}
                  className={selectedCategory === "all" ? "bg-rose-600 hover:bg-rose-700" : ""}
                >
                  Todas
                </Button>
                {categories.map((category) => (
                  <Button
                    key={category.title}
                    variant={selectedCategory === category.title ? "default" : "outline"}
                    onClick={() => setSelectedCategory(category.title)}
                    className={selectedCategory === category.title ? "bg-rose-600 hover:bg-rose-700" : ""}
                  >
                    {category.title}
                  </Button>
                ))}
              </div>
            </div>

            {/* FAQ List */}
            <div className="space-y-4">
              {filteredFaqs.map((faq) => (
                <Card key={faq.id} className="border-0 shadow-md">
                  <CardContent className="p-0">
                    <button
                      className="w-full p-6 text-left hover:bg-gray-50 transition-colors"
                      onClick={() => setExpandedFaq(expandedFaq === faq.id ? null : faq.id)}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <Badge className="text-xs">{faq.category}</Badge>
                          </div>
                          <h3 className="font-semibold text-gray-900 text-left">{faq.question}</h3>
                        </div>
                        {expandedFaq === faq.id ? (
                          <ChevronDown className="h-5 w-5 text-gray-400" />
                        ) : (
                          <ChevronRight className="h-5 w-5 text-gray-400" />
                        )}
                      </div>
                    </button>

                    {expandedFaq === faq.id && (
                      <div className="px-6 pb-6">
                        <div className="border-t pt-4">
                          <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredFaqs.length === 0 && (
              <div className="text-center py-12">
                <HelpCircle className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">No encontramos resultados</h3>
                <p className="text-gray-600 mb-6">
                  Intenta con otros términos de búsqueda o explora nuestras categorías
                </p>
                <Button
                  onClick={() => {
                    setSearchQuery("")
                    setSelectedCategory("all")
                  }}
                  className="bg-rose-600 hover:bg-rose-700"
                >
                  Ver Todas las Preguntas
                </Button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Contact Support */}
      <section className="py-16 bg-gradient-to-r from-rose-600 to-pink-600">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-3xl font-bold mb-4">¿No encontraste lo que buscabas?</h2>
            <p className="text-xl mb-8 opacity-90">
              Nuestro equipo de soporte está disponible 24/7 para ayudarte con cualquier consulta
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              <Link href="/chat">
                <Card className="bg-white/10 border-0 hover:bg-white/20 transition-colors cursor-pointer">
                  <CardContent className="p-6 text-center">
                    <MessageCircle className="h-8 w-8 mx-auto mb-3" />
                    <h3 className="font-semibold mb-2">Chat en Vivo</h3>
                    <p className="text-sm opacity-90">Respuesta inmediata</p>
                  </CardContent>
                </Card>
              </Link>

              <Link href="/contact">
                <Card className="bg-white/10 border-0 hover:bg-white/20 transition-colors cursor-pointer">
                  <CardContent className="p-6 text-center">
                    <Mail className="h-8 w-8 mx-auto mb-3" />
                    <h3 className="font-semibold mb-2">Email</h3>
                    <p className="text-sm opacity-90">Respuesta en 24h</p>
                  </CardContent>
                </Card>
              </Link>

              <Card className="bg-white/10 border-0 hover:bg-white/20 transition-colors cursor-pointer">
                <CardContent className="p-6 text-center">
                  <Phone className="h-8 w-8 mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Teléfono</h3>
                  <p className="text-sm opacity-90">+57 (1) 234-5678</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
