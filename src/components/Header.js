import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import Link from "next/link";
import LogoutButton from "./buttons/LogoutButton";

export default async function Header() {
  const session = await getServerSession(authOptions);
  return (
    <header className="bg-teal-300 border-b py-4">
      <div className="max-w-4xl flex justify-between mx-auto px-6">
        <div className="flex gap-6">
          <Link href={"/"}>
            <img
              src="/logo.png"
              className="rounded-full w-20 h-20 object-cover filter drop-shadow-md"
              alt="Vaultree Logo" 
            />
          </Link>
          <nav className="flex items-center gap-4 text-slate-500 text-lg">
            <Link href={"/about"}>About</Link>
            <Link href={"/pricing"}>Pricing</Link>
            <Link href={"/contact"}>Contact</Link>
          </nav>
        </div>
        <nav className="flex items-center gap-4 mt-7 text-lg text-slate-500">
          {!!session && (
            <>
            <Link href={"/account"} className="font-bold text-slate-950">Hello, {session?.user?.name}</Link>
            <LogoutButton/>
            </>
          )}
          {!session && (
            <>
              <Link href={"/login"}>Sign In</Link>
              <Link href={"/login"}>Create Account</Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
}
