import React from 'react';
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import Header from '../components/Header';
import PurchasesPage from './PurchasePage';
import StockPage from './StockPage';
import SalesPage from './SalesPage';
import Sidebar from '../components/SideBar';



// Main App Component
const LocalWellApp = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100" style={{ fontFamily: 'Poppins ' }}>
        <Header />
        <div className="flex m-5 rounded-[10px] shadow-2xl z-20">
        <Sidebar />
        <Routes>
          <Route path="/" element={<PurchasesPage />} />
          <Route path="/stock" element={<StockPage />} />
          <Route path="/sales" element={<SalesPage />} />
        </Routes>
        </div>
       
      </div>
    </Router>
  );
};

export default LocalWellApp;