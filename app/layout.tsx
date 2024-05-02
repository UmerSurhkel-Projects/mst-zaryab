// 'use client'
// import { Inter } from "next/font/google";
// import Head from "next/head";
// import { usePathname } from 'next/navigation';
// import { DefaultSeo } from "next-seo";
// import '../public/assets/css/globals.css';

// const inter = Inter({ subsets: ["latin"] });

// const RootLayout = ({children, title, description}) => {
//   const metadata = {
//     title: title,
//     description: description,
//   };
//   const pathname = usePathname();
//   const canonicalUrl = `https://mst-zaryab.vercel.app${pathname}`;
//   const imageUrl = "https://mst-zaryab.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fheader-logo.79c23562.png&w=256&q=75";
  
//   const structuredData = {
//     "@context": "http://schema.org",
//     "@type": "Organization",
//     "name": "AssetTrack",
//     "url": canonicalUrl,
//     "logo": imageUrl,
//   };

//   return (
//     <html lang="en">
//       <Head>
//         <title>{title || metadata.title}</title>
//         <meta name="description" content={description || metadata.description} />
//         <DefaultSeo canonical={canonicalUrl} />
//         <meta property="og:title" content={title || metadata.title} />
//         <meta property="og:type" content="website" />
//         <meta property="og:url" content={canonicalUrl} />
//         <meta property="og:image" content={imageUrl} />
//         <meta property="og:description" content={description || metadata.description} />
//         <script
//           type="application/ld+json"
//           dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
//         />
//       </Head>
//       <body className={inter.className}>
//         {children}
//       </body>
//     </html>
//   );
// }

// export default RootLayout;

// app/layout.js


'use client'
import { ReactNode } from 'react';
import { Inter } from "next/font/google";
import Head from "next/head";
import { usePathname } from 'next/navigation';
import { DefaultSeo } from "next-seo";
import '../public/assets/css/globals.css';

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children, title, description }: RootLayoutProps) {
  const metadata = {
    title: title,
    description: description,
  };
  const pathname = usePathname();
  const canonicalUrl = `https://mst-zaryab.vercel.app${pathname}`;
  const imageUrl = "https://mst-zaryab.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fheader-logo.79c23562.png&w=256&q=75";
  
  const structuredData = {
    "@context": "http://schema.org",
    "@type": "Organization",
    "name": "AssetTrack",
    "url": canonicalUrl,
    "logo": imageUrl,
  };

  return (
    <html lang="en">
      <Head>
        <title>{title || metadata.title}</title>
        <meta name="description" content={description || metadata.description} />
        <DefaultSeo canonical={canonicalUrl} />
        <meta property="og:title" content={title || metadata.title} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content={imageUrl} />
        <meta property="og:description" content={description || metadata.description} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}

// Define the interface for props
interface RootLayoutProps {
  children: ReactNode;
  title: string;
  description: string;
}