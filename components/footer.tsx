import Link from "next/link"
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white overflow-hidden">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-slate-900 font-bold text-lg">B</span>
              </div>
              <div className="min-w-0">
                <h3 className="text-xl font-semibold">BellezaStore</h3>
                <p className="text-sm text-slate-400">Productos Premium de Belleza</p>
              </div>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed">
              Tu destino confiable para productos de belleza premium en Colombia. Calidad, autenticidad y asesoría
              experta en cada compra.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Enlaces Rápidos</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-slate-300 hover:text-white transition-colors">
                  Sobre Nosotros
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-slate-300 hover:text-white transition-colors">
                  Productos
                </Link>
              </li>
              <li>
                <Link href="/offers" className="text-slate-300 hover:text-white transition-colors">
                  Ofertas Especiales
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-slate-300 hover:text-white transition-colors">
                  Blog de Belleza
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-300 hover:text-white transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Atención al Cliente</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/help" className="text-slate-300 hover:text-white transition-colors">
                  Centro de Ayuda
                </Link>
              </li>
              <li>
                <Link href="/shipping" className="text-slate-300 hover:text-white transition-colors">
                  Envíos y Devoluciones
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-slate-300 hover:text-white transition-colors">
                  Preguntas Frecuentes
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-slate-300 hover:text-white transition-colors">
                  Términos y Condiciones
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-slate-300 hover:text-white transition-colors">
                  Política de Privacidad
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contacto</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-slate-400 flex-shrink-0" />
                <span className="text-slate-300">+57 (1) 234-5678</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-slate-400 flex-shrink-0" />
                <span className="text-slate-300 break-all">hola@bellezastore.co</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-slate-400 flex-shrink-0" />
                <span className="text-slate-300">Bogotá, Colombia</span>
              </div>
            </div>

            <div className="pt-4">
              <h5 className="font-medium mb-2">Horarios de Atención</h5>
              <p className="text-sm text-slate-300">
                Lun - Vie: 8:00 AM - 8:00 PM
                <br />
                Sáb - Dom: 9:00 AM - 6:00 PM
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-slate-400 text-center md:text-left">
              © 2024 BellezaStore. Todos los derechos reservados.
            </p>
            <div className="flex items-center space-x-6">
              <img
                src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=50&h=30&fit=crop"
                alt="Visa"
                className="h-6 opacity-70 max-w-full"
              />
              <img
                src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=50&h=30&fit=crop"
                alt="Mastercard"
                className="h-6 opacity-70 max-w-full"
              />
              <img
                src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=50&h=30&fit=crop"
                alt="PSE"
                className="h-6 opacity-70 max-w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
