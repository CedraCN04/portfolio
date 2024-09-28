"use client";

import { SOCIAL_LINKS } from "@/lib/constants";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Social() {
  return (
    <div className="flex flex-row items-center justify-between gap-4 w-3/5 md:w-1/5">
      {SOCIAL_LINKS.map((sociallink) => (
        <Link key={sociallink.id} href={sociallink.href}>
          <motion.div
            whileHover={{
              scale: 1.15,
              transition: { duration: 0.5 },
              color: "#9D9C9A",
            }}
          >
            <sociallink.icon size={50} />
          </motion.div>
        </Link>
      ))}
    </div>
  );
}

