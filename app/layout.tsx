import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "System Castle",
  description: "System Castle is a leading software development company that specializes in creating innovative and high-quality software solutions for businesses of all sizes. Our team of experienced developers, designers, and project managers work closely with clients to understand their unique needs and deliver customized software that meets their specific requirements. From web and mobile applications to enterprise software and cloud solutions, we have the expertise to bring your ideas to life. At SystemCastle, we are committed to delivering exceptional results and helping our clients achieve their business goals through technology.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
