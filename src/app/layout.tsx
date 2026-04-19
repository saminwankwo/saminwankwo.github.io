import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Nwankwo Samuel — Backend Engineer",
    template: "%s · Nwankwo Samuel",
  },
  description: "Building scalable APIs, cloud-native applications, and robust backend systems.",
  openGraph: {
    title: "Nwankwo Samuel — Backend Engineer",
    description: "Building scalable APIs, cloud-native applications, and robust backend systems.",
    url: "https://saminwankwo-github-io.vercel.app/",
    siteName: "Nwankwo Samuel",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nwankwo Samuel — Backend Engineer",
    description: "Building scalable APIs, cloud-native applications, and robust backend systems.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="dark" className="dark">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Script id="theme-init" strategy="beforeInteractive">
          {`(function(){try{var s=localStorage.getItem('theme');var t=(s==='light')?'light':(s==='dark')?'dark':(window.matchMedia&&window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light');var d=document.documentElement;d.setAttribute('data-theme',t);if(t==='dark'){d.classList.add('dark')}else{d.classList.remove('dark')}}catch(e){}})();`}
        </Script>
        <Header />
        <main className="pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
