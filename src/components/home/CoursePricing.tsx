"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

interface CTA {
  name: string;
  value: string;
}

interface ChecklistItem {
  color: string;
  icon: string;
  id: string;
  list_page_visibility: boolean;
  text: string;
}

interface RightColumnProps {
  pricing?: {
    current: number;
    original: number;
    discount: number;
  };
  cta_text: CTA;
  checklist: ChecklistItem[];
}

export default function CoursePricing({
  cta_text,
  checklist,
  pricing = { current: 1000, original: 5000, discount: 4000 },
}: RightColumnProps) {
  const [currentLanguage, setCurrentLanguage] = useState("EN");
  useEffect(() => {
    const getCookie = (name: string): string | null => {
      if (typeof document === "undefined") return null;
      const nameEQ = name + "=";
      const ca = document.cookie.split(";");
      for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === " ") c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) === 0)
          return c.substring(nameEQ.length, c.length);
      }
      return null;
    };

    const savedLanguage = getCookie("language") || "EN";
    setCurrentLanguage(savedLanguage);
  }, []);

  const getText = (en: string, bn: string) => {
    return currentLanguage === "EN" ? en : bn;
  };

  return (
    <div className="bg-white text-gray-900  p-6 block md:hidden  border-b-8 border-slate-100">
      <div className="flex items-center space-x-4 mb-4">
        <span className="text-3xl font-bold">৳{pricing.current}</span>
        <span className="text-lg text-gray-500 line-through">
          ৳{pricing.original}
        </span>
        <span className="bg-red-500 text-white px-2 py-1 rounded text-sm font-semibold">
          ৳{pricing.discount} {getText("off", "ছাড়")}
        </span>
      </div>

      <button className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg mb-6 transition-colors cursor-pointer">
        <span>{cta_text?.name}</span>
      </button>

      <div className="space-y-4">
        <h3
          className={`font-bold text-lg ${
            currentLanguage === "BN" ? "bengali-text" : ""
          }`}
        >
          {getText("What's included in this course", "এই কোর্সে যা থাকছে")}
        </h3>

        <div className="space-y-3">
          {checklist.map(({ id, icon, text }) => {
            return (
              <div key={id} className="flex items-center space-x-3">
                <div className="w-5 h-5 flex-shrink-0">
                  <Image
                    width={20}
                    height={20}
                    src={icon}
                    alt=""
                    className="w-full h-full object-contain"
                  />
                </div>
                <span
                  className={`text-sm ${
                    currentLanguage === "BN" ? "bengali-text" : ""
                  }`}
                >
                  {text}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
