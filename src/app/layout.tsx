import type { Metadata } from "next";
import { Josefin_Sans } from 'next/font/google'
import "./globals.css";

const josefinSans = Josefin_Sans({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: "HR Manager",
  description: "Your Favourite HR Assistant",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${josefinSans.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
