import estedadFont from "@/constants/localFonts";
import "../../globals.css";

import { Toaster } from "react-hot-toast";
import Providers from "../../Providers";


export const metadata = {
  title: "پنل ادمین",
  description: "پنل ادمین",
};

export default function RootLayoutAdmin({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body
        suppressHydrationWarning={true}
        className={`${estedadFont.variable} font-sans`}
      >
        <Providers>
          <Toaster />
       
          
          <div className="container xl:max-w-screen-xl">

            {children}

          </div>
        </Providers>

      </body>
    </html>
  );
}
