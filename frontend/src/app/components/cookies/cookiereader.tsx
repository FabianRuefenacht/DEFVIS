import { cookies } from "next/headers";

async function readCookies(){
    const cookiesList = cookies();
    const hasAuthorisation = cookiesList.has("authorisation");
    return hasAuthorisation
}


export default readCookies;
