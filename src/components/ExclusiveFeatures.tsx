import Image from "next/image";
import { FC } from "react";
import { IoMdCheckmark } from "react-icons/io";

interface FeatureExplanationValue {
  checklist: string[];
  file_type: string;
  file_url: string;
  id: string;
  title: string;
  video_thumbnail: string;
}

interface FeatureExplanationsBlock {
  type: "feature_explanations";
  name: string;
  description: string;
  bg_color: string;
  order_idx: number;
  values: FeatureExplanationValue[];
}

const ExclusiveFeatures: FC<{ features: FeatureExplanationsBlock }> = ({
  features,
}) => {
  return (
    <section className="">
      <h2 className="text-2xl font-bold text-black mb-4">{features.name}</h2>
      <div className="max-w-5xl mx-auto space-y-5 border border-gray-200 rounded-lg p-2 mt-2  bg-white">
        {features?.values.map((item, idx) => {
          const isSecondLast = idx === features.values.length - 1;

          return (
            <section
              key={idx}
              className={`max-w-4xl mx-auto p-6 ${
                isSecondLast ? "border-t border-gray-300 pt-8" : ""
              }`}
            >
              <h2 className="text-lg  text-black mb-4">{item?.title}</h2>
              <div className="flex justify-between gap-4">
                <ul className="space-y-3 text-gray-700">
                  {item?.checklist?.map((text, idx) => (
                    <li key={idx} className="flex items-start">
                      <IoMdCheckmark className="text-blue-500 mr-3" size={20} />
                      <span>{text}</span>
                    </li>
                  ))}
                </ul>
                <div>
                  <Image
                    width={220}
                    height={220}
                    src={item?.file_url}
                    alt={item?.title}
                  />
                </div>
              </div>
            </section>
          );
        })}
      </div>
    </section>
  );
};

export default ExclusiveFeatures;
