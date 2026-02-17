import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { email, password, name, role } = await req.json();

  const hashed = await bcrypt.hash(password, 10);

  const user = await prisma.employee.create({
    data: {
      email,
      password: hashed,
      name,
      role,
      salary: 0,
    },
  });

  return NextResponse.json(user);
}
