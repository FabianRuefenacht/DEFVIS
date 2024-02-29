'use server'
 
import { cookies } from 'next/headers'
 
async function createCookie(cName: string, cValue: string, expiringIn: number) {
  cookies().set({
    name: cName,
    value: cValue,
    httpOnly: true,
    path: '/',
    expires: Date.now() + expiringIn
  })
}

export default createCookie;