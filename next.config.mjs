/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  output: "export",
  images: {
    domains: ["photobank.maximum.expert"],
  },
};

export default nextConfig;
