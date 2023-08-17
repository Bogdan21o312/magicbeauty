-- CreateTable
CREATE TABLE "GelPolishes" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "imageSrc" TEXT NOT NULL,
    "imageAlt" TEXT NOT NULL,
    "discount" BOOLEAN NOT NULL DEFAULT false,
    "publish" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "GelPolishes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SizeGelPolishes" (
    "id" SERIAL NOT NULL,
    "size" TEXT NOT NULL,
    "gelPolishId" INTEGER NOT NULL,

    CONSTRAINT "SizeGelPolishes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PriceGelPolishes" (
    "id" SERIAL NOT NULL,
    "price" TEXT NOT NULL,
    "gelPolishId" INTEGER NOT NULL,

    CONSTRAINT "PriceGelPolishes_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "SizeGelPolishes" ADD CONSTRAINT "SizeGelPolishes_gelPolishId_fkey" FOREIGN KEY ("gelPolishId") REFERENCES "GelPolishes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PriceGelPolishes" ADD CONSTRAINT "PriceGelPolishes_gelPolishId_fkey" FOREIGN KEY ("gelPolishId") REFERENCES "GelPolishes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
