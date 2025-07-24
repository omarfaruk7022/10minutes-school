import Image from "next/image";
import {
  FaStar,
  FaPlay,
  FaUsers,
  FaClock,
  FaVideo,
  FaBook,
  FaFileAlt,
} from "react-icons/fa";
import { MdKeyboardArrowRight } from "react-icons/md";

interface Course {
  id: number;
  title: string;
  rating: number;
  satisfaction: string;
  description: string;
  instructor: {
    name: string;
    credentials: string[];
    avatar: string;
  };
  price: {
    current: number;
    original: number;
    discount: number;
  };
  features: string[];
  videoThumbnail: string;
}

interface CourseDetailsProps {
  course: Course;
}

export default function CourseDetails({ course }: CourseDetailsProps) {
  return (
    <div className=" text-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 ">
          {/* Left Column - Course Info */}
          <div className="lg:col-span-2 space-y-8 ">
            {/* Course Title and Rating */}
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                {course.title}
              </h1>
              <div className="flex items-center space-x-4 mb-4">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-400 w-5 h-5" />
                  ))}
                </div>
                <span className="text-lg bengali-text">
                  ({course.satisfaction} শিক্ষার্থী কোর্স শেষে ৫ রেটিং দিয়েছেন)
                </span>
              </div>
              <p className="text-lg leading-relaxed bengali-text opacity-90">
                {course.description}
              </p>
            </div>

            {/* Course Navigation */}
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
            <div className="bg-white bg-opacity-10 rounded-lg p-6">
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

            {/* Course Content Preview */}
            <div className="bg-white bg-opacity-10 rounded-lg p-6">
              <h2 className="text-2xl font-bold mb-6 bengali-text">
                কোর্সটি মেথড সাজানো হয়েছে
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-[#111827] p-5">
                <div className="rounded-lg p-4 flex items-center space-x-3">
                  <FaPlay className="text-white w-6 h-6" />
                  <div>
                    <div className="font-semibold bengali-text text-white">
                      ৫০+ ভিডিও লেকচার
                    </div>
                    <div className="text-sm opacity-75 bengali-text text-white">
                      বিস্তারিত আলোচনা
                    </div>
                  </div>
                </div>
                <div className="rounded-lg p-4 flex items-center space-x-3">
                  <FaFileAlt className="text-white w-6 h-6" />
                  <div>
                    <div className="font-semibold bengali-text text-white">
                      ৩৮টি লেকচার শিট
                    </div>
                    <div className="text-sm opacity-75 bengali-text text-white">
                      ডাউনলোড করুন
                    </div>
                  </div>
                </div>{" "}
                <div className="rounded-lg p-4 flex items-center space-x-3">
                  <FaFileAlt className="text-white w-6 h-6" />
                  <div>
                    <div className="font-semibold bengali-text text-white">
                      ৩৮টি লেকচার শিট
                    </div>
                    <div className="text-sm opacity-75 bengali-text text-white">
                      ডাউনলোড করুন
                    </div>
                  </div>
                </div>{" "}
                <div className="rounded-lg p-4 flex items-center space-x-3">
                  <FaFileAlt className="text-white w-6 h-6" />
                  <div>
                    <div className="font-semibold bengali-text text-white">
                      ৩৮টি লেকচার শিট
                    </div>
                    <div className="text-sm opacity-75 bengali-text text-white">
                      ডাউনলোড করুন
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Video and Purchase */}
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
                        src={`/placeholder.svg?height=60&width=80&text=${
                          i + 1
                        }`}
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
                <span className="text-3xl font-bold">
                  ৳{course.price.current}
                </span>
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
                <h3 className="font-bold text-lg bengali-text">
                  এই কোর্সে যা থাকছে
                </h3>
                <div className="space-y-3">
                  {course.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      {index === 0 && (
                        <FaUsers className="w-4 h-4 text-gray-600" />
                      )}
                      {index === 1 && (
                        <FaClock className="w-4 h-4 text-gray-600" />
                      )}
                      {index === 2 && (
                        <FaVideo className="w-4 h-4 text-gray-600" />
                      )}
                      {index > 2 && (
                        <FaBook className="w-4 h-4 text-gray-600" />
                      )}
                      <span className="text-sm bengali-text">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
