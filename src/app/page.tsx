import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <main>
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center">
          <div className="absolute inset-0">
            <Image
              src="https://i.imgur.com/vW8Ju8b.jpg"
              alt="Professional Auto Service"
              fill
              className="object-cover brightness-[0.2] w-full h-full"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-br from-black via-transparent to-red-900/30" />
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32">
            <div className="max-w-3xl space-y-6 sm:space-y-8 lg:space-y-10">
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black leading-tight">
                Expert Care for
                <span className="block text-red-600">
                  Your Vehicle
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-300 leading-relaxed">
                Professional automotive service with state-of-the-art diagnostics and certified technicians for all makes and models.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                <a href="#services" 
                   className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-red-600 text-white font-bold rounded-full text-center overflow-hidden hover:bg-red-700 transition-colors">
                  Our Services
                </a>
                <a href="#contact" 
                   className="px-6 sm:px-8 py-3 sm:py-4 border-2 border-red-600 rounded-full font-bold text-center hover:bg-red-600 hover:text-white transition-all">
                  Schedule Service
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Services */}
        <section className="py-16 sm:py-24 lg:py-32 bg-zinc-950">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mb-8 sm:mb-16">
              <div>
                <h4 className="text-red-500 font-semibold mb-2">Our Services</h4>
                <h2 className="text-3xl sm:text-4xl font-bold">Expert Solutions</h2>
              </div>
              <a href="#services" className="group flex items-center gap-2 text-red-500">
                View All Services
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {["Diagnostics", "Repairs", "Maintenance"].map((service, i) => (
                <div key={i} className="group relative bg-black border border-red-900/30 rounded-2xl overflow-hidden">
                  <div className="relative h-48 sm:h-64 overflow-hidden">
                    <Image
                      src={`/service-${i + 1}.jpg`}
                      alt={service}
                      fill
                      className="object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <div className="p-6 sm:p-8">
                    <h3 className="text-lg sm:text-xl font-bold mb-2">{service}</h3>
                    <p className="text-gray-400 mb-6">Professional {service.toLowerCase()} services by certified technicians</p>
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                      <span className="text-base sm:text-lg font-bold text-red-500">From $89</span>
                      <button className="w-full sm:w-auto px-4 sm:px-6 py-2 sm:py-3 bg-red-600 text-white rounded-full text-sm font-semibold hover:bg-red-700 transition-colors">
                        Learn More
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-red-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
            <div className="col-span-1 sm:col-span-2 lg:col-span-1">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-red-600 rounded-xl flex items-center justify-center">
                  <span className="text-lg font-black text-white">CM</span>
                </div>
                <span className="text-xl font-bold">Car Mechanics</span>
              </div>
              <p className="text-gray-400">
                Trusted automotive service since 1995
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Services</h3>
              <div className="flex flex-col gap-3">
                <a href="#diagnostics" className="text-gray-400 hover:text-red-500">Diagnostics</a>
                <a href="#repairs" className="text-gray-400 hover:text-red-500">Repairs</a>
                <a href="#maintenance" className="text-gray-400 hover:text-red-500">Maintenance</a>
                <a href="#inspection" className="text-gray-400 hover:text-red-500">Inspection</a>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Location</h3>
              <address className="text-gray-400 not-italic">
                1234 Service Drive<br />
                Los Angeles, CA 90001<br />
                +1 (323) 555-0123<br />
                service@carmechanics.com
              </address>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Connect</h3>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-red-600 text-white hover:bg-red-700 transition-colors">
                  FB
                </a>
                <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-red-600 text-white hover:bg-red-700 transition-colors">
                  IG
                </a>
                <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-red-600 text-white hover:bg-red-700 transition-colors">
                  YT
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
