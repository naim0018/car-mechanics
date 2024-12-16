"use client";
import { useState } from "react";
import { motion } from "framer-motion";

const BookServicePage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    vehicleMake: "",
    vehicleModel: "",
    vehicleYear: "",
    serviceType: "",
    preferredDate: "",
    preferredTime: "",
    comments: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="min-h-screen bg-black text-white pt-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-bold mb-6">
            Book a Service
          </h1>
          <p className="text-lg text-gray-300">
            Schedule your vehicle service appointment with our expert technicians
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          onSubmit={handleSubmit}
          className="space-y-6 bg-gray-900 p-8 rounded-lg"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-gray-800 rounded-md focus:ring-2 focus:ring-red-500 focus:outline-none"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-gray-800 rounded-md focus:ring-2 focus:ring-red-500 focus:outline-none"
                required
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium mb-2">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-gray-800 rounded-md focus:ring-2 focus:ring-red-500 focus:outline-none"
                required
              />
            </div>
            <div>
              <label htmlFor="vehicleMake" className="block text-sm font-medium mb-2">Vehicle Make</label>
              <input
                type="text"
                id="vehicleMake"
                name="vehicleMake"
                value={formData.vehicleMake}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-gray-800 rounded-md focus:ring-2 focus:ring-red-500 focus:outline-none"
                required
              />
            </div>
            <div>
              <label htmlFor="vehicleModel" className="block text-sm font-medium mb-2">Vehicle Model</label>
              <input
                type="text"
                id="vehicleModel"
                name="vehicleModel"
                value={formData.vehicleModel}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-gray-800 rounded-md focus:ring-2 focus:ring-red-500 focus:outline-none"
                required
              />
            </div>
            <div>
              <label htmlFor="vehicleYear" className="block text-sm font-medium mb-2">Vehicle Year</label>
              <input
                type="text"
                id="vehicleYear"
                name="vehicleYear"
                value={formData.vehicleYear}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-gray-800 rounded-md focus:ring-2 focus:ring-red-500 focus:outline-none"
                required
              />
            </div>
            <div>
              <label htmlFor="preferredDate" className="block text-sm font-medium mb-2">Preferred Date</label>
              <input
                type="date"
                id="preferredDate"
                name="preferredDate"
                value={formData.preferredDate}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-gray-800 rounded-md focus:ring-2 focus:ring-red-500 focus:outline-none"
                required
              />
            </div>
            <div>
              <label htmlFor="preferredTime" className="block text-sm font-medium mb-2">Preferred Time</label>
              <input
                type="time"
                id="preferredTime"
                name="preferredTime"
                value={formData.preferredTime}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-gray-800 rounded-md focus:ring-2 focus:ring-red-500 focus:outline-none"
                required
              />
            </div>
          </div>

          <div>
            <label htmlFor="serviceType" className="block text-sm font-medium mb-2">Service Type</label>
            <select
              id="serviceType"
              name="serviceType"
              value={formData.serviceType}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-gray-800 rounded-md focus:ring-2 focus:ring-red-500 focus:outline-none"
              required
            >
              <option value="">Select a service</option>
              <option value="oil-change">Oil Change</option>
              <option value="brake-service">Brake Service</option>
              <option value="tire-service">Tire Service</option>
              <option value="engine-repair">Engine Repair</option>
              <option value="diagnostic">Diagnostic</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div>
            <label htmlFor="comments" className="block text-sm font-medium mb-2">Additional Comments</label>
            <textarea
              id="comments"
              name="comments"
              value={formData.comments}
              onChange={handleChange}
              rows={4}
              className="w-full px-4 py-2 bg-gray-800 rounded-md focus:ring-2 focus:ring-red-500 focus:outline-none"
            ></textarea>
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="px-8 py-3 bg-red-600 text-white rounded-full hover:bg-red-700 transform hover:scale-105 transition-all"
            >
              Schedule Service
            </button>
          </div>
        </motion.form>
      </div>
    </div>
  );
};

export default BookServicePage;
