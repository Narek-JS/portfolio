import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Header } from '@/components/Header';
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Resume",
  description: "Generated Portfolio app next JS",
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