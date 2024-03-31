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
        <form className="inline-flex items-center shadow-lg shadow-black/80">
          <span className="bg-white py-4 pl-4">vaultree.of/</span>
          <input type="text" className="py-4" placeholder="username" />
          <button type="submit" className="bg-teal-300 py-4 px-5">
            Join for free
          </button>
        </form>
      </section>
    </main>
  );
}
