-- CreateTable
CREATE TABLE "UserJournalData" (
    "id" TEXT NOT NULL,
    "profit" DOUBLE PRECISION NOT NULL,
    "loss" DOUBLE PRECISION NOT NULL,
    "noofJournal" INTEGER NOT NULL,
    "totalQuantity" INTEGER NOT NULL,
    "totalMoneySpent" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "userId" TEXT,

    CONSTRAINT "UserJournalData_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "UserJournalData" ADD CONSTRAINT "UserJournalData_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
