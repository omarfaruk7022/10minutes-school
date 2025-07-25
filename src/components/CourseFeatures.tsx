import { FC } from "react";
import { FaVideo } from "react-icons/fa";

const CourseFeatures: FC = () => {
  const features = [
    "IELTS Academic ও General Training এর ভিডিও লেকচার।",
    "Reading, Writing, Listening, Speaking এর Overview ও Format।",
    "IELTS পরীক্ষার জন্য প্রয়োজনীয় সকল বিষয় নিয়ে বিস্তারিত আলোচনা।",
  ];

  return (
    <section className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6 mt-8">
      <h2 className="text-2xl font-bold text-purple-800 mb-4">
        কোর্সে অন্তর্ভুক্ত ফিচার
      </h2>
      <ul className="space-y-3 text-gray-700">
        {features.map((text, idx) => (
          <li key={idx} className="flex items-start">
            <FaVideo className="text-red-500 mt-1 mr-2" />
            <span>{text}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default CourseFeatures;
