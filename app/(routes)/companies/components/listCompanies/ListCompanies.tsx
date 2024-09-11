import { db } from '@/lib/db';
import { auth } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation';
import React from 'react'
import { DataTable } from './data-table';
import {columns} from './columns';

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

  return (
    <DataTable columns={columns} data={companies}/>
  )
}
