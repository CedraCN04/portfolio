import { IconType } from "react-icons/lib";

// Liens barre de navigation
export interface NavLinks {
  id: string;
  title: string;
  href: string;
};

// Liens vers les réseaux sociaux
export interface SocialLinks {
  id: string,
  href: string,
  icon: IconType,
}

// Informations de projets
export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  alt: string,
  href: string;
  technologies: IconType[];
}

// Informations soft-skills
export interface SoftSkill {
  id: string;
  title: string;
  icon: IconType;
}