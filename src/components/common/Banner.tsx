import Link from "next/link";

export default function Banner() {
  return (
    <div className="w-full">
      <Link
        href="https://docs.google.com/forms/d/e/1FAIpQLSfX6YBGXnY8YxNlVZOEP6Y9GVCWVo9Qe-aeCuGM_4NV5Hu30Q/viewform"
        target="_blank"
      >
        {/* Mobile Banner */}
        <div
          className="block md:hidden cursor-pointer bg-cover bg-center w-full h-[80px]"
          style={{
            backgroundImage:
              "url('https://cdn.10minuteschool.com/images/mobile_banner_1753355543677.png?w=768&h=143')",
          }}
        ></div>

        {/* Desktop Banner */}
        <div
          className="hidden md:block cursor-pointer bg-cover bg-center w-full h-[150px]"
          style={{
            backgroundImage:
              "url('https://cdn.10minuteschool.com/images/dasktop_banner_1753270611489.png?w=1800&h=150')",
          }}
        ></div>
      </Link>
    </div>
  );
}
