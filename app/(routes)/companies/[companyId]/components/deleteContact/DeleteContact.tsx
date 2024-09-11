"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { toast } from "@/hooks/use-toast";
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
import { deleteContact } from "@/actions/contact/deleteContact";


export const DeleteContact = ({idContact}:{idContact: string}) => {
    const [open, setOpen] = useState(false);
    const route = useRouter();
    const onDelete = async() => {
        const result = await deleteContact({ id: idContact }); // Pasa el 'id' de la forma correcta

        if (result.ok) {
            toast({
                title: result.message,
            }) 
        } else {
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
                <Button variant="destructive">
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
                <Button onClick={onDelete}>Delete</Button>
                <Button variant="secondary" onClick={()=> setOpen(false)}>Cancel</Button>
                </div>
            </DialogContent>
        </Dialog>
    )
}
