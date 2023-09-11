import React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Button } from "@mui/material";

const moviesData = [
  {
    id: 1,
    title: "First Movie",
    subheader: "September 14, 2016",
    image: "public/images/angry_birds.jpg",
    description:
      "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.",
  },
  {
    id: 2,
    title: "Second Movie",
    subheader: "September 14, 2016",
    image: "public/images/angry_birds.jpg",
    description:
      "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.",
  },
];

export default function MoviesList() {
  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {moviesData.map((movie) => (
        <Card key={movie.id} sx={{ maxWidth: 345, margin: "16px" }}>
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                R
              </Avatar>
            }
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            title={movie.title}
            subheader={movie.subheader}
          />
          <CardMedia
            component="img"
            height="194"
            image={movie.image}
            alt={movie.title}
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              {movie.description}
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="share">
              <Button>See Details</Button>
            </IconButton>
          </CardActions>
        </Card>
      ))}
    </div>
  );
}
