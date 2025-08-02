"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { User, Mail, Phone, MapPin, Package, Heart, Settings, Edit, Camera } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const userInfo = {
  name: "Sarah Johnson",
  email: "sarah.johnson@email.com",
  phone: "+1 (555) 123-4567",
  avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
  memberSince: "January 2023",
  totalOrders: 12,
  totalSpent: 1234.56,
  loyaltyPoints: 2450,
}

const recentOrders = [
  {
    id: "BZ-2024-001",
    date: "2024-01-15",
    total: 189.99,
    status: "Delivered",
    items: 3,
  },
  {
    id: "BZ-2024-002",
    date: "2024-01-10",
    total: 65.5,
    status: "Shipped",
    items: 1,
  },
  {
    id: "BZ-2024-003",
    date: "2024-01-05",
    total: 234.75,
    status: "Processing",
    items: 4,
  },
]

const addresses = [
  {
    id: 1,
    type: "Home",
    name: "Sarah Johnson",
    address: "123 Main Street, Apt 4B",
    city: "New York, NY 10001",
    isDefault: true,
  },
  {
    id: 2,
    type: "Work",
    name: "Sarah Johnson",
    address: "456 Business Ave, Suite 200",
    city: "New York, NY 10002",
    isDefault: false,
  },
]

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState("overview")

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "delivered":
        return "bg-green-100 text-green-800"
      case "shipped":
        return "bg-blue-100 text-blue-800"
      case "processing":
        return "bg-yellow-100 text-yellow-800"
      default:
        return "bg-slate-100 text-slate-800"
    }
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <Header />

      <div className="container mx-auto px-4 py-8">
        {/* Profile Header */}
        <Card className="mb-8 border-0">
          <CardContent className="p-8">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="relative">
                <img
                  src={userInfo.avatar || "/placeholder.svg"}
                  alt={userInfo.name}
                  className="w-24 h-24 rounded-full object-cover"
                />
                <Button
                  size="sm"
                  className="absolute -bottom-2 -right-2 bg-slate-900 hover:bg-slate-800 rounded-full p-2"
                >
                  <Camera className="h-4 w-4" />
                </Button>
              </div>

              <div className="flex-1 text-center md:text-left">
                <h1 className="text-3xl font-light text-slate-900 mb-2">{userInfo.name}</h1>
                <p className="text-slate-600 mb-4">Member since {userInfo.memberSince}</p>

                <div className="grid grid-cols-3 gap-6 max-w-md">
                  <div className="text-center">
                    <div className="text-2xl font-semibold text-slate-900">{userInfo.totalOrders}</div>
                    <div className="text-sm text-slate-500">Orders</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-semibold text-slate-900">${userInfo.totalSpent}</div>
                    <div className="text-sm text-slate-500">Total Spent</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-semibold text-slate-900">{userInfo.loyaltyPoints}</div>
                    <div className="text-sm text-slate-500">Points</div>
                  </div>
                </div>
              </div>

              <Button className="bg-slate-900 hover:bg-slate-800">
                <Edit className="mr-2 h-4 w-4" />
                Edit Profile
              </Button>
            </div>
          </CardContent>
        </Card>

        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="orders">Orders</TabsTrigger>
            <TabsTrigger value="addresses">Addresses</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Personal Information */}
              <Card className="border-0">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <User className="h-5 w-5" />
                    Personal Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Mail className="h-4 w-4 text-slate-500" />
                    <span className="text-slate-700">{userInfo.email}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="h-4 w-4 text-slate-500" />
                    <span className="text-slate-700">{userInfo.phone}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="h-4 w-4 text-slate-500" />
                    <span className="text-slate-700">New York, NY</span>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <Card className="border-0">
                <CardHeader>
                  <CardTitle>Quick Actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button
                    variant="outline"
                    className="w-full justify-start border-slate-200 hover:bg-slate-50 bg-transparent"
                  >
                    <Package className="mr-2 h-4 w-4" />
                    Track My Orders
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full justify-start border-slate-200 hover:bg-slate-50 bg-transparent"
                  >
                    <Heart className="mr-2 h-4 w-4" />
                    View Wishlist
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full justify-start border-slate-200 hover:bg-slate-50 bg-transparent"
                  >
                    <Settings className="mr-2 h-4 w-4" />
                    Account Settings
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Recent Orders */}
            <Card className="border-0">
              <CardHeader>
                <CardTitle>Recent Orders</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentOrders.map((order) => (
                    <div key={order.id} className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
                      <div>
                        <p className="font-semibold text-slate-900">{order.id}</p>
                        <p className="text-sm text-slate-600">
                          {order.date} • {order.items} items
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold text-slate-900">${order.total}</p>
                        <Badge className={getStatusColor(order.status)}>{order.status}</Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="orders" className="space-y-6">
            <Card className="border-0">
              <CardHeader>
                <CardTitle>Order History</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-slate-200">
                        <th className="text-left py-3 px-4">Order ID</th>
                        <th className="text-left py-3 px-4">Date</th>
                        <th className="text-left py-3 px-4">Items</th>
                        <th className="text-left py-3 px-4">Total</th>
                        <th className="text-left py-3 px-4">Status</th>
                        <th className="text-left py-3 px-4">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {recentOrders.map((order) => (
                        <tr key={order.id} className="border-b border-slate-100 hover:bg-slate-50">
                          <td className="py-3 px-4 font-medium">{order.id}</td>
                          <td className="py-3 px-4">{order.date}</td>
                          <td className="py-3 px-4">{order.items}</td>
                          <td className="py-3 px-4">${order.total}</td>
                          <td className="py-3 px-4">
                            <Badge className={getStatusColor(order.status)}>{order.status}</Badge>
                          </td>
                          <td className="py-3 px-4">
                            <Button
                              variant="outline"
                              size="sm"
                              className="border-slate-200 hover:bg-slate-50 bg-transparent"
                            >
                              View Details
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

          <TabsContent value="addresses" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-light text-slate-900">Saved Addresses</h2>
              <Button className="bg-slate-900 hover:bg-slate-800">Add New Address</Button>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {addresses.map((address) => (
                <Card key={address.id} className="border-0">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex items-center gap-2">
                        <h3 className="font-semibold text-slate-900">{address.type}</h3>
                        {address.isDefault && <Badge className="bg-slate-100 text-slate-700 text-xs">Default</Badge>}
                      </div>
                      <Button variant="ghost" size="sm">
                        <Edit className="h-4 w-4" />
                      </Button>
                    </div>
                    <div className="space-y-2 text-sm text-slate-600">
                      <p className="font-medium text-slate-900">{address.name}</p>
                      <p>{address.address}</p>
                      <p>{address.city}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="settings" className="space-y-6">
            <Card className="border-0">
              <CardHeader>
                <CardTitle>Account Settings</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Full Name</label>
                    <input
                      type="text"
                      defaultValue={userInfo.name}
                      className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Email</label>
                    <input
                      type="email"
                      defaultValue={userInfo.email}
                      className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Phone</label>
                    <input
                      type="tel"
                      defaultValue={userInfo.phone}
                      className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900"
                    />
                  </div>
                </div>

                <div className="pt-6 border-t border-slate-200">
                  <h3 className="text-lg font-semibold text-slate-900 mb-4">Preferences</h3>
                  <div className="space-y-4">
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        className="rounded border-slate-300 text-slate-900 focus:ring-slate-900"
                        defaultChecked
                      />
                      <span className="ml-2 text-sm text-slate-700">Email notifications for orders</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        className="rounded border-slate-300 text-slate-900 focus:ring-slate-900"
                        defaultChecked
                      />
                      <span className="ml-2 text-sm text-slate-700">Marketing emails and promotions</span>
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="rounded border-slate-300 text-slate-900 focus:ring-slate-900" />
                      <span className="ml-2 text-sm text-slate-700">SMS notifications</span>
                    </label>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Button className="bg-slate-900 hover:bg-slate-800">Save Changes</Button>
                  <Button variant="outline" className="border-slate-200 hover:bg-slate-50 bg-transparent">
                    Cancel
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      <Footer />
    </div>
  )
}
