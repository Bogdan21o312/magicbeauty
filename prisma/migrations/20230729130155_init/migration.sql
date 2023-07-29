/*
  Warnings:

  - You are about to drop the column `fileName` on the `Image` table. All the data in the column will be lost.
  - You are about to drop the column `imageData` on the `Image` table. All the data in the column will be lost.
  - Added the required column `path` to the `Image` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Image" DROP COLUMN "fileName",
DROP COLUMN "imageData",
ADD COLUMN     "path" TEXT NOT NULL;
