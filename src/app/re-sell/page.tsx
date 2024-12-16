"use client";
import Image from "next/image";
import { useState } from "react";

interface Car {
  id: number;
  make: string;
  model: string;
  year: number;
  mileage: number;
  price: number;
  condition: string;
  color: string;
  transmission: string;
  fuelType: string;
  features: string[];
  images: string[];
  description: string;
  location: string;
  contact: {
    name: string;
    phone: string;
    email: string;
  };
}

const usedCarsData: Car[] = [
  {
    id: 1,
    make: "Toyota",
    model: "Camry",
    year: 2019,
    mileage: 45000,
    price: 18500,
    condition: "Excellent",
    color: "Silver", 
    transmission: "Automatic",
    fuelType: "Gasoline",
    features: [
      "Backup Camera",
      "Bluetooth",
      "Cruise Control", 
      "Keyless Entry",
      "Power Windows",
      "Power Seats",
      "USB Ports"
    ],
    images: [
      "https://i.imgur.com/vW8Ju8b.jpg",
      "https://i.imgur.com/vW8Ju8b.jpg"
    ],
    description: "Well-maintained Toyota Camry with low mileage. Single owner, all service records available.",
    location: "Los Angeles, CA",
    contact: {
      name: "John Smith",
      phone: "(555) 123-4567",
      email: "john.smith@email.com"
    }
  },
  {
    id: 2,
    make: "Honda",
    model: "CR-V", 
    year: 2020,
    mileage: 32000,
    price: 24900,
    condition: "Very Good",
    color: "Blue",
    transmission: "Automatic",
    fuelType: "Gasoline",
    features: [
      "All-Wheel Drive",
      "Lane Departure Warning",
      "Apple CarPlay",
      "Sunroof",
      "Blind Spot Monitor",
      "Heated Seats",
      "Remote Start"
    ],
    images: [
      "https://i.imgur.com/vW8Ju8b.jpg",
      "https://i.imgur.com/vW8Ju8b.jpg"
    ],
    description: "Family-friendly SUV with advanced safety features. Regular maintenance performed.",
    location: "Chicago, IL", 
    contact: {
      name: "Sarah Johnson",
      phone: "(555) 987-6543",
      email: "sarah.j@email.com"
    }
  },
  {
    id: 3,
    make: "BMW",
    model: "3 Series",
    year: 2018,
    mileage: 55000,
    price: 27500,
    condition: "Good",
    color: "Black",
    transmission: "Automatic",
    fuelType: "Gasoline",
    features: [
      "Leather Seats",
      "Navigation System",
      "Premium Sound System",
      "Parking Sensors",
      "Moonroof",
      "Sport Package",
      "Wireless Charging"
    ],
    images: [
      "https://i.imgur.com/vW8Ju8b.jpg",
      "https://i.imgur.com/vW8Ju8b.jpg"
    ],
    description: "Luxury sedan with premium features. Recently serviced with new tires.",
    location: "Miami, FL",
    contact: {
      name: "Michael Brown",
      phone: "(555) 246-8135",
      email: "m.brown@email.com"
    }
  },
  {
    id: 4,
    make: "Tesla",
    model: "Model 3",
    year: 2021,
    mileage: 15000,
    price: 41900,
    condition: "Excellent",
    color: "White",
    transmission: "Electric",
    fuelType: "Electric",
    features: [
      "Autopilot",
      "Full Self Driving",
      "Premium Interior",
      "Glass Roof",
      "Supercharging",
      "Premium Audio",
      "Smart Summon"
    ],
    images: [
      "https://i.imgur.com/vW8Ju8b.jpg",
      "https://i.imgur.com/vW8Ju8b.jpg"
    ],
    description: "Like-new Tesla Model 3 with all premium features and latest software updates.",
    location: "San Francisco, CA",
    contact: {
      name: "Emily Chen",
      phone: "(555) 789-0123",
      email: "emily.c@email.com"
    }
  }
];

