import CardsProject from "../base/cards-project";

export default function ProjectContent() {
  return (
    <div className="flex flex-col items-center w-4/5 gap-10">
      <h1 className="text-2xl uppercase">Projets</h1>
      <p className="w-4/5 md:w-3/5 text-center">
        Découvrez les quelques projets que j&apos;ai réalisé en équipe en
        autonomie.
      </p>
      <CardsProject />
    </div>
  );
}

