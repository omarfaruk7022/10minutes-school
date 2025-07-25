import Image from "next/image";
import React from "react";
import { FaBook, FaClock, FaPlay, FaUsers, FaVideo } from "react-icons/fa";

export default function RightColumn() {
  return (
    <div className="space-y-6">
      {/* Video Preview */}
      <div className="bg-white bg-opacity-10 rounded-lg overflow-hidden">
        <div className="relative">
          <Image
            src={course.videoThumbnail || "/placeholder.svg"}
            alt="Course Preview"
            width={400}
            height={300}
            className="w-full h-48 object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <button className="bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full p-4 transition-all">
              <FaPlay className="text-white w-8 h-8 ml-1" />
            </button>
          </div>
        </div>

        {/* Video thumbnails */}
        <div className="p-4">
          <div className="grid grid-cols-6 gap-2">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="aspect-video bg-gray-600 rounded overflow-hidden"
              >
                <Image
                  src={`/placeholder.svg?height=60&width=80&text=${i + 1}`}
                  alt={`Thumbnail ${i + 1}`}
                  width={80}
                  height={60}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Pricing */}
      <div className="bg-white text-gray-900 rounded-lg p-6">
        <div className="flex items-center space-x-4 mb-4">
          <span className="text-3xl font-bold">৳{course.price.current}</span>
          <span className="text-lg text-gray-500 line-through">
            ৳{course.price.original}
          </span>
          <span className="bg-red-500 text-white px-2 py-1 rounded text-sm font-semibold">
            ৳{course.price.discount} ছাড়
          </span>
        </div>

        <button className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg mb-6 bengali-text">
          কোর্সটি কিনুন
        </button>

        <div className="space-y-4">
          <h3 className="font-bold text-lg bengali-text">এই কোর্সে যা থাকছে</h3>
          <div className="space-y-3">
            {course.features.map((feature, index) => (
              <div key={index} className="flex items-center space-x-3">
                {index === 0 && <FaUsers className="w-4 h-4 text-gray-600" />}
                {index === 1 && <FaClock className="w-4 h-4 text-gray-600" />}
                {index === 2 && <FaVideo className="w-4 h-4 text-gray-600" />}
                {index > 2 && <FaBook className="w-4 h-4 text-gray-600" />}
                <span className="text-sm bengali-text">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
