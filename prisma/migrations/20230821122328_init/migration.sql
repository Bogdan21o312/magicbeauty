/*
  Warnings:

  - You are about to drop the column `alt` on the `Banner` table. All the data in the column will be lost.
  - You are about to drop the column `src` on the `Banner` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Banner" DROP COLUMN "alt",
DROP COLUMN "src";
