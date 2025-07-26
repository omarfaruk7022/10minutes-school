import Image from "next/image";
import React from "react";

interface InstructorValue {
  description: string;
  has_instructor_page: boolean;
  image: string;
  name: string;
  short_description: string;
  slug: string;
}

interface InstructorsBlock {
  type: "instructors";
  name: string;
  description: string;
  bg_color: string;
  order_idx: number;
  values: InstructorValue[];
}

export default function CourseInstructor({
  instructor,
}: {
  instructor: InstructorsBlock;
}) {

  return (
    <div>
      {instructor?.values?.length > 0 &&
        instructor.values.map((instructorValue, index) => (
          <div key={index} className="bg-white bg-opacity-10 rounded-lg ">
            <h2 className="text-2xl font-bold mb-6 bengali-text text-black">
              {instructor?.name}
            </h2>
            <div className="flex items-center space-x-4 border border-gray-200 p-6 rounded-md ">
              <Image
                src={instructorValue.image || "/placeholder.svg"}
                alt={instructorValue.name}
                width={80}
                height={80}
                className="rounded-full"
              />
              <div>
                <h3 className="text-xl font-semibold mb-2 text-black">
                  {instructorValue.name}
                </h3>
                <div
                  className="space-y-1 text-sm opacity-90 text-black"
                  dangerouslySetInnerHTML={{
                    __html: instructorValue.description || "",
                  }}
                ></div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}
