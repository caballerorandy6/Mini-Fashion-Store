import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  const products = prisma.product.findMany();

  res.status(200).json(products);
}
