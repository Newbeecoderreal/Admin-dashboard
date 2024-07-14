import {
  Avatar,
  Box,
  Card,
  CardActionArea,
  Paper,
  Typography,
} from "@mui/material";
import React from "react";
import Userbalance from "./Userbalance";

function SideNavCardProfile() {
  return (
    <Card sx={{ height: "100%" }} component={Paper}>
      <CardActionArea
        sx={{
          display: "flex",
          height: "100%",
          p: 1,
          justifyContent: "space-around",
        }}
      >
        <Avatar />

        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Typography variant="button">Hailiesmurf88</Typography>
          <Typography variant="button">MASTER AGENT</Typography>
        </Box>
      </CardActionArea>
    </Card>
  );
}

export default SideNavCardProfile;
