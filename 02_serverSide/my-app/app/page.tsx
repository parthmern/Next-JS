import axios from "axios";

async function getUserDetails() {
  const response = await axios.get("http://localhost:3001/api/user")
	return response.data;
}

// nextjs now supports async components
// fuck async components (new architechure)

export default async function Home() {

  //await new Promise((r)=> setTimeout(r, 5000));   // artificial delay
  
  const userData = await getUserDetails();    // during this time when req goes the user see only loading screen on client side
                                              // so to solve this we need to add "loading component"

  return (
    <div>
      {userData.email}
      {userData.name}
    </div>
  );
}
