import React from "react";
import Link from "next/link";
import { cookies } from "next/headers";

const Navbar = ({ user }: { user: string }) => {
  const cookiesList = cookies();
  const hasAuthorisation = cookiesList.has("authorisation");

  return (
    <div className="row-span-1">
      <ul className="flex justify-between m-7 items-center">
        <div>
          <Link href="/">
            <li>Placeholder</li>
          </Link>
        </div>
        <div>
          <li>{user}</li>
        </div>
        {hasAuthorisation ? (
          <Link href={"/logout"}>
            <h1>Abmelden</h1>
          </Link>
        ) : (
          <div className="flex gap-10">
            <Link href="/login">
              <li>Anmelden</li>
            </Link>
            <Link href="/register">
              <li>Registrieren</li>
            </Link>
          </div>
        )}
      </ul>
    </div>
  );
};

export default Navbar;
