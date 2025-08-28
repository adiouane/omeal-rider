'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import { 
  ArrowLeft, 
  DollarSign, 
  Navigation, 
  Clock, 
  Star,
  TrendingUp,
  Calendar
} from 'lucide-react';
import { mockDriverData, mockWeeklyEarnings } from '@/lib/mockData';

export default function AnalyticsPage() {
  const router = useRouter();

  const totalWeeklyEarnings = mockWeeklyEarnings.reduce((sum, day) => sum + day.earnings, 0);
  const maxEarnings = Math.max(...mockWeeklyEarnings.map(d => d.earnings));

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
            <h1 className="text-xl font-bold">Analytics & Earnings</h1>
            <p className="text-sm text-gray-600">Your performance overview</p>
          </div>
        </div>
      </div>

      <div className="max-w-md mx-auto p-4 space-y-6">
        {/* Today's Summary */}
        <div className="grid grid-cols-2 gap-3">
          <Card className="bg-gradient-to-br from-green-500 to-green-600 text-white">
            <CardContent className="pt-4 text-center">
              <DollarSign className="w-8 h-8 mx-auto mb-2" />
              <p className="text-1xl font-bold">${mockDriverData.todayEarnings}</p>
              <p className="text-sm opacity-90">Earnings Today</p>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-blue-500 to-blue-600 text-white">
            <CardContent className="pt-4 text-center">
              <Navigation className="w-8 h-8 mx-auto mb-2" />
              <p className="text-1xl font-bold">{mockDriverData.todayTrips}</p>
              <p className="text-sm opacity-90">Trips Today</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <Card>
            <CardContent className="pt-4 text-center">
              <Clock className="w-8 h-8 mx-auto mb-2 text-purple-600" />
              <p className="text-1xl font-bold">{mockDriverData.hoursOnline}h</p>
              <p className="text-sm text-gray-600">Hours Online</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-4 text-center">
              <Star className="w-8 h-8 mx-auto mb-2 text-yellow-500" />
              <p className="text-1xl font-bold">{mockDriverData.rating}</p>
              <p className="text-sm text-gray-600">Current Rating</p>
            </CardContent>
          </Card>
        </div>

        {/* Weekly Earnings Chart */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-blue-600" />
              Weekly Earnings
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {mockWeeklyEarnings.map((day, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-12 text-sm font-medium text-gray-600">
                    {day.day}
                  </div>
                  <div className="flex-1 bg-gray-200 rounded-full h-4 overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-green-500 to-green-600 rounded-full transition-all duration-500"
                      style={{ width: `${(day.earnings / maxEarnings) * 100}%` }}
                    ></div>
                  </div>
                  <div className="w-16 text-right font-semibold">
                    ${day.earnings}
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 pt-4 border-t">
              <div className="flex justify-between items-center">
                <span className="font-semibold text-gray-700">Total Week:</span>
                <span className="text-xl font-bold text-green-600">${totalWeeklyEarnings}</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Detailed Breakdown */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-purple-600" />
              Weekly Breakdown
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-3 bg-blue-50 rounded-lg">
                <p className="text-1xl font-bold text-blue-600">{mockDriverData.weeklyTrips}</p>
                <p className="text-sm text-blue-700">Total Trips</p>
              </div>
              <div className="text-center p-3 bg-purple-50 rounded-lg">
                <p className="text-1xl font-bold text-purple-600">{mockDriverData.weeklyHours}h</p>
                <p className="text-sm text-purple-700">Hours Worked</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-3 bg-green-50 rounded-lg">
                <p className="text-1xl font-bold text-green-600">${mockDriverData.avgPerTrip}</p>
                <p className="text-sm text-green-700">Avg Per Trip</p>
              </div>
              <div className="text-center p-3 bg-orange-50 rounded-lg">
                <p className="text-1xl font-bold text-orange-600">${mockDriverData.tips}</p>
                <p className="text-sm text-orange-700">Tips Earned</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Performance Insights */}
        <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200">
          <CardHeader>
            <CardTitle className="text-blue-800">💡 Performance Insights</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm">
            <div className="p-3 bg-white rounded-lg border border-blue-100">
              <p className="font-semibold text-blue-800">Peak Hours</p>
              <p className="text-blue-700">Your best earning hours: 11AM-2PM, 6PM-9PM</p>
            </div>
            <div className="p-3 bg-white rounded-lg border border-green-100">
              <p className="font-semibold text-green-800">Great Work!</p>
              <p className="text-green-700">You're earning 15% above average this week</p>
            </div>
          </CardContent>
        </Card>

        {/* Bottom spacing */}
        <div className="h-20"></div>
      </div>
    </div>
  );
}