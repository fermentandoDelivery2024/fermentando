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
  description:
    "Experimente nossas pizzas de fermentação natural feitas com ingredientes frescos e de qualidade para um sabor único e complexo, além de serem leves e fáceis de digerir devido a fermentação natural.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${raleway.variable} ${petitFont.variable} scroll-smooth`}
    >
      <body>{children}</body>
    </html>
  );
}
