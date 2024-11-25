// eslint-disable-next-line no-unused-vars
import React from "react";

const Service = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <div className="bg-blue-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Durga Infra Private Limited.</h1>
          <p className="text-lg">
            Building the future with innovation, integrity, and quality.
          </p>
        </div>
      </div>

      {/* Services Section */}
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Service 1 */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <img
              src="/image/Residential.jpeg"
              alt="Residential Construction"
              className="rounded-lg mb-4 h-48 w-full object-cover"
            />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Residential Construction</h3>
            <p className="text-gray-600">
              We specialize in designing and building high-quality homes tailored to your needs.
            </p>
          </div>

          {/* Service 2 */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <img
              src="/image/Commercial_Construction.jpeg"
              alt="Commercial Construction"
              className="rounded-lg mb-4 h-48 w-full object-cover"
            />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Commercial Construction</h3>
            <p className="text-gray-600">
              From office buildings to shopping complexes, we deliver commercial projects with precision.
            </p>
          </div>

          {/* Service 3 */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <img
              src="/image/Renovation.jpeg"
              alt="Renovation and Remodeling"
              className="rounded-lg mb-4 h-48 w-full object-cover"
            />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Renovation & Remodeling</h3>
            <p className="text-gray-600">
              Upgrade your existing spaces with our innovative renovation and remodeling solutions.
            </p>
          </div>

          {/* Service 4 */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <img
              src="/image/road.jpg"
              alt="Road Construction"
              className="rounded-lg mb-4 h-48 w-full object-cover"
            />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Road Construction</h3>
            <p className="text-gray-600">
              We build durable and efficient roads that connect communities and businesses.
            </p>
          </div>

          {/* Service 5 */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <img
              src="/image/Industrial.jpeg"
              alt="Industrial Projects"
              className="rounded-lg mb-4 h-48 w-full object-cover"
            />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Industrial Projects</h3>
            <p className="text-gray-600">
              We handle large-scale industrial projects with attention to detail and safety.
            </p>
          </div>

          {/* Service 6 */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <img
              src="/image/civil.jpg"
              alt="Consultation Services"
              className="rounded-lg mb-4 h-48 w-full object-cover"
            />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Consultation Services</h3>
            <p className="text-gray-600">
              Get expert advice and guidance for your construction and infrastructure projects.
            </p>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="bg-blue-900 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Let’s Build Your Vision Together</h2>
          <p className="mb-6">
            Contact us today to discuss your construction needs and get a free consultation.
          </p>
          <a
            href="/contact"
            className="bg-white text-blue-900 font-semibold py-2 px-6 rounded hover:bg-gray-100 transition"
          >
            Get in Touch
          </a>
          <a
            href="/albumb"
            className="bg-white text-blue-900 font-semibold py-2 mr-2 ml-2 px-6 rounded hover:bg-gray-100 transition"
          >
            See Album
          </a>
        </div>
      </div>
    </div>
  );
};

export default Service;
