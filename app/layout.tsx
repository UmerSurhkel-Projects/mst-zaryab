import Head from 'next/head';
import './globals.css';

export const metadata = {
  title: 'Assettrack',
  description: 'I am using assettrack with Next.js!',
  canonicalUrl: 'https://example.com',
  ogImageUrl: 'https://example.com/og-image.jpg',
};

export default function RootLayout({ children }: { children: any }) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:image" content={metadata.ogImageUrl} />
        <meta property="og:url" content={metadata.canonicalUrl} />
        <meta property="og:type" content="website" />
        <link rel="canonical" href={metadata.canonicalUrl} />
      </Head>
      <body>
        <main>{children}</main>
      </body>
    </>
  );
}
