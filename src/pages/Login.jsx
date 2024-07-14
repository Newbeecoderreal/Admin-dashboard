import {
  Button,
  Container,
  IconButton,
  TextField,
  Typography,
  Box,
} from "@mui/material";
import React, { useState } from "react";
import Loginhook from "../hooks/Loginhook";
import InputAdornment from "@mui/material/InputAdornment";
import PersonIcon from "@mui/icons-material/Person";
import KeyIcon from "@mui/icons-material/Key";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { Formik } from "formik";
import userValidation from "../formValidation/userValidation";

function Login() {
  const [visible, isVisible] = useState(false);
  const { handleLogin } = Loginhook();
  const { loginValidation, loginValues } = userValidation();

  const handleFormSubmit = async (values) => {
    await handleLogin(values);
    console.log(values);
  };

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography variant="h2">Dobladabet</Typography>
      <Formik
        onSubmit={handleFormSubmit}
        initialValues={loginValues}
        validationSchema={loginValidation}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
          isSubmitting,
        }) => (
          <form onSubmit={handleSubmit}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 1,
              }}
            >
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
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <PersonIcon />
                    </InputAdornment>
                  ),
                }}
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
                  startAdornment: (
                    <InputAdornment position="start">
                      <KeyIcon />
                    </InputAdornment>
                  ),
                  endAdornment: (
                    <IconButton
                      position="end"
                      onClick={() => isVisible((prev) => !prev)}
                    >
                      {visible ? <VisibilityIcon /> : <VisibilityOffIcon />}
                    </IconButton>
                  ),
                }}
                error={Boolean(touched.password) && Boolean(errors.password)}
                helperText={touched.password && errors.password}
              />
              <Button type="submit" variant="contained" fullWidth>
                Log In
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Container>
  );
}

export default Login;
