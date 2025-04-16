import { ShoppingCart, UserIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import ModeToggle from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";

import { APP_NAME } from "@/lib/constants";

const Header = () => {
  return (
    <header className="w-full border-b">
      <div className="wrapper flex-between">
        <div className="flex-start">
          <Link href={"/"} className="flex-start">
            <Image
              src={"/images/logo.svg"}
              alt={`${APP_NAME}`}
              width={48}
              height={48}
              priority
            />

            <span className="hidden font-bold text-2xl ml-3 lg:block"></span>
          </Link>
        </div>

        <div className="space-x-2">
          <ModeToggle />

          <Button variant={"ghost"} asChild>
            <Link href={"/cart"}>
              <ShoppingCart />
              Cart
            </Link>
          </Button>

          <Button asChild>
            <Link href={"/cart"}>
              <UserIcon />
              Sign In
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
