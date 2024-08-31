"use client";

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

export default function PageTransition({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  return (
    <motion.div
      key={pathname}
      animate={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 20 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{
        ease: "easeInOut",
        duration: 0.5,
      }}
      className="w-full"
    >
      {children}
    </motion.div>
  );
}

