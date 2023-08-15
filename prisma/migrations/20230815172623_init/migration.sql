-- CreateTable
CREATE TABLE "MainModule" (
    "id" SERIAL NOT NULL,
    "titile" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "MainModule_pkey" PRIMARY KEY ("id")
);
