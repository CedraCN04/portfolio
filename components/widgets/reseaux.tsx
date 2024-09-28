import { SOCIAL_LINKS } from "@/lib/constants";
import Link from "next/link";

export default function Social() {
  return (
    <div className="flex flex-row items-center justify-between gap-4 w-3/5 md:w-1/5">
      {SOCIAL_LINKS.map((sociallink) => (
        <Link key={sociallink.id} href={sociallink.href}>
          <sociallink.icon
            size={50}
            className="hover:scale-125 hover:text-gray-400 duration-500"
          />
        </Link>
      ))}
    </div>
  );
}

