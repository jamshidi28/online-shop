"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { ArrowLeft2, ArrowLeft3 } from "iconsax-react";

function FilterCategories({ activeCategory, subCategories }) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleClick = (category) => {
    const params = new URLSearchParams(searchParams);
    if (category) {
      params.set("subCat", category);
    } else {
      params.delete("subCat");
    }
    router.push(`?${params.toString()}`); // URL رو آپدیت میکنه
  };

  return (
    <div className="flex gap-1 px-2 sm:px-1 mb-6 flex-wrap ">
      <div
        className={`flex items-center px-1 py-2 rounded-full text-xs lg:text-base ${
          activeCategory === null
            ? "bg-tint-1 text-primary"
            : "bg-gray-3 text-gray-8 "
        }`}
      >
        <button onClick={() => handleClick(null)} className="px-1">
          همه
        </button>
        {activeCategory === null ? (
          <ArrowLeft3 fill="#417F56" color="#417F56" size={16} />
        ) : (
          <ArrowLeft2 color="gray" size={16} />
        )}
      </div>

      {subCategories.map((item) => (
        <div
          key={item}
          className={`flex items-center px-2 py-2 rounded-full text-xs lg:text-base ${
            activeCategory === item
              ? "bg-tint-1 text-primary"
              : "bg-gray-3 text-gray-8"
          }`}
        >
          <button onClick={() => handleClick(item)} className="px-1">
            {item}
          </button>
          {activeCategory === item ? (
            <ArrowLeft3 color="#417F56" size={16} />
          ) : (
            <ArrowLeft2 color="gray" size={16} />
          )}
        </div>
      ))}
    </div>
  );
}

export default FilterCategories;
