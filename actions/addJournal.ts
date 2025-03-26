"use server";
import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";
interface FormData {
  symbol: string;
  type: string;
  date: string;
  quantity: number;
  price: number;
  takeProfit: number;
  stopLoss: number;
  tradeRationale: string;
  notes: string;
  emotions: string[];
}
export const addJournal = async (formData: FormData) => {
  try {
    await db.journal.create({
      data: {
        symbolName: formData.symbol,
        tradeType: formData.type,
        date: new Date(formData.date),
        quantity: Number(formData.quantity),
        price: formData.price,
        takeProfit: formData.takeProfit,
        stopLoss: formData.stopLoss,
        tradeRationale: formData.tradeRationale,
        notes: formData.notes,
        emotions: formData.emotions
          ? formData.emotions.map((emotion) => emotion)
          : [],
      },
    });
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
