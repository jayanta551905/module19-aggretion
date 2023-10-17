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
    const result = await prisma.product.create({
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
    const result = await prisma.product.findMany({
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
    const result = await prisma.product.update({
      where: {
        id: 5,
      },
      data: {
        firstName: "Jayanta",
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
    const result = await prisma.product.delete({
      where: {
        id: 2,
      },
    });
    return NextResponse.json({ msg: "success", data: result });
  } catch (error) {
    return NextResponse.json({ msg: "fail", data: error.toString() });
  }
}
