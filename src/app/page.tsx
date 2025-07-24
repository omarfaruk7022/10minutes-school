import Header from "@/components/Header";
import Banner from "@/components/Banner";
import CourseDetails from "@/components/CourseDetails";

// Server-side data fetching
async function getCourseData() {
  // Simulating API call - in real app, this would fetch from your backend
  return {
    course: {
      id: 1,
      title: "IELTS Course by Munzereen Shahid",
      rating: 4.8,
      satisfaction: "92.6%",
      description:
        "Academic IELTS এবং General Training IELTS- এর কোর্সটি ডিজাইনের জন্য একটি কোর্সটি ডেভেলপ IELTS Instructor এর পাশাপাশি আপনার কাছিক বাড়ি কোর্সটি করতে পারবেন আমরা বলব আমাদের IELTS Course-এ।",
      instructor: {
        name: "Munzereen Shahid",
        credentials: [
          "MSc (English), University of Oxford (UK);",
          "BA, MA (English), University of Dhaka;",
          "IELTS: 8.5",
        ],
        avatar: "/placeholder.svg?height=80&width=80&text=MS",
      },
      price: {
        current: 3850,
        original: 6000,
        discount: 1150,
      },
      features: [
        "কোর্সটি করলেন ০৩৯৯৯ জন",
        "সময় লাগবে ৫০ ঘন্টা",
        "৬টি ভিডিও",
        "১০টি লিভিং এবং ১০টি লিভিংয়ের সহ কোটি",
        "১০টি লেকচার",
        "২৫টি ভিডিও লেকচার",
        "১টি ক্রিয়েটিভ বই",
      ],
      videoThumbnail: "/placeholder.svg?height=300&width=400&text=IELTS+Video",
    },
  };
}

export default async function Home() {
  const data = await getCourseData();

  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Banner />
      <CourseDetails course={data.course} />
    </main>
  );
}
