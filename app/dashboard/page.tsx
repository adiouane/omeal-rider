'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';
import { useRouter } from 'next/navigation';
import { 
  MapPin, 
  Clock, 
  DollarSign, 
  Navigation,
  CheckCircle,
  XCircle,
  BarChart3,
  History,
  User
} from 'lucide-react';
import { mockOrders, mockDriverData } from '@/lib/mockData';

export default function Dashboard() {
  const [isOnline, setIsOnline] = useState(false);
  const [orders, setOrders] = useState(mockOrders);
  const router = useRouter();

  useEffect(() => {
    const isAuthenticated = localStorage.getItem('driver_authenticated');
    if (!isAuthenticated) {
      router.push('/');
      return;
    }
  }, [router]);

  const handleAcceptOrder = (orderId: string) => {
    localStorage.setItem('active_order', orderId);
    router.push('/delivery');
  };

  const handleDeclineOrder = (orderId: string) => {
    setOrders(orders.filter(order => order.id !== orderId));
  };

  const pendingOrders = orders.filter(order => order.status === 'pending');

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-md mx-auto px-4 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-1xl font-bold text-gray-900">Dashboard</h1>
            <p className="text-sm text-gray-600">Welcome back, {mockDriverData.name}</p>
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={() => router.push('/analytics')}
            className="p-2"
          >
            <BarChart3 className="w-5 h-5" />
          </Button>
        </div>
      </div>

      <div className="max-w-md mx-auto p-4 space-y-6">
        {/* Status Toggle */}
        <Card className="border-2">
          <CardHeader className="pb-4">
            <CardTitle className="text-xl flex items-center gap-3">
              <div className={`w-4 h-4 rounded-full ${isOnline ? 'bg-green-500' : 'bg-gray-400'}`}></div>
              Driver Status
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-lg font-semibold">
                  {isOnline ? 'Online' : 'Offline'}
                </p>
                <p className="text-sm text-gray-600">
                  {isOnline ? 'Ready to receive orders' : 'Not receiving orders'}
                </p>
              </div>
              <Switch
                checked={isOnline}
                onCheckedChange={setIsOnline}
                className="scale-125"
              />
            </div>
          </CardContent>
        </Card>

        {/* Quick Stats */}
        <div className="grid grid-cols-3 gap-3">
          <Card className="text-center">
            <CardContent className="pt-4">
              <DollarSign className="w-8 h-8 mx-auto mb-2 text-green-600" />
              <p className="text-1xl font-bold">${mockDriverData.todayEarnings}</p>
              <p className="text-sm text-gray-600">Today</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-4">
              <Navigation className="w-8 h-8 mx-auto mb-2 text-blue-600" />
              <p className="text-1xl font-bold">{mockDriverData.todayTrips}</p>
              <p className="text-sm text-gray-600">Trips</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-4">
              <Clock className="w-8 h-8 mx-auto mb-2 text-purple-600" />
              <p className="text-1xl font-bold">{mockDriverData.hoursOnline}h</p>
              <p className="text-sm text-gray-600">Online</p>
            </CardContent>
          </Card>
        </div>

        {/* Incoming Orders */}
        {isOnline && pendingOrders.length > 0 && (
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-gray-900">New Orders</h2>
            {pendingOrders.map((order) => (
              <Card key={order.id} className="border-2 border-blue-200 bg-blue-50">
                <CardHeader className="pb-3">
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-lg">Order #{order.id.slice(-6)}</CardTitle>
                      <Badge className="mt-1 bg-green-100 text-green-800">
                        ${order.earnings} guaranteed
                      </Badge>
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {order.estimatedTime} min
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-sm">Pickup</p>
                        <p className="text-sm text-gray-600">{order.pickup}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-sm">Drop-off</p>
                        <p className="text-sm text-gray-600">{order.dropoff}</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Navigation className="w-4 h-4" />
                    <span>{order.distance} miles • {order.estimatedTime} min</span>
                  </div>
                  <div className="flex gap-2">
                    <Button
                      onClick={() => handleAcceptOrder(order.id)}
                      className="flex-1 h-12 bg-green-600 hover:bg-green-700 text-white font-semibold"
                    >
                      <CheckCircle className="w-5 h-5 mr-2" />
                      Accept
                    </Button>
                    <Button
                      onClick={() => handleDeclineOrder(order.id)}
                      variant="outline"
                      className="flex-1 h-12 border-red-300 text-red-600 hover:bg-red-50"
                    >
                      <XCircle className="w-5 h-5 mr-2" />
                      Decline
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* No Orders State */}
        {isOnline && pendingOrders.length === 0 && (
          <Card className="text-center py-8">
            <CardContent>
              <Navigation className="w-16 h-16 mx-auto mb-4 text-gray-400" />
              <CardTitle className="text-xl mb-2">Looking for orders...</CardTitle>
              <CardDescription className="text-base">
                Stay nearby popular areas to get orders faster
              </CardDescription>
            </CardContent>
          </Card>
        )}

        {/* Offline State */}
        {!isOnline && (
          <Card className="text-center py-8 bg-gray-100">
            <CardContent>
              <User className="w-16 h-16 mx-auto mb-4 text-gray-400" />
              <CardTitle className="text-xl mb-2">You're offline</CardTitle>
              <CardDescription className="text-base">
                Turn on your status to start receiving orders
              </CardDescription>
            </CardContent>
          </Card>
        )}

        {/* Bottom Navigation */}
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t">
          <div className="max-w-md mx-auto grid grid-cols-2 gap-1 p-2">
            <Button
              onClick={() => router.push('/history')}
              variant="ghost"
              className="h-16 flex-col gap-1"
            >
              <History className="w-6 h-6" />
              <span className="text-xs">History</span>
            </Button>
            <Button
              onClick={() => router.push('/analytics')}
              variant="ghost"
              className="h-16 flex-col gap-1"
            >
              <BarChart3 className="w-6 h-6" />
              <span className="text-xs">Analytics</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}