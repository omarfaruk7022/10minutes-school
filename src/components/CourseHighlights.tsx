import { FC } from "react";
import { IoMdCheckmark } from "react-icons/io";

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
    <>
      <h2 className="text-2xl font-bold text-black mb-4">{data.name}</h2>
      <section className="max-w-4xl mx-auto border border-gray-200 bg-white rounded-lg p-6 mt-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-black p-2">
          {data.values.map((item) => (
            <li key={item.id} className="flex items-start">
              <IoMdCheckmark
                className="text-blue-500 mr-3 shrink-0"
                size={20}
              />
              <span>{item.text}</span>
            </li>
          ))}
        </div>
      </section>
    </>
  );
};

export default CourseHighlights;
