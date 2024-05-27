// const nextConfig = {
//     images: {
//         domains: ['fake-book-store-api.onrender.com'],
//       },
//       reactStrictMode: true,
//       sassOptions: {
//         includePaths: [path.join(__dirname, 'src/theme')],
//       },
// };

// export default nextConfig;


import createNextIntlPlugin from 'next-intl/plugin';
 
const withNextIntl = createNextIntlPlugin();
 
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['fake-book-store-api.onrender.com'],
  },
  
};
 
export default withNextIntl(nextConfig);





