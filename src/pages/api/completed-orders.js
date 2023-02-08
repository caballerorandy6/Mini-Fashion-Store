import { PrismaClient } from "@prisma/client";

export default async function handler(req, res) {
  const prisma = new PrismaClient();

  const orders = await prisma.order.findMany({
    where: {
      state: true,
    },
  });
  res.status(200).json(orders);
}
