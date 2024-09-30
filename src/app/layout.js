import localFont from "next/font/local";
import "./globals.css";
import Navber from "@/conponents/Shared/Navber/Navber";
import Footer from "@/conponents/Shared/Footer/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: {
    default: 'Next Hero',
    template: '%s || Next Hero'
  },
  description: "Most PowerFull Next Hero!!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navber />
        {children}
        <Footer />
      </body>
    </html>
  );
}
