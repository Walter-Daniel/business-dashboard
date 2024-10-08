"use client";

import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export const Header = () => {
    const router = useRouter();
  return (
    <div className='flex items-center text-xl mb-2'>
        <ArrowLeft 
            className="w-5 h-5 mr-2 cursor-pointer"
            onClick={()=> router.push("/companies")}
        />
        Edit company
    </div>
  )
}
