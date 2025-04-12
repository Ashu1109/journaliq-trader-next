"use client"
import React from 'react'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "./ui/sheet";
import { AlignJustify } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { Button } from './ui/button';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { navItems } from './Navlinks';
import { useSession } from 'next-auth/react';
const NavSheet = () => {
    const [open, setOpen] = React.useState(false);
    const {data:session} = useSession()
    const location = usePathname();
    const onChange = () => {
        setOpen(false);
    }
  return location === "/" && (
    <div className="md:hidden flex">
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        {/* <Button variant="outline"> */}
        <AlignJustify className="mr-4 " />
        {/* </Button> */}
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Menu</SheetTitle>
          <SheetDescription asChild>
            <div className="text-sm text-muted-foreground">
              <span className="font-bold">Candle AI</span> is a powerful
              tool that helps you to create and manage your own AI
              assistant.
            </div>
          </SheetDescription>
        </SheetHeader>
        <div className="flex flex-col gap-2 py-4 justify-center items-center">
          {
            session?.user.id ? (
              <Button onClick={onChange} variant={"link"} asChild>
            <Link
              href={"/dashboard"}
              className={cn(
                " font-bold  transition-colors hover:text-candle-600", 
                location.startsWith("/dashboard")
                  ? "text-candle-600"
                  : "text-foreground/80"
              )}
              >
              Dashboard
            </Link>
          </Button>
            ):(
              <Button onClick={onChange}  asChild>
            <Link
              href={"/auth/login"}
              className={cn(
                " font-bold  w-32  transition-colors hover:text-candle-600", 
                location.startsWith("/dashboard")
                  ? "text-candle-600"
                  : "text-foreground/80"
              )}
              >
              Sign In
            </Link>
          </Button>
            )
          }
          {navItems.map((item) => (
            <Button
              onClick={onChange}
              key={item.path}
              variant={"link"}
              asChild
            >
              <Link
                href={item.path}
                className={cn(
                  " font-bold  transition-colors hover:text-candle-600",
                  location === item.path
                    ? "text-candle-600"
                    : "text-foreground/80"
                )}
              >
                {item.label}
              </Link>
            </Button>
          ))}
        </div>

        {/* <div className="grid gap-4 py-4">
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="name" className="text-right">
            Name
          </Label>
          <Input
            id="name"
            value="Pedro Duarte"
            className="col-span-3"
          />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="username" className="text-right">
            Username
          </Label>
          <Input
            id="username"
            value="@peduarte"
            className="col-span-3"
          />
        </div>
      </div> */}
        {/* <SheetFooter>
        <SheetClose asChild>
          <Button type="submit">Save changes</Button>
        </SheetClose>
      </SheetFooter> */}
      </SheetContent>
    </Sheet>
  </div>
  )
}

export default NavSheet
