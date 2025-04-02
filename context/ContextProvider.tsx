"use client";
import { getUserJournalSummary } from "@/actions/getUserJornalSummary";
import { Toaster } from "@/components/ui/sonner";
import React, { useEffect, useState } from "react";
type JournalEntry = {
  date: Date;
  quantity: number;
  price: number;
  takeProfit: number;
  stopLoss: number;
  tradeRationale: string;
  notes: string;
  emotions: string[];
  id: string;
  createdAt: Date;
  updatedAt: Date;
  userId: string | null;
  symbolName: string;
  tradeType: string;
};

type UserJournalEntrySummary = {
  id: string;
  profit: number;
  loss: number;
  noofJournal: number;
  noOfProfit: number;
  noOfLoss: number;
  totalQuantity: number;
  totalMoneySpent: number;
  createdAt: Date;
  updatedAt: Date;
};

export const Context = React.createContext(
  {} as {
    journal: JournalEntry[];
    setJournal: React.Dispatch<React.SetStateAction<JournalEntry[]>>;
    userJournalSummary: UserJournalEntrySummary;
    setUserJournalSummary: React.Dispatch<
      React.SetStateAction<UserJournalEntrySummary>
    >;
  }
);
const ContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [journal, setJournal] = useState<JournalEntry[]>([]);
  const [userJournalSummary, setUserJournalSummary] =
    useState<UserJournalEntrySummary>({
      id: "",
      profit: 0,
      loss: 0,
      noofJournal: 0,
      totalQuantity: 0,
      totalMoneySpent: 0,
      noOfProfit: 0,
      noOfLoss: 0,
      createdAt: new Date(),
      updatedAt: new Date(),
    } as UserJournalEntrySummary);
  useEffect(() => {
    const getAllJournalData = async () => {
      try {
        console.log("Fetching journal data...");
        const data = await getUserJournalSummary();
        setJournal(data?.journal || []);
        setUserJournalSummary(
          data?.userJournalSummary || ({} as UserJournalEntrySummary)
        );
      } catch (error) {
        console.log(error);
      }
    };
    getAllJournalData();
  }, []);
  return (
    <Context.Provider
      value={{ journal, setJournal, userJournalSummary, setUserJournalSummary }}
    >
      <Toaster />
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;

export const useJournalContext = () => {
  return React.useContext(Context);
};
