import { cookies } from "next/headers";
import Image from "next/image";
import Settings from "./components/Settings";
import Map from "./components/OlMap";
import Detail from "./components/Detail";
import Navbar from "./components/Navbar";

export default function Home() {
  const cookiesList = cookies();
  const hasAuthorisation = cookiesList.has("authorisation");
  const user = cookiesList.has("user");

  if (user == true) {
    const userName: any = cookiesList.get("user")?.value;
    var project = "";

    return (
      <div className="m-0 p-0 w-full h-dvh max-h-full text-base gap-2 grid grid-rows-12 grid-cols-1 text-neutral-600">
        <main className=" row-span-1">
          <Navbar user={userName} />
        </main>
        <main className="flex row-span-11">
          <div className="h-full w-full">
            <Settings userName={userName} />
          </div>
        </main>
      </div>
    );
  } else {
    return (
      <div className="m-0 p-0 w-full h-dvh max-h-full text-base gap-2 grid grid-rows-12 grid-cols-1 justify-center items-center text-black">
        <main className=" row-span-1">
          <Navbar user="" />
        </main>
        <main className="flex row-span-11 justify-center items-center">
          <div className="h-full">
            Bitte melden Sie sich an, um auf die Projektverwaltung zuzugreifen.
          </div>
        </main>
      </div>
    );
  }
}
