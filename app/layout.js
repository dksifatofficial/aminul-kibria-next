import { Inter } from "next/font/google";
import Footer from "./components/Footer";
import TopNav from "./components/TopNav";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Aminul Kibria",
  description:
    "Most common methods for designing websites that work well on desktop is responsive and adaptive design",
  author: "Aminul Kibria",
  keywords:
    "Web design, Web development, JavaScript, Aminul Kibria, Aminul, Kibria, DK Sifat",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${"dark:bg-black bg-white"}`}>
        <TopNav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
