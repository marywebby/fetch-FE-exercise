import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';


export default function Dog(props) {
 const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 450,
    bgcolor: "#fff",
    boxShadow: 25,
    };

  return (
    <Card sx={style}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          img={props.dogMatch.img}
          alt={`a cute ${props.dogMatch.breed}, whos name is ${props.dogMatch.name}!`}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.dogMatch.name}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            {props.dogMatch.breed}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Hey! My name is {props.dogMatch.name}, So lovely to meet you! I am {props.dogMatch.age} years old! 
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}