"use client";
import Image from "next/image";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaPlay } from "react-icons/fa";

interface Testimonial {
  description: string;
  id: string;
  name: string;
  profile_image: string;
  testimonial: string;
  thumb: string;
  video_type: string;
  video_url: string;
}

interface TestimonialsData {
  type: "testimonials";
  name: string;
  description: string;
  bg_color: string;
  order_idx: number;
  values: Testimonial[];
}

export default function Testimonials({
  testimonial,
}: {
  testimonial: TestimonialsData;
}) {
  const [playingVideoId, setPlayingVideoId] = useState<string | null>(null);

  const handlePlayVideo = (videoId: string) => {
    setPlayingVideoId(videoId === playingVideoId ? null : videoId); // Toggle play/pause for the same video
  };

  const filteredValues = testimonial.values.filter(
    (item): item is Testimonial => typeof item === "object"
  );


  return (
    <div>
      <div className="flex justify-between">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          {testimonial.name}
        </h2>
        <div className="flex justify-end items-center gap-4 mb-4">
          <button className="custom-prev p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition cursor-pointer">
            <svg
              className="w-6 h-6 text-gray-800"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button className="custom-next p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition cursor-pointer">
            <svg
              className="w-6 h-6 text-gray-800"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>

      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={1}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        breakpoints={{
          768: {
            slidesPerView: 2,
          },
        }}
        className="!pb-10"
      >
        {filteredValues.map((t) => (
          <SwiperSlide key={t.id} className="pt-5">
            <div className="bg-white rounded-xl shadow-lg border border-gray-100 relative z-0 ">
              <div className="p-4 pb-0 ">
                <div className=" flex bg-[#FCE0D6] rounded-full w-[40px]  h-[40px] items-center justify-center absolute top-[-15] bottom-5 z-50">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="10"
                    height="10"
                    fill="none"
                    viewBox="0 0 20 30"
                  >
                    <path
                      fill="#D33242"
                      d="M10.699 10.753c1.019-1.82 2.871-3.777 6.021-5.642.88-.5 1.436-1.41 1.436-2.366 0-1.957-2.038-3.322-3.89-2.503C8.938 2.562 0 8.342 0 20.308 0 25.677 4.4 30 9.819 30c5.419 0 9.865-4.323 9.865-9.692 0-5.005-3.937-9.1-8.985-9.555z"
                    ></path>
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="10"
                    height="10"
                    fill="none"
                    viewBox="0 0 20 30"
                  >
                    <path
                      fill="#D33242"
                      d="M10.699 10.753c1.019-1.82 2.871-3.777 6.021-5.642.88-.5 1.436-1.41 1.436-2.366 0-1.957-2.038-3.322-3.89-2.503C8.938 2.562 0 8.342 0 20.308 0 25.677 4.4 30 9.819 30c5.419 0 9.865-4.323 9.865-9.692 0-5.005-3.937-9.1-8.985-9.555z"
                    ></path>
                  </svg>
                </div>
              </div>

              <div className="relative px-6 mt-5">
                <div className="relative aspect-video rounded-lg overflow-hidden">
                  {t.video_url ? (
                    playingVideoId === t.video_url ? (
                      <iframe
                        className="w-full h-full"
                        src={`https://www.youtube.com/embed/${t.video_url}?autoplay=1`}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                      ></iframe>
                    ) : (
                      <>
                        <Image
                          src={t.thumb || t.profile_image}
                          alt={`${t.name} Testimonial`}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                          <button
                            className="w-16 h-16 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all hover:scale-110"
                            onClick={() => handlePlayVideo(t.video_url)}
                            aria-label={`Play video testimonial by ${t.name}`}
                          >
                            <FaPlay className="w-6 h-6 text-red-500 cursor-pointer" />
                          </button>
                        </div>
                      </>
                    )
                  ) : (
                    <Image
                      src={t.thumb || t.profile_image || "/default-thumb.jpg"}
                      alt={`${t.name} Testimonial`}
                      fill
                      className="object-cover"
                    />
                  )}
                </div>
              </div>

              <div className="p-6 flex items-center space-x-3">
                <Image
                  src={t.profile_image}
                  alt={t.name}
                  width={50}
                  height={50}
                  className="rounded-full"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{t.name}</h4>
                  <p className="text-gray-600 text-sm">{t.description}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

// ("use client");
// import Image from "next/image";
// import { useState } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import {
//   FaChevronLeft,
//   FaChevronRight,
//   FaPlay,
//   FaQuoteLeft,
// } from "react-icons/fa6";

// interface Testimonial {
//   description: string;
//   id: string;
//   name: string;
//   profile_image: string;
//   testimonial: string;
//   thumb: string;
//   video_type: string;
//   video_url: string;
// }

// interface TestimonialsData {
//   type: "testimonials";
//   name: string;
//   description: string;
//   bg_color: string;
//   order_idx: number;
//   values: Testimonial[];
// }

// export default function Testimonials({
//   testimonial,
// }: {
//   testimonial: TestimonialsData;
// }) {
//   const [playingVideoId, setPlayingVideoId] = useState<string | null>(null);

//   const handlePlayVideo = (videoId: string) => {
//     setPlayingVideoId(videoId === playingVideoId ? null : videoId); // Toggle play/pause for the same video
//   };

//   const filteredValues = testimonial.values.filter(
//     (item): item is Testimonial => typeof item === "object"
//   );

//   return (
//     <div className="relative px-4 py-8 md:px-6 lg:px-8">
//       <div className="max-w-7xl mx-auto">
//         <div className="flex justify-between items-center mb-6">
//           <h2 className="text-2xl font-bold text-gray-900">
//             {testimonial.name}
//           </h2>
//           <div className="flex items-center gap-4">
//             <button
//               className="custom-prev p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition cursor-pointer"
//               aria-label="Previous testimonial"
//             >
//               <FaChevronLeft className="w-6 h-6 text-gray-800" />
//             </button>
//             <button
//               className="custom-next p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition cursor-pointer"
//               aria-label="Next testimonial"
//             >
//               <FaChevronRight className="w-6 h-6 text-gray-800" />
//             </button>
//           </div>
//         </div>

//         <Swiper
//           modules={[Navigation]}
//           spaceBetween={20}
//           slidesPerView={1}
//           navigation={{
//             nextEl: ".custom-next",
//             prevEl: ".custom-prev",
//           }}
//           breakpoints={{
//             768: {
//               slidesPerView: 2,
//             },
//           }}
//           className="!pb-10"
//         >
//           {filteredValues.map((t) => (
//             <SwiperSlide key={t.id} className="pt-5">
//               <div className="bg-white rounded-xl shadow-lg border border-gray-100 relative z-0">
//                 {/* Quote Icon */}
//                 <div className="absolute -top-4 left-4 flex bg-[#FCE0D6] rounded-full w-10 h-10 items-center justify-center z-10">
//                   <FaQuoteLeft className="w-5 h-5 text-[#D33242]" />
//                 </div>
//                 {/* Video Thumbnail or Embedded Video */}
//                 <div className="relative px-6 mt-5">
//                   <div className="relative aspect-video rounded-lg overflow-hidden">
//                     {playingVideoId === t.video_url ? (
//                       <iframe
//                         className="w-full h-full"
//                         src={`https://www.youtube.com/embed/${t.video_url}?autoplay=1`}
//                         title="YouTube video player"
//                         frameBorder="0"
//                         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//                         allowFullScreen
//                       ></iframe>
//                     ) : (
//                       <>
//                         <Image
//                           src={
//                             t.thumb ||
//                             "/placeholder.svg?height=300&width=500&query=video thumbnail"
//                           }
//                           alt={`${t.name} Testimonial`}
//                           fill
//                           className="object-cover"
//                         />
//                         <div className="absolute inset-0 flex items-center justify-center bg-black/20">
//                           <button
//                             className="w-16 h-16 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all hover:scale-110"
//                             onClick={() => handlePlayVideo(t.video_url)}
//                             aria-label={`Play video testimonial by ${t.name}`}
//                           >
//                             <FaPlay className="w-6 h-6 text-red-500" />
//                           </button>
//                         </div>
//                       </>
//                     )}
//                   </div>
//                 </div>
//                 {/* Profile Info */}
//                 <div className="p-6 flex items-center space-x-3">
//                   <Image
//                     src={
//                       t.profile_image ||
//                       "/placeholder.svg?height=50&width=50&query=profile image"
//                     }
//                     alt={t.name}
//                     width={50}
//                     height={50}
//                     className="rounded-full object-cover"
//                   />
//                   <div>
//                     <h4 className="font-semibold text-gray-900">{t.name}</h4>
//                     <p className="text-gray-600 text-sm">{t.description}</p>
//                   </div>
//                 </div>
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>
//     </div>
//   );
// }
