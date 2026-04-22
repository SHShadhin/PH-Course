/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,

  // https://plus.unsplash.com/premium_photo-1664304310991-b43610000fc2

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'plus.unsplash.com',
        port: '',
        pathname: '/premium_photo-1664304310991-b43610000fc2/**',
        search: '',
      },
    ],
  },
};

export default nextConfig;
