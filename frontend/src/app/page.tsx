import { cookies } from "next/headers";
import Image from "next/image";
import Settings from "./components/Settings";
import Map from "./components/OlMap";
import Detail from "./components/Detail";

export default function Home() {
  const cookiesList = cookies();
  const hasAuthorisation = cookiesList.has("authorisation");
  const user = cookiesList.has("user")

  if (user == true) {

    const userName:any = cookiesList.get("user")?.value

    return (
      <main className="flex row-span-11">
        <div className="h-full">
          <Settings userName={userName} />
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
