export default function Banner() {
  return (
    <div className="bg-gradient-to-r from-blue-900 via-purple-900 to-blue-800 relative overflow-hidden">
      <div className="absolute inset-0 bg-black bg-opacity-20"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between">
          {/* Left side - KIDS ENGLISH */}
          <div className="flex items-center space-x-4">
            <div className="text-6xl font-bold">
              <span className="text-green-400">K</span>
              <span className="text-red-400">I</span>
              <span className="text-yellow-400">D</span>
              <span className="text-blue-400">S</span>
            </div>
            <div className="text-white text-2xl font-bold">ENGLISH</div>
          </div>

          {/* Center content */}
          <div className="text-center text-white">
            <div className="text-sm mb-2 bengali-text">ইংলিশ শেখার</div>
            <div className="bg-yellow-400 text-black px-4 py-2 rounded-lg font-bold text-xl bengali-text mb-4">
              ফ্রি কোর্স
            </div>
            <div className="text-xl font-bold bengali-text mb-4">
              আপনার সিম্পল ভাষায় আপনার কোর্সটি করতে
              <br />
              দারুণ মজার শেখার জগতে!
            </div>
            <div className="flex space-x-4 justify-center">
              <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-md bengali-text">
                নিবন্ধন
              </button>
              <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-md bengali-text">
                ফ্রিতে জয়েন
              </button>
              <button className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-2 rounded-md bengali-text">
                উত্তরা
              </button>
            </div>
          </div>

          {/* Right side - Characters */}
          <div className="flex items-center space-x-4">
            <div className="text-right text-white">
              <div className="text-sm bengali-text mb-2">
                রেজিস্ট্রেশন করতে এখানে
              </div>
              <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md font-bold bengali-text">
                ক্লিক করুন
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Close button */}
      <button className="absolute top-4 right-4 text-white hover:text-gray-300">
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>
  );
}
