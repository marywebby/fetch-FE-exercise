import React, { useEffect, useState } from 'react';
import DogCard from './DogCard';
import authAxios from "../utils/authAxios";
import { Button } from 'semantic-ui-react';
import { useNavigate } from 'react-router-dom';

export default function Search() {

  const [breeds, setBreeds] = useState([]); //dropdown

  const dogBreeds = async () => {
    try {
      const response = await authAxios().get(`/dogs/breeds`);
      console.log(response)
      // response.push(setBreeds)
      // console.log(setBreeds)
    } catch (error) {
      console.log(error.response.data);
    }
  };

  const dogData = async () => {
    try {
      const response = await authAxios().post(`/dogs`);
      console.log(response)
    } catch (error) {
      console.log(error.response.data);
    }
  };

  const dogSearch = async () => {
    try {
      const response = await authAxios().post(`/locations/search`);
      console.log(response)
    } catch (error) {
      console.log(error.response.data);
    }
  };

  const onLogout = async () => {
    try {
      const response = await authAxios().post(`/auth/logout`);
      console.log(response)
    } catch (error) {
      console.log(error.response.data);
    }
  };

  const navigate = useNavigate()

  const handleLogout = () => {
    onLogout();
    navigate('/');
  };

  return (
    <div>
      <Button
        className='logout-btn'
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
      <Button
        className='logout-btn'
        onClick={dogBreeds}
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
        Dog Breeds
      </Button>
      <Button
        className='logout-btn'
        onClick={dogData}
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
        All of Dog Data
      </Button>
      <Button
        className='logout-btn'
        onClick={dogSearch}
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
        Dog Search
      </Button>
      <DogCard/>
    </div>
  );

}
