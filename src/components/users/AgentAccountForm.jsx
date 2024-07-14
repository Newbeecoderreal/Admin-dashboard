import { Button, Stack, Box } from "@mui/material";
import React, { useState } from "react";
import AgentValidation from "../../formValidation/AgentValidation";
import { Formik } from "formik";
import useAgentHook from "../../hooks/user/UseAgentHook";
import { useAgentContext } from "../../context/user/AgentcontextProvider";
import FormAccount from "./FormAccount";
import FormCommission from "./FormCommission";
import FormPermission from "./FormPermission";

function AgentAccountForm() {
  const { usersAccountValidation, usersAccountValues } = AgentValidation();
  const { handleCreate, getList } = useAgentHook();
  const { setOpen, setList, isLoading } = useAgentContext();

  const handleFormSubmit = async (values) => {
    await handleCreate(values);
    // await getList({ setList, isLoading });
    // setOpen(false);
  };

  return (
    <Formik
      onSubmit={handleFormSubmit}
      initialValues={usersAccountValues}
      validationSchema={usersAccountValidation}
    >
      {({
        values,
        errors,
        touched,
        handleBlur,
        handleChange,
        handleSubmit,
        isSubmitting,
        setValues,
      }) => {
        const handlePermissionChange = (params) => {
          const { id, field, value } = params;
          const updatedPermissions = values.permission.map((perm) => {
            if (perm.id === id) {
              switch (perm.type) {
                case "PLAYER ACCOUNT":
                  if (field === "status" && !value) {
                    return {
                      ...perm,
                      status: false,
                      create: false,
                      update: false,
                    };
                  }
                case "SUB ACCOUNT":
                  if (field === "status" && !value) {
                    return {
                      ...perm,
                      status: false,
                      create: false,
                      update: false,
                    };
                  }
                case "AGENT ACCOUNT":
                  if (field === "status" && !value) {
                    return {
                      ...perm,
                      status: false,
                      create: false,
                      update: false,
                    };
                  }
                default:
                  return { ...perm, [field]: value };
              }
              // if (field === "status" && perm.type === "ACCOUNT" && !value) {
              //   return {
              //     ...perm,
              //     status: false,
              //     create: false,
              //     update: false,
              //   };
              // }
              // switch (field) {
              //   case "status":
              //     break;

              //   default:
              //     break;
              // }
              // return { ...perm, [field]: value };
            }
            return perm;
          });
          setValues({ ...values, permission: updatedPermissions });
        };
        return (
          <Stack direction="column" gap={2}>
            <FormAccount
              values={values}
              errors={errors}
              touched={touched}
              handleChange={handleChange}
            />
            <Box>
              <FormCommission
                values={values}
                errors={errors}
                touched={touched}
                handleChange={handleChange}
              />
            </Box>
            <Box>
              <FormPermission
                values={values}
                errors={errors}
                touched={touched}
                handleChange={handleChange}
                handlePermissionChange={handlePermissionChange}
              />
            </Box>

            <Button
              onClick={handleSubmit}
              variant="contained"
              color="secondary"
            >
              SUBMIT
            </Button>
          </Stack>
        );
      }}
    </Formik>
  );
}

export default AgentAccountForm;
