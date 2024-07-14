import { Box } from "@mui/material";
import React from "react";
import SideNavDrawer from "../components/SideNavDrawer";

function Sidenav() {
  return (
    <Box sx={{ height: "100vh", background: "green" }}>
      <SideNavDrawer />
    </Box>
  );
}

export default Sidenav;
