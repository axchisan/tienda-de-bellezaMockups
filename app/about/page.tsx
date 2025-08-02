"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Award, Globe, Heart, CheckCircle, Star, ArrowRight } from "lucide-react"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const stats = [
  { label: "Clientes Satisfechos", value: "50,000+", icon: Users },
  { label: "Productos Disponibles", value: "1,000+", icon: Award },
  { label: "Ciudades Atendidas", value: "25+", icon: Globe },
  { label: "Años de Experiencia", value: "4+", icon: Heart },
]

const values = [
  {
    icon: Heart,
    title: "Pasión por la Belleza",
    description:
      "Creemos que la belleza es una forma de expresión personal y trabajamos para que cada persona encuentre su estilo único.",
  },
  {
    icon: CheckCircle,
    title: "Calidad Garantizada",
    description:
      "Solo trabajamos con marcas reconocidas y productos originales, garantizando la mejor calidad para nuestros clientes.",
  },
  {
    icon: Users,
    title: "Comunidad Inclusiva",
    description: "Celebramos la diversidad y creamos un espacio donde todos se sientan bienvenidos y representados.",
  },
  {
    icon: Award,
    title: "Excelencia en Servicio",
    description: "Nos esforzamos por brindar una experiencia excepcional en cada interacción con nuestros clientes.",
  },
]

const timeline = [
  {
    year: "2020",
    title: "Fundación",
    description:
      "Nace BeautyStore con la visión de democratizar el acceso a productos de belleza de calidad en Colombia.",
  },
  {
    year: "2021",
    title: "Expansión Nacional",
    description: "Llegamos a las principales ciudades de Colombia, estableciendo una red de distribución confiable.",
  },
  {
    year: "2022",
    title: "Marketplace",
    description:
      "Lanzamos nuestra plataforma de marketplace, permitiendo a vendedores independientes unirse a nuestra comunidad.",
  },
  {
    year: "2023",
    title: "Innovación Digital",
    description:
      "Implementamos tecnologías avanzadas como IA para recomendaciones personalizadas y realidad aumentada.",
  },
  {
    year: "2024",
    title: "Sostenibilidad",
    description: "Lanzamos nuestra línea de productos eco-friendly y programas de reciclaje para empaques.",
  },
]

const team = [
  {
    name: "María González",
    role: "CEO & Fundadora",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop",
    description: "Experta en belleza con más de 15 años de experiencia en la industria cosmética.",
  },
  {
    name: "Carlos Rodríguez",
    role: "CTO",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop",
    description: "Ingeniero de sistemas especializado en e-commerce y tecnologías emergentes.",
  },
  {
    name: "Ana Martínez",
    role: "Directora de Marketing",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop",
    description: "Especialista en marketing digital y estrategias de crecimiento para startups.",
  },
  {
    name: "Luis Pérez",
    role: "Director de Operaciones",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop",
    description: "Experto en logística y cadena de suministro con enfoque en experiencia del cliente.",
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-rose-50 to-pink-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="bg-rose-100 text-rose-800 mb-6 px-4 py-2">Sobre Nosotros</Badge>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Transformando la Belleza
              <br />
              <span className="text-rose-600">en Colombia</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Desde 2020, hemos sido pioneros en democratizar el acceso a productos de belleza de calidad, conectando a
              miles de personas con las mejores marcas y creando una comunidad inclusiva donde la belleza no tiene
              límites.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/products">
                <Button size="lg" className="bg-rose-600 hover:bg-rose-700 text-white px-8">
                  Explorar Productos
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-rose-300 text-rose-700 hover:bg-rose-50 px-8 bg-transparent"
                >
                  Contáctanos
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-rose-100 rounded-full mb-4">
                  <stat.icon className="h-8 w-8 text-rose-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Nuestra Misión</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Democratizar el acceso a productos de belleza de calidad en Colombia, creando una plataforma inclusiva
                donde cada persona pueda encontrar los productos perfectos para expresar su individualidad y sentirse
                segura de sí misma.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Trabajamos incansablemente para conectar a nuestros clientes con las mejores marcas, ofreciendo una
                experiencia de compra excepcional respaldada por la confianza y la autenticidad que nos caracteriza.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=600&h=400&fit=crop"
                alt="Nuestra Misión"
                className="rounded-2xl shadow-xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center">
                    <Heart className="h-6 w-6 text-rose-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">4.9/5</div>
                    <div className="text-sm text-gray-600">Satisfacción del Cliente</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mt-20">
            <div className="lg:order-2">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Nuestra Visión</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Ser la plataforma líder de belleza en Latinoamérica, reconocida por nuestra innovación, inclusividad y
                compromiso con la excelencia. Aspiramos a crear un ecosistema donde la belleza trascienda las barreras
                tradicionales.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Visualizamos un futuro donde cada persona tenga acceso a productos de belleza auténticos, asesoría
                experta y una comunidad que celebre la diversidad en todas sus formas.
              </p>
            </div>
            <div className="lg:order-1 relative">
              <img
                src="https://images.unsplash.com/photo-1556228720-195a672e8a03?w=600&h=400&fit=crop"
                alt="Nuestra Visión"
                className="rounded-2xl shadow-xl"
              />
              <div className="absolute -top-6 -right-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center">
                    <Globe className="h-6 w-6 text-rose-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">25+</div>
                    <div className="text-sm text-gray-600">Ciudades</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Nuestros Valores</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Los principios que guían cada decisión y acción en BeautyStore
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <value.icon className="h-6 w-6 text-rose-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{value.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Nuestra Historia</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Un recorrido por los hitos más importantes de BeautyStore
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-rose-200"></div>

              {timeline.map((item, index) => (
                <div key={index} className="relative flex items-start gap-8 pb-12">
                  <div className="w-16 h-16 bg-rose-600 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0 relative z-10">
                    {item.year.slice(-2)}
                  </div>
                  <div className="flex-1 pt-2">
                    <div className="bg-white p-6 rounded-xl shadow-lg">
                      <div className="flex items-center gap-3 mb-3">
                        <Badge className="bg-rose-100 text-rose-800">{item.year}</Badge>
                        <h3 className="text-xl font-semibold text-gray-900">{item.title}</h3>
                      </div>
                      <p className="text-gray-600 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Nuestro Equipo</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Las personas apasionadas que hacen posible la magia de BeautyStore
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all group">
                <CardContent className="p-6 text-center">
                  <div className="relative mb-6">
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="w-24 h-24 rounded-full mx-auto object-cover group-hover:scale-105 transition-transform"
                    />
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-rose-600 rounded-full flex items-center justify-center">
                      <Star className="h-4 w-4 text-white" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-rose-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-rose-600 to-pink-600">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto text-white">
            <h2 className="text-4xl font-bold mb-6">¿Listo para Unirte a Nuestra Comunidad?</h2>
            <p className="text-xl mb-8 opacity-90">
              Descubre miles de productos de belleza auténticos y únete a una comunidad que celebra la diversidad y la
              expresión personal.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/register">
                <Button size="lg" className="bg-white text-rose-600 hover:bg-gray-100 px-8">
                  Crear Cuenta Gratis
                </Button>
              </Link>
              <Link href="/products">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-rose-600 px-8 bg-transparent"
                >
                  Explorar Productos
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
