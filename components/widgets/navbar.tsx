import Image from "next/image";
import Link from "next/link";
import { RiMenu4Line } from "react-icons/ri";
import { LINKS } from "../../lib/constants";
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "../ui/sheet";

export default function Navbar() {
  const links = LINKS.map((link) => {
    return (
      <li key={link.id}>
        <Link href={link.href}>{link.title}</Link>
      </li>
    );
  });

  return (
    <nav className="h-10 lg:h-dvh lg:w-1/5">
      <Sheet>
        <SheetTrigger className="lg:hidden">
          <RiMenu4Line size={40} />
        </SheetTrigger>
        <SheetContent className="h-dvh flex flex-col items-center justify-center gap-10">
          <SheetHeader>
            <Image
              src="/assets/logo.png"
              alt="Creanumerik04 logo"
              width={50}
              height={50}
            />
          </SheetHeader>
          <ul className="flex flex-col items-center justify-center gap-10">
            {links}
          </ul>
        </SheetContent>
      </Sheet>
      <aside className="hidden lg:flex lg:flex-col lg:items-center lg:justify-center lg:gap-10 lg:mx-auto lg:h-dvh lg:text-xl lg:list-none">
        <li>
          <Image
            src="/assets/logo.png"
            alt="Creanumerik04 logo"
            width={50}
            height={50}
          />
        </li>
        {links}
      </aside>
    </nav>
  );
}

