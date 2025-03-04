import Navigation from "@/components/Navigation";
import { ArrowRight, Package, Truck, Clock, Globe, MapPin, Phone, Mail, Star } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section id="home" className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left space-y-8 animate-fade-up">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900">
                Fast, Reliable Delivery <br />
                <span className="text-danger" style={{color:"#303bd1"}}>When You Need It</span>
              </h1>
              <p className="text-lg text-gray-600">
             <b>RAN Transport & Logistics</b>  is your trusted partner in logistics and delivery services. We ensure your packages arrive safely and on time.
              </p>
              <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
                <a
                  href="#contact"
                  className="inline-flex items-center px-6 py-3 rounded-lg text-white hover:bg-primary-dark transition-colors duration-300 red-color"
                  style={{backgroundColor:"#11b072"}}
                >
                  Get a Quote
                  <ArrowRight className="ml-2" size={20} />
                </a>
                <a
                  href="#track"
                  className="inline-flex items-center px-6 py-3 rounded-lg border border-gray-300 text-gray-700 hover:border-primary hover:text-danger transition-colors duration-300"
                >
                  Track Your Parcel
                </a>
              </div>
            </div>
            <div className="hidden lg:block">
              <img
                src="https://th.bing.com/th/id/R.34395591d890d3e46852bda2d0c0397d?rik=7guP7qF3PRbGZg&riu=http%3a%2f%2ffleetcouriers.com%2fwp-content%2fuploads%2f2020%2f04%2fAdobeStock_297916104.jpeg&ehk=MrbbIC8p9WTJoJ5jYpiUrWL4IlCULW5jQzf%2fF7yPY%2bQ%3d&risl=1&pid=ImgRaw&r=0"
                alt="Courier Delivery Truck"
                className="rounded-lg shadow-xl w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900">About Us</h2>
              <p className="text-gray-600">
                With over 15 years of experience in logistics and delivery, we pride ourselves on our reliability,
                speed, and commitment to customer satisfaction. Our modern fleet and dedicated team ensure
                your deliveries are handled with the utmost care and efficiency.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-blue-50 rounded-lg">
                  <h3 className="font-semibold text-lg mb-2">15+ Years</h3>
                  <p className="text-sm text-gray-600">Industry Experience</p>
                </div>
                <div className="p-4 bg-blue-50 rounded-lg">
                  <h3 className="font-semibold text-lg mb-2">50k+</h3>
                  <p className="text-sm text-gray-600">Deliveries Monthly</p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://th.bing.com/th/id/OIP.6854WOknrArLL-tiwdAcVgHaFb?rs=1&pid=ImgDetMain"
                alt="Modern Warehouse"
                className="rounded-lg shadow-md w-full h-48 object-cover"
              />
              <img
                src="https://th.bing.com/th/id/OIP.Rsba6rcoPiySv_Aiu2uihQHaE7?w=242&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                alt="Delivery Team"
                className="rounded-lg shadow-md w-full h-48 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 px-4 sm:px-6 lg:px-8 bg-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Our Services</h2>
            <p className="mt-4 text-gray-600">Comprehensive delivery solutions for all your needs</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Clock,
                title: "Same Day Delivery",
                description: "Swift local delivery within hours",
              },
              {
                icon: Truck,
                title: "European Delivery",
                description: "Fast shipping across Europe",
              },
              {
                icon: Globe,
                title: "Worldwide Delivery",
                description: "Global reach for your shipments",
              },
              {
                icon: Package,
                title: "Next Day Delivery",
                description: "Guaranteed next-day service",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="p-6 rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <service.icon className="w-12 h-12 text-danger mb-4" />
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Collections Section */}
      <section id="collections" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Special Collections</h2>
            <p className="mt-4 text-gray-600">Specialized services for eBay and IKEA collections</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "eBay Collections",
                description: "Professional collection and delivery service for eBay purchases",
              },
              {
                title: "IKEA Collections",
                description: "Furniture collection and assembly service from IKEA",
              },
            ].map((collection, index) => (
              <div
                key={index}
                className="p-8 rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100"
              >
                <h3 className="text-2xl font-semibold mb-4">{collection.title}</h3>
                <p className="text-gray-600 mb-6">{collection.description}</p>
                <a
                  href="#contact"
                  className="inline-flex items-center text-danger hover:text-danger-dark transition-colors duration-300"
                >
                  Learn more <ArrowRight className="ml-2" size={16} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Vans Section */}
      <section id="vans" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Our Fleet</h2>
            <p className="mt-4 text-gray-600">Modern and well-maintained vehicles for all your delivery needs</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { image: "https://th.bing.com/th/id/OIP.mJRxYAgnM28duOpo9etOpwHaFI?w=224&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7", title: "Small Van", desc: "Perfect for small parcels and quick deliveries" },
              { image: "https://th.bing.com/th/id/OIP.9cMSCA44MFB5p4jdMZzSKgHaEc?w=285&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7", title: "Medium Van", desc: "Ideal for furniture and medium-sized shipments" },
              { image: "https://th.bing.com/th/id/OIP.Guwoxk_5CwgKbFKR3Ovn2QHaE7?w=298&h=199&c=7&r=0&o=5&dpr=1.3&pid=1.7", title: "Large Van", desc: "Suitable for commercial and bulk deliveries" }
            ].map((van, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                <img
                  src={van.image}
                  alt={van.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-semibold text-xl mb-2">{van.title}</h3>
                  <p className="text-gray-600">{van.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Customer Reviews</h2>
            <p className="mt-4 text-gray-600">What our clients say about us</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "Business Owner",
                content: "Exceptional service! They delivered my packages on time and with great care. The tracking system was very helpful.",
                rating: 5,
              },
              {
                name: "Michael Chen",
                role: "E-commerce Manager",
                content: "Their IKEA collection service is a game-changer. Professional team and excellent communication throughout.",
                rating: 5,
              },
              {
                name: "Emma Williams",
                role: "Regular Customer",
                content: "Swift delivery and friendly staff. They've become my go-to courier service for all my shipping needs.",
                rating: 4,
              },
            ].map((review, index) => (
              <div
                key={index}
                className="p-6 rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow duration-300 animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center mb-4">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-danger fill-primary"
                    />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">{review.content}</p>
                <div className="mt-4">
                  <h4 className="font-semibold text-gray-900">{review.name}</h4>
                  <p className="text-sm text-gray-500">{review.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8 bg-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Contact Us</h2>
            <p className="mt-4 text-gray-600">Get in touch with our team</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <Phone className="text-danger" size={24} />
                <span>+44 7909 057517</span>
              </div>
              <div className="flex items-center space-x-4">
                <Mail className="text-danger" size={24} />
                <span>Rantransport@icloud.com</span>
              </div>
              <div className="flex items-center space-x-4">
                <MapPin className="text-danger" size={24} />
                <span>Lowdham Nottingham United Kingdom
                </span>
              </div>
            </div>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
              <textarea
                placeholder="Your Message"
                rows={4}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
              <button
                type="submit"
                className="w-full px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">RAN Transport & Logistics</h3>
              <p className="text-gray-400">
                Your trusted partner in logistics and delivery services.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#about" className="text-gray-400 hover:text-white transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#services" className="text-gray-400 hover:text-white transition-colors">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-gray-400 hover:text-white transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Facebook
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Twitter
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>&copy; 2025 RAN Transport & Logistics Ltd. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
