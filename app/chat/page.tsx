"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MessageCircle, Send, User, Bot, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const initialMessages = [
  {
    id: 1,
    type: "bot",
    message: "¡Hola! Soy tu asistente de belleza. ¿En qué puedo ayudarte hoy?",
    time: "10:00 AM",
  },
  {
    id: 2,
    type: "bot",
    message:
      "Puedo ayudarte con recomendaciones de productos, rutinas de cuidado, información sobre envíos y mucho más.",
    time: "10:00 AM",
  },
]

const quickQuestions = [
  "¿Cuál es mi rutina ideal de cuidado facial?",
  "¿Tienen productos para piel sensible?",
  "¿Cuánto cuesta el envío a mi ciudad?",
  "¿Cómo puedo rastrear mi pedido?",
  "¿Ofrecen asesoría personalizada?",
  "¿Cuáles son sus productos más vendidos?",
]

export default function ChatPage() {
  const [messages, setMessages] = useState(initialMessages)
  const [newMessage, setNewMessage] = useState("")

  const sendMessage = () => {
    if (!newMessage.trim()) return

    const userMessage = {
      id: messages.length + 1,
      type: "user",
      message: newMessage,
      time: new Date().toLocaleTimeString("es-CO", { hour: "2-digit", minute: "2-digit" }),
    }

    setMessages([...messages, userMessage])
    setNewMessage("")

    // Simulate bot response
    setTimeout(() => {
      const botResponse = {
        id: messages.length + 2,
        type: "bot",
        message:
          "Gracias por tu mensaje. Un asesor especializado te responderá en breve. Mientras tanto, puedes explorar nuestros productos más populares.",
        time: new Date().toLocaleTimeString("es-CO", { hour: "2-digit", minute: "2-digit" }),
      }
      setMessages((prev) => [...prev, botResponse])
    }, 1000)
  }

  const handleQuickQuestion = (question: string) => {
    setNewMessage(question)
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
          <h1 className="text-3xl font-light text-slate-900">Chat en Vivo</h1>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Chat Window */}
          <div className="lg:col-span-3">
            <Card className="h-[600px] flex flex-col border-0">
              <CardHeader className="bg-slate-900 text-white rounded-t-lg">
                <CardTitle className="flex items-center gap-2">
                  <MessageCircle className="h-5 w-5" />
                  Asesor de Belleza
                  <span className="ml-auto text-sm bg-green-500 px-2 py-1 rounded-full">En línea</span>
                </CardTitle>
              </CardHeader>

              <CardContent className="flex-1 flex flex-col p-0">
                {/* Messages */}
                <div className="flex-1 overflow-y-auto p-6 space-y-4">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${message.type === "user" ? "justify-end" : "justify-start"}`}
                    >
                      <div
                        className={`max-w-xs lg:max-w-md px-4 py-3 rounded-lg ${
                          message.type === "user" ? "bg-slate-900 text-white" : "bg-slate-100 text-slate-900"
                        }`}
                      >
                        <div className="flex items-center gap-2 mb-1">
                          {message.type === "bot" ? <Bot className="h-4 w-4" /> : <User className="h-4 w-4" />}
                          <span className="text-xs opacity-75">{message.time}</span>
                        </div>
                        <p className="text-sm">{message.message}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Message Input */}
                <div className="border-t border-slate-200 p-4">
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={newMessage}
                      onChange={(e) => setNewMessage(e.target.value)}
                      onKeyPress={(e) => e.key === "Enter" && sendMessage()}
                      placeholder="Escribe tu mensaje..."
                      className="flex-1 px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900"
                    />
                    <Button onClick={sendMessage} className="bg-slate-900 hover:bg-slate-800">
                      <Send className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Quick Questions */}
            <Card className="border-0">
              <CardHeader>
                <CardTitle className="text-lg">Preguntas Frecuentes</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {quickQuestions.map((question, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    size="sm"
                    className="w-full text-left justify-start h-auto p-3 border-slate-200 hover:bg-slate-50 bg-transparent"
                    onClick={() => handleQuickQuestion(question)}
                  >
                    {question}
                  </Button>
                ))}
              </CardContent>
            </Card>

            {/* Contact Info */}
            <Card className="border-0">
              <CardHeader>
                <CardTitle className="text-lg">Otros Canales</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-sm">
                  <p className="font-medium text-slate-900 mb-1">WhatsApp</p>
                  <p className="text-slate-600">+57 300 123 4567</p>
                </div>
                <div className="text-sm">
                  <p className="font-medium text-slate-900 mb-1">Email</p>
                  <p className="text-slate-600">hola@bellezastore.co</p>
                </div>
                <div className="text-sm">
                  <p className="font-medium text-slate-900 mb-1">Horarios</p>
                  <p className="text-slate-600">Lun - Vie: 8:00 AM - 8:00 PM</p>
                  <p className="text-slate-600">Sáb - Dom: 9:00 AM - 6:00 PM</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
