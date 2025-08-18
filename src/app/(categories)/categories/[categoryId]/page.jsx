import ProductCard from "../_components/ProductCard";
import FilterCategories from "../_components/FilterCategories";

export default async function CategoryPage({ params, searchParams }) {
  const { categoryId } = params;
  const activeCategory = searchParams?.subCat || null;
  console.log(searchParams
    
  )

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/product/list?categoryId=${categoryId}`,
    { cache: "no-store" }
  );
  const { data } = await res.json();
  const products = data?.products || [];

  // گروه‌بندی محصولات
  const groupedProducts = products.reduce((acc, curr) => {
    const catTitle = curr?.category?.title ?? "بدون دسته‌بندی";
    acc[catTitle] = [...(acc[catTitle] || []), curr];
    return acc;
  }, {});

  const subCategories = Object.keys(groupedProducts);
  const displayedProducts = activeCategory
    ? { [activeCategory]: groupedProducts[activeCategory] }
    : groupedProducts;

  return (
    <div className="container xl:max-w-screen-xl mx-auto px-4 py-5">
      <FilterCategories
        activeCategory={activeCategory}
        subCategories={subCategories}
      />

      {Object.entries(displayedProducts).map(([cat, products]) => (
        <section key={cat} className="mb-10">
          <h2 className="text-xl font-bold mb-4">{cat}</h2>
          <div className="grid grid-cols-12 gap-y-10 gap-x-8">
            {products.map((product) => (
              <div key={product._id} className="col-span-12 lg:col-span-6">
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
