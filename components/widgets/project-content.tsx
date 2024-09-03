import CardsProject from "../base/cards-project";

export default function ProjectContent() {
  return (
    <div className="flex flex-col items-center w-4/5 gap-10">
      <h1 className="text-2xl uppercase">Projets</h1>
      <CardsProject />
    </div>
  );
}

