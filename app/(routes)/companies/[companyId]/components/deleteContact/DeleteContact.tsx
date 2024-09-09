"use client";

import { useState } from "react";

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui";
import { Trash } from "lucide-react";
import { useRouter } from "next/navigation";
import { deleteContact } from "@/actions/contact/deleteContact";
import { toast } from "@/hooks/use-toast";


export const DeleteContact = ({idContact}:{idContact: string}) => {
    const [open, setOpen] = useState(false);
    const route = useRouter();
    const onDelete = async() => {
        console.log("Se eliminó: ", idContact);
        const result = await deleteContact({ id: idContact }); // Pasa el 'id' de la forma correcta

        if (result.ok) {
            toast({
                title: result.message,
            }) 
        } else {
            console.error(result.message);
            toast({
                title: result.message,
                variant: "destructive"
            })
        }
       
        route.refresh();
        setOpen(false);
    }
    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button>
                    <Trash className="w-4 h-4"/>
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[300px]">
                <DialogHeader>
                    <DialogTitle>Delete contact</DialogTitle>
                    <DialogDescription>
                    By accepting, the contact will be deleted from the database.
                    </DialogDescription>
                </DialogHeader>
                <div className="grid grid-cols-2 gap-x-2">
                <Button onClick={onDelete}>si</Button>
                <Button variant="secondary" onClick={()=> setOpen(false)}>Cancel</Button>
                </div>
            </DialogContent>
        </Dialog>
    )
}
