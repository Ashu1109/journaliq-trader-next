import { ArrowRight, Flame, LogIn } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";
import Navlinks from "./Navlinks";
import NavSheet from "./NavSheet";
import { auth } from "@/auth";
const Navbar =async () => {
  const data = await auth()

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
          <Navlinks/>
          <NavSheet/>
          {data?.user ? (
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
