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
import ListHeader from "./ListHeader";
import SearchBox from "./SearchBox";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
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
  searchValue: string;
  setSearchValue: (val: string) => void;
}

export default function MoviesList({
  movies,
  handleFavoriteMovies,
  isFavoriteList,
  searchValue,
  setSearchValue,
}: MoviesProps) {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          {<ListHeader mainTitle={isFavoriteList ? "Favorites" : "Movies"} />}
        </Grid>
        <Grid item xs={4} style={{ marginTop: "25px" }}>
          {
            <SearchBox
              searchValue={searchValue}
              setSearchValue={setSearchValue}
            />
          }
        </Grid>
      </Grid>

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
