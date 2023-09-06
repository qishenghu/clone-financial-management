"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

import { Button, Card, CardContent } from "../ui";
import { HamburgerNavigation } from "../atoms";
import { setRandomBalances } from "@/utils/randomValues/randomBalances";
import { setRandomGoals } from "@/utils/randomValues/randomGoals";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const handleRandomValues = () => {
    setRandomBalances();
    setRandomGoals();
    router.refresh();
    setIsOpen(false);
  };

  return (
    <header className="flex justify-between py-2 px-6 w-full bg-bg-grey border-b border-zinc-200">
      <div>
        <h1 className="font-bold text-default-black">Welcome</h1>
      </div>
      <Button onClick={() => setIsOpen(true)} className=" max-md:text-xs max-md:p-1">
        Automatically generate data
      </Button>
      <HamburgerNavigation />
      {isOpen && (
        <div className=" absolute top-0 left-0 bg-default-black/20 flex items-center justify-center h-full w-full z-50">
          <Card>
            <CardContent className="p-7 text-default-black/70">
              Do you want to enter data automatically?
              <div className="flex gap-3 justify-center items-center mt-3">
                <Button onClick={handleRandomValues}>Sim</Button>
                <Button onClick={() => setIsOpen(false)}>Não</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </header>
  );
}

export default Header;

