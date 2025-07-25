import { FC } from "react";
import { FaChalkboardTeacher, FaFileAlt } from "react-icons/fa";

const CourseExtraDetails: FC = () => {
  const lectures = [
    "IELTS Academic ও General Training নিয়ে আলোচনা",
    "Reading, Writing, Listening ও Speaking এর Overview ও Format",
    "প্রতিটি প্রশ্নের ধরণ-ভিডিও উত্তর করার স্ট্র্যাটেজি",
    "ভিডিওর সাথে প্ল্যাকটিসের সুবিধা",
  ];
  const mockDetails = [
    "১০টি Reading এবং Listening Mock Test",
    "Computer-delivered IELTS পরীক্ষার অভিজ্ঞতাসমূহ",
    "উত্তর সমাধান করার সাথে সাথে রেজাল্ট",
    "যেকোনো সময়, যেকোনো জায়গা থেকে মক টেস্ট",
  ];
  return (
    <section className="">
      <div className="max-w-5xl mx-auto space-y-10 border border-gray-200 rounded-lg p-6 mt-8 bg-white">
        <section className="max-w-4xl mx-auto  p-6 mt-8">
          <h2 className="text-2xl font-bold text-purple-800 mb-4">
            ভিডিও লেকচারের ফিচারসমূহ
          </h2>
          <ul className="space-y-3 text-gray-700">
            {lectures.map((text, idx) => (
              <li key={idx} className="flex items-start">
                <FaChalkboardTeacher className="text-teal-600 mt-1 mr-2" />
                <span>{text}</span>
              </li>
            ))}
          </ul>
        </section>
        <section className="max-w-4xl mx-auto  p-6 mt-8">
          <h2 className="text-2xl font-bold text-purple-800 mb-4">
            Reading ও Listening Mock Test Features
          </h2>
          <ul className="space-y-3 text-gray-700">
            {mockDetails.map((text, idx) => (
              <li key={idx} className="flex items-start">
                <FaFileAlt className="text-orange-500 mt-1 mr-2" />
                <span>{text}</span>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </section>
  );
};

export default CourseExtraDetails;
