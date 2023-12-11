import React from "react";
import {
  Tab,
  Box,
  Typography,
  MenuItem,
  Tooltip,
  Menu,
  Divider,
  ListItemIcon,
} from "@mui/material";
import { TabList, TabPanel, TabContext } from "@mui/lab";
import { Link } from "react-router-dom";
import MovieLogo from "../assets/movie-logo.png";
import { Avatar, IconButton } from "@mui/material";
import { Logout, PersonAdd, Settings } from "@mui/icons-material";

function Navbar() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <TabContext value="">
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
              alt="Movie Logo"
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
              to="/"
              style={{ color: "white", marginLeft: "20px", fontSize: "16px" }}
            />
            <Tab
              label="Movies"
              value="1"
              component={Link}
              to="/movies"
              style={{ color: "white", marginLeft: "20px", fontSize: "16px" }}
            />
            <Tab
              label="Favorites"
              sx={{
                "&:hover": {
                  color: "yellow",
                },
              }}
              value="2"
              component={Link}
              to="/favorites"
              style={{ color: "white", marginLeft: "40px", fontSize: "16px" }}
            />
            <Tab
              label="About"
              value="3"
              component={Link}
              to="/about"
              style={{ color: "white", marginLeft: "40px", fontSize: "16px" }}
            />
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
          <MenuItem onClick={handleClose}>
            <Avatar /> My account
          </MenuItem>
          <Divider />
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <PersonAdd fontSize="small" />
            </ListItemIcon>
            Add another account
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <Settings fontSize="small" />
            </ListItemIcon>
            Settings
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <Logout fontSize="small" />
            </ListItemIcon>
            Logout
          </MenuItem>
        </Menu>
      </TabContext>
    </>
  );
}

export default Navbar;
