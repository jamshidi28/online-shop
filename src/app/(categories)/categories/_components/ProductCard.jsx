
import { Heart, Star1 } from "iconsax-react";
import Image from "next/image";
import AddToCart from "../[categoryId]/AddToCart";


function ProductCard({ product }) {

  return (
    <div className="grid grid-cols-6 bg-white border border-gray-300 rounded-xl shadow-md overflow-hidden">
      {/* تصویر */}
      <div className="col-span-2 ">
        <Image
          src="/images/kabab-koubide.png"
          alt={product.title}
          width={170}
          height={170}
          className="w-fit h-full object-cover"
        />
      </div>

      {/* اطلاعات */}
      <div className="col-span-4 p-4 ">
        {/* بالای کارت */}
        <div className="flex items-start justify-between pb-2">
          <h3 className="text-lg font-bold">{product.title}</h3>
          <button className="text-gray-500 hover:text-red-500">
            <Heart size={20} color="#717171" />
          </button>
        </div>

        {/* قیمت و تخفیف */}
        <div className={`flex items-start justify-between ${product.discount === 0 ? "pb-[6px]" : "pb-[0px]"}`}>
          {/* توضیحات */}
          <p className="flex w-2/3 leading-relaxed text-gray-600 text-sm ">
            {product.description}
          </p>
          <div>
            <div className="flex gap-4">
              
                {!!product.discount && (
                    <div className="flex gap-4">
                      <span className="line-through text-gray-400 text-sm">
                        {product.price.toLocaleString("fa-IR")}
                      </span>
                      <div className="text-red-500  text-sm">
                        %{product.discount.toLocaleString("fa-IR")}
                      </div>
                    </div>
                  )
                }
             
            </div>
            <div className="text-left">
              <span className="text-lg  text-gray-800">
                {product.offPrice.toLocaleString("fa-IR")} تومان
              </span>
            </div>

          </div>
        </div>

        {/* دکمه و امتیاز */}
        <div className="mt-4 flex items-center justify-between">

          <div className="flex text-yellow-400">
            {[...Array(5)].map((_, i) => (

              <Star1 key={i} size={20} color="#facc15" className="ml-1" />
            ))}
          </div>
          <div className="w-full">
            <AddToCart product={product}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
