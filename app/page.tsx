import HomePage from "@/components/widgets/home";
import Navbar from "@/components/widgets/navbar";

export default function Home() {
  return (
    <div className="h-dvh flex flex-col items-start justify-start md:flex-row">
      <Navbar />
      <section className="w-full h-dvh">
        <HomePage />
      </section>
    </div>
  );
}

