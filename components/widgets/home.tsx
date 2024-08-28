import { SOCIAL_LINKS } from "@/lib/constants";
import Link from "next/link";

export default function HomePage() {
  return (
    <article className="w-4/5 h-dvh flex flex-col items-center justify-center gap-10 mx-auto">
      <h1 className="text-2xl md:text-4xl">Guillaume Ceccoli</h1>
      <h2 className="text-base md:text-2xl">
        Développement Web - Impression 3D
      </h2>
      <p className="md:w-3/5 text-center text-sm">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim distinctio
        facere ipsum voluptatibus perferendis laboriosam labore minus neque
        incidunt, repudiandae dolor pariatur quae error dignissimos excepturi
        velit corporis corrupti dolorem?
      </p>
      <div className="flex flex-row items-center justify-between w-3/5 md:w-1/5 md:justify-around">
        {SOCIAL_LINKS.map((sociallink) => (
          <Link key={sociallink.id} href={sociallink.href}>
            <sociallink.icon size={40} />
          </Link>
        ))}
      </div>
    </article>
  );
}

