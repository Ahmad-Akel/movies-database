import React, { ChangeEvent } from "react";
import {
  Tab,
  Box,
  Typography,
  MenuItem,
  Tooltip,
  Menu,
  Divider,
  ListItemIcon,
  FormControl,
  SelectChangeEvent,
} from "@mui/material";
import { TabList, TabPanel, TabContext } from "@mui/lab";
import { Link } from "react-router-dom";
import MovieLogo from "../assets/movie-logo.png";
import { Avatar, IconButton } from "@mui/material";
import { Logout, PersonAdd, Settings, Login } from "@mui/icons-material";
import { InputLabel, Select } from "@material-ui/core";

function Navbar() {
  const [language, setLanguage] = React.useState("");

  const handleChange = (
    event: ChangeEvent<{ name?: string | undefined; value: unknown }>
  ) => {
    setLanguage(event.target.value as string);
  };

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [selectedTab, setSelectedTab] = React.useState("1");
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <TabContext value={selectedTab}>
        <Box
          sx={{
            borderBottom: 1,
            borderColor: "divider",
            display: "flex",
            alignItems: "center",
            backgroundColor: "#333333",
            color: "#ffffff",
          }}
        >
          <Link to="/">
            <img
              src={MovieLogo}
              alt="MovieBrief Logo"
              style={{ width: "100px", marginRight: "10px" }}
            />{" "}
          </Link>

          <Typography variant="h4" component="div" color={"Yellow"}>
            MovieBrief
          </Typography>

          <TabList aria-label="lab API tabs example">
            <Tab
              label="Home"
              value="1"
              component={Link}
              onClick={() => setSelectedTab("1")}
              to="/"
              sx={{
                color: "white",
                marginLeft: "20px",
                fontSize: "16px",
                "&:hover": {
                  color: "yellow",
                },
              }}
            />
            <Tab
              label="Movies"
              value="2"
              onClick={() => setSelectedTab("2")}
              component={Link}
              to="/movies"
              sx={{
                color: "white",
                marginLeft: "20px",
                fontSize: "16px",
                "&:hover": {
                  color: "yellow",
                },
              }}
            />
            <Tab
              label="Favorites"
              sx={{
                color: "white",
                marginLeft: "40px",
                fontSize: "16px",
                "&:hover": {
                  color: "yellow",
                },
              }}
              value="3"
              component={Link}
              onClick={() => setSelectedTab("3")}
              to="/favorites"
            />
            <Tab
              label="About"
              value="4"
              component={Link}
              onClick={() => setSelectedTab("4")}
              to="/about"
              sx={{
                color: "white",
                marginLeft: "40px",
                fontSize: "16px",
                "&:hover": {
                  color: "yellow",
                },
              }}
            />
            <FormControl style={{ marginLeft: "250px", marginTop: "5px" }}>
              <InputLabel id="demo-simple-select-label"></InputLabel>
              <Select
                style={{ color: "white" }}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={language}
                label="Language"
                onChange={handleChange}
              >
                <MenuItem value={"English"}>English</MenuItem>
                <MenuItem value={"Czech"}>Czech</MenuItem>
              </Select>
            </FormControl>
          </TabList>
          <Tooltip title="Account settings">
            <IconButton
              onClick={handleClick}
              size="small"
              sx={{ ml: 4, position: "absolute", right: "50px" }}
              aria-controls={open ? "account-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
            >
              <Avatar sx={{ width: 32, height: 32 }}>M</Avatar>
            </IconButton>
          </Tooltip>
        </Box>
        <Menu
          anchorEl={anchorEl}
          id="account-menu"
          open={open}
          onClose={handleClose}
          onClick={handleClose}
          PaperProps={{
            elevation: 0,
            sx: {
              overflow: "visible",
              filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
              mt: 1.5,
              "& .MuiAvatar-root": {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              "&:before": {
                content: '""',
                display: "block",
                position: "absolute",
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: "background.paper",
                transform: "translateY(-50%) rotate(45deg)",
                zIndex: 0,
              },
            },
          }}
          transformOrigin={{ horizontal: "right", vertical: "top" }}
          anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        >
          <MenuItem onClick={handleClose}>
            <Avatar /> Profile
          </MenuItem>
          <Divider />
          <MenuItem onClick={handleClose} component={Link} to="/login">
            <ListItemIcon>
              <Login fontSize="small" />
            </ListItemIcon>
            Login
          </MenuItem>
          <MenuItem onClick={handleClose} component={Link} to="/register">
            <ListItemIcon>
              <Login fontSize="small" />
            </ListItemIcon>
            Register
          </MenuItem>
        </Menu>
      </TabContext>
    </>
  );
}

export default Navbar;
