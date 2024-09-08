"use client";

import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { PROJECTS } from "@/lib/constants";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { MdOutlineArrowOutward } from "react-icons/md";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0 },
};

export default function CardsProject() {
  const [hoveredProjectId, setHoveredProjectId] = useState<string | null>(null);
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3"
    >
      <AnimatePresence>
        {PROJECTS.map((project) => (
          <motion.div key={project.id} variants={cardVariants}>
            <Card
              key={project.id}
              className="p-4 bg-blue-900 text-white shadow-slate-500 shadow-md border-black"
            >
              <CardTitle className="text-base">
                <motion.div
                  onHoverStart={() => setHoveredProjectId(project.id)}
                  onHoverEnd={() => setHoveredProjectId(null)}
                  whileHover={{ color: "lightgrey" }}
                >
                  <Link
                    href={project.href}
                    className="flex flex-row justify-around items-center"
                  >
                    {project.title}
                    <motion.span
                      animate={
                        hoveredProjectId === project.id
                          ? { x: 5, y: -5 }
                          : { x: 0, y: 0 }
                      }
                      transition={{ duration: 0.3 }}
                    >
                      <MdOutlineArrowOutward size={24} />
                    </motion.span>
                  </Link>
                </motion.div>
              </CardTitle>
              <CardHeader>
                <Image
                  src={project.image}
                  alt={project.title}
                  width={400}
                  height={200}
                  className="object-cover rounded-md border-gray-200 border"
                />
              </CardHeader>
              <CardDescription className="text-sm text-slate-300">
                {project.description}
              </CardDescription>
              <CardFooter className="flex flex-col items-center gap-5">
                <ul className="flex flex-row items-center justify-center gap-4 w-full mt-6">
                  {project.technologies.map((Icon, index) => (
                    <li key={index}>
                      <Icon size={30} />
                    </li>
                  ))}
                </ul>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </AnimatePresence>
    </motion.div>
  );
}

