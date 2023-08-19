/*
  Warnings:

  - You are about to drop the `GelPolishBrand` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `GelPolishPrice` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `GelPolishSize` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "GelPolishBrand" DROP CONSTRAINT "GelPolishBrand_gelPolishId_fkey";

-- DropForeignKey
ALTER TABLE "GelPolishPrice" DROP CONSTRAINT "GelPolishPrice_gelPolishId_fkey";

-- DropForeignKey
ALTER TABLE "GelPolishSize" DROP CONSTRAINT "GelPolishSize_gelPolishId_fkey";

-- DropTable
DROP TABLE "GelPolishBrand";

-- DropTable
DROP TABLE "GelPolishPrice";

-- DropTable
DROP TABLE "GelPolishSize";

-- CreateTable
CREATE TABLE "Brand" (
    "id" SERIAL NOT NULL,
    "brand" TEXT NOT NULL,

    CONSTRAINT "Brand_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Size" (
    "id" SERIAL NOT NULL,
    "size" TEXT NOT NULL,

    CONSTRAINT "Size_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Price" (
    "id" SERIAL NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Price_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "GelPolishesWithBrandSizePrice" (
    "gelPolishId" INTEGER NOT NULL,
    "brandId" INTEGER NOT NULL,
    "sizeId" INTEGER NOT NULL,
    "priceId" INTEGER NOT NULL,

    CONSTRAINT "GelPolishesWithBrandSizePrice_pkey" PRIMARY KEY ("gelPolishId","brandId","sizeId","priceId")
);

-- AddForeignKey
ALTER TABLE "GelPolishesWithBrandSizePrice" ADD CONSTRAINT "GelPolishesWithBrandSizePrice_gelPolishId_fkey" FOREIGN KEY ("gelPolishId") REFERENCES "GelPolishes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GelPolishesWithBrandSizePrice" ADD CONSTRAINT "GelPolishesWithBrandSizePrice_brandId_fkey" FOREIGN KEY ("brandId") REFERENCES "Brand"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GelPolishesWithBrandSizePrice" ADD CONSTRAINT "GelPolishesWithBrandSizePrice_sizeId_fkey" FOREIGN KEY ("sizeId") REFERENCES "Size"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GelPolishesWithBrandSizePrice" ADD CONSTRAINT "GelPolishesWithBrandSizePrice_priceId_fkey" FOREIGN KEY ("priceId") REFERENCES "Price"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
