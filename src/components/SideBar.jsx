import React from 'react';
import {  Edit, Users } from 'lucide-react';
import bp from "../assets/bp.png"
import md from "../assets/md.png"

const Sidebar = () => {
  return (
    <div className="w-80 bg-[#F5F5F5] min-h-screen p-6">
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-2" style={{ fontFamily: 'Poppins ' }}>
          Control Centre
        </h2>
        <p className="text-sm text-gray-600" style={{ fontFamily: 'Poppins' }}>
          Select an option below to edit
        </p>
      </div>

      <div>
        <h3 className="text-xs font-semibold text-gray-900 mb-4 uppercase tracking-wider" style={{ fontFamily: 'Poppins ' }}>
          BUSINESS
        </h3>
        <div className="space-y-1">
  <button className="flex items-center w-full p-3 text-left text-gray-700 hover:bg-gray-200 rounded-lg transition-colors group">
    <div className="w-8 h-8 flex items-center justify-center mr-3">
      <img className="w-4 h-4" src={bp} alt="bp" />
    </div>
    <span
      className="text-sm font-medium border-b border-gray-300 pb-1"
      style={{ fontFamily: 'Poppins' }}
    >
      Business Profile
    </span>
  </button>

  <button className="flex items-center w-full p-3 text-left text-gray-700 hover:bg-gray-200 rounded-lg transition-colors group">
    <div className="w-8 h-8 flex items-center justify-center mr-3">
      <img className="w-4 h-4" src={md} alt="md" />
    </div>
    <span
      className="text-sm font-medium border-b border-gray-300 pb-1"
      style={{ fontFamily: 'Poppins' }}
    >
      Users & Devices
    </span>
  </button>
</div>

      </div>
    </div>
  );
};

export default Sidebar