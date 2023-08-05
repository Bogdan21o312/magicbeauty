"use client";

import { useRouter } from "next/navigation";
import { signIn, signOut, useSession } from 'next-auth/react'
import type { FormEventHandler } from "react";

const SignInForm = () => {
  const router = useRouter();
  const { data: session } = useSession(); // Витягуємо інформацію про сесію

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const res = await signIn("credentials", {
      email: formData.get("email"),
      password: formData.get("password"),
      redirect: false,
    });

    if (res && !res.error) {
      router.push("/");
    } else {
      console.log(res);
    }
  };
  const handleLogout = () => {
    signOut(); // Викликаємо функцію розлогінування
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className="login-form">
        <input type="email" name="email" required />
        <input type="password" name="password" required />
        <button type="submit">Sign In</button>
      </form>
      <button onClick={handleLogout} disabled={!session}>
        Logout
      </button>
    </div>
  );
};

export { SignInForm };
