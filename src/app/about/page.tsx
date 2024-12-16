"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-black text-white pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold mb-6">
            About Our Auto Service
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            With over 20 years of experience, we've built our reputation on quality service, expert knowledge, and customer satisfaction.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Image
              src="https://i.imgur.com/vW8Ju8b.jpg"
              alt="Our Workshop"
              width={600}
              height={400}
              className="rounded-lg shadow-xl"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-semibold">Our Story</h2>
            <p className="text-gray-300">
              Founded in 2003, our auto service center has grown from a small local garage to a full-service automotive facility. We've maintained our commitment to personalized service while expanding our capabilities to serve more customers with the latest automotive technology.
            </p>
            <p className="text-gray-300">
              Our team of certified technicians brings decades of combined experience and a passion for automotive excellence to every job we undertake.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          <div className="text-center p-6 bg-gray-800 rounded-lg">
            <h3 className="text-2xl font-bold text-red-500 mb-2">20+</h3>
            <p className="text-gray-300">Years of Experience</p>
          </div>
          <div className="text-center p-6 bg-gray-800 rounded-lg">
            <h3 className="text-2xl font-bold text-red-500 mb-2">10,000+</h3>
            <p className="text-gray-300">Satisfied Customers</p>
          </div>
          <div className="text-center p-6 bg-gray-800 rounded-lg">
            <h3 className="text-2xl font-bold text-red-500 mb-2">100%</h3>
            <p className="text-gray-300">Quality Guarantee</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-center"
        >
          <a
            href="#contact"
            className="inline-block px-8 py-3 bg-red-600 text-white rounded-full hover:bg-red-700 transform hover:scale-105 transition-all"
          >
            Get in Touch
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutPage;
