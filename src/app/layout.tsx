import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";

const raleway = Raleway({ subsets: ["latin"], variable: "--font-raleway" });

const petitFont = localFont({
  src: "../../public/nf-le-petit-cochon-regular.ttf",
  display: "swap",
  variable: "--font-petit",
});

export const metadata: Metadata = {
  title: "Fermentando Delivery",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${raleway.variable} ${petitFont.variable}`}>
      <body>{children}</body>
    </html>
  );
}
