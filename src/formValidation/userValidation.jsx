import React from "react";
import * as yup from "yup";

function userValidation() {
  const loginValidation = yup.object().shape({
    username: yup.string().required("This field cannot be empty"),
    password: yup.string().required("This field cannot be empty"),
  });

  const loginValues = {
    username: "",
    password: "",
  };

  return { loginValidation, loginValues };
}

export default userValidation;
