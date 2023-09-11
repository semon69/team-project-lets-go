/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
};

// module.exports = nextConfig

module.exports = {
  nextConfig,
  images: {
    domains: [
      "gaviaspreview.com",
      "i.ibb.co",
      "cdn-icons-png.flaticon.com",
      "images.unsplash.com",
      "cdn.pixabay.com",
      "img.freepik.com"
    ],
  },
  // pages: {
  //   '/Booking': { prerender: false },
  //   '/newsDetails': { prerender: false },
  // },
};
