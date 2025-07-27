import Link from "next/link";
import Image from "next/image";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaTiktok,
} from "react-icons/fa6";
import { IoChatbubbleEllipsesOutline, IoCallOutline } from "react-icons/io5";
import logo from "../../../public/images/10mslogo-svg.svg";
import play from "../../../public/images/google-play-icon.jpeg";
import apple from "../../../public/images/ios-store-icon.jpeg";

export default function Footer() {
  return (
    <footer className="bg-white text-gray-800 py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-14  relative">
      <div className=" grid grid-cols-1 md:grid-cols-4 gap-8 border-b  border-gray-200 pb-8 mb-8">
        {/* Column 1: App Download */}
        <div className="flex flex-col items-start">
          <Link href={"/"} className="flex-shrink-0">
            <Image width={100} height={100} alt="logo" src={logo}></Image>
          </Link>
          <p className="text-sm mb-4">ডাউনলোড করুন আমাদের মোবাইল অ্যাপ</p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link href="#" className="block">
              <Image
                src={play}
                alt="Get it on Google Play"
                width={135}
                height={40}
                className="h-10 w-auto"
              />
            </Link>
            <Link href="#" className="block">
              <Image
                src={apple}
                alt="Download on the App Store"
                width={135}
                height={40}
                className="h-10 w-auto"
              />
            </Link>
          </div>
        </div>

        {/* Column 2: Company Links */}
        <div>
          <h3 className="font-bold text-lg mb-4">কোম্পানি</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="#" className="hover:underline">
                ক্যারিয়ার / নিয়োগ বিজ্ঞপ্তি
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                শিক্ষক হিসেবে যোগ দিন
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                অ্যাফিলিয়েট হিসেবে যোগ দিন
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                প্রাইভেসি পলিসি
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                রিফান্ড পলিসি
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                ব্যবহারকারীর শর্তাবলি
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3: Other Links */}
        <div>
          <h3 className="font-bold text-lg mb-4">অন্যান্য</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="#" className="hover:underline">
                ব্লগ
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                বুক স্টোর
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                ফ্রি নোটস ও গাইড
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                চাকরি প্রস্তুতি কোর্সসমূহ
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                সার্টিফিকেট ভেরিফাই করুন
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                ফ্রি ডাউনলোড
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 4: Contact Information */}
        <div>
          <h3 className="font-bold text-lg mb-4">আমাদের যোগাযোগ মাধ্যম</h3>
          <div className="space-y-2 text-sm mb-6">
            <p>
              কল করুন:{" "}
              <Link href="tel:16910" className="text-green-600 hover:underline">
                16910
              </Link>{" "}
              (24x7)
            </p>
            <p>
              হোয়াটসঅ্যাপ:{" "}
              <Link
                href="https://wa.me/8801896016252"
                className="text-green-600 hover:underline"
              >
                +8801896016252
              </Link>
              (24x7)
            </p>
            <p>
              দেশের বাহির থেকে:{" "}
              <Link
                href="tel:+8809610916910"
                className="text-green-600 hover:underline"
              >
                +880 9610916910
              </Link>
            </p>
            <p>
              ইমেইল:{" "}
              <Link
                href="mailto:support@10minuteschool.com"
                className="text-green-600 hover:underline"
              >
                support@10minuteschool.com
              </Link>
            </p>
          </div>
          <div className="flex space-x-3">
            <Link
              href="#"
              className="w-9 h-9 flex items-center justify-center bg-gray-800 rounded-md text-white hover:bg-gray-700"
              aria-label="Facebook"
            >
              <FaFacebookF className="w-5 h-5" />
            </Link>
            <Link
              href="#"
              className="w-9 h-9 flex items-center justify-center bg-gray-800 rounded-md text-white hover:bg-gray-700"
              aria-label="Instagram"
            >
              <FaInstagram className="w-5 h-5" />
            </Link>
            <Link
              href="#"
              className="w-9 h-9 flex items-center justify-center bg-gray-800 rounded-md text-white hover:bg-gray-700"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn className="w-5 h-5" />
            </Link>
            <Link
              href="#"
              className="w-9 h-9 flex items-center justify-center bg-gray-800 rounded-md text-white hover:bg-gray-700"
              aria-label="YouTube"
            >
              <FaYoutube className="w-5 h-5" />
            </Link>
            <Link
              href="#"
              className="w-9 h-9 flex items-center justify-center bg-gray-800 rounded-md text-white hover:bg-gray-700"
              aria-label="TikTok"
            >
              <FaTiktok className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="max-w-7xl mx-auto text-center text-sm text-gray-600">
        <p>স্বত্ব © ২০২৩ - ২০২৫ টেন মিনিট স্কুল কর্তৃক সর্বস্বত্ব সংরক্ষিত</p>
      </div>

      {/* Floating Buttons */}
      <div className="fixed bottom-6 right-6 flex flex-col space-y-3 z-50">
        <Link
          href="#"
          className="w-12 h-12 flex items-center justify-center bg-green-500 rounded-full shadow-lg text-white hover:bg-green-600"
          aria-label="Chat"
        >
          <IoChatbubbleEllipsesOutline className="w-6 h-6" />
        </Link>
        <Link
          href="#"
          className="w-12 h-12 flex items-center justify-center bg-green-500 rounded-full shadow-lg text-white hover:bg-green-600"
          aria-label="Call"
        >
          <IoCallOutline className="w-6 h-6" />
        </Link>
      </div>
    </footer>
  );
}
