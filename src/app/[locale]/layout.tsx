import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { PageParamsType } from '@/types';
import { NextIntlClientProvider, useMessages } from 'next-intl';
import Providers from "../provider";
import Header from "@/components/Header";
import "../globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "THE LOST CHAPTER",
  description: "THE LOST CHAPTER",
};

export default function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: PageParamsType;
}>) {
  const messages = useMessages();
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning={true}>
        <NextIntlClientProvider
          locale={locale}
          messages={messages}
        >
           <Header />
         
           <main><Providers>{children}</Providers></main>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
