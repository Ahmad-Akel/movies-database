import React from "react";
import { Tab, Box } from "@mui/material";
import { TabList, TabPanel, TabContext } from "@mui/lab";

import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <TabContext value="">
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList aria-label="lab API tabs example">
            <Tab label="Movies" value="1" component={Link} to="/" />
            <Tab label="Favorites" value="2" component={Link} to="/favorites" />
          </TabList>
        </Box>
      </TabContext>
    </>
  );
}

export default Navbar;
