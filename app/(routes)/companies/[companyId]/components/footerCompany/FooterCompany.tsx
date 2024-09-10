"use client";

import { Button } from "@/components/ui";
import { toast } from "@/hooks/use-toast";
import axios from "axios";
import { Trash } from "lucide-react";
import { useRouter } from "next/navigation";

interface Props {
    companyId: string;
}

export const FooterCompany = ({ companyId }:Props) => {
    const router = useRouter();

    const onDeleteCompany = async() => {
        
        try {
            await axios.delete(`/api/company/${companyId}`);
            toast({
                title: "Company deleted"
            });
            router.push('/companies');
        } catch (error) {
            toast({
                title: "Something went wrong",
                variant: "destructive"

            })
        }
    }
  return (
    <div className="flex justify-end mt-5">
        <Button 
            onClick={onDeleteCompany}
            variant="destructive">
            <Trash className="w-4 h-4 mr-2" />
            Remove company
        </Button>
    </div>
  )
}
