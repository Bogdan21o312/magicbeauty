-- CreateTable
CREATE TABLE "Banner" (
    "id" SERIAL NOT NULL,
    "image" TEXT NOT NULL,
    "text" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Banner_pkey" PRIMARY KEY ("id")
);
