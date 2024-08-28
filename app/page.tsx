import Navbar from "@/components/widgets/navbar";

export default function Home() {
  return (
    <div className="h-dvh flex flex-col items-start justify-start lg:flex-row">
      <Navbar />
      <section className="flex flex-col items-center justify-center w-full h-dvh">
        <h1>Home</h1>
      </section>
    </div>
  );
}

