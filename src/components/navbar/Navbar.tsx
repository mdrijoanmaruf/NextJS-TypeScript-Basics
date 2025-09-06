import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Left: Brand */}
          <div className="flex-shrink-0">
            <h1 className="text-white text-2xl font-bold tracking-wide">Rijoan</h1>
          </div>

          {/* Desktop Nav Items */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="#" className="text-white hover:bg-white hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition duration-300">Home</a>
              <a href="#" className="text-white hover:bg-white hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition duration-300">About</a>
              <a href="#" className="text-white hover:bg-white hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition duration-300">Contact</a>
            </div>
          </div>

          {/* Right: Login Button */}
          <div className="hidden md:block">
            <button className="bg-white text-blue-600 hover:bg-gray-100 px-4 py-2 rounded-md text-sm font-medium transition duration-300">
              Login
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              className="text-white hover:text-gray-300 focus:outline-none focus:text-gray-300"
            >
              <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"/>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-blue-700">
          <a href="#" className="text-white hover:bg-white hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">Home</a>
          <a href="#" className="text-white hover:bg-white hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">About</a>
          <a href="#" className="text-white hover:bg-white hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">Contact</a>
          <button className="text-white hover:bg-white hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium w-full text-left">
            Login
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;