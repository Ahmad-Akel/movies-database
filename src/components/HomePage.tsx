import React from "react";

const HomePage = () => {
  return (
    <div
      style={{
        backgroundImage:
          'url("https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?q=80&w=2056&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
        backgroundSize: "cover",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
      }}
    >
      <div style={{ color: "#524709" }}>
        <h1>Welcome to the MovieBrief!</h1>
        <h3>Discover and explore a wide range of movies.</h3>
        <h3>Enjoy your cinematic journey with us!</h3>
      </div>
    </div>
  );
};

export default HomePage;
