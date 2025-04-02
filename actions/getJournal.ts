"use server";

import { auth } from "@/auth";
import { db } from "@/lib/db";

export async function getJournal() {
  try {
    const session = await auth();
    if (!session) {
      return { status: false, message: [] };
    }
    const entries = await db.journal.findMany({
      where: {
        userId: session.user.id,
      },
      orderBy: {
        createdAt: "desc",
      },
    });
    return { status: true, message: entries };
  } catch (error) {
    console.error("Error fetching journal entries:", error);
    return { status: false, message: [] };
  }
}
