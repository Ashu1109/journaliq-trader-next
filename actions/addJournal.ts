"use server";
import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";
import { JournalEntrySchema } from "@/schemas/index";
import { z } from "zod";
import { auth } from "@/auth";

export const addJournal = async (
  formData: z.infer<typeof JournalEntrySchema>
) => {
  try {
    const session = await auth();
    if (!session) {
      return { status: false, message: "Unauthorized" };
    }
    const parsedData = JournalEntrySchema.safeParse(formData);
    if (!parsedData.success) {
      console.error("Validation errors:", parsedData.error.errors);
      return {
        status: false,
        message: "Validation errors",
        errors: parsedData.error.errors,
      };
    }
    const {
      symbol,
      type,
      date,
      quantity,
      price,
      takeProfit,
      stopLoss,
      tradeRationale,
      notes,
      emotions,
    } = parsedData.data;

    await db.journal.create({
      data: {
        userId: session?.user.id,
        symbolName: symbol,
        tradeType: type,
        date: new Date(date),
        quantity: Number(quantity),
        price: Number(price),
        takeProfit: Number(takeProfit),
        stopLoss: Number(stopLoss),
        tradeRationale: tradeRationale,
        notes: notes,
        emotions: emotions ? emotions.map((emotion) => emotion) : [],
      },
    });
    const existingRecord = await db.userJournalData.findFirst({
      where: {
        userId: session?.user.id,
        createdAt: {
          gte: new Date(new Date().getFullYear(), new Date().getMonth(), 1),
          lte: new Date(),
        },
      },
    });
    if (existingRecord) {
      await db.userJournalData.updateMany({
        where: {
          id: existingRecord.id,
          userId: session?.user.id,
        },
        data: {
          noofJournal: {
            increment: 1,
          },
          totalQuantity: {
            increment: Number(quantity),
          },
          totalMoneySpent: {
            increment: Number(quantity) * Number(price),
          },
          noOfProfit: {
            increment: Number(takeProfit) > 0 ? 1 : 0,
          },
          noOfLoss: {
            increment: Number(takeProfit) < 0 ? 1 : 0,
          },
          profit: {
            increment:
              Number(takeProfit) > 0
                ? Number(takeProfit) - Number(stopLoss)
                : 0,
          },
          loss: {
            increment:
              Number(takeProfit) < 0
                ? Number(stopLoss) - Number(takeProfit)
                : 0,
          },
        },
      });
    } else {
      await db.userJournalData.create({
        data: {
          userId: session?.user.id,
          noofJournal: 1,
          totalQuantity: Number(quantity),
          totalMoneySpent: Number(quantity) * Number(price),
          profit:
            Number(takeProfit) > 0 ? Number(takeProfit) - Number(stopLoss) : 0,
          loss:
            Number(takeProfit) < 0 ? Number(stopLoss) - Number(takeProfit) : 0,
        },
      });
    }
    revalidatePath("/journal");
    return {
      status: true,
      message: "Journal entry added successfully",
    };
  } catch (error) {
    console.error("Error adding journal entry:", error);
    return {
      status: false,
      message: "Error adding journal entry",
    };
  }
};
