// src/pages/SellerDashboard.js
import { Link } from 'react-router-dom';

const SellerDashboard = ({ onLogout }) => {
  const stats = [
    { label: 'Total Sales', value: '₹24,500', change: '+12%', icon: '💰', color: 'from-emerald-500 to-green-600' },
    { label: 'Products Sold', value: '87', change: '+8%', icon: '📦', color: 'from-blue-500 to-indigo-600' },
    { label: 'New Orders', value: '5', change: '+3%', icon: '🔔', color: 'from-orange-500 to-red-600' },
    { label: 'Pending Approvals', value: '2', change: '0%', icon: '⏳', color: 'from-yellow-500 to-amber-600' },
  ];

  const quickActions = [
    { 
      icon: '📸', 
      title: 'Upload New Creation', 
      description: 'AI will handle all details', 
      to: '/upload',
      color: 'from-indigo-500 to-purple-600'
    },
    { 
      icon: '📊', 
      title: 'View Analytics', 
      description: 'Track your sales & growth', 
      to: '/analytics',
      color: 'from-emerald-500 to-green-600'
    },
    { 
      icon: '💳', 
      title: 'Earnings & Withdraw', 
      description: 'Manage your payments', 
      to: '/earnings',
      color: 'from-amber-500 to-orange-600'
    },
    { 
      icon: '📝', 
      title: 'Manage Inventory', 
      description: 'Update stock & pricing', 
      to: '/manage-stock',
      color: 'from-pink-500 to-rose-600'
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-indigo-50">
      {/* Header */}
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-r from-indigo to-purple rounded-2xl flex items-center justify-center">
                <span className="text-2xl">🧑‍🎨</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-black">
                  Artisan Dashboard
                </h1>
                <p className="text-sm text-gray-600">Welcome back! Ready to create magic?</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <button className="p-2 text-gray-600 hover:text-indigo transition-colors">
                🔔
              </button>
              <button 
                onClick={onLogout}
                className="btn-secondary text-sm px-4 py-2"
              >
                🚪 Sign Out
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <div key={index} className="card p-6 text-center group">
              <div className="text-3xl mb-4">{stat.icon}</div>
              <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
              <div className="text-sm text-gray-600 mb-2">{stat.label}</div>
              <div className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                stat.change.startsWith('+') ? 'bg-emerald-100 text-emerald-800' : 'bg-gray-100 text-gray-800'
              }`}>
                <span className={`mr-1 ${stat.change.startsWith('+') ? 'text-emerald-600' : 'text-gray-600'}`}>
                  {stat.change.startsWith('+') ? '📈' : '➡️'}
                </span>
                {stat.change}
              </div>
            </div>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickActions.map((action, index) => (
              <Link 
                key={index}
                to={action.to}
                className="card p-6 text-center group hover:bg-gradient-to-br hover:from-indigo-50 hover:to-purple-50 transition-all duration-300"
              >
                <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${action.color} flex items-center justify-center text-2xl shadow-lg group-hover:shadow-xl transition-shadow`}>
                  <span>{action.icon}</span>
                </div>
                <h3 className="font-bold text-lg text-gray-900 mb-2">{action.title}</h3>
                <p className="text-gray-600 text-sm">{action.description}</p>
              </Link>
            ))}
          </div>
        </div>

        {/* Recent Activity */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Recent Orders */}
          <div className="lg:col-span-2 card p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
              <span className="mr-2">📋</span>
              Recent Orders
            </h3>
            <div className="space-y-4">
              {[
                {
                  id: '#ORD-1245',
                  product: 'Blue Pottery Vase',
                  customer: 'Priya Sharma',
                  amount: '₹850',
                  status: 'Delivered',
                  date: '2 days ago'
                },
                {
                  id: '#ORD-1244',
                  product: 'Palm Leaf Basket',
                  customer: 'Amit Patel',
                  amount: '₹450',
                  status: 'Shipped',
                  date: '3 days ago'
                },
                {
                  id: '#ORD-1243',
                  product: 'Madhubani Painting',
                  customer: 'Neha Gupta',
                  amount: '₹1,200',
                  status: 'Processing',
                  date: '5 days ago'
                }
              ].map((order, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center">
                      <span className="text-indigo-600 font-semibold">{order.id.charAt(5)}</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{order.product}</h4>
                      <p className="text-sm text-gray-600">{order.customer}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-vermilion">{order.amount}</div>
                    <span className={`inline-block px-2 py-1 text-xs rounded-full ${
                      order.status === 'Delivered' ? 'bg-emerald-100 text-emerald-800' :
                      order.status === 'Shipped' ? 'bg-blue-100 text-blue-800' :
                      'bg-yellow-100 text-yellow-800'
                    }`}>
                      {order.status}
                    </span>
                    <p className="text-xs text-gray-500">{order.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Performance Overview */}
          <div className="card p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Performance</h3>
            <div className="space-y-6">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-600">This Month</span>
                  <span className="text-lg font-bold text-emerald-600">₹8,250</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-emerald-600 h-2 rounded-full" style={{width: '65%'}}></div>
                </div>
              </div>
              
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-600">Conversion Rate</span>
                  <span className="text-lg font-bold text-blue-600">23%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full" style={{width: '23%'}}></div>
                </div>
              </div>
              
              <div className="text-center pt-4 border-t border-gray-200">
                <button className="text-indigo hover:text-purple-600 text-sm font-medium transition-colors">
                  View Full Analytics →
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* AI Upload Teaser */}
        <div className="mt-12 card p-8 text-center bg-gradient-to-r from-indigo-50 to-purple-50">
          <div className="text-6xl mb-6">✨</div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Create Magic?</h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Just upload a photo of your creation. Our AI will automatically generate compelling titles, 
            descriptions, keywords, pricing suggestions, and even craft your artisan story!
          </p>
          <Link 
            to="/upload"
            className="btn-primary inline-flex items-center space-x-2 text-lg px-8 py-4"
          >
            <span>📸</span>
            <span>Upload Your First Creation</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SellerDashboard;