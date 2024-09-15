"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { RiMenu4Line } from "react-icons/ri";
import { LINKS } from "../../lib/constants";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";

export default function Navbar() {
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  const handleLinkClick = () => {
    setIsSheetOpen(false);
  };

  const links = LINKS.map((link) => {
    return (
      <motion.li
        key={link.id}
        whileHover={{
          scale: 1.15,
          transition: { duration: 0.5 },
        }}
      >
        <Link href={link.href} onClick={handleLinkClick}>
          {link.title}
        </Link>
      </motion.li>
    );
  });

  return (
    <nav className="h-10 md:h-dvh md:w-1/5">
      <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
        <SheetTrigger className="md:hidden">
          <RiMenu4Line size={40} onClick={() => setIsSheetOpen(true)} />
        </SheetTrigger>
        <SheetContent className="h-dvh flex flex-col backgroundImage items-center justify-center gap-10">
          <SheetHeader>
            <SheetTitle>
              <Image
                src="/assets/xavatario.svg"
                alt="Avatar Guillaume"
                width={100}
                height={100}
                className="rounded-full"
              />
            </SheetTitle>
          </SheetHeader>
          <ul className="flex flex-col items-center justify-center gap-10 list-none">
            {links}
          </ul>
        </SheetContent>
      </Sheet>
      <aside>
        <ul className="fixed hidden md:flex md:flex-col md:items-center md:justify-center md:gap-10 md:mx-10 md:h-dvh lg:text-xl md:list-none">
          <li>
            <Image
              src="/assets/xavatario.svg"
              alt="Avatar Guillaume"
              width={100}
              height={100}
              className="rounded-full"
            />
          </li>
          {links}
        </ul>
      </aside>
    </nav>
  );
}

