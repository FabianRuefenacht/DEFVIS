import { cookies } from "next/headers";
import Image from "next/image";
import Settings from "./components/Settings";
import Map from "./components/Map";
import Detail from "./components/Detail";

export default function Home() {
  const cookiesList = cookies();
  const hasAuthorisation = cookiesList.has("authorisation");
  const user = cookiesList.has("user")

  if (user == true) {

    const userName:any = cookiesList.get("user")?.value

    return (
      <main className="flex row-span-11 gap-4">
        <div className="h-full">
          <Settings userName={userName} />
        </div>
        <div className="grid grid-rows-2 gap-4">
          <Map />
          <Detail />
        </div>
      </main>
    );
  } else {
    return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <h1>Bitte melden Sie sich an um Ihre Projekte zu sehen!</h1>
      </main>
    );
  }
}
