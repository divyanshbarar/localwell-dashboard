// Header Component
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { User, } from 'lucide-react'
import lc from "../assets/lc.png"

const  Header = () => {
  const location = useLocation();

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-full mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
           <img className="w-32 h-auto object-contain" src={lc} alt="logo" />
          </div>
          
          <nav className="flex">
            <Link
              to="/"
              className={`px-6 py-4 text-sm font-medium relative ${
                isActive('/') && location.pathname === '/'
                  ? 'text-pink-500'
                  : 'text-gray-600 hover:text-gray-800'
              }`}
              style={{ fontFamily: 'Poppins ' }}
            >
              Purchases
              {isActive('/') && location.pathname === '/' && (
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-pink-500"></div>
              )}
            </Link>
            <Link
              to="/stock"
              className={`px-6 py-4 text-sm font-medium relative ${
                isActive('/stock')
                  ? 'text-pink-500'
                  : 'text-gray-600 hover:text-gray-800'
              }`}
              style={{ fontFamily: 'Poppins ' }}
            >
              Stock
              {isActive('/stock') && (
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-pink-500"></div>
              )}
            </Link>
            <Link
              to="/sales"
              className={`px-6 py-4 text-sm font-medium relative ${
                isActive('/sales')
                  ? 'text-pink-500'
                  : 'text-gray-600 hover:text-gray-800'
              }`}
              style={{ fontFamily: 'Poppins ' }}
            >
              Sales
              {isActive('/sales') && (
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-pink-500"></div>
              )}
            </Link>
          </nav>

          <div className="flex items-center space-x-3">
           
            <div className="w-13 h-13 bg-gray-300 rounded-full flex-column items-center justify-center text-center">
            
              <div className="text-md font-semibold text-gray-900" style={{ fontFamily: 'Poppins ' }}>NA</div>
              <div className="text-xs text-gray-500" style={{ fontFamily: 'Poppins ' }}>PROFILE</div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;