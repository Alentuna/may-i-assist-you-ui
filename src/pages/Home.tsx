
import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiHelpCircle, FiUser, FiUserPlus } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import ImageSlider from '../components/ImageSlider';
import HelpModal from '../components/HelpModal';
import CustomCursor from '../components/CustomCursor';

const Home = () => {
  const [isHelpModalOpen, setIsHelpModalOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50">
      <CustomCursor />
      
      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-gradient-to-r from-red-800 to-blue-900 text-white shadow-lg sticky top-0 z-40"
      >
        <div className="container mx-auto px-4 py-5">
          <div className="flex justify-between items-center flex-wrap">
            <div className="flex items-center gap-3">
              <div className="text-4xl text-red-600">
                <i className="fas fa-hands-helping"></i>
              </div>
              <div>
                <motion.h1
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  className="text-2xl font-bold"
                >
                  ABVP : MAY I HELP YOU
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="text-sm opacity-90"
                >
                  Connecting students with volunteers
                </motion.p>
              </div>
            </div>

            <nav className="hidden md:flex">
              <ul className="flex gap-6">
                <li><a href="#" className="hover:bg-white hover:bg-opacity-15 px-3 py-2 rounded transition-all">Home</a></li>
                <li><a href="#" className="hover:bg-white hover:bg-opacity-15 px-3 py-2 rounded transition-all">About</a></li>
                <li><a href="#" className="hover:bg-white hover:bg-opacity-15 px-3 py-2 rounded transition-all">Services</a></li>
                <li><a href="#" className="hover:bg-white hover:bg-opacity-15 px-3 py-2 rounded transition-all">Volunteer</a></li>
                <li><a href="#" className="hover:bg-white hover:bg-opacity-15 px-3 py-2 rounded transition-all">Contact</a></li>
              </ul>
            </nav>
            
            <div className="flex gap-3">
              <motion.button
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                onClick={() => navigate('/login')}
                className="bg-transparent border-2 border-white text-white px-4 py-2 rounded font-semibold hover:bg-white hover:text-red-800 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl hover-element inline-flex items-center gap-2"
              >
                <FiUser className="w-4 h-4" />
                Login
              </motion.button>
              
              <motion.button
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                onClick={() => navigate('/register')}
                className="bg-red-600 text-white px-4 py-2 rounded font-semibold hover:bg-red-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl hover-element inline-flex items-center gap-2"
              >
                <FiUserPlus className="w-4 h-4" />
                Register
              </motion.button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="relative bg-gradient-to-r from-blue-900 to-blue-800 text-white py-20 mb-10"
        style={{
          backgroundImage: `linear-gradient(rgba(26, 79, 114, 0.9), rgba(13, 44, 74, 0.9)), url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            ABVP : MAY I HELP YOU
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="text-xl mb-8 opacity-90 max-w-3xl mx-auto"
          >
            ABVP connects students with volunteers for academic, medical, and other essential support services. Register and request assistance today!
          </motion.p>
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            onClick={() => setIsHelpModalOpen(true)}
            className="bg-red-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-red-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl hover-element inline-flex items-center gap-3"
          >
            <i className="fas fa-hands"></i>
            Request Help Now
          </motion.button>
        </div>
      </motion.section>

      <main className="container mx-auto px-4 py-8 space-y-12">
        {/* Image Slider */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.8 }}
        >
          <ImageSlider />
        </motion.section>

        {/* How It Works */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-center mb-10 text-red-800">How It Works</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: "fas fa-user-plus",
                title: "Register as Student",
                description: "Create your student account with basic information to access our help services."
              },
              {
                icon: "fas fa-hands-helping",
                title: "Request Help",
                description: "Select the type of assistance you need and provide your location details."
              }
            ].map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.8 + index * 0.2, duration: 0.6 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="bg-red-800 text-white p-6 text-center">
                  <i className={`${step.icon} text-4xl mb-4`}></i>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-red-800 mb-4">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Help Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.8 }}
          className="bg-white rounded-2xl shadow-lg p-8 md:p-12"
        >
          <div className="text-center space-y-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 2.2, duration: 0.6 }}
              className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-red-600 to-red-700 rounded-full text-white mb-4"
            >
              <FiHelpCircle className="w-10 h-10" />
            </motion.div>

            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.4, duration: 0.6 }}
              className="text-2xl md:text-3xl font-bold text-red-800"
            >
              Need Assistance?
            </motion.h3>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.6, duration: 0.6 }}
              className="text-gray-600 max-w-xl mx-auto"
            >
              Our dedicated team is ready to provide you with the support you need. Click the button below to get started.
            </motion.p>

            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.8, duration: 0.6 }}
              onClick={() => setIsHelpModalOpen(true)}
              className="bg-gradient-to-r from-red-600 to-red-700 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-red-700 hover:to-red-800 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl hover-element inline-flex items-center gap-2"
            >
              <FiHelpCircle className="w-5 h-5" />
              Need Help?
            </motion.button>
          </div>
        </motion.section>
      </main>

      {/* Footer */}
      <footer className="bg-red-800 text-white py-10 mt-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="text-3xl">
                  <i className="fas fa-hands-helping"></i>
                </div>
                <div>
                  <h3 className="text-xl font-bold">ABVP Student Help</h3>
                </div>
              </div>
              <p className="mb-5 opacity-90">Connecting students with volunteers for essential support services since 2015.</p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 bg-white bg-opacity-10 rounded-full flex items-center justify-center hover:bg-red-600 transition-all">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="w-10 h-10 bg-white bg-opacity-10 rounded-full flex items-center justify-center hover:bg-red-600 transition-all">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="w-10 h-10 bg-white bg-opacity-10 rounded-full flex items-center justify-center hover:bg-red-600 transition-all">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#" className="w-10 h-10 bg-white bg-opacity-10 rounded-full flex items-center justify-center hover:bg-red-600 transition-all">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-5 relative pb-3">
                Quick Links
                <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-red-600"></span>
              </h3>
              <ul className="space-y-2">
                <li><a href="#" className="opacity-80 hover:opacity-100 hover:pl-2 transition-all">Home</a></li>
                <li><a href="#" className="opacity-80 hover:opacity-100 hover:pl-2 transition-all">About Us</a></li>
                <li><a href="#" className="opacity-80 hover:opacity-100 hover:pl-2 transition-all">Services</a></li>
                <li><a href="#" className="opacity-80 hover:opacity-100 hover:pl-2 transition-all">Become a Volunteer</a></li>
                <li><a href="#" className="opacity-80 hover:opacity-100 hover:pl-2 transition-all">Testimonials</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-5 relative pb-3">
                Help Categories
                <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-red-600"></span>
              </h3>
              <ul className="space-y-2">
                <li><a href="#" className="opacity-80 hover:opacity-100 hover:pl-2 transition-all">Academic Support</a></li>
                <li><a href="#" className="opacity-80 hover:opacity-100 hover:pl-2 transition-all">Medical Assistance</a></li>
                <li><a href="#" className="opacity-80 hover:opacity-100 hover:pl-2 transition-all">Financial Aid</a></li>
                <li><a href="#" className="opacity-80 hover:opacity-100 hover:pl-2 transition-all">Legal Guidance</a></li>
                <li><a href="#" className="opacity-80 hover:opacity-100 hover:pl-2 transition-all">Mental Health</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-5 relative pb-3">
                Contact Us
                <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-red-600"></span>
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <i className="fas fa-map-marker-alt text-red-400"></i>
                  <span className="opacity-80">123 Education Street, New Delhi</span>
                </li>
                <li className="flex items-center gap-3">
                  <i className="fas fa-phone text-red-400"></i>
                  <span className="opacity-80">+91 11 2345 6789</span>
                </li>
                <li className="flex items-center gap-3">
                  <i className="fas fa-envelope text-red-400"></i>
                  <span className="opacity-80">help@abvp.org</span>
                </li>
                <li className="flex items-center gap-3">
                  <i className="fas fa-clock text-red-400"></i>
                  <span className="opacity-80">Mon-Sat: 9AM - 6PM</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white border-opacity-10 mt-8 pt-6 text-center">
            <p className="opacity-80">© 2023 ABVP Student Help Portal. All rights reserved.</p>
          </div>
        </div>
      </footer>

      <HelpModal
        isOpen={isHelpModalOpen}
        onClose={() => setIsHelpModalOpen(false)}
      />
    </div>
  );
};

export default Home;
