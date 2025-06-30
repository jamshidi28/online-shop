import estedadFont from "@/constants/localFonts";
import "./globals.css";


export const metadata = {
  title: "Next Shop Panel",
  description: "Next.js Course Fronthooks Course",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body
        suppressHydrationWarning={true}
        className={`${estedadFont.variable} font-sans`}
      >
       
         
          <div className="container xl:max-w-screen-xl bg-red-50">{children}</div>
       
      </body>
    </html>
  );
}
