"use client"
import { useGetUser } from '@/hooks/useAuth';
import EmptyCart from './EmptyCart';


function CartPage() {
  const { data, isLoading } = useGetUser();
  const { user, cart } = data || {}
  // console.log(data)
  if (!user?.cart?.products || user?.cart?.products.length === 0)
    return <EmptyCart/>

    return (
      <div>
        {
          cart &&
          cart.productDetail.map((item) => {
            return <p key={item._id} >{item.title}</p>
          })
        }

      </div>
    )
}

export default CartPage
