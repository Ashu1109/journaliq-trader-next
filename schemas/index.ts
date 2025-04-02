import * as z from "zod";

export const LoginSchema = z.object({
  email: z.string().email({
    message: "Email is required",
  }),
  password: z.string().min(1, { message: "Password is required" }),
});

export const ResetSchema = z.object({
  email: z.string().email({
    message: "Email is required",
  }),
});

export const NewPasswordSchema = z.object({
  password: z.string().min(6, { message: "MInimum 6 character required" }),
});

export const RegisterSchema = z.object({
  email: z.string().email({
    message: "Email is required",
  }),
  password: z.string().min(6, { message: "MInimum 6 character required" }),
  name: z.string().min(1, {
    message: "Name is required",
  }),
});

export const JournalEntrySchema = z.object({
  symbol: z.string(),
  type: z.enum(["buy", "sell", "short", "cover"]),
  date: z.string(),
  quantity: z.string(),
  price: z.string(),
  takeProfit: z.string(),
  stopLoss: z.string(),
  tradeRationale: z.string(),
  notes: z.string(),
  emotions: z.array(z.string()),
});
