import React, {useEffect, useState} from 'react';
import Dog from './Dog';
import authAxios from '../utils/authAxios';
import {
  Box,
  Button,
  Container,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Checkbox,
  Grid,
  Typography,
} from "@mui/material";;

export default function DogInfo(props) {

  const [dogs, setDogs] = useState([]);
  const [dogSelect, setDogSelect] = useState([]);
  const [dogMatch, setDogMatch] = useState({
    id: "",
    img: "",
    name: "",
    age: 0,
    zip_code: 0,
    breed: "",
    city: "",
    state: "",
  });

  // handling open
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

   // use search results to fetch queried dogs
   useEffect(() => {
    authAxios()
      .post(`/dogs`, props.dogResults.resultIds)
      .then((dogs) => setDogs(dogs))
      .catch((err) => console.log({ err }));
  }, [props.dogResults]);


// handles the change of or the dog selected 
  const handleChange = (e) => {
    if (e.target.checked) {
      setDogSelect([...dogSelect, e.target.id]);
    } else {
      setDogSelect(dogSelect.filter((id) => id !== e.target.id));
    }
  };

  return (
    <Box>
    <Dog dogMatch={dogMatch} open={open} handleClose={handleClose} />
    <Grid
            container
            columns={15}
            spacing={3}
            direction="row"
            justifyContent="space-around"
            alignItems="stretch"
            sx={{ mb: "5%" }}
          >
            {dogs.map((dog) => (
              <Grid item xs={7.5} sm={7.5} md={5} lg={3} xl={3}>
                <Card>
                  <CardMedia
                    component="img"
                    alt={dog.breed}
                    height="200"
                    image={dog.img}
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      align="left"
                    >
                      {dog.name}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      align="left"
                    >
                      My name is <b>{dog.name}</b>! I'm a(n) <b>{dog.age}</b>{" "}
                      year old <b>{dog.breed}</b>. I live in{" "}
                      {/* <b>
                        {dog.city} {dog.state}
                      </b> */}
                      !
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Checkbox
                      id={dog.id}
                      onChange={handleChange}
                      checked={dogSelect.indexOf(dog.id) > -1}
                      // icon={<FavoriteBorder />}
                      // checkedIcon={<Favorite />}
                      color="warning"
                    />
                    <Typography variant="body2" color="text.secondary">
                      Favorite
                    </Typography>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

  );
}
