import { Dispatch, SetStateAction } from "react";
import { Company } from "@prisma/client";

export interface FormEventProps {
    companies: Company[],
    setOpen: Dispatch<SetStateAction<boolean>>,
    setOnSaveNewEvent: Dispatch<SetStateAction<boolean>>,
    setNewEvent: Dispatch<SetStateAction<{
        eventName: string,
        companiesSelected: {
            name: string,
            id: string
        }
    }>>
}