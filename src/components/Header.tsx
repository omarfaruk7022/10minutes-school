import { FiSearch, FiPhone } from "react-icons/fi";
import { MdKeyboardArrowDown } from "react-icons/md";

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="text-2xl font-bold text-gray-900">
              <span className="text-red-500">10</span>
              <span className="text-black">MINUTE</span>
              <div className="text-sm font-normal text-gray-600">SCHOOL</div>
            </div>
          </div>

          {/* Search Bar */}
          <div className="hidden md:flex flex-1 max-w-lg mx-8">
            <div className="relative w-full">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FiSearch className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-green-500 focus:border-green-500"
                placeholder="কোর্স, বই, ভিডিও খুঁজে নিন সহজেই..."
              />
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            <div className="flex items-center space-x-1 text-gray-700 hover:text-gray-900 cursor-pointer">
              <span className="bengali-text">ক্লাস ৬-১২</span>
              <MdKeyboardArrowDown className="h-4 w-4" />
            </div>
            <div className="flex items-center space-x-1 text-gray-700 hover:text-gray-900 cursor-pointer">
              <span className="bengali-text">স্কিলস</span>
              <MdKeyboardArrowDown className="h-4 w-4" />
            </div>
            <span className="text-gray-700 hover:text-gray-900 cursor-pointer bengali-text">
              ভর্তি পরীক্ষা
            </span>
            <div className="flex items-center space-x-1 text-gray-700 hover:text-gray-900 cursor-pointer">
              <span className="bengali-text">অ্যাডমিশন গাইড</span>
              <MdKeyboardArrowDown className="h-4 w-4" />
            </div>
            <div className="flex items-center space-x-1 text-gray-700 hover:text-gray-900 cursor-pointer">
              <span className="bengali-text">ইউনিভার্সিটি কোর্স</span>
              <MdKeyboardArrowDown className="h-4 w-4" />
            </div>
            <div className="flex items-center space-x-1 text-gray-700 hover:text-gray-900 cursor-pointer">
              <span className="bengali-text">আরো</span>
              <MdKeyboardArrowDown className="h-4 w-4" />
            </div>
          </nav>

          {/* Right side */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1 text-gray-700 cursor-pointer">
              <span>EN</span>
              <MdKeyboardArrowDown className="h-4 w-4" />
            </div>
            <div className="flex items-center space-x-2 text-gray-700">
              <FiPhone className="h-4 w-4" />
              <span>16910</span>
            </div>
            <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md font-medium bengali-text">
              লগ-ইন
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
