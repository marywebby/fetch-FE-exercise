import React, { useEffect, useState } from 'react';
import authAxios from "../utils/authAxios";
import { Button } from 'semantic-ui-react';
import { useNavigate } from 'react-router-dom';

export default function Card() {

  const dogData = async () => {
    try {
      const response = await authAxios().get(`/dogs/breeds`);
      console.log(response)
    } catch (error) {
      console.log(error.response.data);
    }
  };

  const dogSearch = async () => {
    try {
      const response = await authAxios().get(`/dogs/search`);
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
        Dog Data
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
    </div>
  );

}
