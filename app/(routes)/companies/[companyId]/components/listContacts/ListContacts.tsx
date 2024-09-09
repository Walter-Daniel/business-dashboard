
import { db } from "@/lib/db";
import { Separator } from "@/components/ui/separator";
import { Mail, Pencil, Phone, Trash } from "lucide-react";
import { Button } from "@/components/ui";
import { DeleteContact } from "../deleteContact/DeleteContact";

interface ListContactProps {
  companyId: string
}

export async function ListContacts({ companyId }: ListContactProps) {

  const contacts = await db.contact.findMany({
    where: {
      company: {
        id: companyId
      }
    }
  });

  if (contacts.length === 0) {
    return <p>Currently, you do not have any contacts associated with the company.</p>
  }

  return (
    <div>
      <div className="mt-4 mb-2 grid grid-cols-4 p-2 gap-x-3 items-center justify-between px-4 bg-slate-400/20 rounded-lg">
        <p>Name</p>
        <p>Role</p>
        <p className="text-right">Contact</p>
        <p className="text-right">Actions</p>
      </div>
      {
        contacts.map((contact) => (
          <div key={contact.id}>
            <div
              className="grid grid-cols-4 gap-x-3 items-center justify-between px-4">
              <p>{contact.name}</p>
              <p>{contact.role}</p>
              <div className="flex items-center justify-end gap-x-6">
                <a href={`telto: ${contact.phone}`} target="_blank">
                  <Phone className="w-4 h-4"/>
                </a>
                <a href={`mailto: ${contact.email}`} target="_blank">
                  <Mail className="w-4 h-4"/>
                </a>
              </div>
            <div className="flex items-center justify-end gap-x-2">
              <Button variant="ghost">
                <Pencil className="w-4 h-4"/>
              </Button>
              <DeleteContact idContact={contact.id}/>
            </div>
            </div>
            <Separator className="my-3"/>
          </div>
        ))
      }
    </div>
  );
}