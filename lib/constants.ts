import { AiFillGithub, AiOutlineInstagram, AiOutlineLinkedin } from "react-icons/ai";
import { NavLinks, SocialLinks } from "../types/type";

// Liens barre de navigation
export const LINKS: NavLinks[] = [
  {
    id: "accueil",
    title: "Accueil",
    href: "/",
  },
  {
    id: "projets",
    title: "Projets",
    href: "#",
  },
  {
    id: "competences",
    title: "Compétences",
    href: "#",
  },
  {
    id: "contact",
    title: "Contact",
    href: "#",
  },
];

// Liens vers les réseaux sociaux
export const SOCIAL_LINKS: SocialLinks[] = [
  {
    id:"github",
    href: "https://github.com/CedraCN04",
    icon: AiFillGithub
  },
  {
    id:"linkedin",
    href:"https://www.linkedin.com/in/guillaume-ceccoli/",
    icon: AiOutlineLinkedin,
  },
  {
    id: "instagram",
    href: "https://www.instagram.com/creanumerik04/",
    icon: AiOutlineInstagram
  }
]