import { Avatar, Box, Button, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import UserProfileMenu from "./UserProfileMenu";
import MediaQueryHook from "../hooks/MediaQueryHook";
import { useAuthcontext } from "../context/AuthProvider";

function UserProfileButton() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const { mobile } = MediaQueryHook();
  const { auth } = useAuthcontext();
  console.log(auth, "auth");

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <>
      <Button
        size="small"
        onClick={handleClick}
        variant="outlined"
        endIcon={<ArrowDropDownIcon color="secondary" />}
        // startIcon={<Avatar sx={{ width: 24, height: 24 }} />}
        sx={{
          border: "none",
          "&:focus": {
            border: "none",
          },
          "&:hover": {
            border: "none",
          },
        }}
      >
        <Stack
          gap={1}
          flexDirection="row"
          justifyContent="center"
          alignItems="center"
        >
          <Avatar
            sx={{ width: { xs: 28, md: 35 }, height: { xs: 28, md: 35 } }}
          />
        </Stack>
      </Button>
      <UserProfileMenu
        open={open}
        anchorEl={anchorEl}
        setAnchorEl={setAnchorEl}
      />
    </>
  );
}

export default UserProfileButton;
