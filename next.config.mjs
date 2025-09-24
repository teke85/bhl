<<<<<<< HEAD
/** @type {import('next').NextConfig} */
=======
>>>>>>> e662db40e2c772e8f8b4e5a7be1cec13ace7689f
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
