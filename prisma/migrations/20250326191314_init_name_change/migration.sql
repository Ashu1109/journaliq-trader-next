/*
  Warnings:

  - You are about to drop the column `Date` on the `Journal` table. All the data in the column will be lost.
  - You are about to drop the column `Notes` on the `Journal` table. All the data in the column will be lost.
  - You are about to drop the column `Price` on the `Journal` table. All the data in the column will be lost.
  - You are about to drop the column `Quantity` on the `Journal` table. All the data in the column will be lost.
  - Added the required column `date` to the `Journal` table without a default value. This is not possible if the table is not empty.
  - Added the required column `notes` to the `Journal` table without a default value. This is not possible if the table is not empty.
  - Added the required column `price` to the `Journal` table without a default value. This is not possible if the table is not empty.
  - Added the required column `quantity` to the `Journal` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Journal" DROP COLUMN "Date",
DROP COLUMN "Notes",
DROP COLUMN "Price",
DROP COLUMN "Quantity",
ADD COLUMN     "date" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "notes" TEXT NOT NULL,
ADD COLUMN     "price" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "quantity" INTEGER NOT NULL;
