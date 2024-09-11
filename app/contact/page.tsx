import Social from "@/components/widgets/reseaux";
import Link from "next/link";
import { MdMailOutline } from "react-icons/md";

export default function Contact() {
  return (
    <section className="w-4/5 mt-20 mx-auto flex flex-col items-center gap-4 min-h-screen md:justify-center">
      <h2 className="uppercase font-bold text-xl md:text-2xl">Contact</h2>
      <hr className="h-1 my-4 border-none bg-slate-400 w-full" />
      <article className="w-full flex flex-col items-start gap-4 md:flex-row md:justify-around md:items-center">
        <div className="flex flex-col">
          <h3 className="uppercase text-lg font-bold my-2">E-mail</h3>
          <div className="flex flex-row items-center gap-4">
            <MdMailOutline className="w-8 h-8" />
            <Link
              href="mailto:guiceccoli@gmail.com"
              className="hover:text-gray-500 transition-colors duration-500"
            >
              guiceccoli@gmail.com
            </Link>
          </div>
        </div>
        <div className="flex flex-col justify-center">
          <h3 className="uppercase text-lg font-bold my-2">Réseaux sociaux</h3>
          <Social />
        </div>
      </article>
    </section>
  );
}

