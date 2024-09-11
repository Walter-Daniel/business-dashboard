import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

interface Props {
    params: {
        companyId: string
    }
}
export async function POST(req:Request, {params}:Props){

    try {
        const { userId } = auth();
        if(!userId){
            return new NextResponse("Unauthorize", {status:401})
        };

        const { companyId } = params;
        const company = await db.company.findUnique({
            where:{
                id: companyId,
            }
        })

        if(!company){
            return new NextResponse("Company Not Found.", {status:404})
        }

        const data = await req.json();
        const event = await db.event.create({
            data: {
                companyId,
                ...data
            }
        });

        revalidatePath('/tasks')
        return NextResponse.json(event);
    } catch (error) {
        console.log("[CONTACT]", error);
        return new NextResponse("Internal Error", {status:500})
    }
}
