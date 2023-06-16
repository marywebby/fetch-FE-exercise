// const [dogMatch, setDogMatch] = useState({
//     id: "",
//     img: "",
//     name: "",
//     age: 0,
//     zip_code: 0,
//     breed: "",
//     city: "",
//     state: "",
//   });

import React from "react";
import DogInfo from "./DogInfo";
import * as React from 'react';


const DogCard = () => {

const [breeds, setBreeds] = useState([]); //dropdown
const [dogResults, setDogResults] = useState({ resultIds: [], total: 0 });

// getting dog breeds from api 
useEffect(() => {
    const dogBreeds = async () => {
      try {
        const response = await authAxios().get(`/dogs/breeds`);
        setBreeds(response.data);
      } catch (error) {
        console.log(error.response.data);
      }
    };
    dogBreeds();
  }, []);


// need to handle imput from users to then turn around and use that in a get request to the api /dogs/search
// 



};

export default DogCard;