import Header from "@/components/Header";
import Banner from "@/components/Banner";
import CourseDetails from "@/components/CourseDetails";
import IeltsPromo from "@/components/IeltsPromo";
import CourseHighlights from "@/components/CourseHighlights";
import ContentPreview from "@/components/ContentPreview";
import CourseForWhom from "@/components/CourseForWhom";
import CourseFeatures from "@/components/CourseFeatures";
import CourseExtraDetails from "@/components/CourseExtraDetails";
import CourseLaidOut from "@/components/CourseLaidOut";

async function getCourseData() {
  const res = await fetch(
    "https://api.10minuteschool.com/discovery-service/api/v1/products/ielts-course?lang=bn",
    {
      next: { revalidate: 3600 },
    }
  );

  if (!res.ok) {
    throw new Error(`Failed to fetch course data: ${res.status}`);
  }

  const apiData = await res.json();

  return {
    data: apiData,
    course: {
      id: apiData.data?.id,
      title: apiData.data?.title,
      slug: apiData.data?.slug,
      description: apiData.data?.description,
      platform: apiData.data?.platform,
      type: apiData.data?.type,
      modality: apiData.data?.modality,
      old_info: {
        cat_id: apiData.data?.old_info?.cat_id,
        course_id: apiData.data?.old_info?.course_id,
        platform: apiData.data?.old_info?.platform,
        skills_cat_id: apiData.data?.old_info?.skills_cat_id,
        slug: apiData.data?.old_info?.slug,
      },
      start_at: apiData.data?.start_at,
    },
  };
}

export default async function Home() {
  const data = await getCourseData();
  const course = data.course;
  const sections = data.data?.data?.sections || [];
  const laidOut = sections.find(
    (section: { type?: string }) => section.type == "features"
  );
  const pointers = sections.find(
    (section: { type?: string }) => section.type == "pointers"
  );
  console.log("Course data:", pointers);

  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Banner />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 ">
          {/* Left Column - Course Info */}
          <div className="lg:col-span-2 space-y-8 ">
            <CourseDetails course={course} />
            <CourseLaidOut data={laidOut} />
            <IeltsPromo />
            <CourseHighlights data={pointers} />
            <ContentPreview />
            <CourseForWhom />
            <CourseFeatures />
            <CourseExtraDetails />
          </div>
        </div>
      </div>
    </main>
  );
}
