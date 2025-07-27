/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "10mschool.com",
      "cdn.10mschool.com",
      "images.10mschool.com",
      "api.10mschool.com",
      "static.10mschool.com",
      "cdn.10minuteschool.com",
      "s3.ap-southeast-1.amazonaws.com",
    ],
  },
  // other config options...
};

export default nextConfig;
