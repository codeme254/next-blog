import { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";

const openSans = Open_Sans({
  variable: "--open-sans",
  style: ["italic", "normal"],
});

export const metadata: Metadata = {
  title: "next blog",
  description: "blogging website built using Next.js",
};

export default function RootLayout({
  children,
}: {
  children: Readonly<React.ReactNode>;
}) {
  return (
    <html>
      <body className={openSans.className}>{children}</body>
    </html>
  );
}
