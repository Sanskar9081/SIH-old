// src/pages/Login.js
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('buyer');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      onLogin(role);
      navigate(`/${role}`);
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12 bg-gradient-to-br from-indigo to-purple-800 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 cultural-pattern"></div>
      
      <div className="relative z-10 w-full max-w-md">
        {/* Card */}
        <div className="card">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold text-black mb-2">
            Welcome Back
            </h2>
            <p className="text-gray-600">Sign in to your artisan account</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email Input */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
              <div className="relative">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-4 bg-gray-50 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-indigo-200 focus:border-transparent transition-all duration-300 text-lg"
                  required
                />
                <span className="absolute right-4 top-5 text-gray-400">📧</span>
              </div>
            </div>

            {/* Password Input */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Password</label>
              <div className="relative">
                <input
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-4 bg-gray-50 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-indigo-200 focus:border-transparent transition-all duration-300 text-lg"
                  required
                />
                <span className="absolute right-4 top-5 text-gray-400">🔒</span>
              </div>
            </div>

            {/* Role Selection */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">I am a...</label>
              <select
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="w-full px-4 py-4 bg-gradient-to-r from-indigo-50 to-purple-50 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-indigo-200 focus:border-transparent transition-all duration-300 text-lg appearance-none"
              >
                <option value="buyer" className="bg-white">🛍️ Buyer - Explore beautiful crafts</option>
                <option value="seller" className="bg-white">🧑‍🎨 Artisan - Sell your creations</option>
                <option value="admin" className="bg-white">⚙️ Admin - Manage platform</option>
              </select>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              disabled={isLoading}
              className={`w-full btn-primary text-lg py-4 rounded-xl transform transition-all duration-300 ${
                isLoading ? 'opacity-50 cursor-not-allowed' : 'hover:scale-105'
              }`}
            >
              {isLoading ? (
                <span className="flex items-center justify-center space-x-2">
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>Signing In...</span>
                </span>
              ) : (
                '🚀 Sign In with Magic'
              )}
            </button>
          </form>

          {/* Divider */}
          <div className="my-8 flex items-center">
            <div className="flex-1 h-px bg-gray-200"></div>
            <span className="px-4 text-gray-500 text-sm">or</span>
            <div className="flex-1 h-px bg-gray-200"></div>
          </div>

          {/* Alternative Actions */}
          <div className="text-center space-y-4">
            <Link 
              to="/signup" 
              className="block w-full btn-secondary text-lg py-3"
            >
              ✨ Create New Account
            </Link>
            <p className="text-sm text-gray-500">
              By continuing, you agree to our{' '}
              <span className="text-indigo-600 hover:underline">Terms of Service</span>{' '}
              and{' '}
              <span className="text-indigo-600 hover:underline">Privacy Policy</span>
            </p>
          </div>
        </div>

        {/* Demo Credentials */}
        <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-xl">
          <p className="text-sm text-yellow-800 text-center">
            <strong>Demo Login:</strong> Use <code>demo@KalaMitra.com</code> / <code>password123</code>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;