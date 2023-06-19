import React, { useState, useEffect } from "react";
import DogInfo from "./DogInfo";
import Header from "./Header";
import { useNavigate } from "react-router-dom";
import authAxios from "../utils/authAxios";
import {
    Autocomplete,
    Button,
    Box,
    Grid,
    TextField,
    Typography,
    Stack,
  } from "@mui/material";


const DogCard = () => {
    const navigate = useNavigate();
    const [breeds, setBreeds] = useState([]); //dropdown
    const [breedsSelect, setBreedsSelect] = useState([]); //selected within dropdown
    const [dogResults, setDogResults] = useState({ resultIds: [], total: 0 }); //store searched results (as object) to POST to get dogs
    const [currentPage, setCurrentPage] = useState(1); // pagination default
    const [ageSelect, setAgeSelect] = useState({ ageMin: null, ageMax: null });
    const [sortBy, setSortBy] = useState();
  
    let ageList = [];
    for (let i = 0; i <= 20; i++) {
      ageList.push(i.toString());
    }

// respond to the user's breed selection
const handleBreedSelect = (event, value) => {
    setBreedsSelect(value);
  };

const handleSort = (event) => {
    setSortBy(
      sortOptions.filter((option) => option.title === event.target.innerText)[0]
        .sortBy
    );
  };

const sortOptions = [
    { title: "Name A-Z", sortBy: "name:asc" },
    { title: "Name Z-A", sortBy: "name:desc" },
    { title: "Youngest First", sortBy: "age:asc" },
    { title: "Oldest First", sortBy: "age:desc" },
    { title: "Breed A-Z", sortBy: "breed:asc" },
    { title: "Breed Z-A", sortBy: "breed:desc" },
];

// using the page to display all the current animals for it 
  // Get dog breeds (array)
  useEffect(() => {
    authAxios()
      .get(`/dogs/breeds`)
      .then((res) => {
        setBreeds(res.data);
      })
      .catch((err) => console.log({ err }));
  }, []);

// sending the info for the get request 
// Run search
const search = (pageNumber) => {
    let params = {
      breeds: breedsSelect,
      sort: sortBy,
      from: (pageNumber - 1) * 25,
    };
    // if (ageSelect.ageMin !== null) {
    //   params["ageMin"] = ageSelect.ageMin;
    // }
    // if (ageSelect.ageMax !== null) {
    //   params["ageMax"] = ageSelect.ageMax;
    // }

    authAxios()
      .get(`/dogs/search`, { params: params })
      .then((res) => {
        setDogResults(res.data);
      })
      .catch((err) => console.log({ err }));
  };

    // Search on criteria update
    useEffect(() => {
        search(1);
        setCurrentPage(1);
    }, [search, breedsSelect, ageSelect, sortBy]);

// logout functionality 
  const onLogout = async () => {
    try {
      const response = await authAxios().post(`/auth/logout`);
      console.log(response)
    } catch (error) {
      console.log(error.response.data);
    }
  };

  const handleLogout = () => {
    onLogout();
    navigate('/');
  };


  return (
    <>
    <Header>
      <Box>
            <Button
              variant="outlined"
              color="warning"
              onClick={handleLogout}
              sx={{
                px: {
                  xs: "10%",
                  sm: "10%",
                  md: "5%",
                  lg: "3%",
                  xl: "3%",
                },
              }}
            >
              Logout
            </Button>
        </Box>
    </Header>

    <Grid
        container
        maxWidth
        columns={16}
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={2}
        sx={{ my: "1%", mx: 0 }}
      >
        <Grid
        >
        <Autocomplete
            id="tags-breeds"
            multiple
            limitTags={2}
            options={breeds}
            onChange={handleBreedSelect}
            defaultValue={[]} // Updated defaultValue to an empty array
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
        {/* <Grid item xs={8} sm={8} md={8} lg={2} xl={1.5}>
          <Autocomplete
            id="ageMin"
            options={ageList}
            onChange={handleMinAge}
            // autoWidth
            // sx={{ width: '15%' }}
            renderInput={(params) => (
              <TextField
                {...params}
                variant="outlined"
                label="Min Age"
                placeholder="Age"
              />
            )}
          ></Autocomplete>
        </Grid>
        <Grid item xs={8} sm={8} md={8} lg={2} xl={1.5}>
          <Autocomplete
            id="ageMax"
            options={ageList}
            onChange={handleMaxAge}
            renderInput={(params) => (
              <TextField
                {...params}
                variant="outlined"
                label="Max Age"
                placeholder="Age"
              />
            )}
          ></Autocomplete>
        </Grid> */}
        <Grid item xs={16} sm={16} md={16} lg={3} xl={3}>
          <Autocomplete
            id="sortBy"
            disableClearable
            options={sortOptions}
            getOptionLabel={(option) => option.title}
            onChange={handleSort}
            renderInput={(params) => (
              <TextField
                {...params}
                variant="outlined"
                label="Sort By"
                placeholder="Select"
              />
            )}
          ></Autocomplete>
        </Grid>
      </Grid>

    <DogInfo
        dogResults={dogResults}
        setDogResults={setDogResults}
    ></DogInfo>
</>
  )
};

export default DogCard;