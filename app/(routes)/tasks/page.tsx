import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { Calendar } from "./components/calendar";

export default async function TasksPage() {

    const {userId} = auth();
    if(!userId){
        redirect("/");
    }

    const companies = await db.company.findMany({
        where:{
            userId
        },
        orderBy: {
            createdAt: "desc"
        }
    });

    const event = await db.event.findMany({
        orderBy: {
            createdAt: "desc"
        }
    });

    console.log(event)

  return (
    <div>
      <Calendar companies={companies} events={event}/>
    </div>
  );
}