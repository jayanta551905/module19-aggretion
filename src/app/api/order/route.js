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
    const result = await prisma.order.create({
      data: reqBody,
    });
    return NextResponse.json({ msg: "success", data: result });
  } catch (error) {
    return NextResponse.json({ msg: "fail", data: error.toString() });
  }
}

try {
  const prisma = new PrismaClient();
  let reqBody = await req.json();
  const result = await prisma.order.aggregate({
    _avg: {
      id: true,
    },
    _count: {
      id: true,
    },
    _groupBy: {
      title: true,
    },
    _max: {
      grandTotal: true,
    },
    _sum: {
      grandTotal: true,
    },
  });
  return NextResponse.json({ msg: "success", data: result });
} catch (error) {
  return NextResponse.json({ msg: "fail", data: error.toString() });
}

// read data
export async function GET() {
  BigInt.prototype.toJSON = function () {
    return this.toString();
  };

  try {
    const prisma = new PrismaClient();
    const result = await prisma.order.findMany({
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
    const result = await prisma.order.update({
      where: {
        id: 5,
      },
      data: {
        title: "New title",
        firstName: "Mr.",
        middleName: "Jayanta",
        lastName: "mondal",
        mobile: "0170000000000",
        email: "jayanta@gmail.com",
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
    const result = await prisma.order.delete({
      where: {
        id: 2,
      },
    });
    return NextResponse.json({ msg: "success", data: result });
  } catch (error) {
    return NextResponse.json({ msg: "fail", data: error.toString() });
  }
}
