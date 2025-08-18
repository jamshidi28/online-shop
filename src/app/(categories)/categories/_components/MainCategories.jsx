import CategoryCard from 'app/(categories)/categories/_components/CategoryCard';
import { getCategories } from '@/services/categoriesService';

async function MainCategories() {
    
    const { categories } = await getCategories();
    const originCategory = categories.filter((item) => item.parentId === null);
    return (
        <div className="my-14">
            <h2 className="text-center text-xl md:text-[27px] text-gray-8 font-semibold mb-20 md:mb-40">
                منوی رستوران
            </h2>

            <div className="container xl:max-w-screen-xl mx-auto px-4">
                <div className="grid grid-cols-4 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-12  gap-y-32 gap-x-8 sm:gap-x-6 sm:gap-y-40 md:gap-y-32">
                    {originCategory.map((category) => (
                        <div
                            key={category.id}
                            className="col-span-2 sm:col-span-2 md:col-span-3 lg:col-span-3 flex justify-center"
                        >
                            <CategoryCard key={category.id} category={category} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default MainCategories
