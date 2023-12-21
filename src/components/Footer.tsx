import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import IconButton from "@material-ui/core/IconButton";
import Link from "@material-ui/core/Link";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

const useStyles = makeStyles((theme) => ({
  footer: {
    position: "static",
    bottom: 7.2,
    width: "98.5%",
    padding: theme.spacing(3, 1),
    marginTop: "50px",
    backgroundColor: "#333333",
  },
  flexContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  iconColumn: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    marginRight: theme.spacing(2), // Adjust spacing as needed
  },
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Container maxWidth="sm">
        <div className={classes.flexContainer}>
          <div className={classes.iconColumn}>
            <Link href="https://www.facebook.com/" target="_blank">
              <IconButton>
                <FacebookIcon style={{ color: "white" }} />
              </IconButton>
            </Link>
            <Link href="https://www.twitter.com/" target="_blank">
              <IconButton>
                <TwitterIcon style={{ color: "white" }} />
              </IconButton>
            </Link>
            <Link href="https://www.instagram.com/" target="_blank">
              <IconButton>
                <InstagramIcon style={{ color: "white" }} />
              </IconButton>
            </Link>
          </div>
          <Typography variant="body1" color="textSecondary">
            MovieBrief - © {new Date().getFullYear()}
          </Typography>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
