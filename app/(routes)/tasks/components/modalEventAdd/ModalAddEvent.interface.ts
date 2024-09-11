import { Company } from "@prisma/client";
import { Dispatch, SetStateAction } from "react";

export interface ModalAddEventProps {
    open: boolean,
    setOpen: Dispatch<SetStateAction<boolean>>,
    companies: Company[],
    setOnSaveNewEvent: Dispatch<SetStateAction<boolean>>,
    setNewEvent: Dispatch<SetStateAction<{
        eventName: string,
        companiesSelected: {
            name: string,
            id: string
        }
    }>>
}