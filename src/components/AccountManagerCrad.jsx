import { User, Phone, Mail, Edit, Users } from 'lucide-react';
import pp from "../assets/pp.jpg"
const AccountManagerCard = () => {
  return (
    <div className="bg-white p-6 w-96">
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-2" style={{ fontFamily: 'Poppins ' }}>
          My Account Manager
        </h2>
        <p className="text-sm text-gray-600" style={{ fontFamily: 'Poppins ' }}>
          Feel free to reach out to them for any queries
        </p>
      </div>

      <div className="mb-6">
        <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4" style={{ fontFamily: 'Poppins ' }}>
          LEVEL 1 MANAGER
        </h3>
        
      <div className="flex-column items-start space-x-4 mb-6">
            <div className="w-20 h-20 shadow-xl rounded-full overflow-hidden flex-shrink-0">
                <img
                src={pp}
                alt="Profile"
                className="w-30 h-30 object-cover"
                />
            </div>



          
          <div className="flex-1">
            <h4 className="text-lg font-semibold text-gray-900 mb-1" style={{ fontFamily: 'Poppins ' }}>
              Pallavi Rai
            </h4>
            <p className="text-sm text-gray-600 mb-4" style={{ fontFamily: 'Poppins ' }}>
              Customer Excellence Officer
            </p>
          </div>
        </div>
        
        <div className="space-y-3 text-xs text-gray-700 mb-6" style={{ fontFamily: 'Poppins ' }}>
          <p className="font-medium">Hi, I'm Pallavi. Your L1 Account Manager</p>
          <p>Talk to me on how to get the best out of LocalWell</p>
          
          <p className="leading-relaxed">
            Since 2019, I've helped over 300 pharmacies across Andhra Pradesh, Telangana, and other regions digitize their daily operations.
          </p>
          
          <div className="space-y-1">
            <p><span className="font-medium">Can speak:</span> English and Hindi.</p>
            <p><span className="font-medium">Available:</span> 9:30 am to 7:30 pm (Mon-Sat)</p>
          </div>
        </div>
      </div>

      <div className="space-y-3">
        <div className="flex items-center space-x-3 text-sm text-gray-700 p-2" style={{ fontFamily: 'Poppins ' }}>
          <Mail className="w-4 h-4 text-purple-600" />
          <span>pallavi.rai@localwell.in</span>
        </div>
        
        <button className="w-60 bg-purple-900 hover:bg-purple-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors flex items-center justify-center space-x-2" style={{ fontFamily: 'Poppins ' }}>
          <Phone className="w-4 h-4" />
          <span>Call Now</span>
        </button>
      </div>
    </div>
  );
};

export default AccountManagerCard