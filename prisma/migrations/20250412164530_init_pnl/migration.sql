-- AlterTable
ALTER TABLE "UserJournalData" ADD COLUMN     "pnl" DOUBLE PRECISION NOT NULL DEFAULT 0,
ADD COLUMN     "winRate" DOUBLE PRECISION NOT NULL DEFAULT 0;
