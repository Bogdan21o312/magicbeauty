/*
  Warnings:

  - You are about to drop the `PriceGelPolishes` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `SizeGelPolishes` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "PriceGelPolishes" DROP CONSTRAINT "PriceGelPolishes_gelPolishId_fkey";

-- DropForeignKey
ALTER TABLE "SizeGelPolishes" DROP CONSTRAINT "SizeGelPolishes_gelPolishId_fkey";

-- DropTable
DROP TABLE "PriceGelPolishes";

-- DropTable
DROP TABLE "SizeGelPolishes";

-- CreateTable
CREATE TABLE "GelPolishSize" (
    "id" SERIAL NOT NULL,
    "size" TEXT NOT NULL,
    "gelPolishId" INTEGER NOT NULL,

    CONSTRAINT "GelPolishSize_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "GelPolishPrice" (
    "id" SERIAL NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "gelPolishId" INTEGER NOT NULL,

    CONSTRAINT "GelPolishPrice_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "GelPolishBrand" (
    "id" SERIAL NOT NULL,
    "brand" TEXT NOT NULL,
    "gelPolishId" INTEGER NOT NULL,

    CONSTRAINT "GelPolishBrand_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "GelPolishSize" ADD CONSTRAINT "GelPolishSize_gelPolishId_fkey" FOREIGN KEY ("gelPolishId") REFERENCES "GelPolishes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GelPolishPrice" ADD CONSTRAINT "GelPolishPrice_gelPolishId_fkey" FOREIGN KEY ("gelPolishId") REFERENCES "GelPolishes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GelPolishBrand" ADD CONSTRAINT "GelPolishBrand_gelPolishId_fkey" FOREIGN KEY ("gelPolishId") REFERENCES "GelPolishes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
