import { PrismaClient } from "@prisma/client";

export default async function handler(req, res) {
  const prisma = new PrismaClient();

  if (req.method === "POST") {
    const order = await prisma.order.create({
      data: {
        name: req.body.name,
        total: req.body.total,
        order: req.body.order,
        date: req.body.date,
      },
    });
    res.json(order);
  }
}
