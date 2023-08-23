/*
  Warnings:

  - You are about to drop the `CategoriesOnPosts` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Category` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[title]` on the table `Post` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `text` to the `Post` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "CategoriesOnPosts" DROP CONSTRAINT "CategoriesOnPosts_categoryId_fkey";

-- DropForeignKey
ALTER TABLE "CategoriesOnPosts" DROP CONSTRAINT "CategoriesOnPosts_postId_fkey";

-- AlterTable
ALTER TABLE "Post" ADD COLUMN     "text" TEXT NOT NULL;

-- DropTable
DROP TABLE "CategoriesOnPosts";

-- DropTable
DROP TABLE "Category";

-- CreateTable
CREATE TABLE "Categoris" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Categoris_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_CategorisToPost" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Categoris_name_key" ON "Categoris"("name");

-- CreateIndex
CREATE UNIQUE INDEX "_CategorisToPost_AB_unique" ON "_CategorisToPost"("A", "B");

-- CreateIndex
CREATE INDEX "_CategorisToPost_B_index" ON "_CategorisToPost"("B");

-- CreateIndex
CREATE UNIQUE INDEX "Post_title_key" ON "Post"("title");

-- AddForeignKey
ALTER TABLE "_CategorisToPost" ADD CONSTRAINT "_CategorisToPost_A_fkey" FOREIGN KEY ("A") REFERENCES "Categoris"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CategorisToPost" ADD CONSTRAINT "_CategorisToPost_B_fkey" FOREIGN KEY ("B") REFERENCES "Post"("id") ON DELETE CASCADE ON UPDATE CASCADE;
