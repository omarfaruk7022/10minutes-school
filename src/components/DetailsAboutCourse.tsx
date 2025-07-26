"use client";
import { FC, useState } from "react";
import { FaPlayCircle, FaChevronDown, FaChevronUp } from "react-icons/fa";

const previewItems = [
  {
    title: "IELTS: Introduction",
    content: "শুরুতেই IELTS এর সংক্ষিপ্ত পরিচিতি ও কেন গুরুত্বপূর্ণ তা শিখবেন।",
  },
  {
    title: "IELTS: Overview",
    content: "Exam-এর format, sections ও কিভাবে স্কোর করা যায় তা জানবেন।",
  },
  {
    title: "How to Prepare for IELTS?",
    content: "সঠিক প্রস্তুতির কৌশল ও রিসোর্স ব্যবহার সম্পর্কে বিস্তারিত।",
  },
  {
    title: "Making a Daily Routine",
    content: "ভালো স্কোরের জন্য দৈনন্দিন রুটিন তৈরি করার টিপস।",
  },
  {
    title: "Different Sentence Structures to Improve Writing",
    content: "Writing Task-এ সঠিক sentence structure কিভাবে impact ফেলে।",
  },
  {
    title: "IELTS General Facts",
    content: "IELTS সম্পর্কে সাধারণ কিন্তু গুরুত্বপূর্ণ তথ্য।",
  },
  {
    title: "IELTS Vocabulary",
    content: "Band score বাড়ানোর জন্য প্রয়োজনীয় শব্দভাণ্ডার।",
  },
];

interface AboutValue {
  description: string; // contains HTML string
  icon: string;
  id: string;
  title: string; // contains HTML string (e.g. <h2><b>...</b></h2>)
}

interface AboutSection {
  type: "about";
  name: string;
  description: string;
  bg_color: string;
  order_idx: number;
  values: AboutValue[];
}

const DetailsAboutCourse: FC<{ about: AboutSection }> = ({ about }) => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setExpandedIndex(index === expandedIndex ? null : index);
  };

  return (
    <>
      <h2 className="text-2xl font-bold text-black mb-4">{about?.name}</h2>
      <section className="max-w-4xl mx-auto bg-white rounded-lg border p-6 mt-8">
        <ul className="divide-y divide-gray-300 divide-dashed px-4">
          {about?.values.map((item, idx) => (
            <li key={idx}>
              <button
                onClick={() => toggleAccordion(idx)}
                className="flex items-center justify-between w-full py-3 text-gray-800  focus:outline-none cursor-pointer"
              >
                <div className="flex items-center">
                  <span
                    className="font-medium"
                    dangerouslySetInnerHTML={{ __html: item.title }}
                  ></span>
                </div>
                {/* <span className="text-green-600">ফ্রি দেখুন</span> */}
                {expandedIndex === idx ? (
                  <FaChevronUp className="ml-3 text-gray-600 cursor-pointer" />
                ) : (
                  <FaChevronDown className="ml-3 text-gray-600 cursor-pointer" />
                )}
              </button>

              {expandedIndex === idx && (
                <div
                  className="pl-8 pr-4 pb-3 text-sm text-gray-700"
                  dangerouslySetInnerHTML={{ __html: item.description }}
                ></div>
              )}
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};

export default DetailsAboutCourse;
