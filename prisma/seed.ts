import { Book, PrismaClient } from "@prisma/client";
import * as data from "./books.json";

const prisma = new PrismaClient();
const books = <Book[]>data;
async function main() {
  for (let book of books) {
    await prisma.book.upsert({
      where: { book_id: book.book_id },
      create: book,
      update: book,
    });
  }
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
