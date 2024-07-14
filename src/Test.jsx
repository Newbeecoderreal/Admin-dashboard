import React, { useEffect } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { DataGrid } from "@mui/x-data-grid";
import { TextField, Checkbox, Button, Box } from "@mui/material";

const usersAccountValues = {
  username: "",
  password: "",
  salisi: "",
  lucky9: "",
  permission: [
    {
      id: 1,
      type: "ACCOUNT",
      status: true,
      create: true,
      update: true,
      view: true,
      field_type: "checkbox",
    },
    { id: 2, type: "DEPOSIT", status: true, field_type: "checkbox" },
    { id: 3, type: "WITHDRAW", status: true, field_type: "checkbox" },
    {
      id: 4,
      type: "BET LIMIT",
      bet_max: 5000,
      bet_min: 50,
      field_type: "textfield",
    },
  ],
};

const validationSchema = Yup.object().shape({
  username: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Required"),
  salisi: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  lucky9: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  permission: Yup.array().of(
    Yup.object().shape({
      id: Yup.number(),
      type: Yup.string(),
      status: Yup.boolean().notRequired(),
      create: Yup.boolean().notRequired(),
      view: Yup.boolean().notRequired(),
      update: Yup.boolean().notRequired(),
      bet_max: Yup.number().notRequired(),
      bet_min: Yup.number().notRequired(),
      field_type: Yup.string().required("Required"),
    })
  ),
});

const MyForm = () => {
  return (
    <div>
      <h1>My Form</h1>
      <Formik
        initialValues={usersAccountValues}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log(values);
          // Handle submit logic here
        }}
      >
        {({ values, setValues, errors, touched, handleChange }) => {
          useEffect(() => {
            // Simulate an API call to fetch new initial values
            const fetchNewValues = async () => {
              const newValues = {
                username: "john_doe",
                password: "newpassword",
                salisi: "new_salisi",
                lucky9: "new_lucky9",
                permission: [
                  {
                    id: 1,
                    type: "ACCOUNT",
                    status: true,
                    create: false,
                    view: true,
                    update: false,
                    field_type: "checkbox",
                  },
                  {
                    id: 2,
                    type: "DEPOSIT",
                    status: false,
                    field_type: "checkbox",
                  },
                  {
                    id: 3,
                    type: "WITHDRAW",
                    status: true,
                    field_type: "checkbox",
                  },
                  {
                    id: 4,
                    type: "BET LIMIT",
                    bet_max: 10000,
                    bet_min: 100,
                    field_type: "textfield",
                  },
                ],
              };
              setValues(newValues);
            };

            fetchNewValues();
          }, [setValues]);

          const handlePermissionChange = (params) => {
            const { id, field, value } = params;
            const updatedPermissions = values.permission.map((perm) =>
              perm.id === id ? { ...perm, [field]: value } : perm
            );
            setValues({ ...values, permission: updatedPermissions });
          };

          const columns = [
            { field: "type", headerName: "Type", width: 150, editable: false },
            {
              field: "status",
              headerName: "Status",
              width: 150,
              renderCell: (params) =>
                params.row.field_type === "checkbox" && (
                  <Checkbox
                    checked={params.value}
                    onChange={(event) =>
                      handlePermissionChange({
                        id: params.id,
                        field: "status",
                        value: event.target.checked,
                      })
                    }
                  />
                ),
            },
            {
              field: "create",
              headerName: "Create",
              width: 150,
              renderCell: (params) =>
                params.row.type === "ACCOUNT" && (
                  <Checkbox
                    checked={params.value}
                    onChange={(event) =>
                      handlePermissionChange({
                        id: params.id,
                        field: "create",
                        value: event.target.checked,
                      })
                    }
                  />
                ),
            },
            {
              field: "view",
              headerName: "View",
              width: 150,
              renderCell: (params) =>
                params.row.type === "ACCOUNT" && (
                  <Checkbox
                    checked={params.value}
                    onChange={(event) =>
                      handlePermissionChange({
                        id: params.id,
                        field: "view",
                        value: event.target.checked,
                      })
                    }
                  />
                ),
            },
            {
              field: "update",
              headerName: "Update",
              width: 150,
              renderCell: (params) =>
                params.row.type === "ACCOUNT" && (
                  <Checkbox
                    checked={params.value}
                    onChange={(event) =>
                      handlePermissionChange({
                        id: params.id,
                        field: "update",
                        value: event.target.checked,
                      })
                    }
                  />
                ),
            },
            {
              field: "bet_max",
              headerName: "Bet Max",
              width: 150,
              renderCell: (params) =>
                params.row.field_type === "textfield" && (
                  <TextField
                    type="number"
                    value={params.value || ""}
                    onChange={(event) =>
                      handlePermissionChange({
                        id: params.id,
                        field: "bet_max",
                        value: Number(event.target.value),
                      })
                    }
                  />
                ),
            },
            {
              field: "bet_min",
              headerName: "Bet Min",
              width: 150,
              renderCell: (params) =>
                params.row.field_type === "textfield" && (
                  <TextField
                    type="number"
                    value={params.value || ""}
                    onChange={(event) =>
                      handlePermissionChange({
                        id: params.id,
                        field: "bet_min",
                        value: Number(event.target.value),
                      })
                    }
                  />
                ),
            },
          ];

          const filteredColumns = columns.filter(
            (column) =>
              column.field === "type" ||
              (column.field === "status" &&
                values.permission.some(
                  (perm) => perm.field_type === "checkbox"
                )) ||
              (column.field !== "status" && column.field !== "type")
          );

          return (
            <Form>
              <Box mb={2}>
                <Field
                  as={TextField}
                  label="Username"
                  name="username"
                  fullWidth
                  error={touched.username && Boolean(errors.username)}
                  helperText={touched.username && errors.username}
                />
              </Box>
              <Box mb={2}>
                <Field
                  as={TextField}
                  label="Password"
                  name="password"
                  type="password"
                  fullWidth
                  error={touched.password && Boolean(errors.password)}
                  helperText={touched.password && errors.password}
                />
              </Box>
              <Box mb={2}>
                <Field
                  as={TextField}
                  label="Salisi"
                  name="salisi"
                  fullWidth
                  error={touched.salisi && Boolean(errors.salisi)}
                  helperText={touched.salisi && errors.salisi}
                />
              </Box>
              <Box mb={2}>
                <Field
                  as={TextField}
                  label="Lucky9"
                  name="lucky9"
                  fullWidth
                  error={touched.lucky9 && Boolean(errors.lucky9)}
                  helperText={touched.lucky9 && errors.lucky9}
                />
              </Box>
              <Box mb={2} style={{ height: 400, width: "100%" }}>
                <DataGrid
                  rows={values.permission}
                  columns={filteredColumns}
                  pageSize={5}
                  rowsPerPageOptions={[5]}
                  checkboxSelection={false}
                  disableSelectionOnClick
                />
              </Box>
              <Button color="primary" variant="contained" type="submit">
                Submit
              </Button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default MyForm;
