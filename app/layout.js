import { Poppins } from 'next/font/google'
import localFont from "next/font/local";
import "./globals.css";
import ThemeWrapper from "./components/ThemeWrapper";

const poppins = Poppins({ 
  subsets: ['latin'], 
  weight: ['400', '600', '700'],
  display: 'swap'
})


export const metadata = {
  title: "Dream Lotto",
  description: "Making millionaires, one at a time",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} antialiased`}
      >
        <ThemeWrapper>
        {children}
        </ThemeWrapper>
      </body>
    </html>
  );
}
