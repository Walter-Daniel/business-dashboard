"use server";

import {db} from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";

export const deleteContact = async({id}:{id: string}) => {

    try {
         await db.contact.delete({
            where:{
                id: id,
            }
        });

        return {
            ok: true,
            message: "Contact deleted successfully."
        };
    } catch (error) {
        console.error(error);
        return {
            ok: false,
            message: "An error occurred while deleting the contact."
        };
    }
}