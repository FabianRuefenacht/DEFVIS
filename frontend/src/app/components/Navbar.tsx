import React from "react";
import Link from "next/link";
import { cookies } from "next/headers";

const Navbar = ({user}: {user: string}) => {
  const cookiesList = cookies();
  const hasAuthorisation = cookiesList.has("authorisation");

  return (
    <div className="row-span-1">
      <ul className="flex justify-between m-7 items-center">
        <div>
          <Link href="/">
            <li>Home</li>
          </Link>
        </div>
        <div>
          <Link href="/">
            <li>
              {user}
            </li>
          </Link>
        </div>
        {hasAuthorisation ? (
          <Link href={"/logout"}>
            <h1>logout</h1>
          </Link>
        ) : (
          <div className="flex gap-10">
            <Link href="/login">
              <li>Login</li>
            </Link>
            <Link href="/register">
              <li>Register</li>
            </Link>
          </div>
        )}
      </ul>
    </div>
  );
};

export default Navbar;
