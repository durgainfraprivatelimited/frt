// eslint-disable-next-line no-unused-vars
import React from "react";
// import {ceo} from '/img/CEO.jpeg'
const About = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <div className="bg-blue-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">About Us</h1>
          <p className="text-lg">
            Building excellence, delivering trust, and transforming dreams into reality.
          </p>
        </div>
      </div>

      {/* About Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Section */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-800">Our Story</h2>
            <p className="text-gray-600">
              Durga Infra Private Limited. was run by the visionary leader, 
              <span className="font-bold text-gray-800"> Mr. Rangappa Rajput</span>, who believed in building a better future through innovative, 
              high-quality, and reliable construction services. From humble beginnings, Mr. Rangappa Rajput transformed a small team into one of the 
              most trusted names in the construction industry.
            </p>
            <p className="text-gray-600">
              Established with the mission to provide world-class construction solutions, 
              Durga Infra Private Limited has been at the forefront of innovation, delivering projects that inspire and leave a lasting impact. 
              Over the years, we have successfully completed residential, commercial, industrial, and infrastructure projects with unmatched excellence.
            </p>
          </div>

          {/* Right Section */}
          <div>
            <img
              src='/image/CEO.jpeg'
              alt="Durga Infra Private Limited"
              className="rounded-lg  shadow-lg w-full h-96 object-cover "
            />
          </div>
        </div>
      </div>

      {/* Leader Section */}
      <div className="bg-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">About Our Leader</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            <span className="font-bold text-gray-800">Mr. Rangappa Rajput</span>, the Leader and former CEO of Durga Infra Private Limited., 
            was a true visionary and pioneer in the construction industry. With a strong work ethic, unwavering dedication, and an 
            eye for innovation, he built a company that not only constructs buildings but also builds trust, relationships, and a brighter future.
          </p>
          <p className="text-gray-600 max-w-3xl mx-auto mt-4">
            Under his leadership, Durga Infra Private Limited grew from a small enterprise into a respected name in the industry, known for its 
            commitment to quality, safety, and customer satisfaction. His legacy continues to guide and inspire our team as we strive 
            for excellence in every project we undertake.
          </p>
        </div>
      </div>

      {/* Vision and Mission Section */}
      <div className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Vision */}
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Vision</h3>
              <p className="text-gray-600">
                To be a leading construction company recognized for building sustainable, innovative, and high-quality projects 
                that shape the future.
              </p>
            </div>

            {/* Mission */}
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h3>
              <p className="text-gray-600">
                To deliver construction solutions that exceed expectations, uphold the highest standards of quality, and contribute 
                to the growth and development of our communities.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Team Leadership Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">Our Leadership Team</h2>
          <div className=" flex justify-center grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Founder Profile */}
           

            {/* CEO Profile */}
            <div className="bg-gray-50 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
              <img
                src="/image/CEO.jpeg"
                alt="CEO"
                className="w-48 h-48 rounded-full mx-auto mb-4 object-cover border-4 border-blue-500"
              />
              <h3 className="text-xl font-bold text-gray-800 text-center">Mr. Rangappa Rajput</h3>
              <p className="text-blue-600 text-center mb-4">Chief Executive Officer</p>
              <p className="text-gray-600 text-center">
                Leading the company's strategic initiatives, Mr. Rangappa Rajput brings innovative
                approaches to construction management and sustainable development practices.
                His leadership drives our commitment to excellence.
              </p>
            </div>

            {/* Director Profile */}
            <div className="bg-gray-50 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
              <img
                src="/image/profile.png"
                alt="Director"
                className="w-48 h-48 rounded-full mx-auto mb-4 object-cover border-4 border-blue-500"
              />
              <h3 className="text-xl font-bold text-gray-800 text-center">Mr. Sachin Rajput</h3>
              <p className="text-blue-600 text-center mb-4">Director</p>
              <p className="text-gray-600 text-center">
                As Director, Mr. Sachin Rajput oversees financial planning and corporate governance.
                His expertise in business development has helped expand our project portfolio
                significantly.
              </p>
            </div>

            {/* Project Manager Profile */}
            
          </div>

          {/* Team Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 text-center">
            <div className="p-6 bg-blue-900 rounded-lg text-white">
              <h4 className="text-4xl font-bold mb-2">30+</h4>
              <p>Years Experience</p>
            </div>
            <div className="p-6 bg-blue-900 rounded-lg text-white">
              <h4 className="text-4xl font-bold mb-2">200+</h4>
              <p>Projects Completed</p>
            </div>
            <div className="p-6 bg-blue-900 rounded-lg text-white">
              <h4 className="text-4xl font-bold mb-2">150+</h4>
              <p>Team Members</p>
            </div>
            <div className="p-6 bg-blue-900 rounded-lg text-white">
              <h4 className="text-4xl font-bold mb-2">98%</h4>
              <p>Client Satisfaction</p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-blue-900 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Join Us in Building the Future</h2>
          <p className="mb-6">
            Explore our services, work with our dedicated team, and experience the Durga Infra Private Limited difference.
          </p>
          <a
            href="/service"
            className="bg-white text-blue-900 font-semibold py-2 px-6 rounded-lg hover:bg-gray-100 transition"
          >
            View Our Services
          </a>
        </div>
      </div>

      
    </div>
  );
};

export default About;
