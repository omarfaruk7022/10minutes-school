import { FC } from 'react';
import { FaCheckCircle } from 'react-icons/fa';

const CourseHighlights: FC = () => {
  const highlights = [
    'IELTS পরীক্ষার প্রত্যেক সেকশনের প্রশ্ন ও উত্তরসহ ধরন, টাইম ম্যানেজমেন্ট সম্পর্কিত গুরুত্বপূর্ণ টিপস, ট্রিকস ও স্ট্রাটেজিস',
    'IELTS Writing Task 1 ও Task 2 এর জন্য ভালো স্কোর পেতে Structure ও Essay type',
    'IELTS Speaking test-এ Power Words ব্যবহার করে চমৎকার ইংরেজিতে কথা বলার কৌশল',
    'সীমিত সময়ে ভালো স্কোর করার Guaranteed কৌশল',
    'Reading ও Listening Mock Test-এর মাধ্যমে Band Score বাড়ানো'
  ];

  return (
    <section className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6 mt-8">
      <h2 className="text-2xl font-bold text-purple-800 mb-4">কোর্সটি করে যা শিখবেন</h2>
      <ul className="space-y-3 text-gray-700">
        {highlights.map((item, idx) => (
          <li key={idx} className="flex items-start">
            <FaCheckCircle className="text-green-500 mt-1 mr-2" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default CourseHighlights;
