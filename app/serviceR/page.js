import React from "react";
import { AiOutlinePrinter, AiOutlineFileText, AiOutlineBarChart, AiOutlineGlobal } from "react-icons/ai"; // Using react-icons for better design

export default function Services() {
  return (
    <div className="bg-gray-50 min-h-screen pt-16">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold mb-6">Our Premium Printing Services</h1>
          <p className="text-lg max-w-2xl mx-auto">
            At Hewlett printer solution online, we bring innovation, precision, and creativity to every printing solution. Explore our services and experience printing like never before.
          </p>
        </div>
      </header>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#2563EB]">
          Explore Our Services
          </h2>
          <div className="space-y-12">
            {/* Custom Printing */}
            <div className="bg-white shadow-lg rounded-lg p-10 flex items-center gap-6 hover:shadow-2xl transition duration-300">
              <AiOutlinePrinter className="text-blue-600 text-6xl" />
              <div>
                <h3 className="text-2xl font-bold mb-4 text-[#2563EB]">Custom Printing</h3>
                <p className="text-gray-700 leading-relaxed">
                  We specialize in high-quality custom printing for all your needs. From business cards to banners, we ensure vibrant colors and sharp details to bring your ideas to life. Let us handle your marketing materials, wedding invitations, or creative projects with precision and care.
                </p>
              </div>
            </div>

            {/* Document Management */}
            <div className="bg-white shadow-lg rounded-lg p-10 flex items-center gap-6 hover:shadow-2xl transition duration-300">
              <AiOutlineFileText className="text-green-500 text-6xl" />
              <div>
                <h3 className="text-2xl font-bold mb-4 text-green-600">Document Management</h3>
                <p className="text-gray-700 leading-relaxed">
                  Simplify your document workflow with our document management services. Whether it’s digitizing, organizing, or printing essential paperwork, we provide secure and efficient solutions tailored to your business or personal requirements.
                </p>
              </div>
            </div>

            {/* Data Visualization */}
            <div className="bg-white shadow-lg rounded-lg p-10 flex items-center gap-6 hover:shadow-2xl transition duration-300">
              <AiOutlineBarChart className="text-orange-500 text-6xl" />
              <div>
                <h3 className="text-2xl font-bold mb-4 text-orange-500">Data Visualization Printing</h3>
                <p className="text-gray-700 leading-relaxed">
                  Make your data stand out with beautifully printed charts, infographics, and reports. Perfect for presentations, academic projects, and business analytics, our services ensure clarity and professionalism in every detail.
                </p>
              </div>
            </div>

            {/* Global Shipping */}
            <div className="bg-white shadow-lg rounded-lg p-10 flex items-center gap-6 hover:shadow-2xl transition duration-300">
              <AiOutlineGlobal className="text-purple-600 text-6xl" />
              <div>
                <h3 className="text-2xl font-bold mb-4 text-purple-600">Global Printing Solutions</h3>
                <p className="text-gray-700 leading-relaxed">
                  No matter where you are, we’ve got your printing needs covered. With our global shipping services, you can send high-quality prints anywhere in the world, ensuring convenience and satisfaction for personal or business needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Experience the Hewlett printer solution online Difference
          </h2>
          <p className="text-lg max-w-2xl mx-auto mb-8">
            Contact us today to bring your ideas to life with our state-of-the-art printing solutions.
          </p>
          <button className="bg-white text-blue-800 font-semibold py-3 px-8 rounded-lg shadow hover:bg-gray-100">
            Get Started Now
          </button>
        </div>
      </section>
    </div>
  );
}