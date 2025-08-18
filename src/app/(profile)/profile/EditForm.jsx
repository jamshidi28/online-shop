"use client"
import { useGetUser } from "@/hooks/useAuth"
import { updateProfile } from "@/services/authServices";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import TextField from "common/TextField";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";


function EditForm({ setIsOpen }) {
    const { data } = useGetUser();
    const { user } = data || {};
    console.log(data)
    const queryClient = useQueryClient()
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [biography, setBiography] = useState("");
    const { isLoading, mutateAsync } = useMutation({
        mutationFn: updateProfile,
    });

    useEffect(() => {
        if (user) {
            setName(user.name || "");
            setEmail(user.email || "");
            setBiography(user.biography || "");
        }
    }, [user]);

    const submitHandler = async (e) => {
        e.preventDefault();
        try {
            const { message } = await mutateAsync({ name, email, biography });
            toast.success(message)
            queryClient.invalidateQueries({ queryKey: ["get-user"] })
            setIsOpen(false)

        } catch (error) {
            toast.error(error?.response?.data?.message);
        }
    };




    return (
        <div className="w-full max-h-screen max-w-5xl mx-auto p-6">
            <div className="border-b-2 border-gray-4 mb-14">
                <p className="font-semibold text-gray-8 pb-3 text-lg"> ویرایش اطلاعات شخصی</p>
            </div>

            <form >
                <div className="grid grid-cols-12  gap-4 ">
                    <div className="col-span-12  md:col-start-2 md:col-span-5">
                        <div className="relative w-full max-w-md">

                            <TextField
                                name="name"
                                label="نام"
                                value={name}
                                onChange={(e) => setName(e.target.value)}


                            />
                        </div>
                        <div className="relative w-full max-w-md">
                            <TextField
                                name="email"
                                label="آدرس ایمیل"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                dir="ltr"

                            />
                        </div>

                    </div>

                    <div className="col-span-12 md:col-span-5 ">
                        <div className="relative w-full max-w-md">
                            <TextField
                                name="phoneNumber"
                                label="شماره همراه"
                                value={user?.phoneNumber || ""}
                                disabled

                            />
                        </div>
                        <div className="relative w-full max-w-md">
                            <TextField
                                name="biography"
                                label="بیوگرافی"
                                value={biography}
                                onChange={(e) => setBiography(e.target.value)}

                            />
                        </div>

                    </div>


                    <div className="md:col-start-8 md:col-span-4 ">
                        <div className="flex container ">

                            <button onClick={() => setIsOpen((c) => !c)} className="btn btn--primary md:ml-4">
                                انصراف
                            </button>
                            <button onClick={submitHandler} type="submit" className="btn btn--secondary ">
                                ذخیره اطلاعات
                            </button>

                        </div>
                    </div>
                </div>
            </form>
        </div>

    )
}

export default EditForm
