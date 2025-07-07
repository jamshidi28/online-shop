"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";

const slides = [
  { id: 1, src: "/images/slider-1.png", alt: "اسلاید اول" },
  // { id: 2, src: "/images/slider-2.png", alt: "اسلاید دوم" },
  //   { id: 3, src: "/images/slider-3.jpg", alt: "اسلاید سوم" },
];

export default function HeroSlider() {
  return (
    <section className="w-full  relative overflow-hidden ">
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{
          clickable: true,
          el: ".custom-pagination",
        }}
        autoplay={{ delay: 4000 }}
        loop={true}
        className="w-full h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative w-full  aspect-[4/1] ">
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                className="object-cover"
                priority
              />
            </div>
          </SwiperSlide>
        ))}

        {/* Custom Pagination */}

        <div className="absolute bottom-[-15px] left-1/2 -translate-x-1/2 z-20">
          <div className="bg-white w-[120px] h-[40px] rounded-t-[20px] shadow-md flex items-center justify-center relative">
            <div className="custom-pagination flex gap-2 items-center justify-center" />
          </div>
        </div>

        <div className="absolute inset-0 flex items-center justify-center text-white text-center z-10">
          <span className="sm:text-xl md:text-2xl">تجربه غذای سالم و گیاهی به سبک ترخینه</span>
        </div>


      </Swiper>
    </section>
  );
}
