// src/pages/LandingPage.js
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const LandingPage = () => {
  const [showAnimation, setShowAnimation] = useState(false);

  useEffect(() => {
    setShowAnimation(true);
  }, []);

  const floatingShapes = [
    { size: 80, top: 20, left: 10, delay: 0 },
    { size: 120, top: 60, left: 80, delay: 2 },
    { size: 60, top: 80, left: 20, delay: 4 },
    { size: 100, top: 30, left: 90, delay: 1 },
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated Background */}
      

      {/* Hero Section */}
      <section className="hero-section relative z-10 min-h-screen flex items-center justify-center px-4">
        <div className="text-center max-w-6xl mx-auto relative z-20">
          {/* Main Title */}
          <div className={`mb-8 transform transition-all duration-1000 ${showAnimation ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-white to-yellow-200 bg-clip-text text-transparent">
              ArtisanHub
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-saffron to-vermilion mx-auto mb-6 rounded-full"></div>
            <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              Where ancient craftsmanship meets modern technology. 
              <span className="block mt-4 text-yellow-200">Discover the soul of India through authentic handmade treasures.</span>
            </p>
          </div>

          {/* Stats Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
            {[
              { number: '50K+', label: 'Artisans', icon: '🪶' },
              { number: '1M+', label: 'Products', icon: '🪔' },
              { number: '98%', label: 'Satisfaction', icon: '⭐' }
            ].map((stat, index) => (
              <div key={index} className="card text-center p-6 transform hover:scale-105 transition-transform duration-300">
                <div className="text-4xl mb-4">{stat.icon}</div>
                <div className="text-3xl font-bold text-indigo mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link 
              to="/signup" 
              className="btn-primary text-lg"
            >
              🚀 Start Selling
            </Link>
            <Link 
              to="/login" 
              className="btn-secondary text-lg"
            >
              👁️ Explore Products
            </Link>
          </div>

          {/* Scroll Indicator */}
          <div className="animate-bounce">
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-bounce"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 cultural-pattern">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">
            Why Choose <span className="text-vermilion">ArtisanHub</span>?
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: '✨',
                title: 'AI-Powered Magic',
                description: 'Upload a photo, our AI creates everything - titles, descriptions, pricing, and even your artisan story!'
              },
              {
                icon: '🌍',
                title: 'Global Reach',
                description: 'From local bazaars to international buyers. Reach customers worldwide with zero effort.'
              },
              {
                icon: '🚚',
                title: 'Hassle-Free Delivery',
                description: 'Integrated with India Post, Delhivery, and more. You focus on crafting, we handle the rest.'
              }
            ].map((feature, index) => (
              <div key={index} className="card text-center group">
                <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 bg-gradient-to-br from-emerald to-turquoise">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-black">
            Making a <span className="text-yellow-200">Real Difference</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="card p-8">
                <h3 className="text-3xl font-bold mb-6 text-indigo">For Artisans</h3>
                <div className="space-y-4">
                  {[
                  '💰 Higher income through wider reach',
                  '📦 Reduced unsold stock with smart pricing',
                  '🌟 Digital empowerment for rural creators',
                  '🎯 Zero technical skills required'
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-center space-x-3 text-gray-700">
                      <div className="w-2 h-2 bg-indigo rounded-full"></div>
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            
            <div className="relative">
              <div className="card p-8">
                <h3 className="text-3xl font-bold mb-6 text-indigo">For Buyers</h3>
                <div className="space-y-4">
                  {[
                    '🛍️ Authentic handmade treasures',
                    '📖 Stories behind every creation',
                    '🎯 🇮🇳 Direct support to Indian artisans',
                    '⚡ Fast, reliable delivery'
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-center space-x-3 text-gray-700">
                      <div className="w-2 h-2 bg-indigo rounded-full"></div>
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">Join the Artisan Revolution</h3>
          <p className="mb-6 max-w-2xl mx-auto">
            Preserving India's rich cultural heritage, one handmade creation at a time. 
            Supporting Vocal for Local & Atmanirbhar Bharat.
          </p>
          <div className="flex justify-center space-x-6 mb-6">
            <Link to="/login" className="btn-secondary">Login</Link>
            <Link to="/signup" className="btn-primary">Get Started</Link>
          </div>
          <div className="border-t border-gray-700 pt-6">
            <p>🇮🇳 English | हिंदी | Designed for low-bandwidth | Mobile-first</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;