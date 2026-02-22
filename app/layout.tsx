import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import { ThemeProvider } from "./provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title:
    "Aryan Kuril | Full Stack Software Developer | React & Node.js Portfolio",
  description:
    "Aryan Kuril is a Full Stack Software Developer specializing in React, Node.js, Express, and MongoDB. Explore scalable web applications, real-world projects, and professional portfolio work.",
  keywords: [
    "Aryan Kuril",
    "Full Stack Developer",
    "Software Developer",
    "React Developer",
    "Node.js Developer",
    "MongoDB Developer",
    "Web Developer Portfolio",
  ],
  authors: [{ name: "Aryan Kuril" }],
  creator: "Aryan Kuril",
  openGraph: {
    title: "Aryan Kuril | Full Stack Software Developer",
    description:
      "Full Stack Developer specializing in React, Node.js, and MongoDB. Explore projects and professional portfolio.",
    // url: "https://yourdomain.com",
    siteName: "Aryan Kuril Portfolio",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
     
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
