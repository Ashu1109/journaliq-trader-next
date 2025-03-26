"use client";
import React from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import { Navigation } from "./Navigation";

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const isMobile = useIsMobile();

  return (
    <div className="min-h-screen bg-background">
      <div
        className={cn(
          "container mx-auto transition-all duration-300",
          isMobile ? "px-4 py-4 pb-24" : "px-6 py-8 pl-[220px] max-w-6xl"
        )}
      >
        {children}
      </div>
      <Navigation />
    </div>
  );
}

function cn(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}
