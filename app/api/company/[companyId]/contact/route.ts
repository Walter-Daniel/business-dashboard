import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export async function POST(req: Request, { params }: { params: { companyId: string } }) {
  try {
    const { userId } = auth();
    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const { companyId } = params;
    const company = await db.company.findFirst({
      where: {
        id: companyId,
      },
    });

    if (!company) {
      return new NextResponse("Company Not Found.", { status: 404 });
    }

    const data = await req.json();

    const contact = await db.contact.create({
      data: {
        companyId,
        ...data,
      },
    });

    return NextResponse.json(contact);
  } catch (error) {
    return new NextResponse("Internal Error", { status: 500 });
  }
}
