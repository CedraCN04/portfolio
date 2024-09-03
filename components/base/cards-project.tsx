"use client";

import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { PROJECTS } from "@/lib/constants";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { MdOutlineArrowOutward } from "react-icons/md";

export default function CardsProject() {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {PROJECTS.map((project) => (
        <Card key={project.id} className="p-4">
          <CardTitle className="text-base">
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 1.1 }}
              transition={{ duration: 0.5 }}
            >
              <Link
                href={project.href}
                className="flex flex-row justify-around items-center"
              >
                {project.title} <MdOutlineArrowOutward />
              </Link>
            </motion.div>
          </CardTitle>
          <CardHeader>
            <Image
              src={project.image}
              alt={project.title}
              width={400}
              height={200}
              className="object-cover rounded-md"
            />
          </CardHeader>
          <CardDescription className="text-sm">
            {project.description}
          </CardDescription>
          <CardFooter className="flex flex-col items-center gap-5">
            <ul className="flex flex-row items-center justify-center gap-4 w-full mt-6">
              {project.technologies.map((Icon, index) => (
                <li key={index}>
                  <Icon size={25} />
                </li>
              ))}
            </ul>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}

