
import Sidebar from "app/(profile)/profile/Sidebar";
import "../globals.css";


export const metadata = {
  title: "پروفایل کاربر",
  description: "پروفایل کاربر",
};

export default function CartLayout({ children }) {
  return (
    <div className="container grid grid-rows-5 grid-cols-12 gap-8 mt-12 xl:max-w-screen-xl">
      <div className="col-span-8 row-span-1 bg-red-50 col-start-3 p-4 rounded-lg overflow-y-auto">
       
      </div> 
       <div className="col-span-12 row-span-4 border border-gray-4 rounded-lg  p-4">
        {children}
      </div>

    </div>
  );
}
