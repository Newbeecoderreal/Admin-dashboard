import { Box, TextField, Typography } from "@mui/material";
import React from "react";

function FormCommission({ handleChange, values, touched, errors }) {
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Typography variant="button" fontWeight={600} color="secondary">
        Commission
      </Typography>
      <TextField
        fullWidth
        label={
          <Typography variant="button" fontWeight={600}>
            Salisi
          </Typography>
        }
        name="salisi"
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
            Lucky9
          </Typography>
        }
        name="lucky9"
        type="text"
        onChange={handleChange}
        error={Boolean(touched.password) && Boolean(errors.password)}
        helperText={touched.password && errors.password}
      />
    </Box>
  );
}

export default FormCommission;
