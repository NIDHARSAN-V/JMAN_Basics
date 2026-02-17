import {prisma} from "@/lib/prisma";

import { NextResponse } from "next/server";
import { getUserFromRequest } from "@/lib/auth";

export async function GET(req: any) {
  const user = getUserFromRequest(req);

  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const employees = await prisma.employee.findMany();

  return NextResponse.json(employees);
}

export async function POST(req: any) {
  const user = getUserFromRequest(req);

  if (!user || user.role !== "MANAGER") {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  const body = await req.json();

  const emp = await prisma.employee.create({
    data: body,
  });

  return NextResponse.json(emp);
}
