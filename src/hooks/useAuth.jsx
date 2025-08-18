import { getUserProfile } from "@/services/authServices"
import { useQuery } from "@tanstack/react-query"



export const useGetUser =()=>{
   return useQuery(
        {
            queryKey: ["get-user"],
            queryFn: getUserProfile,
            retry:false,
        }
    )
}