import { AiFillGithub, AiOutlineInstagram, AiOutlineLinkedin } from "react-icons/ai";
import { FaCss3Alt, FaHtml5 } from "react-icons/fa";
import { RiJavascriptFill, RiNextjsLine, RiSupabaseLine, RiTailwindCssLine } from "react-icons/ri";
import { TbBrandFigma, TbBrandPrisma, TbBrandTypescript } from "react-icons/tb";
import { NavLinks, Project, SocialLinks } from "../types/type";

// Liens barre de navigation
export const LINKS: NavLinks[] = [
  {
    id: "accueil",
    title: "Accueil",
    href: "/",
  },
  {
    id: "about",
    title: "Qui suis-je ?",
    href: "#",
  },
  {
    id: "projets",
    title: "Projets",
    href: "/projects",
  },
  {
    id: "printing",
    title: "Projets 3D",
    href: "#",
  },
  {
    id: "competences",
    title: "Compétences",
    href: "#",
  },
  {
    id: "contact",
    title: "Contactez-moi",
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

// Informations de projets
export const PROJECTS: Project[] = [
  {
    id: "psychologue",
    title: "Site vitrine pour un cabinet de psychologie",
    description: "Site qui présente les services d'un cabinet de psychologie aux Pennes-Mirabeau.",
    image: "/assets/site-delphine.png",
    alt: "Aperçu du site de Delphine",
    href:"https://www.ceccoli-delphine.fr/",
    technologies: [RiNextjsLine, RiTailwindCssLine, TbBrandTypescript, TbBrandFigma]
  },
  {
    id: "dev-up",
    title: "Plateforme d'entraide pour jeunes développeurs",
    description: "Projet réalisé en équipe sous la tutelle d'un mentor afin de favoriser l'entraide entre juniors et seniors.",
    image: "/assets/dev-up.png",
    alt: "Aperçu de la plateforme Dev-Up",
    href:"https://dev-up.vercel.app/",
    technologies: [RiNextjsLine, RiTailwindCssLine, TbBrandPrisma, TbBrandTypescript,  TbBrandFigma]
  },
  {
    id: "imc",
    title: "Un calculateur d'IMC en ligne",
    description: "Une page web qui permet de calculer son Indice de Masse Corporelle.",
    image: "/assets/imc.png",
    alt: "Aperçu du calculateur d'IMC",
    href:"https://imc-calculator.vercel.app/",
    technologies: [FaHtml5, FaCss3Alt, RiJavascriptFill]
  },
  {
    id: "todo",
    title: "Une application de gestion des tâches",
    description: "Une application permettant de se connecter, de créer et gérer ses tâches.",
    image: "/assets/todo.png",
    alt: "Aperçu de l'application Todo",
    href:"https://todolist-guillaume.vercel.app/",
    technologies: [RiNextjsLine, RiTailwindCssLine, TbBrandTypescript, RiSupabaseLine]
  }
]