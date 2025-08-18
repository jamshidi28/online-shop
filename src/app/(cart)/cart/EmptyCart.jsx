import Image from 'next/image'
import Link from 'next/link'


function EmptyCart() {
    return (
        <div className='flex items-center justify-center m-10 relative w-full p-20 '>
            <Image
                src="/images/Vector.png"
                width={310}
                height={310}
                className="absolute inset-20 mx-auto my-auto w-72 h-72 opacity-70"


            />
            <div className="relative text-center mt-12">
                <p className="text-lg text-gray-600 mb-10">
                    شما در حال حاضر هیچ سفارشی ثبت نکرده‌اید!
                </p>

                <Link
                    href="/menu"
                    className="px-10 py-1 border border-green-600 text-green-700 rounded-md hover:bg-green-600 hover:text-white transition"
                >
                    منوی رستوران
                </Link>
            </div>
        </div>


    )
}

export default EmptyCart
