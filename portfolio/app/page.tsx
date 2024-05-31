import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="relative bg-purple flex justify-center items-center
    flex-col overflow-hidden mx-auto sm:px10 px-5">
      <div className="max-w-7xl w-full">
        <Hero />
      </div>
    </main>
  );
}
