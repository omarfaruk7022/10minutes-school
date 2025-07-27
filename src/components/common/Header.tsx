"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { FiSearch, FiPhone } from "react-icons/fi";
import { MdKeyboardArrowDown } from "react-icons/md";
import logo from "../../../public/images/10mslogo-svg.svg";
import Link from "next/link";
export default function Header() {
  const [currentLanguage, setCurrentLanguage] = useState("EN");
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);

  useEffect(() => {
    const urlLang = new URL(window.location.href).searchParams.get("lang");
    if (urlLang === "EN" || urlLang === "BN") {
      setCurrentLanguage(urlLang);
    }
  }, []);

  const handleLanguageChange = (language: "EN" | "BN") => {
    const url = new URL(window.location.href);
    url.searchParams.set("lang", language);
    setCurrentLanguage(language);
    window.location.href = url.toString();
  };

  const getText = (en: string, bn: string) => {
    return currentLanguage === "EN" ? en : bn;
  };

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href={"/"} className="flex-shrink-0">
            <Image width={100} height={100} alt="logo" src={logo}></Image>
          </Link>

          {/* Search Bar */}
          <div className="hidden md:flex flex-1 max-w-lg mx-8">
            <div className="relative w-full">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FiSearch className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-green-500 focus:border-green-500"
                placeholder={getText(
                  "Search courses, books, videos easily...",
                  "কোর্স, বই, ভিডিও খুঁজে নিন সহজেই..."
                )}
              />
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            <div className="flex items-center space-x-1 text-gray-700 hover:text-gray-900 cursor-pointer">
              <span className={currentLanguage === "BN" ? "bengali-text" : ""}>
                {getText("Skills", "স্কিলস")}
              </span>
              <MdKeyboardArrowDown className="h-4 w-4" />
            </div>
            <span className="text-gray-700 hover:text-gray-900 cursor-pointer">
              <span className={currentLanguage === "BN" ? "bengali-text" : ""}>
                {getText("Admission Test", "ভর্তি পরীক্ষা")}
              </span>
            </span>

            <div className="flex items-center space-x-1 text-gray-700 hover:text-gray-900 cursor-pointer">
              <span className={currentLanguage === "BN" ? "bengali-text" : ""}>
                {getText("University Courses", "ইউনিভার্সিটি কোর্স")}
              </span>
              <MdKeyboardArrowDown className="h-4 w-4" />
            </div>
            <div className="flex items-center space-x-1 text-gray-700 hover:text-gray-900 cursor-pointer">
              <span className={currentLanguage === "BN" ? "bengali-text" : ""}>
                {getText("More", "আরো")}
              </span>
              <MdKeyboardArrowDown className="h-4 w-4 mr-5" />
            </div>
          </nav>

          {/* Right side */}
          <div className="flex items-center space-x-4">
            {/* Language Switcher */}
            <div className="relative">
              <div
                className="flex items-center space-x-1 text-gray-700 cursor-pointer hover:text-gray-900"
                onClick={() =>
                  setIsLanguageDropdownOpen(!isLanguageDropdownOpen)
                }
              >
                <span className="font-medium">{currentLanguage}</span>
                <MdKeyboardArrowDown className="h-4 w-4" />
              </div>

              {/* Language Dropdown */}
              {isLanguageDropdownOpen && (
                <div className="absolute right-0 mt-2 w-20 bg-white border border-gray-200 rounded-md shadow-lg z-50">
                  <div className="py-1">
                    <button
                      onClick={() => handleLanguageChange("EN")}
                      className={`block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 cursor-pointer ${
                        currentLanguage === "EN"
                          ? "bg-green-50 text-green-600 font-medium"
                          : "text-gray-700"
                      }`}
                    >
                      EN
                    </button>
                    <button
                      onClick={() => handleLanguageChange("BN")}
                      className={`block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 cursor-pointer ${
                        currentLanguage === "BN"
                          ? "bg-green-50 text-green-600 font-medium"
                          : "text-gray-700"
                      }`}
                    >
                      BN
                    </button>
                  </div>
                </div>
              )}
            </div>

            <div className="flex items-center space-x-2 text-gray-700">
              <FiPhone className="h-4 w-4" />
              <span>16910</span>
            </div>
            <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md font-medium">
              <span className={currentLanguage === "BN" ? "bengali-text" : ""}>
                {getText("Login", "লগ-ইন")}
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Click outside to close dropdown */}
      {isLanguageDropdownOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setIsLanguageDropdownOpen(false)}
        />
      )}
    </header>
  );
}
