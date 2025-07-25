import Header from "@/components/Header";
import Banner from "@/components/Banner";
import CourseDetails from "@/components/CourseDetails";

async function getCourseData() {
  const res = await fetch(
    "https://api.10minuteschool.com/discovery-service/api/v1/products/ielts-course?lang=en",
    {
      next: { revalidate: 3600 },
    }
  );

  if (!res.ok) {
    throw new Error(`Failed to fetch course data: ${res.status}`);
  }

  const apiData = await res.json();

  return apiData;
}

export default async function Home() {
  const data = await getCourseData();

  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Banner />
      <CourseDetails course={data?.data} />
    </main>
  );
}
