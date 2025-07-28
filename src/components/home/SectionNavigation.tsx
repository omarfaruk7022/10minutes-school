"use client";

import { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import type { Swiper as SwiperType } from "swiper";

import "swiper/css";
import "swiper/css/navigation";

export default function SectionNavigation() {
  const [activeTab, setActiveTab] = useState("instructor");
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const swiperRef = useRef<SwiperType | null>(null);

  const [currentLanguage, setCurrentLanguage] = useState("EN");

  useEffect(() => {
    const urlLang = new URL(window.location.href).searchParams.get("lang");
    if (urlLang === "EN" || urlLang === "BN") {
      setCurrentLanguage(urlLang);
    }
  }, []);
  const getText = (textObj: { EN: string; BN: string }) => {
    return currentLanguage === "EN" ? textObj.EN : textObj.BN;
  };

  const tabs = [
    { id: "instructor", name: { EN: "Instructor", BN: "কোর্স ইন্সট্রাক্টর" } },
    {
      id: "laid-out",
      name: {
        EN: "How the course is laid out",
        BN: "কোর্সটি যেভাবে সাজানো হয়েছে",
      },
    },
    {
      id: "highlights",
      name: {
        EN: "What you will learn by doing the course",
        BN: "কোর্সটি করে যা শিখবেন",
      },
    },
    {
      id: "about",
      name: { EN: "Course details", BN: "কোর্স সম্পর্কে বিস্তারিত" },
    },
    {
      id: "features",
      name: { EN: "Course Exclusive Feature", BN: "কোর্স এক্সক্লুসিভ ফিচার" },
    },
    {
      id: "testimonials",
      name: { EN: "Students opinion", BN: "শিক্ষার্থীরা যা বলছে" },
    },
  ];

  return (
    <div className="relative w-full bg-white py-2 px-4 md:px-6 lg:px-8 border-b border-gray-200">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Custom Swiper Prev Button */}
        <button
          className={`swiper-button-prev-custom absolute left-0 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full flex items-center justify-center shadow-md focus:outline-none transition bg-[#7F7F7F] ${
            isBeginning ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
          }`}
          aria-label="Previous"
          disabled={isBeginning}
        >
          <FaChevronLeft className="w-5 h-5 text-white" />
        </button>

        <Swiper
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
            setIsBeginning(swiper.isBeginning);
            setIsEnd(swiper.isEnd);
          }}
          onSlideChange={(swiper) => {
            setIsBeginning(swiper.isBeginning);
            setIsEnd(swiper.isEnd);
          }}
          modules={[Navigation]}
          slidesPerView={"auto"}
          spaceBetween={0}
          navigation={{
            prevEl: ".swiper-button-prev-custom",
            nextEl: ".swiper-button-next-custom",
          }}
          className="w-full mx-12"
        >
          {tabs.map((tab) => (
            <SwiperSlide key={tab.id} className="!w-auto">
              <button
                className={`px-4 py-2 text-base font-medium whitespace-nowrap transition-colors duration-200 cursor-pointer ${
                  activeTab === tab.id
                    ? "text-green-600 border-b-2 border-green-600"
                    : "text-gray-700 hover:text-green-600"
                }`}
                onClick={() => {
                  setActiveTab(tab.id);
                  const el = document.getElementById(tab.id);
                  if (el) {
                    el.scrollIntoView({ behavior: "smooth", block: "start" });
                  }
                }}
              >
                {getText(tab.name)}
              </button>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Swiper Next Button */}
        <button
          className={`swiper-button-next-custom absolute right-0 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full flex items-center justify-center shadow-md focus:outline-none transition bg-[#7F7F7F] ${
            isEnd ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
          }`}
          aria-label="Next"
          disabled={isEnd}
        >
          <FaChevronRight className="w-4 h-4 text-white" />
        </button>
      </div>
    </div>
  );
}
