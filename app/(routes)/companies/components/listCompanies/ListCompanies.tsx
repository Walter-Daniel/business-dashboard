import { db } from '@/lib/db';
import { auth } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation';
import React from 'react'

export const ListCompanies = async() => {

    const { userId } = auth();
    if(!userId){
        return redirect("/");
    }

    const companies = await db.company.findMany({
        where:{
            userId
        },
        orderBy:{
            createdAt: "desc"
        }
    });

    console.log({companies})
  return (
    <div>ListCompanies</div>
  )
}
