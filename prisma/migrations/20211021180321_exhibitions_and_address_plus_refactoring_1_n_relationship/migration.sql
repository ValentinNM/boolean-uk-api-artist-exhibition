/*
  Warnings:

  - You are about to drop the column `exhibitionId` on the `Address` table. All the data in the column will be lost.
  - Added the required column `addressId` to the `Exhibition` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Address" DROP CONSTRAINT "Address_exhibitionId_fkey";

-- AlterTable
ALTER TABLE "Address" DROP COLUMN "exhibitionId";

-- AlterTable
ALTER TABLE "Exhibition" ADD COLUMN     "addressId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Exhibition" ADD CONSTRAINT "Exhibition_addressId_fkey" FOREIGN KEY ("addressId") REFERENCES "Address"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
