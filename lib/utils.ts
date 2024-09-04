import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// fonction pour gérer l'affichage des étoiles

export function generateStars(rate:number) {
  const maxStars = 10;
  const filledStars = "★".repeat(rate);
  const emptyStars = "☆".repeat(maxStars - rate);
  return filledStars + emptyStars;
}
