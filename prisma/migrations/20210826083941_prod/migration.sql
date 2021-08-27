-- CreateTable
CREATE TABLE "Book" (
    "cover" TEXT NOT NULL,
    "website" TEXT NOT NULL,
    "book_id" UUID NOT NULL,
    "author" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "category_id" UUID NOT NULL,
    "pages" INTEGER NOT NULL,
    "isbn" INTEGER NOT NULL,

    PRIMARY KEY ("book_id")
);
