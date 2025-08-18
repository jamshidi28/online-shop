"use client"

import { logout } from '@/services/authServices'
import { Heart, Location, Logout, LogoutCurve, User, Wallet2 } from 'iconsax-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'

function Sidebar() {


  const logoutHandler = async () => {
    await logout();

    // localStorage.removeItem("userInfo")
    // localStorage.removeItem("cartItems")
    // localStorage.removeItem("token")
    document.location.href = "/";
  }
  return (
    <div className='border-gray-4'>
      <div className='flex justify-start items-baseline gap-4 border-b-2 border-gray-7 pb-3'>
        <div className='flex border border-gray-4 rounded-full w-24 h-24 justify-center items-center'>picture</div>
        <div className=' items-start'>
          <div className='text-gray-8 pb-1'>کاربر ترخینه</div>
          <div className='text-gray-7 font-thin'>09130913412</div>
        </div>
      </div>

      <div>
        <ul className='pt-6'>
          <li className=''>
            <Link href="/profile">
              <div className='li_style'>
                <User size="24" color="#555" />
                <span>پروفایل</span>
              </div>

            </Link>
          </li>

          <li >
            <Link href="/profile">
              <div className='li_style'>
                <Wallet2 size="24" color="#555" />
                <span>پیگیری سفارشات</span>
              </div>
            </Link>
          </li>

          <li >
            <Link href="/profile">
              <div className='li_style'>
                <Heart size="24" color="#555" />
                <span>علاقمندی ها</span>
              </div>
            </Link>
          </li>

          <li >
            <Link href="/profile">
              <div className='li_style'>
                <Location size="24" color="#555" />
                <span>آدرس های من</span>
              </div>
            </Link>
          </li>

          <li >
            <button onClick={logoutHandler}>
              <div className='li_style'>
                <LogoutCurve size="24" color="#C30000" />
                <span className='text-error'>خروج</span>
              </div>
            </button>
          </li>

        </ul>
      </div>
    </div>
  )
}

export default Sidebar
