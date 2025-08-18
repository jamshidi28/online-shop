
import estedadFont from "@/constants/localFonts";
import "./globals.css";
import Header from "./Header";
import { Toaster } from "react-hot-toast";
import Providers from "./Providers";
import LayoutWrapper from "./LayoutWrapper";



export const metadata = {
  title: "Next Shop Panel",
  description: "Next.js Course Fronthooks Course",
  icons: {
    icon: "/favicon.ico",  // مسیر ثابت و درست
  },
};

export default function RootLayout({ children }) {
 
  return (
    <html lang="fa" dir="rtl">
      <body
        suppressHydrationWarning={true}
        className={`${estedadFont.variable} font-sans`}
      >
        <Providers>
          <Toaster />
          <Header />
         
          
          <div className="">

            <LayoutWrapper>{children}</LayoutWrapper>

          </div>
        </Providers>

      </body>
    </html>
  );
}
