"use client"

import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { signIn } from "next-auth/react";

export default function LoginWithGoogle() {
    return (
        <button 
        onClick={() => signIn('google')}
        className="bg-white border p-4 text-center w-full py-4 flex gap-3 items-center justify-center shadow-xl shadow-black/60">
          <FontAwesomeIcon icon={faGoogle} className="h-8" />
          <span>Sign In with Google </span>
        </button>
    )
}