import Header from "@/components/common/Header";
import Banner from "@/components/common/Banner";
import CourseDetails from "@/components/home/CourseDetails";
import IeltsPromo from "@/components/home/IeltsPromo";
import CourseHighlights from "@/components/home/CourseHighlights";
import CourseLaidOut from "@/components/home/CourseLaidOut";
import CourseInstructor from "@/components/home/CourseInstructor";
import RightColumn from "@/components/home/RightColumn";
import Testimonials from "@/components/home/Testimonials";
import DetailsAboutCourse from "@/components/home/DetailsAboutCourse";
import ExclusiveFeatures from "@/components/home/ExclusiveFeatures";
import Footer from "@/components/common/Footer";
import CourseSlider from "@/components/home/CourseSlider";
import CoursePricing from "@/components/home/CoursePricing";
import SectionNavigation from "@/components/home/SectionNavigation";

interface PageProps {
  searchParams: { lang?: string };
}

export async function getCourseData(lang: string | undefined) {
  const language = (lang || "EN").toLowerCase();
  try {
    const res = await fetch(
      `https://api.10minuteschool.com/discovery-service/api/v1/products/ielts-course?lang=${language}`,
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

export default async function Home({ searchParams }: PageProps) {
  const lang = searchParams.lang?.toUpperCase() || "EN";
  const data = await getCourseData(lang);
  const course = data.course;
  const sections = data.sections;

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
      <CourseSlider media={data?.data?.data?.media} />
      <CourseDetails course={course} />
      <CoursePricing
        cta_text={data?.data?.data?.cta_text}
        checklist={data?.data?.data?.checklist}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-14 pb-12 pt-5">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative">
          {/* Left Column - Course Info */}
          <div className="lg:col-span-2 space-y-8">
            <SectionNavigation />
            <div id="instructor" className="scroll-mt-24">
              <CourseInstructor instructor={instructor} />
            </div>
            <div id="laid-out" className="scroll-mt-24">
              <CourseLaidOut data={laidOut} />
            </div>
            <div id="promo" className="scroll-mt-24">
              <IeltsPromo group_join_engagement={group_join_engagement} />
            </div>
            <div id="highlights" className="scroll-mt-24">
              <CourseHighlights data={pointers} />
            </div>
            <div id="about" className="scroll-mt-24">
              <DetailsAboutCourse about={about} />
            </div>
            <div id="features" className="scroll-mt-24">
              <ExclusiveFeatures features={feature_explanations} />
            </div>
            <div id="testimonials" className="scroll-mt-24">
              <Testimonials testimonial={testimonial} />
            </div>
          </div>
          <div className="col-span-1">
            <div className="absolute top-[-300px]">
              {/* Right column - pricing*/}
              <RightColumn
                media={data?.data?.data?.media}
                cta_text={data?.data?.data?.cta_text}
                checklist={data?.data?.data?.checklist}
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
