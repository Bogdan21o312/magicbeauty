/*
  Warnings:

  - The primary key for the `GelPolishesWithBrandSizePrice` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `priceId` on the `GelPolishesWithBrandSizePrice` table. All the data in the column will be lost.
  - You are about to drop the column `sizeId` on the `GelPolishesWithBrandSizePrice` table. All the data in the column will be lost.
  - You are about to drop the `Price` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Size` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `updatedAt` to the `Brand` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sizeAndPriceId` to the `GelPolishesWithBrandSizePrice` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "GelPolishesWithBrandSizePrice" DROP CONSTRAINT "GelPolishesWithBrandSizePrice_priceId_fkey";

-- DropForeignKey
ALTER TABLE "GelPolishesWithBrandSizePrice" DROP CONSTRAINT "GelPolishesWithBrandSizePrice_sizeId_fkey";

-- AlterTable
ALTER TABLE "Brand" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "GelPolishesWithBrandSizePrice" DROP CONSTRAINT "GelPolishesWithBrandSizePrice_pkey",
DROP COLUMN "priceId",
DROP COLUMN "sizeId",
ADD COLUMN     "sizeAndPriceId" INTEGER NOT NULL,
ADD CONSTRAINT "GelPolishesWithBrandSizePrice_pkey" PRIMARY KEY ("gelPolishId", "brandId", "sizeAndPriceId");

-- DropTable
DROP TABLE "Price";

-- DropTable
DROP TABLE "Size";

-- CreateTable
CREATE TABLE "SizeAndPrice" (
    "id" SERIAL NOT NULL,
    "size" TEXT NOT NULL,
    "price" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "SizeAndPrice_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "GelPolishesWithBrandSizePrice" ADD CONSTRAINT "GelPolishesWithBrandSizePrice_sizeAndPriceId_fkey" FOREIGN KEY ("sizeAndPriceId") REFERENCES "SizeAndPrice"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
