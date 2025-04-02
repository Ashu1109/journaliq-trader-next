"use client";
import { AlignJustify, ArrowRight, Flame, LogIn } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";

import { cn } from "@/lib/utils";
import { useSession } from "next-auth/react";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";

// const Navbar = () => {
//   const [scrolled, setScrolled] = useState(false);
//   const location = usePathname();

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 10);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const navItems = [
//     { label: "About", path: "/about" },
//     { label: "Features", path: "/features" },
//     { label: "Pricing", path: "/pricing" },
//     { label: "Contact", path: "/contact" },
//   ];

//   return (
//     <header
//       className={cn(
//         "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4",
//         scrolled ? "bg-white/80 shadow-sm backdrop-blur-md" : "bg-transparent"
//       )}
//     >
//       <div className="container mx-auto px-4 flex justify-between items-center">
//         <Link href="/" className="flex items-center space-x-2">
//           <div className="w-8 h-8 rounded-full bg-candle-500 flex items-center justify-center">
//             <div className="w-3 h-3 bg-white rounded-full" />
//           </div>
//           <span className="text-xl font-medium">Candle AI</span>
//         </Link>

//         <nav className="hidden md:flex items-center space-x-8">
//           {navItems.map((item) => (
//             <Link
//               key={item.path}
//               href={item.path}
//               className={cn(
//                 "text-sm font-medium transition-colors hover:text-candle-600",
//                 location === item.path
//                   ? "text-candle-600"
//                   : "text-foreground/80"
//               )}
//             >
//               {item.label}
//             </Link>
//           ))}
//         </nav>

//         <Button
//           size="sm"
//           className="hidden md:flex items-center gap-2 bg-candle-500 hover:bg-candle-600"
//         >
//           <LogIn className="h-4 w-4" />
//           Login
//         </Button>

//         <Button className="md:hidden text-foreground">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             width="24"
//             height="24"
//             viewBox="0 0 24 24"
//             fill="none"
//             stroke="currentColor"
//             strokeWidth="2"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//           >
//             <line x1="4" x2="20" y1="12" y2="12"></line>
//             <line x1="4" x2="20" y1="6" y2="6"></line>
//             <line x1="4" x2="20" y1="18" y2="18"></line>
//           </svg>
//         </Button>
//       </div>
//     </header>
//   );
// };

// export default Navbar;

const Navbar = () => {
  const { data: session } = useSession();
  const location = usePathname();
  const [open, setOpen] = useState(false);
  const onChange = () => {
    setOpen(false);
  };

  const navItems = [
    { label: "About", path: "http://localhost:3000/#about" },
    { label: "Features", path: "http://localhost:3000/#features" },
    { label: "Pricing", path: "/pricing" },
    { label: "Contact", path: "http://localhost:3000/#contact" },
  ];

  return (
    <div className="border-t py-6">
      <div className="container mx-auto px-4">
        <div className="flex  items-center justify-between gap-6 md:flex-row">
          <Link href={"/"}>
            <div className="flex items-center gap-2">
              <Flame className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold">Candle AI</span>
            </div>
          </Link>
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-candle-600",
                  location === item.path
                    ? "text-candle-600"
                    : "text-foreground/80"
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>
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
                  <Button onClick={onChange} variant={"link"} asChild>
                    <Link
                      href={"/dashboard"}
                      className={cn(
                        " font-bold  transition-colors hover:text-candle-600",
                        location === "/dashboard"
                          ? "text-candle-600"
                          : "text-foreground/80"
                      )}
                    >
                      Dashboard
                    </Link>
                  </Button>
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

          {session?.user ? (
            <Button className="hidden md:flex" size="lg" asChild>
              <Link href="/dashboard" className=" text-lg font-bold">
                Dashboard
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          ) : (
            <Button className="hidden md:flex" size="lg" asChild>
              <Link href="/singup" className=" text-lg font-bold">
                Login <LogIn className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
