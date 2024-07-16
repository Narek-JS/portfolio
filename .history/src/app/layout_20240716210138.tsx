import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Header } from '@/components/Header';
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Javascript software enginer Narek Petrosyan",
  openGraph: {
    type: "website",
    title: "Portfolio",
    description: "Javascript software enginer Narek Petrosyan",
    images: ['/images/myImage.jpg']
  }
};

const RootLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => (
  <html lang="en">
    <body className={inter.className}>
      <Header />
      <main>
        <section className='sectionInMain__'>
          {children}
        </section>
      </main>
    </body>
  </html>
);

export default RootLayout;