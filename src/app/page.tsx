import Header from "@/components/Header";
import Banner from "@/components/Banner";
import CourseDetails from "@/components/CourseDetails";
import IeltsPromo from "@/components/IeltsPromo";
import CourseHighlights from "@/components/CourseHighlights";
import CourseLaidOut from "@/components/CourseLaidOut";
import { cookies } from "next/headers";
import CourseInstructor from "@/components/CourseInstructor";
import RightColumn from "@/components/RightColumn";
import Testimonials from "@/components/Testimonials";
import DetailsAboutCourse from "@/components/DetailsAboutCourse";
import ExclusiveFeatures from "@/components/ExclusiveFeatures";

export async function getCourseData() {
  try {
    const cookieStore = await cookies();
    const lang = cookieStore.get("language")?.value || "EN";

    const res = await fetch(
      `https://api.10minuteschool.com/discovery-service/api/v1/products/ielts-course?lang=${lang.toLowerCase()}`,
      {
        next: { revalidate: 3600 }, // ISR for 1 hour
        headers: {
          "X-TENMS-SOURCE-PLATFORM": "web",
          Accept: "application/json",
        },
      }
    );

    if (!res.ok) {
      throw new Error(
        `Failed to fetch course data: ${res.status} ${res.statusText}`
      );
    }

    const apiData = await res.json();

    return {
      data: apiData,
      course: {
        id: apiData.data.id,
        title: apiData.data.title,
        slug: apiData.data.slug,
        description: apiData.data.description,
        platform: apiData.data.platform,
        type: apiData.data.type,
        modality: apiData.data.modality,
        old_info: {
          cat_id: apiData.data.old_info?.cat_id || 0,
          course_id: apiData.data.old_info?.course_id || 0,
          platform: apiData.data.old_info?.platform || "",
          skills_cat_id: apiData.data.old_info?.skills_cat_id || 0,
          slug: apiData.data.old_info?.slug || "",
        },
        start_at: apiData.data.start_at,
      },
      sections: apiData.data.sections || [],
    };
  } catch (error) {
    console.error("Error fetching course data:", error);

    return {
      data: null,
      course: {
        id: "fallback-id",
        title: "IELTS Course by Munzereen Shahid",
        slug: "ielts-course",
        description: "Complete IELTS preparation course",
        platform: "web",
        type: "course",
        modality: "online",
        old_info: {
          cat_id: 0,
          course_id: 0,
          platform: "",
          skills_cat_id: 0,
          slug: "",
        },
        start_at: new Date().toISOString(),
      },
      sections: [],
    };
  }
}

export default async function Home() {
  const data = await getCourseData();
  const course = data.course;
  const sections = data.sections;

  const cookieStore = await cookies();
  const lang = cookieStore.get("language")?.value || "EN";

  console.log("Current language:", lang);

  const laidOut = sections.find(
    (section: { type?: string }) => section.type == "features"
  );
  const pointers = sections.find(
    (section: { type?: string }) => section.type == "pointers"
  );
  const instructor = sections.find(
    (section: { type?: string }) => section.type == "instructors"
  );
  const feature_explanations = sections.find(
    (section: { type?: string }) => section.type == "feature_explanations"
  );
  const testimonial = sections.find(
    (section: { type?: string }) => section.type == "testimonials"
  );

  const group_join_engagement = sections.find(
    (section: { type?: string }) => section.type == "group_join_engagement"
  );

  const about = sections.find(
    (section: { type?: string }) => section.type == "about"
  );
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Banner />
      <CourseDetails course={course} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-14 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative">
          {/* Left Column - Course Info */}
          <div className="lg:col-span-2 space-y-8">
            <CourseInstructor instructor={instructor} />
            <CourseLaidOut data={laidOut} />
            <IeltsPromo group_join_engagement={group_join_engagement} />
            <CourseHighlights data={pointers} />
            {/* <CourseFeatures /> */}
            <DetailsAboutCourse about={about} />
            <ExclusiveFeatures features={feature_explanations} />
            <Testimonials testimonial={testimonial} />
          </div>
          <div className="  col-span-1">
            <div className="absolute top-[-300px]">
              <RightColumn
                media={data?.data?.data?.media}
                cta_text={data?.data?.data?.cta_text}
                checklist={data?.data?.data?.checklist}
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
