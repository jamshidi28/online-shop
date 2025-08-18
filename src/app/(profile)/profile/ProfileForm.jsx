"use client"
import { useGetUser } from "@/hooks/useAuth"
import Loading from "common/Loading";
import TextField from "common/TextField";
import { Edit2 } from "iconsax-react";
import { useEffect, useState } from "react";



function ProfileForm({setIsOpen}) {
  
  const { data,isLoading } = useGetUser();
  const { user } = data || {};
  console.log(data)


  useEffect(() => {
    if (user) {
      (user.name || "");
      (user.email || "");
      (user.biography || "");
    }
  }, [user]);



  return (
    <div className="w-full max-w-5xl mx-auto p-6">
      <div className="border-b-2 border-gray-4 mb-14">
        <p className="font-semibold text-gray-8 pb-3 text-lg">پروفایل من</p>
      </div>


      <div className="grid grid-cols-12 gap-4 ">
        <div className="col-span-12  md:col-start-2 md:col-span-5">
          <TextField
            name="name"
            label="نام و نام خانوادگی"
            value={user?.name || ""}
            onChange={(e) => (e.target.value)}
            placeholder="نام"
          />
          <TextField
            name="email"
            label="ایمیل"
            value={user?.email || ""}
            disabled
            placeholder="ایمیل"
            onChange={(e) => (e.target.value)}
          />
        </div>

        <div className="col-span-12 md:col-span-5">
          <TextField
            name="phoneNumber"
            label="شماره موبایل"
            value={user?.phoneNumber || ""}
            disabled
            placeholder="شماره موبایل"
            onChange={(e) => (e.target.value)}

          />
          <TextField
            name="biography"
            label="بیوگرافی"
            value={user?.biography || ""}
            placeholder="بیوگرافی"
            onChange={(e) => (e.target.value)}
          />
        </div>
      </div>
      

      <div className="flex items-center justify-center mt-2">

          {
            isLoading ? <Loading/> :
            (<button className="btn btn--primary flex items-center justify-center font-medium py-[5.5px] w-[250px] " onClick={() => setIsOpen((c) => !c)}>
            <Edit2 size="24" color="#417F56" />
            <span className="text-primary pr-2   ">ویرایش اطلاعات شخصی</span>
          </button>)
          }

      </div>
     
      
    </div>








  )
}

export default ProfileForm
