// eslint-disable-next-line no-unused-vars
import React from 'react'
import './style.css'
import Footer from './footer'
import { useNavigate } from 'react-router-dom'
function Home() {
  let navigate = useNavigate()
  const gotoserver = () => {
    navigate('/service')
  }
  return (
    <div>


      <div className="relative w-full h-64">
        {/* Background Image */}
        <img
          src="https://www.colliers.com/-/media/images/colliers/asia/india/1536x1040_08022024.ashx?bid=f4a70a56b86f4e79bf7fe4d4234900cb"
          alt="Background"
          className="w-full h-full object-cover"
        />

        {/* Text Overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-serif text-white font-bold">Welcome</h1>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-serif text-white font-bold">To</h1>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-serif text-white font-bold">Durga Infra Private Limited</h1>
        </div>
      </div>
      <div className='carddd'>
        <div className="container mx-auto p-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src="/image/02.jpeg"
                alt="Digital Solutions"
                className="w-full h-48 object-cover transform hover:scale-105 transition-transform duration-300"
              />
              <div className="p-4">
                <h2 className="text-xl font-bold text-gray-800 mb-2">Digital Innovation</h2>
                <p className="text-gray-600 leading-relaxed">
                  Transforming businesses through cutting-edge digital solutions. Our innovative
                  technology services help companies stay ahead in the digital age, offering
                  seamless integration and enhanced user experiences.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src="/image/03.jpeg"
                alt="Cloud Services"
                className="w-full h-48 object-cover transform hover:scale-105 transition-transform duration-300"
              />
              <div className="p-4">
                <h2 className="text-xl font-bold text-gray-800 mb-2">Cloud Solutions</h2>
                <p className="text-gray-600 leading-relaxed">
                  Leverage the power of cloud computing with our comprehensive cloud services.
                  From migration to management, we ensure your business operates efficiently
                  in the cloud environment.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src="/image/04.jpeg"
                alt="Cybersecurity"
                className="w-full h-48 object-cover transform hover:scale-105 transition-transform duration-300"
              />
              <div className="p-4">
                <h2 className="text-xl font-bold text-gray-800 mb-2">Cybersecurity</h2>
                <p className="text-gray-600 leading-relaxed">
                  Protect your digital assets with our state-of-the-art cybersecurity solutions.
                  We provide comprehensive security measures to safeguard your business against
                  evolving cyber threats.
                </p>
              </div>
            </div>

            
          </div>
        </div>

       
      </div>

      {/* Contact and Appointment Section */}
      <div className="bg-gray-100 py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
          <p className="mb-6">
            For inquiries or to schedule an appointment, please contact us:
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>Email: durgainfraprivatelimited@gmail.com</li>
            <li>Phone: +91 7483445291</li>
          </ul>
          <p>
            You can also fill out our <a href="/contact" className="text-blue-500 hover:underline">contact form</a> or <a href="/appointments" className="text-blue-500 hover:underline">schedule an appointment</a> online.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Home
