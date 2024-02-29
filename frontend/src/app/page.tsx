import { cookies } from "next/headers";
import Image from "next/image";

export default function Home() {
  const cookiesList = cookies()
  const hasAuthorisation = cookiesList.has('authorisation')


  if (hasAuthorisation == true) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <h1>Main Page</h1>
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
