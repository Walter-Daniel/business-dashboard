import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

interface Props{
    params: {
        eventId: string
    }
}

export async function DELETE(request: Request, {params}:Props){

    try {
        const { userId } = auth();
        if(!userId){
            return new NextResponse("Unauthorize", {status:401})
        };

        const { eventId } = params;
    
        const eventDeleted = await db.event.delete({
            where:{
               id: eventId
            }
        });
        // revalidatePath('/tasks')
        return NextResponse.json(eventDeleted);
    } catch (error) {
        console.log("[EVENT]", error);
        return new NextResponse("Internal Error", {status:500})
    }
}