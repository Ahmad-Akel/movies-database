import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Movie } from "./MoviesList";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import { CardActionArea } from "@mui/material";
import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";

import ListItemText from "@mui/material/ListItemText";
const MovieDetails = () => {
  const { imdbID } = useParams();

  const [movieDetails, setMovieDetails] = useState<Movie | null>(null);
  const fetchMovieDetails = async () => {
    try {
      const url = `http://www.omdbapi.com/?i=${imdbID}&apikey=e18d063c`;
      const response = await fetch(url);
      const data = await response.json();
      setMovieDetails(data);
    } catch (error) {
      console.error("Error fetching movie details:", error);
    }
  };

  useEffect(() => {
    fetchMovieDetails();
  }, [imdbID]);

  return (
    <>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={6}>
          {" "}
          {movieDetails ? (
            <Card
              sx={{
                width: "700px",
                marginTop: "50px",
                marginLeft: "150px",
                height: "95%",
              }}
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  sx={{
                    height: "500px",
                    width: "100%",
                  }}
                  image={movieDetails.Poster}
                  alt="green iguana"
                />
                <CardContent
                  sx={{
                    height: "200px",
                    width: "100%",
                  }}
                >
                  <Typography gutterBottom variant="h5" component="div">
                    {movieDetails.Title}
                  </Typography>
                  <Chip
                    label={movieDetails.Type}
                    size="small"
                    style={{ marginRight: "5px" }}
                  />
                  <Chip
                    label={movieDetails.imdbRating}
                    size="small"
                    style={{ marginRight: "5px" }}
                  />
                  <Chip label={movieDetails.Year} size="small" />
                  <Typography
                    sx={{ marginTop: "20px" }}
                    variant="body1"
                    color="text.secondary"
                  >
                    {movieDetails.Plot}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          ) : (
            <p>Loading...</p>
          )}
        </Grid>
        <Grid item xs={6}>
          <>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                {movieDetails ? (
                  <Card
                    sx={{
                      width: "400px",
                      marginTop: "50px",
                    }}
                  >
                    <CardActionArea>
                      <CardContent
                        sx={{
                          height: "200px",
                          width: "50%",
                        }}
                      >
                        <Typography gutterBottom variant="h5" component="div">
                          Actors
                        </Typography>
                        <List>
                          {movieDetails.Actors &&
                            movieDetails.Actors.split(", ").map(
                              (actor, index) => (
                                <ListItem key={index}>
                                  <ListItemText primary={actor} />
                                </ListItem>
                              )
                            )}
                        </List>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                ) : (
                  <p>Loading...</p>
                )}
              </Grid>
              <Grid item xs={12} sm={6}>
                {movieDetails ? (
                  <Card
                    sx={{
                      width: "400px",
                      marginTop: "50px",
                    }}
                  >
                    <CardActionArea>
                      <CardContent
                        sx={{
                          height: "100px",
                          width: "50%",
                        }}
                      >
                        <Typography gutterBottom variant="h5" component="div">
                          Director
                        </Typography>
                        <List>
                          <ListItem>
                            <ListItemText primary={movieDetails.Director} />
                          </ListItem>
                        </List>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                ) : (
                  <p>Loading...</p>
                )}
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                {movieDetails ? (
                  <Card
                    sx={{
                      width: "400px",
                      marginTop: "50px",
                    }}
                  >
                    <CardActionArea>
                      <CardContent
                        sx={{
                          height: "100px",
                          width: "50%",
                        }}
                      >
                        <Typography gutterBottom variant="h5" component="div">
                          Writer
                        </Typography>
                        <List>
                          <ListItem>
                            <ListItemText primary={movieDetails.Writer} />
                          </ListItem>
                        </List>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                ) : (
                  <p>Loading...</p>
                )}
              </Grid>
              <Grid item xs={12} sm={6}>
                {movieDetails ? (
                  <Card
                    sx={{
                      width: "400px",
                      marginTop: "50px",
                    }}
                  >
                    <CardActionArea>
                      <CardContent
                        sx={{
                          height: "25%",
                          width: "50%",
                        }}
                      >
                        <Typography gutterBottom variant="h5" component="div">
                          Awards
                        </Typography>
                        <List>
                          <ListItem>
                            <ListItemText primary={movieDetails.Awards} />
                          </ListItem>
                        </List>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                ) : (
                  <p>Loading...</p>
                )}
              </Grid>
            </Grid>
          </>
        </Grid>
      </Grid>
    </>
  );
};

export default MovieDetails;
