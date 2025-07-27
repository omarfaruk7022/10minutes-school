"use client";
import { FC, useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

interface AboutValue {
  description: string;
  icon: string;
  id: string;
  title: string;
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
      <section className="max-w-4xl mx-auto bg-white rounded-lg border border-gray-200 p-6">
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