export default function ResellPage() {
  const [selectedCar, setSelectedCar] = useState<Car | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [priceFilter, setPriceFilter] = useState("");
  const [yearFilter, setYearFilter] = useState("");
  const [conditionFilter, setConditionFilter] = useState("");

  const filteredCars = usedCarsData.filter(car => {
    const matchesSearch = car.make.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         car.model.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesPrice = !priceFilter || 
      (priceFilter === "0-20000" && car.price < 20000) ||
      (priceFilter === "20000-30000" && car.price >= 20000 && car.price < 30000) ||
      (priceFilter === "30000-40000" && car.price >= 30000 && car.price < 40000) ||
      (priceFilter === "40000+" && car.price >= 40000);

    const matchesYear = !yearFilter ||
      (yearFilter === "2021+" && car.year >= 2021) ||
      (yearFilter === "2018-2020" && car.year >= 2018 && car.year <= 2020) ||
      (yearFilter === "2015-2017" && car.year >= 2015 && car.year <= 2017);

    const matchesCondition = !conditionFilter || car.condition === conditionFilter;

    return matchesSearch && matchesPrice && matchesYear && matchesCondition;
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-zinc-900 to-black text-white">
    {/* Main Content */}
      <main className="pt-8 pb-12">
        <div className="max-w-7xl mx-auto px-8">
          {/* Filters Section */}
          <section className="mb-12 bg-zinc-800/50 p-6 rounded-2xl backdrop-blur-sm border border-zinc-700/50">
            <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-500" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z" clipRule="evenodd" />
              </svg>
              Find Your Perfect Car
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search by make or model..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-3 bg-zinc-900/90 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 transition-all pl-10"
                />
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                </svg>
              </div>
              <select 
                value={priceFilter}
                onChange={(e) => setPriceFilter(e.target.value)}
                className="px-4 py-3 bg-zinc-900/90 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 transition-all appearance-none"
              >
                <option value="">Price Range</option>
                <option value="0-20000">Under $20,000</option>
                <option value="20000-30000">$20,000 - $30,000</option>
                <option value="30000-40000">$30,000 - $40,000</option>
                <option value="40000+">$40,000+</option>
              </select>
              <select 
                value={yearFilter}
                onChange={(e) => setYearFilter(e.target.value)}
                className="px-4 py-3 bg-zinc-900/90 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 transition-all appearance-none"
              >
                <option value="">Year</option>
                <option value="2021+">2021 & Newer</option>
                <option value="2018-2020">2018 - 2020</option>
                <option value="2015-2017">2015 - 2017</option>
              </select>
              <select 
                value={conditionFilter}
                onChange={(e) => setConditionFilter(e.target.value)}
                className="px-4 py-3 bg-zinc-900/90 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 transition-all appearance-none"
              >
                <option value="">Condition</option>
                <option value="Excellent">Excellent</option>
                <option value="Very Good">Very Good</option>
                <option value="Good">Good</option>
              </select>
            </div>
          </section>

          {/* Cars Grid */}
          <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {filteredCars.map((car) => (
              <div
                key={car.id}
                className="group bg-zinc-800/50 rounded-2xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 border border-zinc-700/50 hover:border-red-500/50"
              >
                <div className="relative h-56">
                  <Image
                    src={car.images[0]}
                    alt={`${car.make} ${car.model}`}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-red-500 rounded-full text-sm font-semibold">
                      {car.condition}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-bold">
                      {car.year} {car.make} <br/> {car.model}
                    </h3>
                    <span className="text-lg font-bold text-red-500">${car.price.toLocaleString()}</span>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-4">
                      <span className="flex items-center gap-1 text-sm text-gray-300">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
                        </svg>
                        {car.mileage.toLocaleString()} miles
                      </span>
                      <span className="flex items-center gap-1 text-sm text-gray-300">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>
                        {car.location}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {car.features.slice(0, 3).map((feature, index) => (
                        <span key={index} className="px-2 py-1 bg-zinc-700/50 rounded-full text-xs text-gray-300">
                          {feature}
                        </span>
                      ))}
                    </div>
                    <p className="text-sm text-gray-400 line-clamp-2">{car.description}</p>
                  </div>
                  <button 
                    onClick={() => setSelectedCar(car)}
                    className="w-full mt-6 px-6 py-3 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-xl font-semibold hover:from-red-700 hover:to-red-800 transition-all duration-300 shadow-lg shadow-red-900/20 flex items-center justify-center gap-2"
                  >
                    <span>View Details</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-black/50 backdrop-blur-sm border-t border-zinc-800">
        <div className="max-w-7xl mx-auto px-8 py-8">
          <p className="text-center text-gray-400">
            © 2024 Used Cars Marketplace. All rights reserved.
          </p>
        </div>
      </footer>

      {/* Car Details Modal */}
      {selectedCar && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-zinc-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-6">
                <h2 className="text-3xl font-bold">
                  {selectedCar.year} {selectedCar.make} {selectedCar.model}
                </h2>
                <button 
                  onClick={() => setSelectedCar(null)}
                  className="p-2 hover:bg-zinc-800 rounded-full transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              {/* Modal content */}
              <div className="space-y-6">
                <div className="relative h-80">
                  <Image
                    src={selectedCar.images[0]}
                    alt={`${selectedCar.make} ${selectedCar.model}`}
                    fill
                    className="object-cover rounded-xl"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <h3 className="font-semibold">Details</h3>
                    <div className="space-y-1 text-gray-300">
                      <p>Price: ${selectedCar.price.toLocaleString()}</p>
                      <p>Mileage: {selectedCar.mileage.toLocaleString()} miles</p>
                      <p>Condition: {selectedCar.condition}</p>
                      <p>Color: {selectedCar.color}</p>
                      <p>Transmission: {selectedCar.transmission}</p>
                      <p>Fuel Type: {selectedCar.fuelType}</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-semibold">Features</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedCar.features.map((feature, index) => (
                        <span key={index} className="px-2 py-1 bg-zinc-800 rounded-full text-sm">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold">Description</h3>
                  <p className="text-gray-300">{selectedCar.description}</p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold">Contact Information</h3>
                  <div className="space-y-1 text-gray-300">
                    <p>Name: {selectedCar.contact.name}</p>
                    <p>Phone: {selectedCar.contact.phone}</p>
                    <p>Email: {selectedCar.contact.email}</p>
                    <p>Location: {selectedCar.location}</p>
                  </div>
                </div>
                <button 
                  className="w-full px-6 py-3 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-xl font-semibold hover:from-red-700 hover:to-red-800 transition-all duration-300"
                  onClick={() => window.location.href = `mailto:${selectedCar.contact.email}`}
                >
                  Contact Seller
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
