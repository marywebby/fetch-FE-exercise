import React, { useState } from 'react';
import { Button, Form } from 'semantic-ui-react'

const Login = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  const postData = async () => {
    try {
      const response = await fetch("https://frontend-take-home-service.fetch.com/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: 'include',
        body: JSON.stringify({
          email: "mary@email.com",
          name: "mary",
        }),
      });
      console.log(response);
    } catch (error) {
      // Handle errors here
      console.error(error);
    }
  };

  return (
    <div>
    <Form className="login-form">
        <Form.Field>
            <label>Name</label>
            <input placeholder='Name' onChange={(e) => setName(e.target.value)}/>
        </Form.Field>
        <Form.Field>
            <label>Email</label>
            <input placeholder='Email' onChange={(e) => setEmail(e.target.value)}/>
        </Form.Field>
        <Button onClick={postData} type='submit'>Submit</Button>
    </Form>
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


