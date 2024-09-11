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

import { FormContact } from "./formContact";

export const NewContact = () => {
    const [open, setOpen] = useState(false);
    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button>Add new contact</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[625px]">
                <DialogHeader>
                    <DialogTitle>Add new contact</DialogTitle>
                    <DialogDescription>
                        Create your contacts to manege them later.
                    </DialogDescription>
                </DialogHeader>
                <FormContact setOpen={setOpen}/>
            </DialogContent>
        </Dialog>
    )
}
