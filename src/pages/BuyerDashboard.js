// src/pages/BuyerDashboard.js
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

const mockProducts = [
  { 
    id: 1, 
    name: 'Rajasthani Blue Pottery Vase', 
    price: 850, 
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&h=400&fit=crop',
    story: 'Handcrafted by the skilled potters of Jaipur using traditional techniques passed down through generations.',
    category: 'Pottery',
    rating: 4.9,
    reviews: 127
  },
  { 
    id: 2, 
    name: 'Kerala Palm Leaf Basket', 
    price: 450, 
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=400&fit=crop',
    story: 'Woven by women artisans in rural Kerala using sustainable palm leaves.',
    category: 'Baskets',
    rating: 4.8,
    reviews: 89
  },
  { 
    id: 3, 
    name: 'Banarasi Silk Saree', 
    price: 2450, 
    image: 'https://images.unsplash.com/photo-1585487000156-3d9178e3247d?w=400&h=400&fit=crop',
    story: 'Meticulously woven on traditional looms by master weavers of Varanasi.',
    category: 'Textiles',
    rating: 5.0,
    reviews: 234
  },
  { 
    id: 4, 
    name: 'Madhubani Folk Art Painting', 
    price: 1200, 
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop',
    story: 'Created using natural colors by Bihar\'s renowned Madhubani artists.',
    category: 'Paintings',
    rating: 4.7,
    reviews: 156
  },
];

const BuyerDashboard = ({ onLogout }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const navigate = useNavigate();

  const filteredProducts = mockProducts.filter(product => 
    (product.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
     product.story.toLowerCase().includes(searchTerm.toLowerCase())) &&
    (selectedCategory === 'all' || product.category.toLowerCase() === selectedCategory.toLowerCase())
  );

  const categories = ['all', 'Pottery', 'Baskets', 'Textiles', 'Paintings'];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-4">
              <Link to="/" className="text-2xl font-bold text-black">
                ArtisanHub
              </Link>
              <div className="hidden md:block">
                <span className="text-sm text-gray-500">👋 Welcome, Guest</span>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <Link 
                to="/cart" 
                className="relative p-2 text-gray-600 hover:text-indigo transition-colors"
              >
                🛒
                <span className="absolute -top-2 -right-2 bg-vermilion text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  3
                </span>
              </Link>
              <button 
                onClick={onLogout}
                className="btn-secondary text-sm"
              >
                🚪 Logout
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Search and Filters */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-6 mb-8">
          {/* Search Bar */}
          <div className="flex-1 relative">
            <input
              type="text"
              placeholder="🔍 Search for handmade treasures, artisan stories..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-white border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-indigo-200 focus:border-transparent transition-all duration-300 text-lg shadow-lg"
            />
          </div>
          
          {/* Category Filter */}
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="px-6 py-4 bg-white border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-indigo-200 focus:border-transparent transition-all duration-300 text-lg shadow-lg"
          >
            {categories.map(cat => (
              <option key={cat} value={cat} className="py-4">
                {cat === 'all' ? 'All Categories' : cat}
              </option>
            ))}
          </select>
        </div>

        {/* Stats Bar */}
        <div className="bg-white rounded-2xl p-6 mb-8 shadow-lg">
          <div className="flex justify-between items-center text-sm">
            <span className="text-gray-600">Showing {filteredProducts.length} of {mockProducts.length} treasures</span>
            <span className="text-indigo font-semibold">Sort by: Newest</span>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredProducts.map(product => (
            <Link 
              key={product.id} 
              to={`/product/${product.id}`}
              className="card group overflow-hidden hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-500"
            >
              {/* Product Image */}
              <div className="relative overflow-hidden rounded-2xl mb-4 h-64">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-3 right-3 bg-vermilion/90 text-white px-2 py-1 rounded-full text-xs font-bold">
                  ⭐ {product.rating}
                </div>
                <div className="absolute bottom-2 left-2 right-2 bg-gradient-to-t from-black/60 to-transparent p-2">
                  <span className="text-white text-xs">{product.reviews} reviews</span>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-4">
                <h3 className="font-bold text-lg text-gray-800 mb-2 line-clamp-2 group-hover:text-indigo transition-colors">
                  {product.name}
                </h3>
                
                <div className="flex items-center justify-between mb-3">
                  <span className="text-2xl font-bold text-vermilion">₹{product.price}</span>
                  <span className="text-xs bg-emerald/20 text-emerald px-2 py-1 rounded-full">
                    {product.category}
                  </span>
                </div>

                <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                  {product.story}
                </p>

                <button className="w-full btn-primary text-sm py-3 rounded-xl transform hover:scale-105 transition-all duration-300">
                  ✨ View Artisan Story
                </button>
              </div>
            </Link>
          ))}
        </div>

        {/* No Results */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-gray-600 mb-2">No treasures found</h3>
            <p className="text-gray-500 mb-6">Try adjusting your search or explore our categories</p>
            <button 
              onClick={() => { setSearchTerm(''); setSelectedCategory('all'); }}
              className="btn-primary"
            >
              Explore All Products
            </button>
          </div>
        )}

        {/* Load More Button */}
        {filteredProducts.length > 0 && (
          <div className="text-center mt-12">
            <button className="btn-secondary text-lg px-8 py-4">
              🎨 Load More Beautiful Creations
            </button>
          </div>
        )}
        
      </div>
      <footer className="bg-gradient-to-br from-gray-900 to-indigo-900 text-white py-16 px-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 cultural-pattern"></div>
        <div className="max-w-7xl mx-auto text-center lg:text-left grid grid-cols-1 lg:grid-cols-4 gap-12 relative z-10">
          {/* Brand Section */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold bg-gradient-to-r from-yellow-300 to-orange-500 bg-clip-text text-transparent">ArtisanHub</h3>
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
              <li><a href="mailto:support@artisanhub.com" className="text-gray-300 hover:text-yellow-300 transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-yellow-300 mb-4">Get in Touch</h4>
            <p className="text-gray-300">Email: <a href="mailto:support@artisanhub.com" className="hover:text-yellow-300 transition-colors">support@artisanhub.com</a></p>
            <p className="text-gray-300">Phone: +91-123-456-7890</p>
            <p className="text-gray-300">Support Hours: 9 AM - 6 PM IST, Mon-Sat</p>
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
            © {new Date().getFullYear()} ArtisanHub | All rights reserved |
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

export default BuyerDashboard;