
import Image from "next/image";
import Link from "next/link";

const CategoryCard = ({ category }) => {
  return (
   
     <Link  href={`/categories/${category.englishTitle}`} className="flex flex-col items-center relative w-full h-auto">

      {/* بک‌گراند سبز */}
      <div className="w-full h-[100px] sm:h-[130px] md:h-[160px] border border-primary shadow-card-shadow bg-primary rounded-lg relative z-0" />

      {/* تصویر */}
      <div
        className={`absolute z-10 ${
          category.englishTitle === "drink" ? "-top-[105px] sm:-top-[135px] md:-top-28 lg:-top-40" : "-top-20 md:-top-24 lg:-top-28"
        }`}
      >
        <Image
          src={`/images/${category.englishTitle}.png`}
          alt={category.title}
          width={240}
          height={220}
          className="object-contain max-w-[150px] sm:max-w-[180px] md:max-w-[200px] 
          lg:max-w-[240px] 
           h-auto"
        />
      </div>

      {/* دکمه */}
      <div className="-mt-6 sm:-mt-8 w-full flex items-center justify-center z-20">
        <button className="bg-white w-3/5 py-2 sm:py-3 rounded-md shadow-drop-4 text-gray-8 font-medium text-sm sm:text-base md:text-lg">
          {category.title}
        </button>
      </div>
    </Link>
   
  );
};

export default CategoryCard;
