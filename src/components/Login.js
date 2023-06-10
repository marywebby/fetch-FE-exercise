import React, { useState } from "react";
// import axios from 'axios';
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  const handleLogin = async () => {
    try {
      const response = await fetch("https://frontend-take-home-service.fetch.com/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          name,
        }),
      });

      // Handle the response here
      // You can access the response data using response.json(), response.text(), etc.
      console.log(response);
    } catch (error) {
      // Handle errors here
      console.error(error);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;

// export default async function dogData(req) {
//   const response = await fetch("https://frontend-take-home-service.fetch.com/dogs/breeds", {
//     method: "GET",
//     headers: {
//       Accept: "application/json",
//       // Cookie: `fetch-access-token=${
// 			// 	req.cookies.get("fetch-access-token")?.value
// 			// }`,
//       setCredientials: "include"
//      }
//     }
//   );

//   return response;
// }


