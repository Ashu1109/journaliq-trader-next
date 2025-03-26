/*
  Warnings:

  - You are about to drop the column `emailVerified` on the `User` table. All the data in the column will be lost.

*/
-- CreateEnum
CREATE TYPE "Emotion" AS ENUM ('Confident', 'Nervous', 'Excited', 'Hesitant', 'Calm', 'FOMO');

-- AlterTable
ALTER TABLE "User" DROP COLUMN "emailVerified";

-- CreateTable
CREATE TABLE "Journal" (
    "id" TEXT NOT NULL,
    "symbolName" TEXT NOT NULL,
    "tradeRationale" TEXT NOT NULL,
    "tradeType" TEXT NOT NULL,
    "Date" TIMESTAMP(3) NOT NULL,
    "Notes" TEXT NOT NULL,
    "Quantity" INTEGER NOT NULL,
    "Price" DOUBLE PRECISION NOT NULL,
    "takeProfit" DOUBLE PRECISION NOT NULL,
    "stopLoss" DOUBLE PRECISION NOT NULL,
    "emotions" "Emotion"[],
    "userId" TEXT,

    CONSTRAINT "Journal_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Journal" ADD CONSTRAINT "Journal_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
