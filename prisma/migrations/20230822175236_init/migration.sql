/*
  Warnings:

  - Added the required column `imageAlt` to the `Post` table without a default value. This is not possible if the table is not empty.
  - Added the required column `imageSrc` to the `Post` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Post` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Post" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "imageAlt" TEXT NOT NULL,
ADD COLUMN     "imageSrc" TEXT NOT NULL,
ADD COLUMN     "publish" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;
