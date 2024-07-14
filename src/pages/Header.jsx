import { Box, IconButton, Paper, Toolbar, Typography } from "@mui/material";
import React from "react";
import Notification from "../components/Notification";
import UserProfileButton from "../components/UserProfileButton";
import MenuIcon from "@mui/icons-material/Menu";

function Header({ handleDrawerToggle }) {
  return (
    <Toolbar sx={{ justifyContent: "space-between", p: 1 }}>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ display: { sm: "none" } }}
        >
          <MenuIcon sx={{ fontSize: 22 }} />
        </IconButton>
      </Box>

      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <Notification />
        <UserProfileButton />
      </Box>
    </Toolbar>
  );
}

export default Header;
