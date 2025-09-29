import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const featuredProducts = [
  {
    name: "Traditional Clay Pot Set",
    seller: "Rajesh Kumar",
    region: "Rajasthan",
    price: 1299,
    rating: 4.8,
    image: "https://imgs.search.brave.com/hxIxvnu0Mlry1dFxd7lS015eHHuuiqNscvBjIUBWUms/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/bmVlcmphaW50ZXJu/YXRpb25hbC5jb20v/c2l0ZXMvZGVmYXVs/dC9maWxlcy9zdHls/ZXMvaW1hZ2UzODB4/MzYwL3B1YmxpYy8y/MDE2LTEwL2dhbGxl/cnktMi5qcGc_aXRv/az1JYVNJRy1Qeg" // Add product image URL here if available
  },
  {
    name: "Handwoven Cotton Saree",
    seller: "Meera Devi",
    region: "West Bengal",
    price: 2899,
    rating: 4.9,
    image: "https://imgs.search.brave.com/B3El89lfIob2cM3L-fohaFC71RA3DhmiGcaCc44Sra4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9iYWxh/cmFtc2FoYS5jb20v/Y2RuL3Nob3AvZmls/ZXMvMjAyNDEwMTZf/MTYyMDQ2XzYwMHgu/anBnP3Y9MTcyOTA4/MzEwNw"
  },
  {
    name: "Organic Honey & Spices",
    seller: "Farmers Collective",
    region: "Kerala",
    price: 899,
    rating: 4.7,
    image: "https://imgs.search.brave.com/y2HoCt2h9lUHhoRDPyn0QJVRTTHG2lSeeiwNgyC7PYo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbmRp/Z2Vub3VzaG9uZXku/Y29tL2Nkbi9zaG9w/L2ZpbGVzL0NlcnRp/ZmllZF9vcmdhbmlj/X2hvbmV5X3dpdGhf/bWl4ZWRfc3BpY2Vz/LmpwZz92PTE3MzM3/MjEzMzImd2lkdGg9/MjUwMA"
  }
];

const FeaturedProducts = () => (
  <section className="bg-white py-10 px-4 max-w-7xl mx-auto rounded-lg shadow mt-12 mb-16">
    <h2 className="text-2xl font-bold text-[#232945] mb-2 text-center">Featured Products</h2>
    <p className="text-gray-600 mb-6 text-center">Handpicked authentic items from our artisan community</p>
    <div className="flex gap-6 flex-wrap justify-center">
      {featuredProducts.map((product, idx) => (
        <div key={idx} className="w-[260px] bg-white rounded-xl shadow-md p-4 flex flex-col">
          <div className="h-36 rounded-xl bg-gray-100 mb-4 flex items-center justify-center overflow-hidden">
            {product.image ? (
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            ) : (
              <span className="text-gray-400">No Image</span>
            )}
          </div>
          <p className="font-semibold text-[#232945]">{product.name}</p>
          <p className="text-sm text-gray-500">{product.seller}</p>
          <p className="text-xs text-gray-400">{product.region}</p>
          <div className="flex items-center justify-between mt-auto">
            <span className="text-vermilion text-lg font-bold">₹{product.price}</span>
            <span className="text-yellow-400 text-sm flex items-center gap-1 font-semibold">
              ⭐ {product.rating}
            </span>
          </div>
        </div>
      ))}
    </div>
  </section>
);


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
      {/* HEADER BAR */}
      <header className="flex items-center justify-between w-full max-w-7xl mx-auto bg-white px-4 py-2 shadow rounded-xl mt-4 mb-6" style={{ minHeight: 60 }}>
  <div className="flex items-center gap-2 flex-shrink-0">
    
    <span className="text-lg font-bold text-[#232945]">KalaMitra</span>
  </div>
  <div className="flex-1 flex justify-center mx-4">
    <div className="flex items-center border border-gray-200 rounded-md px-3 py-1.5 bg-white w-full max-w-lg shadow-sm">
      <span className="text-xl mr-2" style={{ color: '#5B9BD5' }}>🔍</span>
      <input type="text" placeholder="Search products, artisans, categories..." className="bg-transparent outline-none flex-1 text-base text-gray-700" style={{ fontSize: '1rem' }} />
      <button className="bg-[#34A853] text-white px-4 py-1.5 rounded ml-2 font-semibold text-base">AI</button>
    </div>
  </div>
  <div className="flex items-center gap-5 flex-shrink-0 ml-6 text-gray-700 text-base">
    <button className="flex items-center gap-1">
      <span className="text-lg text-[#1E88E5]">🌐</span><span className="text-base">English</span>
    </button>

    <Link to="/faq" className="text-lg text-[#d84315] hover:underline">
      Help
    </Link>

    

    <Link to="/cart" className="text-lg text-[#90A4AE] hover:underline">
      🛒
    </Link>

    <div className="w-7 h-7 bg-gray-100 rounded-full"></div>
  </div>
