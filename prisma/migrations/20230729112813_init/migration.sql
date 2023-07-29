/*
  Warnings:

  - You are about to drop the column `imageUrl` on the `Image` table. All the data in the column will be lost.
  - Added the required column `fileName` to the `Image` table without a default value. This is not possible if the table is not empty.
  - Added the required column `image` to the `Image` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Image" DROP COLUMN "imageUrl",
ADD COLUMN     "fileName" TEXT NOT NULL,
ADD COLUMN     "image" BYTEA NOT NULL;
