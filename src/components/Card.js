import React from "react"

export default async function dogData(req) {
  const response = await fetch("https://frontend-take-home-service.fetch.com/dogs/breeds", {
    method: "GET",
    headers: {
      Accept: "application/json",
      Cookie: `fetch-access-token=${
				req.cookies.get("fetch-access-token")?.value
			}`,
      setCredientials: "include"
     }
    }
  );

  return response;
}