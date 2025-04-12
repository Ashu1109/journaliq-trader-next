"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export const navItems = [
    { label: "About", path: "http://localhost:3000/#about" },
    { label: "Features", path: "http://localhost:3000/#features" },
    { label: "Pricing", path: "/pricing" },
    { label: "Contact", path: "http://localhost:3000/#contact" },
  ];

const Navlinks = () => {
  const location = usePathname();

  return (
    <nav className="hidden md:flex items-center space-x-8">
      {navItems.map((item) => (
        <Link
          key={item.path}
          href={item.path}
          className={cn(
            "text-sm font-medium transition-colors hover:text-candle-600",
            location === item.path ? "text-candle-600" : "text-foreground/80"
          )}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
};

export default Navlinks;
