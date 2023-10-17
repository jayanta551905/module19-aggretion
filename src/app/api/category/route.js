import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

//create data
export async function POST(req, res) {
  BigInt.prototype.toJSON = function () {
    return this.toString();
  };

  try {
    const prisma = new PrismaClient();
    let reqBody = await req.json();
    const result = await prisma.category.create({
      data: reqBody,
    });
    return NextResponse.json({ msg: "success", data: result });
  } catch (error) {
    return NextResponse.json({ msg: "fail", data: error.toString() });
  }
}

// read data
export async function GET() {
  BigInt.prototype.toJSON = function () {
    return this.toString();
  };

  try {
    const prisma = new PrismaClient();
    const result = await prisma.category.findMany({
      orderBy: {
        id: "desc",
      },
    });
    return NextResponse.json({ msg: "success", data: result });
  } catch (error) {
    return NextResponse.json({ msg: "fail", data: error.toString() });
  }
}

//update data
export async function PUT() {
  BigInt.prototype.toJSON = function () {
    return this.toString();
  };

  try {
    const prisma = new PrismaClient();
    const result = await prisma.category.update({
      where: {
        id: 5,
      },
      data: {
        title: "New title",
        content: "New content",
      },
    });
    return NextResponse.json({ msg: "success", data: result });
  } catch (error) {
    return NextResponse.json({ msg: "fail", data: error.toString() });
  }
}

// delete data
export async function GET() {
  BigInt.prototype.toJSON = function () {
    return this.toString();
  };

  try {
    const prisma = new PrismaClient();
    const result = await prisma.category.delete({
      where: {
        id: 2,
      },
    });
    return NextResponse.json({ msg: "success", data: result });
  } catch (error) {
    return NextResponse.json({ msg: "fail", data: error.toString() });
  }
}
