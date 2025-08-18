"use client"
import { useGetUser } from '@/hooks/useAuth'
import { addToCart } from '@/services/cartServices';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import Loading from 'common/Loading';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';

function AddToCart({ product }) {
    // console.log(product)
    const { data, isLoading } = useGetUser();
    const { user } = data || {}
    // console.log(user)
    const queryClient = useQueryClient()
    const router = useRouter()
    const { error, mutateAsync } = useMutation({ mutationFn: addToCart })

    const addToCartHandler = async () => {
        if (!user) {
            toast.error("لطفا وارد حساب کاربری خود شوید")
            router.push("/")
            return;
        }
        try {
            const { message } = await mutateAsync(product._id)
            toast.success(message)
            queryClient.invalidateQueries("get-user")

        } catch (error) {
            toast.error(error?.response?.data)
        }
    }
    console.log()
    const isInCart = (user, product) => {
        if (!user) return false;
        return user.cart?.products.some((p) => p.productId === product._id)
    }
    return (
        <div>
            {
                isInCart(user, product) ? (
                    <div >
                        <Link href="/cart" className="w-full block mr-2 bg-tint-5 text-center text-white  py-2 rounded-md hover:bg-tint-4 hover:text-white">ادامه خرید</Link>
                    </div>
                ) : isLoading ? (
                    <Loading />
                ) :
                    <div>
                        <button onClick={addToCartHandler} className="w-full mr-2 bg-primary text-white  py-2 rounded-md hover:bg-green-700">
                            افزودن به سبد خرید
                        </button>
                    </div>
            }
        </div>
    )
}

export default AddToCart
