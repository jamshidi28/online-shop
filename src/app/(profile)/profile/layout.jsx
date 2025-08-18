
import "../../globals.css";
import Sidebar from "./Sidebar";

export const metadata = {
  title: "پروفایل کاربر",
  description: "پروفایل کاربر",
};

export default function ProfileLayout({ children }) {
  return (
    <div className="container grid grid-cols-12 gap-8 mt-12 xl:max-w-screen-xl">
      <div className="col-span-3 border border-gray-4 p-4 rounded-lg overflow-y-auto">
        <Sidebar />
      </div>
      <div className="col-span-9 border border-gray-4 rounded-lg overflow-y-auto p-4">
        {children}
      </div>
    </div>
  );
}




// import estedadFont from "@/constants/localFonts";
// import "../../globals.css";
// import Header from "../../Header";
// import { Toaster } from "react-hot-toast";
// import Providers from "../../Providers";
// import Sidebar from "./Sidebar";


// export const metadata = {
//   title: "پروفایل کاربر",
//   description: "پروفایل کاربر",
// };

// export default function RootLayout({ children }) {
//   return (
//     <html lang="fa" dir="rtl">
//       <body
//         suppressHydrationWarning={true}
//         className={`${estedadFont.variable} font-sans`}
//       >
//         <Providers>
//           <Toaster />
//           <Header />

//           <div className="container grid grid-cols-12 gap-8 mt-12 xl:max-w-screen-xl">
          
//               <div className="col-span-3 border border-gray-4 p-4 rounded-lg overflow-y-auto">
//                 <Sidebar/>
//               </div>

//               <div className="col-span-9 border border-gray-4  rounded-lg overflow-y-auto p-4">
                
//                 {children}
//               </div>
           
//           </div>
//         </Providers>

//       </body>
//     </html>

//   );
// }
