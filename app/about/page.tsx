import Image from "next/image";

export default function About() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen gap-10">
      <h2 className="text-xl uppercase md:text-2xl">Qui suis-je ?</h2>
      <Image
        src="/assets/Guillaume.jpeg"
        alt="Photo de Guillaume"
        width={200}
        height={200}
        className="rounded-xl"
      />
      <h3 className="uppercase">Mon parcours</h3>
      <p className="w-4/5 md:w-3/5">
        Menuisier pendant 10 ans dans une entreprise industrielle, j&apos;ai
        décidé de me revonvertir dans le domaine du web. Domaine qui me
        passionne depuis longtemps. J&apos;ai donc suivi une formation de 6 mois
        chez Open ClassRoom. Après obtention de mon diplôme, j&apos;ai poursuivi
        mon apprentissage en autodidacte, en réalisant des projets concrets pour
        des clients ou pour moi-même. J&apos;ai également travaillé au sein
        d&apos;une petite équipe pendant un mois, sous la tutelle d&apos;un
        développeur plus expérimenté, afin de parfaire mes connaissances et
        m&apos;améliorer.
      </p>
    </section>
  );
}

