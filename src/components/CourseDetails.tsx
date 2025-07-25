import { FaStar } from "react-icons/fa";

interface Course {
  id: number;
  title: string;
  slug: string;
  description: string;
  platform: string;
  type: string;
  modality: string;
  old_info: {
    cat_id: number;
    course_id: number;
    platform: string;
    skills_cat_id: number;
    slug: string;
  };
  start_at: string;
}

interface CourseDetailsProps {
  course: Course;
}

export default function CourseDetails({ course }: CourseDetailsProps) {
  return (
    <div className=" text-black">
      {/* Course Title and Rating */}
      <div>
        <h1 className="text-3xl md:text-4xl font-bold mb-4">{course.title}</h1>
        <div className="flex items-center space-x-4 mb-4">
          <div className="flex items-center space-x-1">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} className="text-yellow-400 w-5 h-5" />
            ))}
          </div>
          <span className="text-lg bengali-text">
            ( শিক্ষার্থী কোর্স শেষে ৫ রেটিং দিয়েছেন)
          </span>
        </div>
        <p
          className="text-lg leading-relaxed bengali-text opacity-90"
          dangerouslySetInnerHTML={{ __html: course.description }}
        ></p>
      </div>
    </div>
  );
}
