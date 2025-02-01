"use client";

import { FC, useContext } from "react";
import Link from "next/link";
import { UserContext } from "../context-api/contexts";

const RegisterButton: FC = () => {
  const { isLoggedIn } = useContext(UserContext);
  return (
    <Link href={"/auth"}>
      <button
        type="button"
        className="rounded-lg bg-gradient-to-r from-fuchsia-300 to-sky-300 px-8 py-4 text-base font-medium transition-all duration-500 hover:scale-105 hover:bg-gradient-to-l disabled:cursor-not-allowed dark:from-fuchsia-950 dark:to-sky-950"
        disabled={isLoggedIn}
      >
        Registrati ora
      </button>
    </Link>
  );
};

export default RegisterButton;
