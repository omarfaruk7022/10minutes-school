import React from "react";

interface FeatureItem {
  id: string;
  icon: string;
  title: string;
  subtitle: string;
}

interface CourseFeatureSection {
  type: "features";
  name: string;
  description: string;
  bg_color: string;
  order_idx: number;
  values: FeatureItem[];
}

export default function CourseLaidOut({
  data,
}: {
  data: CourseFeatureSection;
}) {
  return (
    <div>
      <div className="bg-white bg-opacity-10 rounded-lg">
        <h2 className="text-2xl font-bold mb-6 bengali-text text-black">
          {data?.name}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-[#111827] p-5">
          {data?.values?.map((feature: any, index: number) => (
            <div key={index} className="rounded-lg p-4 flex  space-x-3">
              <img src={feature?.icon} className="w-[40px] h-[40px]" alt="" />
              <div>
                <div className="font-semibold bengali-text text-white">
                  {feature.title}
                </div>
                <div className="text-sm opacity-75 bengali-text text-white">
                  {feature.subtitle}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
