import { PrismaClient } from '@prisma/client';
import { pagosData } from './seeds/pagos';

const prisma = new PrismaClient();

async function main() {
  await prisma.pagos.createMany({
    data: pagosData,
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });