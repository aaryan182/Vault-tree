'use client'

import { signIn } from "next-auth/react";
import { redirect } from "next/navigation";
import { useEffect } from "react";

export default function HeroForm() {

    useEffect(() => {
        if(
            'localStorage' in window
            && window.localStorage.getItem('username')
        ){
            const username = window.localStorage.getItem('username');
            window.localStorage.removeItem('username');
            redirect('/account?username=' + username);
        }
    }, [])

    async function handleSubmit (e)  {
        e.preventDefault();
        const form = e.target;
        const input = form.querySelector('input');
        const username = input.value;
        if(username.length > 0) {
            window.localStorage.setItem('username', username);
            await signIn('google')
        }
    }

  return (
    <form onSubmit={handleSubmit} className="inline-flex items-center shadow-lg shadow-black/80">
      <span className="bg-white py-4 pl-4">vaultree.of/</span>
      <input type="text" className="py-4" placeholder="username" />
      <button type="submit" className="bg-teal-300 py-4 px-5">
        Join for free
      </button>
    </form>
  );
}
