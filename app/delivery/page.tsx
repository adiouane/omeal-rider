'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useRouter } from 'next/navigation';
import { 
  MapPin, 
  Navigation, 
  Phone, 
  CheckCircle, 
  ArrowLeft,
  Store,
  User
} from 'lucide-react';
import { mockOrders } from '@/lib/mockData';

type DeliveryStep = 'pickup' | 'delivery' | 'completed';

export default function DeliveryPage() {
  const [currentStep, setCurrentStep] = useState<DeliveryStep>('pickup');
  const [activeOrder, setActiveOrder] = useState<any>(null);
  const router = useRouter();

  useEffect(() => {
    const orderId = localStorage.getItem('active_order');
    if (!orderId) {
      router.push('/dashboard');
      return;
    }
    
    const order = mockOrders.find(o => o.id === orderId);
    if (order) {
      setActiveOrder(order);
    }
  }, [router]);

  const handleNavigate = () => {
    // In real app, would integrate with maps
    alert(currentStep === 'pickup' 
      ? `Navigating to pickup: ${activeOrder?.pickup}` 
      : `Navigating to customer: ${activeOrder?.dropoff}`
    );
  };

  const handleConfirmPickup = () => {
    setCurrentStep('delivery');
  };

  const handleConfirmDelivery = () => {
    setCurrentStep('completed');
    // Clear active order and redirect after delay
    setTimeout(() => {
      localStorage.removeItem('active_order');
      router.push('/dashboard');
    }, 2000);
  };

  if (!activeOrder) {
    return <div>Loading...</div>;
  }

  if (currentStep === 'completed') {
    return (
      <div className="min-h-screen bg-green-50 flex items-center justify-center p-4">
        <Card className="w-full max-w-md text-center">
          <CardContent className="pt-8 pb-8">
            <CheckCircle className="w-20 h-20 mx-auto mb-4 text-green-500" />
            <h1 className="text-1xl font-bold text-green-800 mb-2">Delivery Complete!</h1>
            <p className="text-green-700 mb-4">You earned ${activeOrder.earnings}</p>
            <p className="text-sm text-green-600">Redirecting to dashboard...</p>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-md mx-auto px-4 py-4 flex items-center gap-4">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => router.push('/dashboard')}
            className="p-2"
          >
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <div className="flex-1">
            <h1 className="text-xl font-bold">Active Delivery</h1>
            <p className="text-sm text-gray-600">Order #{activeOrder.id.slice(-6)}</p>
          </div>
          <Badge className="bg-green-100 text-green-800">
            ${activeOrder.earnings}
          </Badge>
        </div>
      </div>

      <div className="max-w-md mx-auto p-4 space-y-6">
        {/* Progress Steps */}
        <div className="flex items-center justify-center space-x-4 mb-6">
          <div className="flex items-center">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
              currentStep === 'pickup' ? 'bg-blue-500 text-white' : 'bg-green-500 text-white'
            }`}>
              <Store className="w-5 h-5" />
            </div>
            <span className="ml-2 text-sm font-semibold">Pickup</span>
          </div>
          <div className={`w-8 h-1 ${currentStep === 'delivery' ? 'bg-blue-500' : 'bg-gray-300'}`}></div>
          <div className="flex items-center">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
              currentStep === 'delivery' ? 'bg-blue-500 text-white' : 
              currentStep === 'completed' ? 'bg-green-500 text-white' : 'bg-gray-300 text-gray-600'
            }`}>
              <User className="w-5 h-5" />
            </div>
            <span className="ml-2 text-sm font-semibold">Delivery</span>
          </div>
        </div>

        {/* Current Location */}
        <Card className="border-2 border-blue-200">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <MapPin className={`w-5 h-5 ${currentStep === 'pickup' ? 'text-orange-500' : 'text-green-500'}`} />
              {currentStep === 'pickup' ? 'Go to Restaurant' : 'Go to Customer'}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <p className="font-semibold text-gray-900">
                {currentStep === 'pickup' ? activeOrder.pickup : activeOrder.dropoff}
              </p>
              <div className="flex items-center gap-2 mt-2 text-sm text-gray-600">
                <Navigation className="w-4 h-4" />
                <span>{activeOrder.distance} miles • {activeOrder.estimatedTime} min</span>
              </div>
            </div>
            
            <Button
              onClick={handleNavigate}
              className="w-full h-14 bg-blue-600 hover:bg-blue-700 text-lg font-semibold"
            >
              <Navigation className="w-6 h-6 mr-2" />
              Navigate
            </Button>
          </CardContent>
        </Card>

        {/* Order Details */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Order Details</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Store className="w-5 h-5 text-orange-500 mt-0.5" />
                <div className="flex-1">
                  <p className="font-semibold text-sm">Restaurant</p>
                  <p className="text-sm text-gray-600">{activeOrder.pickup}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <User className="w-5 h-5 text-green-500 mt-0.5" />
                <div className="flex-1">
                  <p className="font-semibold text-sm">Customer</p>
                  <p className="text-sm text-gray-600">{activeOrder.dropoff}</p>
                  {currentStep === 'delivery' && (
                    <Button
                      variant="outline"
                      size="sm"
                      className="mt-2 text-blue-600 border-blue-300"
                    >
                      <Phone className="w-4 h-4 mr-1" />
                      Call Customer
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Action Button */}
        <Card className="bg-gradient-to-r from-green-50 to-green-100 border-green-200">
          <CardContent className="pt-6">
            {currentStep === 'pickup' ? (
              <Button
                onClick={handleConfirmPickup}
                className="w-full h-16 bg-green-600 hover:bg-green-700 text-xl font-bold"
              >
                <CheckCircle className="w-6 h-6 mr-3" />
                Confirm Pickup
              </Button>
            ) : (
              <Button
                onClick={handleConfirmDelivery}
                className="w-full h-16 bg-green-600 hover:bg-green-700 text-xl font-bold"
              >
                <CheckCircle className="w-6 h-6 mr-3" />
                Confirm Delivery
              </Button>
            )}
          </CardContent>
        </Card>

        {/* Instructions */}
        <Card className="bg-yellow-50 border-yellow-200">
          <CardContent className="pt-4">
            <p className="text-sm text-yellow-800">
              {currentStep === 'pickup' 
                ? "📱 Show this screen to restaurant staff to confirm order pickup"
                : "📦 Hand the order to the customer and confirm delivery in the app"
              }
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}