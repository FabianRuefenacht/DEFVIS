import { cookies } from "next/headers";
import Image from "next/image";
import Settings from "./components/Settings";
import Map from "./components/Map";
import Detail from "./components/Detail";

export default function Home() {
  const cookiesList = cookies()
  const hasAuthorisation = cookiesList.has('authorisation')


  if (hasAuthorisation == true) {
    return (
      <main className="grid grid-rows-4 grid-cols-4 gap-4 bg-slate-900 w-full row-span-11">
        <Settings />
        <Map />
        <Detail />
      </main>
    );
  } else {
    return(
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <h1>Bitte melden Sie sich an um Ihre Projekte zu sehen!</h1>
      </main>
    )

  }
}
