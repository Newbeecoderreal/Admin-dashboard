import { Box, IconButton, Typography, TextField } from "@mui/material";
import React, { useState } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

function FormAccount({ handleChange, values, touched, errors }) {
  const [visible, isVisible] = useState(false);

  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Typography variant="button" fontWeight={600} color="secondary">
        ACCOUNT
      </Typography>
      <TextField
        fullWidth
        label={
          <Typography variant="button" fontWeight={600}>
            Username
          </Typography>
        }
        name="username"
        variant="standard"
        onChange={handleChange}
        error={Boolean(touched.username) && Boolean(errors.username)}
        helperText={touched.username && errors.username}
      />
      <TextField
        fullWidth
        variant="standard"
        label={
          <Typography variant="button" fontWeight={600}>
            Password
          </Typography>
        }
        name="password"
        type={visible ? "text" : "password"}
        onChange={handleChange}
        InputProps={{
          endAdornment: (
            <IconButton
              position="start"
              onClick={() => isVisible((prev) => !prev)}
            >
              {visible ? <VisibilityIcon /> : <VisibilityOffIcon />}
            </IconButton>
          ),
        }}
        error={Boolean(touched.password) && Boolean(errors.password)}
        helperText={touched.password && errors.password}
      />
    </Box>
  );
}

export default FormAccount;
