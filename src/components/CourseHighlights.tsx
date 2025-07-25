import { FC } from "react";
import { FaCheck } from "react-icons/fa";

interface PointerItem {
  id: string;
  icon: string; // might be a string path or a number "0"
  color: string;
  text: string;
}

interface CoursePointerSection {
  type: "pointers";
  name: string;
  description: string;
  bg_color: string;
  order_idx: number;
  values: PointerItem[];
}

interface CourseHighlightsProps {
  data: CoursePointerSection;
}

const CourseHighlights: FC<CourseHighlightsProps> = ({ data }) => {
  return (
    <section className="max-w-4xl mx-auto border border-gray-200 bg-white rounded-lg p-6 mt-8">
      <h2 className="text-2xl font-bold text-black mb-4">{data.name}</h2>
      <ul className="space-y-3 text-gray-700">
        {data.values.map((item) => (
          <li key={item.id} className="flex items-start">
            <FaCheck className="text-blue-500 mt-1 mr-2" />
            <span>{item.text}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default CourseHighlights;
