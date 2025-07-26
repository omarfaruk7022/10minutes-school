// import Image from "next/image";
// import React from "react";
// import { FaBook, FaClock, FaPlay, FaUsers, FaVideo } from "react-icons/fa";

// interface MediaItem {
//   name: string;
//   resource_type: "image" | "video";
//   resource_value: string;
//   thumbnail_url: string;
// }

// export default function RightColumn({ media }: { media: MediaItem[] }) {
//   const videos = media.filter((item) => item.resource_type === "video");
//   const firstVideo = videos[0];
//   const otherVideos = videos.slice(1);

//   return (
//     <div className="space-y-6 border">
//       {/* Video Preview */}
//       <div className="bg-white bg-opacity-10 rounded-lg overflow-hidden">
//         <div className="relative">
//           <Image
//             src={firstVideo?.thumbnail_url || "/placeholder.svg"}
//             alt="Course Preview"
//             width={400}
//             height={300}
//             className="w-full h-48 object-cover"
//           />
//           <div className="absolute inset-0 flex items-center justify-center">
//             <a
//               href={`https://www.youtube.com/watch?v=${firstVideo?.resource_value}`}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full p-4 transition-all"
//             >
//               <FaPlay className="text-white w-8 h-8 ml-1" />
//             </a>
//           </div>
//         </div>

//         {/* Video thumbnails */}
//         <div className="p-4">
//           <div className="grid grid-cols-6 gap-2">
//             {otherVideos.slice(0, 6).map((item, i) => (
//               <a
//                 key={i}
//                 href={`https://www.youtube.com/watch?v=${item.resource_value}`}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="aspect-video bg-gray-600 rounded overflow-hidden"
//               >
//                 <Image
//                   src={item.thumbnail_url || "/placeholder.svg"}
//                   alt={`Thumbnail ${i + 1}`}
//                   width={80}
//                   height={60}
//                   className="w-full h-full object-cover"
//                 />
//               </a>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Pricing */}
//       <div className="bg-white text-gray-900 rounded-lg p-6">
//         <div className="flex items-center space-x-4 mb-4">
//           <span className="text-3xl font-bold">৳45645</span>
//           <span className="text-lg text-gray-500 line-through">৳45454</span>
//           <span className="bg-red-500 text-white px-2 py-1 rounded text-sm font-semibold">
//             ৳554 ছাড়
//           </span>
//         </div>

//         <button className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg mb-6 bengali-text">
//           কোর্সটি কিনুন
//         </button>

//         <div className="space-y-4">
//           <h3 className="font-bold text-lg bengali-text">এই কোর্সে যা থাকছে</h3>
//           {/* Add course.features here */}
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight, FaPlay } from "react-icons/fa";

interface MediaItem {
  name: string;
  resource_type: "image" | "video";
  resource_value: string;
  thumbnail_url: string;
}
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
  media: MediaItem[];
  pricing?: {
    current: number;
    original: number;
    discount: number;
  };
  cta_text: CTA;
  checklist: ChecklistItem[];
}

export default function RightColumn({
  media,
  cta_text,
  checklist,
  pricing = { current: 3850, original: 5000, discount: 1150 },
}: RightColumnProps) {
  const [currentLanguage, setCurrentLanguage] = useState("EN");
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0);
  // Filter preview gallery items
  const previewItems = media.filter((item) => item.name === "preview_gallery");
  const currentMedia = previewItems[currentMediaIndex] || previewItems[0];
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

  const handlePrevious = () => {
    setCurrentMediaIndex((prev) =>
      prev === 0 ? previewItems.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentMediaIndex((prev) =>
      prev === previewItems.length - 1 ? 0 : prev + 1
    );
  };

  const handleThumbnailClick = (index: number) => {
    setCurrentMediaIndex(index);
  };

  const getYouTubeEmbedUrl = (videoId: string) => {
    return `https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1&showinfo=0`;
  };

  const getYouTubeThumbnail = (videoId: string) => {
    return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
  };

  return (
    <div className="border w-[400px]">
      {/* Video/Image Preview */}
      <div className="bg-white overflow-hidden">
        <div className="relative aspect-video bg-gray-900">
          {/* Navigation Arrows */}
          {previewItems.length > 1 && (
            <>
              <button
                onClick={handlePrevious}
                className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white bg-opacity-50 cursor-pointer hover:bg-opacity-70 text-white rounded-full p-2 transition-all"
              >
                <FaChevronLeft className="w-3 h-3 text-gray-200" />
              </button>
              <button
                onClick={handleNext}
                className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white cursor-pointer bg-opacity-50 hover:bg-opacity-70 text-white rounded-full p-2 transition-all"
              >
                <FaChevronRight className="w-3 h-3 text-gray-200" />
              </button>
            </>
          )}

          {/* Main Content */}
          {currentMedia?.resource_type === "video" ? (
            <iframe
              src={getYouTubeEmbedUrl(currentMedia.resource_value)}
              className="w-full h-full"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Course Preview"
            />
          ) : (
            <div className="relative w-full h-full">
              <Image
                src={currentMedia?.resource_value || "/placeholder.svg"}
                alt="Course Preview"
                fill
                className="object-cover"
              />
            </div>
          )}
        </div>

        {/* Thumbnail Gallery */}
        <div className="p-4 bg-gray-50">
          <div className="grid grid-cols-6 gap-2">
            {previewItems.slice(0, 6).map((item, index) => (
              <button
                key={index}
                onClick={() => handleThumbnailClick(index)}
                className={`aspect-video rounded overflow-hidden border-2 transition-all hover:border-green-600 cursor-pointer ${
                  index === currentMediaIndex
                    ? "border-green-600  "
                    : "border-gray-200"
                }`}
              >
                <div className="relative w-full h-full">
                  {item.resource_type === "video" ? (
                    <>
                      <Image
                        src={
                          item.thumbnail_url ||
                          getYouTubeThumbnail(item.resource_value)
                        }
                        alt={`Preview ${index + 1}`}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 flex items-center justify-center ">
                        <Image
                          width={20}
                          height={20}
                          alt="Play Icon"
                          src={
                            "https://10minuteschool.com/images/annual_exam/play_icon_2.svg"
                          }
                        ></Image>
                      </div>
                    </>
                  ) : (
                    <Image
                      src={item.resource_value || "/placeholder.svg"}
                      alt={`Preview ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  )}
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <div className="bg-white text-gray-900  p-6 ">
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
              // Optionally skip items with list_page_visibility false
              

              return (
                <div key={id} className="flex items-center space-x-3">
                  <div className="w-5 h-5 flex-shrink-0">
                    {/* Use image icon */}
                    <img
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
    </div>
  );
}
