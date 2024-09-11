import Social from "./reseaux";

export default function HomePage() {
  return (
    <article className="w-4/5 h-dvh flex flex-col items-center justify-center gap-10 mx-auto">
      <h1 className="uppercase font-bold text-2xl md:text-4xl">
        Guillaume Ceccoli
      </h1>
      <h2 className="text-base md:text-2xl">Développeur React</h2>
      <p className="md:w-3/5 text-sm">
        Bonjour, bienvenue sur mon portfolio ! Passionné par le développement
        web, le design et l&apos;impression 3D, j&apos;ai décidé de quitter mon
        emploi de menuisier en 2022, afin de me reconvertir dans le domaine du
        web. Orienté principalement Frontend, j&apos;ai également quelques
        connaissances en Backend, que je consolide chaque jour, en réalisant des
        projets personnels concrets. Curieux et dynamique, je suis toujours en
        veille et me tient informé sur les dernières technologies du web.
      </p>
      <Social />
    </article>
  );
}

