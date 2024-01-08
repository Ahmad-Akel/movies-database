import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, TextField, Paper } from "@material-ui/core";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  inputRoot: {
    "& .MuiOutlinedInput-root": {
      height: "40px",
      alignItems: "center",
    },
    "& .MuiOutlinedInput-input": {
      height: "30px", 
      padding: "0 14px", 
    },
    "& .MuiInputLabel-outlined": {
      transform: "translate(14px, 12px) scale(1)", 
    },
    "& .MuiInputLabel-shrink": {
      transform: "translate(14px, -6px) scale(0.75)",
    },
    margin: theme.spacing(1),
    width: "300px",
  },
  button: {
    margin: theme.spacing(1),
    color: "white",
    backgroundColor: "red",
  },
}));

const HomePage = () => {
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event: any) => {
    event.preventDefault();
    const emailRegex = /\S+@\S+\.\S+/;
    if (emailRegex.test(email)) {
      console.log("Register with:", email);
      navigate("/register");
    } else {
      alert("Please enter a valid email address.");
    }
  };

  return (
    <div
      style={{
        backgroundImage:
          'url("https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?q=80&w=2056")',
        backgroundSize: "cover",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
      }}
    >
      <div
        style={{
          color: "#393737",
          textAlign: "center",
          fontFamily: "Arial",
        }}
      >
        <div style={{ fontSize: "45px", fontWeight: "bold" }}>
          Welcome to the MovieBrief!
        </div>
        <br />
        <div style={{ fontSize: "25px" }}>
          Discover and explore a wide range of movies.
        </div>
        <div style={{ fontSize: "25px" }}>
          Enjoy your cinematic journey with us!
        </div>
      </div>
      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <TextField
          id="email-input"
          type="email" 
          placeholder="Email address"
          variant="outlined"
          className={classes.inputRoot}
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <Button type="submit" variant="contained" className={classes.button}>
          Get Started &gt;
        </Button>
      </form>
    </div>
  );
};

export default HomePage;
