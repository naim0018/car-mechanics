"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const ExpertisePage = () => {
  const services = [
    {
      title: "Engine Diagnostics",
      description: "Advanced computer diagnostics to identify and resolve engine issues with precision.",
      icon: "/icons/engine.svg"
    },
    {
      title: "Brake Services",
      description: "Complete brake system inspection, repair and replacement for your safety.",
      icon: "/icons/brake.svg"
    },
    {
      title: "Transmission Repair",
      description: "Expert transmission diagnostics, repair and maintenance services.",
      icon: "/icons/transmission.svg"
    },
    {
      title: "Oil Changes",
      description: "Regular maintenance and oil changes to keep your engine running smoothly.",
      icon: "/icons/oil.svg"
    },
    {
      title: "Electrical Systems",
      description: "Comprehensive electrical system diagnostics and repair services.",
      icon: "/icons/electrical.svg"
    },
    {
      title: "Tire Services",
      description: "Tire rotation, balancing, alignment and replacement services.",
      icon: "/icons/tire.svg"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent">
            Our Expertise
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            With years of experience and state-of-the-art equipment, we provide comprehensive automotive services to keep your vehicle running at its best.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-colors duration-300"
            >
              <div className="w-16 h-16 mb-4 mx-auto">
                <Image
                  src={service.icon}
                  alt={service.title}
                  width={64}
                  height={64}
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-center">{service.title}</h3>
              <p className="text-gray-400 text-center">{service.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-center mt-16"
        >
          <a
            href="#contact"
            className="inline-block px-8 py-3 bg-red-600 text-white rounded-full hover:bg-red-700 transform hover:scale-105 transition-all"
          >
            Schedule a Service
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default ExpertisePage;
