// src/App.js
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useState } from 'react';
import LandingPage from './pages/LandingPage';
import Login from './pages/Login';
import Signup from './pages/Signup';
import BuyerDashboard from './pages/BuyerDashboard';
import SellerDashboard from './pages/SellerDashboard';
import AdminDashboard from './pages/AdminDashboard';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import UploadProduct from './pages/UploadProduct';
import ManageStock from './pages/ManageStock';
import Earnings from './pages/Earnings';

function App() {
  const [userRole, setUserRole] = useState(null); // 'buyer', 'seller', 'admin'
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = (role) => {
    setUserRole(role);
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setUserRole(null);
    setIsAuthenticated(false);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route path="/signup" element={<Signup onSignup={handleLogin} />} />
        {isAuthenticated ? (
          <>
            {userRole === 'buyer' && (
              <>
                <Route path="/buyer" element={<BuyerDashboard onLogout={handleLogout} />} />
                <Route path="/product/:id" element={<ProductDetail />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/checkout" element={<Checkout />} />
              </>
            )}
            {userRole === 'seller' && (
              <>
                <Route path="/seller" element={<SellerDashboard onLogout={handleLogout} />} />
                <Route path="/upload" element={<UploadProduct />} />
                <Route path="/manage-stock" element={<ManageStock />} />
                <Route path="/earnings" element={<Earnings />} />
              </>
            )}
            {userRole === 'admin' && (
              <Route path="/admin" element={<AdminDashboard onLogout={handleLogout} />} />
            )}
            <Route path="*" element={<Navigate to={`/${userRole}`} />} />
          </>
        ) : (
          <Route path="*" element={<Navigate to="/login" />} />
        )}
      </Routes>
    </Router>
  );
}

export default App;