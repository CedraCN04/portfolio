import { IconType } from "react-icons/lib";

// Liens barre de navigation
export type NavLinks = {
  id: string;
  title: string;
  href: string;
};

// Liens vers les réseaux sociaux
export type SocialLinks = {
  id: string,
  href: string,
  icon: IconType,
}

// Informations de projets
export type Project = {
  id: string;
  title: string;
  description: string;
  image: string;
  alt: string,
  href: string;
  technologies: IconType[];
}