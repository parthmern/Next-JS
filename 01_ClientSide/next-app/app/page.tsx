import { Signin } from "./components/Signin";

export default function Home() {

  console.log("HOME this is server side renderd");

  return (
    <>
        <div>
      Hi there app/page.tsx static server side
    </div>
    
    <Signin /> </>

  );
}
