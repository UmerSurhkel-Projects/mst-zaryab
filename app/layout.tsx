'use client'
import { usePathname } from 'next/navigation';
import { NextSeo } from 'next-seo';
import '../public/assets/css/globals.css';

export default function RootLayout({ children }: { children: any }) {
  const pathname = usePathname();
  
  // Set canonical URL based on the current pathname
  const canonicalUrl = `https://mst-zaryab.vercel.app${pathname}`;

  return (
    <>
      <NextSeo
        title="Using More of Config"
        description="This example uses more of the available config options."
        canonical={canonicalUrl}
        openGraph={{
          url: canonicalUrl,
          title: 'Open Graph Title',
          description: 'Open Graph Description',
          images: [
            {
              url: 'https://mst-zaryab.vercel.app/og-image-01.jpg',
              width: 800,
              height: 600,
              alt: 'Og Image Alt',
              type: 'image/jpeg',
            },
            {
              url: 'https://mst-zaryab.vercel.app/og-image-02.jpg',
              width: 900,
              height: 800,
              alt: 'Og Image Alt Second',
              type: 'image/jpeg',
            },
            { url: 'https://mst-zaryab.vercel.app/og-image-03.jpg' },
            { url: 'https://mst-zaryab.vercel.app/og-image-04.jpg' },
          ],
          siteName: 'SiteName',
        }}
        twitter={{
          handle: '@handle',
          site: '@site',
          cardType: 'summary_large_image',
        }}
      />
      <body>
        <main>{children}</main>
      </body>
    </>
  );
}
