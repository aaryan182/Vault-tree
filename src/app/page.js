import HeroForm from "@/components/forms/HeroForm";

export default function Home() {
  return (
    <main>
      <section className=" pt-32">
        <div className="max-w-md mb-8">
          <h1 className="text-6xl font-bold">
            Your one Vault <br /> to every thing
          </h1>
          <h2 className="text-xl text-slate-400 mt-6">
            Manage your vaults and your data in one place
          </h2>
        </div>
        <HeroForm/>
      </section>
    </main>
  );
}
