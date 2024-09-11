import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { CompaniesChart } from "./components/companiesChart";



export default async function AnalyticsPage() {

    const {userId} = auth();
    if(!userId){
        return redirect('/')
    }

    const companies = await db.company.findMany({
        where:{
            userId
        },
        orderBy:{
            createdAt: "desc"
        }
    })

    const events = await db.event.findMany({
        orderBy:{
            createdAt: "desc"
        }
    })

  return (
    <div className="bg-background shadow-md rounded-lg p-4">
      <h2 className="mb-4 text-2xl">Analytics page</h2>
      <div>
        <CompaniesChart companies={companies} events={events} />
      </div>
    </div>
  );
}