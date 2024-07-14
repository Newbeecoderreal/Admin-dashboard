import * as yup from "yup";

function AgentValidation() {
  const usersAccountValidation = yup.object().shape({
    username: yup.string().required("This field cannot be empty"),
    password: yup.string().required("This field cannot be empty"),
    salisi: yup.string().required("This field cannot be empty"),
    lucky9: yup.string().required("This field cannot be empty"),
    permission: yup
      .array()
      .of(
        yup.object().shape({
          id: yup.number(),
          type: yup.string(),
          status: yup.boolean(),
          create: yup.boolean().notRequired(),
          view: yup.boolean().notRequired(),
          update: yup.boolean().notRequired(),
          field_type: yup.string().notRequired(),
          bet_max: yup.number(),
          bet_min: yup.number(),
        })
      )
      .required(),
  });

  const usersAccountValues = {
    username: "",
    password: "",
    salisi: "",
    lucky9: "",
    permission: [
      {
        id: 1,
        type: "AGENT ACCOUNT",
        status: true,
        create: true,
        update: true,
        field_type: "checkbox",
      },
      {
        id: 2,
        type: "PLAYER ACCOUNT",
        status: true,
        create: true,
        update: true,
        field_type: "checkbox",
      },
      {
        id: 6,
        type: "SUB ACCOUNT",
        status: true,
        create: true,
        update: true,
        field_type: "checkbox",
      },
      { id: 3, type: "DEPOSIT", status: true, field_type: "checkbox" },
      { id: 4, type: "WITHDRAW", status: true, field_type: "checkbox" },
      // {
      //   id: 5,
      //   type: "BET LIMIT",
      //   bet_max: 5000,
      //   bet_min: 50,
      //   field_type: "textfield",
      // },
    ],
  };

  return { usersAccountValidation, usersAccountValues };
}

export default AgentValidation;
