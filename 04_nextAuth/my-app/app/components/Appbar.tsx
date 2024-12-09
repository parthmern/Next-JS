/* eslint-disable react-hooks/rules-of-hooks */
"use client"
// import { useRouter } from "next/navigation";
import { signIn, signOut, useSession } from "next-auth/react";

  

export default function Appbar () {


    //const router = useRouter();
    const session = useSession() ;
    console.log(session);

    return (
        <div>

            <div onClick={() => {
                // router.push("/api/auth/signin")
                signIn();
            }}>login btn</div>

            <div onClick={() => {
                signOut();
            }}>login btn</div>

            <div>
            onclient component
            {JSON.stringify(session)}
            </div>

        </div>
    )
}
