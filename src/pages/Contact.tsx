import { Mail, Trophy, Package } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Contact = () => {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-more-cream py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-more-darkGray mb-4 font-display">
              Contact Us
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Get in touch with us about custom orders, trophies, or any questions you may have.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <Mail className="w-12 h-12 text-more-green mb-4" />
              <h2 className="text-xl font-semibold mb-2">Email Us</h2>
              <a 
                href="mailtoofficialmoreteam@gmail.com" 
                className="text-more-green hover:underline"
              >
                officialmoreteam@gmail.com
              </a>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <Trophy className="w-12 h-12 text-more-green mb-4" />
              <h2 className="text-xl font-semibold mb-2">Trophies</h2>
              <p className="text-gray-600">
                Custom-made trophies from reclaimed materials. Perfect for corporate awards, 
                competitions, and special recognition.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <Package className="w-12 h-12 text-more-green mb-4" />
              <h2 className="text-xl font-semibold mb-2">Custom Orders</h2>
              <p className="text-gray-600">
                Looking for something unique? We create bespoke pieces tailored to your specifications.
              </p>
            </div>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-md">
            <h2 className="text-2xl font-bold mb-6 text-more-darkGray">Custom Orders & Trophies</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2 text-more-darkGray">Sustainable Trophies</h3>
                <p className="text-gray-600">
                  Our unique trophies are crafted from reclaimed electronic components, offering a 
                  sustainable alternative to traditional awards. Each piece tells a story of 
                  environmental responsibility while celebrating achievement.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-2 text-more-darkGray">Custom Design Process</h3>
                <p className="text-gray-600">
                  We work closely with you to create pieces that perfectly match your vision:
                </p>
                <ul className="list-disc list-inside mt-2 text-gray-600 space-y-2">
                  <li>Initial consultation to understand your requirements</li>
                  <li>Design proposals with sustainable material options</li>
                  <li>Regular updates throughout the creation process</li>
                  <li>Quality assurance and final adjustments</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="text-center mt-16">
            <button 
              onClick={() => navigate('/products')}
              className="bg-more-green text-white px-8 py-3 rounded-lg hover:bg-opacity-90 transition-colors inline-flex items-center"
            >
              Browse Our Products
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
