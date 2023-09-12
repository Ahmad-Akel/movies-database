import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import DeleteIcon from "@mui/icons-material/Delete";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Button, Typography } from "@mui/material";
import { Box } from "@material-ui/core";

export interface Movie {
  Title?: string;
  Year?: string;
  imdbID?: string;
  Type?: string;
  Poster?: string;
}
export interface MoviesProps {
  movies: Movie[];
  handleFavoriteMovies: (movie: Movie) => void;
  isFavoriteList: boolean;
}

export default function MoviesList({
  movies,
  handleFavoriteMovies,
  isFavoriteList,
}: MoviesProps) {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "16px",
        }}
      ></div>

      <Box
        style={{
          display: "flex",
          flexWrap: "wrap",
          backgroundColor: "#1c1c1c",
        }}
      >
        {movies.map((movie) => (
          <Card key={movie.imdbID} sx={{ maxWidth: 345, margin: "16px" }}>
            <CardHeader
              style={{ backgroundColor: "black" }}
              avatar={
                <Avatar sx={{ bgcolor: "#803131" }} aria-label="recipe">
                  R
                </Avatar>
              }
              action={
                <IconButton aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
              }
              title={movie.Title}
              subheader={movie.Type}
            />
            <CardMedia
              component="img"
              height="194"
              image={movie.Poster}
              alt={movie.Title}
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                {movie.Year}
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton
                aria-label="add to favorites"
                onClick={() => handleFavoriteMovies(movie)}
              >
                {isFavoriteList ? <DeleteIcon /> : <FavoriteIcon />}
              </IconButton>
              <IconButton aria-label="share">
                <Button>See Details</Button>
              </IconButton>
            </CardActions>
          </Card>
        ))}
      </Box>
    </>
  );
}
