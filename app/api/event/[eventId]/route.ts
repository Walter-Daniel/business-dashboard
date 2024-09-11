import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";


export async function DELETE(request: Request, { params }: { params: { eventId: string } }){

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