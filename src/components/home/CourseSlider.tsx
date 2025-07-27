"use client";
import Image from "next/image";
import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

interface MediaItem {
  name: string;
  resource_type: "image" | "video";
  resource_value: string;
  thumbnail_url: string;
}

interface RightColumnProps {
  media: MediaItem[];
}

export default function CourseSlider({ media }: RightColumnProps) {
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0);
  const previewItems = media.filter((item) => item.name === "preview_gallery");
  const currentMedia = previewItems[currentMediaIndex] || previewItems[0];

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
    <div className="block md:hidden px-5 bg-black pt-5">
      <div className="relative aspect-video">
        {previewItems.length > 1 && (
          <>
            <button
              onClick={handlePrevious}
              className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white bg-opacity-50 cursor-pointer hover:bg-opacity-70 text-white rounded-full p-2 transition-all"
            >
              <FaChevronLeft className="w-3 h-3 text-gray-400" />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white cursor-pointer bg-opacity-50 hover:bg-opacity-70 text-white rounded-full p-2 transition-all"
            >
              <FaChevronRight className="w-3 h-3 text-gray-400" />
            </button>
          </>
        )}

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
      <div className="p-4  bg-black">
        <div className="grid grid-cols-6 gap-2 ">
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
  );
}
