import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { Header } from "./components/header";
import { CompanyInformation } from "./components/companyInformation";

interface Props {
  params: {
    companyId: string;
  }
}

export default async function CompanyPage({params}:Props) {
  const { companyId } = params;
  const { userId } = auth();
  if(!userId) {
    return redirect('/login')
  }

  const company = await db.company.findFirst({
    where: {
      id: companyId,
      userId
    }
  });

  if(!company) {
    return redirect('/companies')
  }
  return (
    <div>
      <Header />
      <CompanyInformation company={company}/>
    </div>
  );
}
