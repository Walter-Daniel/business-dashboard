"use client";

import { FormEvent } from "../formEvent";
import { ModalAddEventProps } from "./ModalAddEvent.interface"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

export const ModalAddEvent = (props: ModalAddEventProps) => {
  const { companies, open, setNewEvent, setOpen, setOnSaveNewEvent } = props;
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add new event</DialogTitle>
        </DialogHeader>
        <FormEvent 
          companies={companies}
          setNewEvent={setNewEvent}
          setOnSaveNewEvent={setOnSaveNewEvent}
          setOpen={setOpen}
        />
      </DialogContent>
    </Dialog>
  )
}
