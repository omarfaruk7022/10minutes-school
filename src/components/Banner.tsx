import Link from "next/link";

export default function Banner() {
  return (
    <div>
      <Link
        href={
          "https://docs.google.com/forms/d/e/1FAIpQLSfX6YBGXnY8YxNlVZOEP6Y9GVCWVo9Qe-aeCuGM_4NV5Hu30Q/viewform"
        }
        target="_blank"
      >
        <div
          className="cursor-pointer"
          style={{
            backgroundImage:
              "url('https://cdn.10minuteschool.com/images/dasktop_banner_1753270611489.png?w=1800?w=1800&h=150')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "150px",
          }}
        ></div>
      </Link>
    </div>
  );
}
