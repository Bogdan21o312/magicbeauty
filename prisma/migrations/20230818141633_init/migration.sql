-- CreateEnum
CREATE TYPE "Role" AS ENUM ('USER', 'ADMIN');

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "surname" TEXT NOT NULL,
    "patronymic" TEXT NOT NULL,
    "country" TEXT,
    "region" TEXT,
    "settlement" TEXT,
    "avatar" TEXT,
    "ban" BOOLEAN,
    "banResponse" TEXT,
    "role" "Role" NOT NULL DEFAULT 'USER',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Banner" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "src" TEXT NOT NULL,
    "alt" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Banner_pkey" PRIMARY KEY ("id")
);

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

-- CreateTable
CREATE TABLE "Post" (
    "id" SERIAL NOT NULL,
    "image" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Post_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Image" (
    "id" SERIAL NOT NULL,
    "path" TEXT NOT NULL,

    CONSTRAINT "Image_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_phone_key" ON "User"("phone");

-- AddForeignKey
ALTER TABLE "GelPolishSize" ADD CONSTRAINT "GelPolishSize_gelPolishId_fkey" FOREIGN KEY ("gelPolishId") REFERENCES "GelPolishes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GelPolishPrice" ADD CONSTRAINT "GelPolishPrice_gelPolishId_fkey" FOREIGN KEY ("gelPolishId") REFERENCES "GelPolishes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GelPolishBrand" ADD CONSTRAINT "GelPolishBrand_gelPolishId_fkey" FOREIGN KEY ("gelPolishId") REFERENCES "GelPolishes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