</header>

      {/* Hero Section */}
      <section className="hero-section relative z-10 min-h-screen flex items-center justify-center px-4">
        <div className="text-center max-w-6xl mx-auto relative z-20">
          <div className={`mb-8 transform transition-all duration-1000 ${showAnimation ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-white to-yellow-200 bg-clip-text text-transparent">KalaMitra</h1>
            <div className="w-24 h-1 bg-gradient-to-r from-saffron to-vermilion mx-auto mb-6 rounded-full"></div>
            <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              Where timeless craftsmanship embraces modern innovation.
              <span className="block mt-4 text-yellow-200">Experience the soul of India through authentic, handmade treasures that tell stories of tradition and artistry.</span>
            </p>
          </div>
         
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link to="/signup" className="btn-primary text-lg">Start Selling</Link>
            <Link to="/login" className="btn-secondary text-lg">Explore Products</Link>
          </div>
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
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">Why Choose <span className="text-vermilion">KalaMitra</span>?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: '✨',
                title: 'AI-Powered Magic',
                description: 'Upload a photo, and our AI instantly generates everything—engaging titles, detailed descriptions, smart pricing, and even a unique artisan story customized for your product!'
              },
              {
                icon: '🌍',
                title: 'Expanding Local Connections',
                description: 'Connecting talented artisans with buyers across the country, creating meaningful local impact.'
              },
              {
                icon: '📖',
                title: 'Cultural Storytelling',
                description: 'Each product carries the artisan’s story, heritage, and culture. We make shopping a journey of tradition, emotion, and connection.'
              }
            ].map((feature, index) => (
              <div key={index} className="card text-center group">
                <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">{feature.icon}</div>
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
          <h2 className="text-4xl font-bold text-center mb-16 text-black">Making a <span className="text-3xl font-bold bg-gradient-to-r from-yellow-300 to-orange-500 bg-clip-text text-transparent">Real Difference</span></h2>
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
                    '🎯 Direct support to Indian artisans',
                    '⚡ Reliable delivery'
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

      {/* Featured Products Section */}
      <FeaturedProducts />

      {/* Footer */}
      <footer className="bg-gradient-to-br from-gray-900 to-indigo-900 text-white py-16 px-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 cultural-pattern"></div>
        <div className="max-w-7xl mx-auto text-center lg:text-left grid grid-cols-1 lg:grid-cols-4 gap-12 relative z-10">
          {/* Brand Section */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold bg-gradient-to-r from-yellow-300 to-orange-500 bg-clip-text text-transparent">KalaMitra</h3>
            <p className="text-gray-300 leading-relaxed max-w-xs">
              Celebrating India's artisans by bridging tradition with technology. Empowering creators and preserving heritage.
            </p>
            <div className="flex justify-center lg:justify-start space-x-6">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-yellow-300 transition-colors">
                <span className="text-2xl">🌐</span>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-yellow-300 transition-colors">
                <span className="text-2xl">🐦</span>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-yellow-300 transition-colors">
                <span className="text-2xl">📸</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-yellow-300 mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/faq" className="text-gray-300 hover:text-yellow-300 transition-colors">FAQs</Link></li>
              <li><Link to="/login" className="text-gray-300 hover:text-yellow-300 transition-colors">Login</Link></li>
              <li><Link to="/signup" className="text-gray-300 hover:text-yellow-300 transition-colors">Sign Up</Link></li>
              <li><a href="mailto:support@KalaMitra.com" className="text-gray-300 hover:text-yellow-300 transition-colors">Contact Us</a></li>
            </ul>
          </div>

          

          {/* Newsletter Signup */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-yellow-300 mb-4">Stay Updated</h4>
            <p className="text-gray-300">Subscribe to our newsletter for the latest artisan stories and offers.</p>
            <form className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-300"
                required
              />
              <button
                type="submit"
                className="btn-primary py-3 px-6 rounded-lg text-sm hover:scale-105 transition-all duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-gray-700 text-center">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} KalaMitra | All rights reserved |
            <a href="/terms" className="text-yellow-300 hover:underline ml-2">Terms</a> |
            <a href="/privacy" className="text-yellow-300 hover:underline ml-2">Privacy</a>
          </p>
          <p className="text-xs text-gray-500 mt-2">
            Built with ❤️ in India | Version 1.0 | Last updated: {new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric', hour: '2-digit', minute: '2-digit', hour12: true })} IST
          </p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
