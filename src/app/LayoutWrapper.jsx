"use client";

import HeroSlider from "@/components/HeroSlider";
import { usePathname } from "next/navigation";

export default function LayoutWrapper({ children }) {
  const pathname = usePathname();

  // لیست صفحاتی که نباید اسلایدر داشته باشن
  const noSliderRoutes = ["/profile", "/cart"];

  // اگر مسیر فعلی با یکی از مسیرها شروع بشه → اسلایدر نمایش داده نشه
  const shouldShowSlider = !noSliderRoutes.some(route => pathname.startsWith(route));

  return (
    <>
      {shouldShowSlider && <HeroSlider />}
      
      <div className="container xl:max-w-screen-2xl">
        {children}
      </div>
    </>
  );
}
