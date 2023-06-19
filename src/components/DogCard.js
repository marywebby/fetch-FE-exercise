import React from "react";
import DogInfo from "./DogInfo";
import { useState, useEffect } from "react";
import authAxios from "../utils/authAxios";
import {
    Autocomplete,
    // Button,
    // Box,
    Grid,
    TextField,
    // Typography,
    // Stack,
  } from "@mui/material";

const DogCard = () => {

const [breeds, setBreeds] = useState([]); 
const [dogResults, setDogResults] = useState({ resultIds: [], total: 0 });
const [breedsSelect, setBreedsSelect] = useState([]); //selected within dropdown

// respond to the user's breed selection
const handleBreedSelect = (event, value) => {
    setBreedsSelect(value);
  };

// using the page to display all the current animals for it 
// will later include [ageSelect, sortBy]
// useEffect(() => {
//     search(1);
//     setCurrentPage(1);
//   }, [breedsSelect]);


// getting dog breeds from api and setting them to an array
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


  return (
    <div>
    <Grid item xs={16} sm={16} md={16} lg={8} xl={8}>
          <Autocomplete
            id="tags-breeds"
            multiple
            limitTags={2}
            options={breeds}
            onChange={handleBreedSelect}
            defaultValue={breeds[87]}
            renderInput={(params) => (
              <TextField
                {...params}
                variant="outlined"
                label="By Breed"
                placeholder="Type here..."
              />
            )}
          ></Autocomplete>
        </Grid>
        
        <div>
        <DogInfo
            dogResults={dogResults}
            setDogResults={setDogResults}
        ></DogInfo>
        </div>
    </div>
  )
};

export default DogCard;