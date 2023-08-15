/*
  Warnings:

  - You are about to drop the column `text` on the `Banner` table. All the data in the column will be lost.
  - You are about to drop the `MainModule` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `description` to the `Banner` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Banner" DROP COLUMN "text",
ADD COLUMN     "description" TEXT NOT NULL;

-- DropTable
DROP TABLE "MainModule";
