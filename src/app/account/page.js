import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import RightIcon from "@/components/icons/RightIcon";

export default async function AccountPage({ searchParams }) {
  const session = await getServerSession(authOptions);
  const username = searchParams?.username;
  if (!session) {
    redirect("/");
  }

  return (
    <div>
      <form>
        <h1 className="text-4xl font-bold text-center mb-2">
          Grab you Username
        </h1>
        <p className="text-center mb-6 text-gray-400">Choose your username</p>
        <div className="max-w-xs mx-auto">
          <input
            className="block p-2 mx-auto border shadow-xl shadow-black/70 mb-2 w-full text-center"
            type="text"
            placeholder="username"
            defaultValue={username}
          />
          <button
            type="submit"
            className="bg-teal-300 py-2 px-4 font-bold block mx-auto shadow-xl shadow-black/70 w-full flex gap-2 items-center justify-center"
          >
            <span>Claim Your Username</span>
            <RightIcon />
          </button>
        </div>
      </form>
    </div>
  );
}
