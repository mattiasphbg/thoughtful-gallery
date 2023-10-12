import { PrismaClient, User } from "@prisma/client";
import { string } from "zod";

const prisma = new PrismaClient();

async function main() {
  const add = await prisma.user.create({
    data: {
      name: "Eloise",
      jobTitle: "Programmer",
      email: "Hello@some.com",
      posts: {
        create: {
          title: "How to create a MySQL database",
          content: "Some content",
        },
      },
    },
  });
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
