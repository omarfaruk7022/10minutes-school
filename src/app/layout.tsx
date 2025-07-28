import { Inter } from "next/font/google";
import "./globals.css";
import { getCourseData } from "./page";
import { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";

export async function generateMetadata({
  searchParams = {},
}: {
  searchParams?: { lang?: string };
} = {}): Promise<Metadata> {
  const lang = searchParams.lang?.toUpperCase() || "EN";
  const { data } = await getCourseData(lang || "EN");
  const seo = data?.data?.seo;
  const metaTags = seo?.defaultMeta || [];

  interface MetaTag {
    value: string;
    content: string;
  }

  const getMeta = (value: string) =>
    (metaTags as MetaTag[]).find((item) => item.value === value)?.content;

  return {
    title: seo?.title,
    description: seo?.description,
    keywords: seo?.keywords,
    openGraph: {
      title: getMeta("og:title"),
      description: getMeta("og:description"),
      url: getMeta("og:url"),
      type: ["website", "article"].includes(getMeta("og:type") ?? "")
        ? (getMeta("og:type") as "website" | "article")
        : "website",

      locale: getMeta("og:locale"),
      images: getMeta("og:image")
        ? [
            {
              url: getMeta("og:image") as string,
              alt: getMeta("og:image:alt") as string,
              type: getMeta("og:image:type") as string,
              secureUrl: getMeta("og:image:secure_url") as string,
            },
          ].filter((image) => image.url)
        : [],
    },
    metadataBase: new URL("https://10minuteschool.com"),
  };
}

const inter = Inter({
  subsets: ["latin"],
  weight: "400", // only regular
  variable: "--font-inter",
  display: "swap",
});
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body className={inter.variable}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
