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
      <p className="w-4/5 md:w-3/5">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo,
        officia corporis, dolorem neque ratione, voluptate odit iste officiis
        nobis veritatis natus. Officiis dolor iusto accusantium suscipit sed
        earum nesciunt amet. Maxime libero debitis necessitatibus numquam
        facilis quibusdam molestiae aperiam quos iusto aspernatur, placeat cum,
        error animi suscipit, saepe totam. Eius ducimus odio voluptate
        assumenda, ex fugiat consectetur omnis id aut!
      </p>
    </section>
  );
}

