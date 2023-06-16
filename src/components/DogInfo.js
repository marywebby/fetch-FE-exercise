import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';


export default function DogCard(props) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={props.dogMatch.img}
          alt={`a cute ${props.dogData.breed}, whos name is ${props.dogData.name}!`}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.dogMatch.name}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            {props.dogMatch.breed}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Hey! My name is {props.dogData.name}, So lovely to meet you! I am {props.dogData.age} years old! 
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
