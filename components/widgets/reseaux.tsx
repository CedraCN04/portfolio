import { SOCIAL_LINKS } from "@/lib/constants";
import Link from "next/link";

export default function Social() {
  return (
    <div className="flex flex-row items-center justify-between gap-4 w-3/5 md:w-1/5">
      {SOCIAL_LINKS.map((sociallink) => (
        <Link key={sociallink.id} href={sociallink.href}>
          <sociallink.icon size={40} />
        </Link>
      ))}
    </div>
  );
}

