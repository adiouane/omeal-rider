export const mockOrders = [
  {
    id: "order_001",
    status: "pending",
    pickup: "McDonald's - Downtown",
    dropoff: "123 Oak Street, Apt 4B",
    distance: "2.3",
    estimatedTime: "15",
    earnings: "12.50"
  },
  {
    id: "order_002", 
    status: "pending",
    pickup: "Pizza Palace - Mall Location",
    dropoff: "456 Elm Avenue",
    distance: "1.8",
    estimatedTime: "12",
    earnings: "9.75"
  },
  {
    id: "order_003",
    status: "pending", 
    pickup: "Thai Garden Restaurant",
    dropoff: "789 Pine Road, Suite 12",
    distance: "3.1",
    estimatedTime: "18",
    earnings: "15.25"
  }
];

export const mockDriverData = {
  name: "Alex Johnson",
  todayEarnings: "127.50",
  todayTrips: 8,
  hoursOnline: "6.5",
  rating: "4.9",
  weeklyTrips: 42,
  weeklyHours: "35",
  avgPerTrip: "14.25",
  tips: "45.80"
};

export const mockWeeklyEarnings = [
  { day: "Mon", earnings: 85.50 },
  { day: "Tue", earnings: 92.25 },
  { day: "Wed", earnings: 78.00 },
  { day: "Thu", earnings: 105.75 },
  { day: "Fri", earnings: 134.50 },
  { day: "Sat", earnings: 156.25 },
  { day: "Sun", earnings: 112.00 }
];

export const mockOrderHistory = [
  {
    id: "order_h001",
    status: "completed",
    pickup: "Burger King - Main St",
    dropoff: "567 Maple Drive",
    distance: "1.5",
    duration: "12",
    earnings: "11.25",
    date: "Today",
    time: "2:15 PM"
  },
  {
    id: "order_h002",
    status: "completed", 
    pickup: "Starbucks Coffee",
    dropoff: "890 Cedar Lane",
    distance: "0.8",
    duration: "8",
    earnings: "8.50",
    date: "Today",
    time: "1:45 PM"
  },
  {
    id: "order_h003",
    status: "completed",
    pickup: "Subway - Plaza",
    dropoff: "234 Birch Street",
    distance: "2.1",
    duration: "16",
    earnings: "13.75",
    date: "Today", 
    time: "12:30 PM"
  },
  {
    id: "order_h004",
    status: "cancelled",
    pickup: "Taco Bell - West End",
    dropoff: "345 Spruce Court",
    distance: "2.8",
    duration: "20",
    earnings: "0.00",
    date: "Yesterday",
    time: "7:20 PM"
  },
  {
    id: "order_h005",
    status: "completed",
    pickup: "Domino's Pizza",
    dropoff: "678 Willow Way",
    distance: "3.2",
    duration: "22",
    earnings: "16.50",
    date: "Yesterday",
    time: "6:45 PM"
  },
  {
    id: "order_h006",
    status: "completed",
    pickup: "Chinese Express",
    dropoff: "901 Ash Boulevard", 
    distance: "1.9",
    duration: "14",
    earnings: "12.00",
    date: "Yesterday",
    time: "5:15 PM"
  },
  {
    id: "order_h007",
    status: "completed",
    pickup: "KFC - Northside",
    dropoff: "123 Poplar Place",
    distance: "2.7",
    duration: "18",
    earnings: "14.25",
    date: "2 days ago",
    time: "8:30 PM"
  }
];