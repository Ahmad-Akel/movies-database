import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Button } from "@mui/material";
import { Movie } from "./MoviesList";

interface Props {
  handleFavoriteMovies: (movie: Movie) => void;
}
export default function FavoriteMovies() {
  return (
    <CardActions disableSpacing>
      <IconButton aria-label="add to favorites">
        <FavoriteIcon />
      </IconButton>
      <IconButton aria-label="share">
        <Button>See Details</Button>
      </IconButton>
    </CardActions>
  );
}
