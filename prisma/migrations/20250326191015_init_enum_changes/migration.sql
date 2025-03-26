/*
  Warnings:

  - The `emotions` column on the `Journal` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Journal" DROP COLUMN "emotions",
ADD COLUMN     "emotions" TEXT[];

-- DropEnum
DROP TYPE "Emotion";
