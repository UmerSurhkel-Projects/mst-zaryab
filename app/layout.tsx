import type { Metadata } from "next";
import '../public/assets/css/globals.css';


export const metadata: Metadata = {
  metadataBase: new URL("https://mst-zaryab.vercel.app/"),
  title: {
    default: "AssetTrack: Streamline Asset Management for Business Efficiency",
    template: `$%s - AssetTrack`,
  },
  description:
  "Discover AssetTrack: Optimize asset management with ease. Streamline inventory, track assets, and boost efficiency with our comprehensive suite. Take control of your assets today!",
    keywords: [
    "AssetTrack",
    "asset management",
    "inventory management",
    "business assets",
    "asset tracking",
  ],
  authors: [
    {
      name: "Assettrack",
      url: "https://mst-zaryab.vercel.app/",
    },
  ],
  creator: "YourName",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://mst-zaryab.vercel.app/",
    title:  "AssetTrack: Streamline Asset Management for Business Efficiency",
    description:
    "Discover AssetTrack: Optimize asset management with ease. Streamline inventory, track assets, and boost efficiency with our comprehensive suite. Take control of your assets today!",    siteName: "AssetTrack",
    images: [
      {
        url: `https://mst-zaryab.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fheader-logo.79c23562.png&w=256&q=75g`,
        width: 1200,
        height: 715,
        alt: "AssetTrack Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:  "AssetTrack: Streamline Asset Management for Business Efficiency",
    description:
    "Discover AssetTrack: Optimize asset management with ease. Streamline inventory, track assets, and boost efficiency with our comprehensive suite. Take control of your assets today!",    creator: "@yourtwitterhandle",
    images: [`https://mst-zaryab.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fheader-logo.79c23562.png&w=256&q=75`],
  },
  icons: {
    icon: "/favicon.ico",
  },
};
const structuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "AssetTrack",
  "url": "https://mst-zaryab.vercel.app/",
  "logo": "https://mst-zaryab.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fheader-logo.79c23562.png&w=256&q=75",
  "sameAs": [
    "https://twitter.com/yourtwitterhandle",
    "https://www.linkedin.com/company/yourcompanyname",
    "https://www.facebook.com/yourfacebookpage",
  ]
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href={metadata?.metadataBase?.href} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}

