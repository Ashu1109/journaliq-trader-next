"use server";

import { auth } from "@/auth";
import { db } from "@/lib/db";

export const getUserJournalSummary = async () => {
  try {
    const session = await auth();
    if (!session) return null;
    const journal = await db.journal.findMany({
      where: {
        userId: session.user.id,
      },
    });
    const userJournalSummary = await db.userJournalData.findFirst({
      where: {
        userId: session.user.id,
        createdAt: {
          gte: new Date(new Date().getFullYear(), new Date().getMonth(), 1),
          lte: new Date(),
        },
      },
    });
    return { userJournalSummary, journal };
  } catch (error) {
    console.log(error);
    return null;
  }
};
