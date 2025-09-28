// src/pages/Signup.js
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Signup = ({ onSignup }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('buyer');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API signup delay
    setTimeout(() => {
      onSignup(role);
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
            Create Account
            </h2>
            <p className="text-gray-600">Sign up to become an artisan or a buyer</p>
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

            {/* Signup Button */}
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
                  <span>Creating Account...</span>
                </span>
              ) : (
                '✨ Create Account'
              )}
            </button>
          </form>

          {/* Alternative Actions */}
          <div className="text-center space-y-4 mt-6">
            <Link to="/login" className="block w-full btn-secondary text-lg py-3">
              🚪 Already have an account? Sign In
            </Link>
            <p className="text-sm text-gray-500">
              By signing up, you agree to our{' '}
              <span className="text-indigo-600 hover:underline cursor-pointer">Terms of Service</span> and{' '}
              <span className="text-indigo-600 hover:underline cursor-pointer">Privacy Policy</span>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
