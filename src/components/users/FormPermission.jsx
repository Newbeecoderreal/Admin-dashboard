import { Box, Checkbox, Stack, TextField, Typography } from "@mui/material";
import React from "react";
import PermissionTable from "./PermissionTable";
import StyledCheckbox from "../Styledcheckbox";

function FormPermission({ values, handleChange, handlePermissionChange }) {
  const columns = [
    { field: "type", headerName: "Type", width: 150, editable: false },
    {
      field: "status",
      headerName: "Status",
      width: 150,
      renderCell: (params) => {
        switch (params.row.type) {
          // case "BET LIMIT":
          //   return (
          //     <TextField
          //       type="number"
          //       value={params.row.bet_max}
          //       onChange={(event) =>
          //         handlePermissionChange({
          //           id: params.id,
          //           field: "bet_max",
          //           value: Number(event.target.value),
          //         })
          //       }
          //     />
          //   );
          case "PLAYER ACCOUNT":
            return (
              <StyledCheckbox
                checked={params.value}
                onChange={(event) =>
                  handlePermissionChange({
                    id: params.id,
                    field: "status",
                    value: event.target.checked,
                  })
                }
              />
            );
          case "SUB ACCOUNT":
            return (
              <StyledCheckbox
                checked={params.value}
                onChange={(event) =>
                  handlePermissionChange({
                    id: params.id,
                    field: "status",
                    value: event.target.checked,
                  })
                }
              />
            );
          case "AGENT ACCOUNT":
            return (
              <StyledCheckbox
                checked={params.value}
                onChange={(event) =>
                  handlePermissionChange({
                    id: params.id,
                    field: "status",
                    value: event.target.checked,
                  })
                }
              />
            );
          default:
            return (
              <StyledCheckbox
                checked={params.value}
                onChange={(event) =>
                  handlePermissionChange({
                    id: params.id,
                    field: "status",
                    value: event.target.checked,
                  })
                }
              />
            );
        }
      },
    },
    {
      field: "create",
      headerName: "Create",
      width: 150,
      renderCell: (params) => {
        switch (params.row.type) {
          // case "BET LIMIT":
          //   return (
          //     <TextField
          //       type="number"
          //       value={params.row.bet_min}
          //       onChange={(event) =>
          //         handlePermissionChange({
          //           id: params.id,
          //           field: "bet_min",
          //           value: Number(event.target.value),
          //         })
          //       }
          //     />
          //   );
          case "PLAYER ACCOUNT":
            return (
              <StyledCheckbox
                checked={params.value}
                disabled={!params.row.status}
                onChange={(event) =>
                  handlePermissionChange({
                    id: params.id,
                    field: "create",
                    value: event.target.checked,
                  })
                }
              />
            );
          case "SUB ACCOUNT":
            return (
              <StyledCheckbox
                checked={params.value}
                disabled={!params.row.status}
                onChange={(event) =>
                  handlePermissionChange({
                    id: params.id,
                    field: "create",
                    value: event.target.checked,
                  })
                }
              />
            );
          case "AGENT ACCOUNT":
            return (
              <StyledCheckbox
                checked={params.value}
                disabled={!params.row.status}
                onChange={(event) =>
                  handlePermissionChange({
                    id: params.id,
                    field: "create",
                    value: event.target.checked,
                  })
                }
              />
            );
          default:
            return (
              <StyledCheckbox
                disabled={params.value == null}
                checked={params.value}
                onChange={(event) =>
                  handlePermissionChange({
                    id: params.id,
                    field: "create",
                    value: event.target.checked,
                  })
                }
              />
            );
        }
      },
    },
    {
      field: "update",
      headerName: "Update",
      width: 150,
      renderCell: (params) => {
        switch (params.row.type) {
          // case "BET LIMIT":
          //   return;
          case "PLAYER ACCOUNT":
            return (
              <StyledCheckbox
                checked={params.value}
                disabled={!params.row.status}
                onChange={(event) =>
                  handlePermissionChange({
                    id: params.id,
                    field: "update",
                    value: event.target.checked,
                  })
                }
              />
            );
          case "SUB ACCOUNT":
            return (
              <StyledCheckbox
                checked={params.value}
                disabled={!params.row.status}
                onChange={(event) =>
                  handlePermissionChange({
                    id: params.id,
                    field: "update",
                    value: event.target.checked,
                  })
                }
              />
            );
          case "AGENT ACCOUNT":
            return (
              <StyledCheckbox
                checked={params.value}
                disabled={!params.row.status}
                onChange={(event) =>
                  handlePermissionChange({
                    id: params.id,
                    field: "update",
                    value: event.target.checked,
                  })
                }
              />
            );
          default:
            return (
              <StyledCheckbox
                disabled={params.value == null}
                checked={params.value}
                onChange={(event) =>
                  handlePermissionChange({
                    id: params.id,
                    field: "update",
                    value: event.target.checked,
                  })
                }
              />
            );
        }
      },
    },
  ];

  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Stack direction="row" alignItems="center">
        <StyledCheckbox />
        <Typography variant="body2">Default</Typography>
      </Stack>
      <Box>
        <PermissionTable columns={columns} rows={values.permission} />
      </Box>
    </Box>
  );
}

export default FormPermission;
