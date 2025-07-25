import Image from "next/image";
import React from "react";
import { FaPlay, FaFileAlt } from "react-icons/fa";
import { MdKeyboardArrowRight } from "react-icons/md";

export default function CourseStructured() {
  return (
    <div>
      <div className="flex items-center space-x-4 text-sm bengali-text">
        <span className="opacity-75">কোর্স ইন্ট্রোডাকশন</span>
        <MdKeyboardArrowRight className="w-4 h-4 opacity-50" />
        <span className="opacity-75">কোর্সটি মেথড সাজানো হয়েছে</span>
        <MdKeyboardArrowRight className="w-4 h-4 opacity-50" />
        <span className="opacity-75">কোর্সটি করে যা শিখবেন</span>
        <MdKeyboardArrowRight className="w-4 h-4 opacity-50" />
        <span className="opacity-75">কোর্স সম্পর্কে বিস্তারিত</span>
      </div>

      {/* Instructor Section */}
      <div className="bg-white bg-opacity-10 rounded-lg ">
        <h2 className="text-2xl font-bold mb-6 bengali-text">
          কোর্স ইন্সট্রাক্টর
        </h2>
        <div className="flex items-start space-x-4 border border-gray-200 p-10 rounded-md">
          <Image
            src={course.instructor.avatar || "/placeholder.svg"}
            alt={course.instructor.name}
            width={80}
            height={80}
            className="rounded-full"
          />
          <div>
            <h3 className="text-xl font-semibold mb-2">
              {course.instructor.name}
            </h3>
            <div className="space-y-1 text-sm opacity-90">
              {course.instructor.credentials.map((credential, index) => (
                <p key={index}>{credential}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
