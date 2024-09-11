import CardsProject from "@/components/base/cards-project";

export default function Projects() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 min-h-screen py-20 text-white">
      <div className="flex flex-col items-center w-4/5 gap-10">
        <h1 className="text-2xl uppercase font-bold">Projets</h1>
        <p className="w-4/5 md:w-3/5 text-center">
          Découvrez les quelques projets que j&apos;ai réalisé en équipe ou en
          autonomie.
        </p>
        <CardsProject />
      </div>
    </section>
  );
}

