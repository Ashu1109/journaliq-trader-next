import { Flame, LogIn } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";

const Navbar = () => {
  return (
    <div className="border-t py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex items-center gap-2">
            <Flame className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">Candle AI</span>
          </div>

          <div className="flex gap-8 text-sm text-muted-foreground">
            <Link href="#" className="hover:text-foreground">
              About
            </Link>
            <Link href="#" className="hover:text-foreground">
              Features
            </Link>
            <Link href="#" className="hover:text-foreground">
              Pricing
            </Link>
            <Link href="#" className="hover:text-foreground">
              Contact
            </Link>
          </div>

          <Button size="lg" asChild>
            <Link href="#" className=" text-lg font-bold">
              Login <LogIn className="ml-1 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
