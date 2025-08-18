"use client"
import { useGetUser } from "@/hooks/useAuth"
import TextField from "common/TextField";
import { Edit2 } from "iconsax-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import EditForm from "./EditForm";
import ProfileForm from "./ProfileForm";


function Profile() {
  const [isOpen, setIsOpen] = useState(false)
  const { data } = useGetUser();
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
   <div>
    {
      !isOpen ? <ProfileForm setIsOpen={setIsOpen}/> : <EditForm setIsOpen={setIsOpen}/>
    }
   </div>


  )
}

export default Profile
