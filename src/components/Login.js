import React, { useState } from 'react';
import { Button, Form } from 'semantic-ui-react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  const navigate = useNavigate();

  const postData = async () => {
    try {
      const response = await axios.post(
        "https://frontend-take-home-service.fetch.com/auth/login",
        {
          email: email,
          name: name,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
          // body: JSON.stringify({
          //   email: "mary@email.com",
          //   name: "mary",
          // }),
        }
      );
      console.log(response);
      if (response.status === 200) {
        navigate("/search");
      }
    } catch (error) {
      // Handle errors here
      console.error(error);
    }
  };

  return (
    <div>
      <Form className="login-form">
        <Form.Field>
          <label className='Name'>Name</label>
          <input placeholder='Name' onChange={(e) => setName(e.target.value)}/>
        </Form.Field>
        <Form.Field>
          <label className='Name'>Email</label>
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


