import React, { useEffect } from "react";
import UsersTable from "../../components/users/UsersTable";
import { useMasterContext } from "../../context/user/MastercontextProvider";
import CreateAccountButton from "../../components/users/CreateAccountButton";
import { Grid } from "@mui/material";
import MasterAccountForm from "../../components/users/MasterAccountForm";

function Master() {
  const { list, open, setOpen, loading } = useMasterContext();

  const columns = [
    {
      field: "username",
      headerName: "USERNAME",
      width: 300,
    },
    {
      field: "status",
      headerName: "STATUS",
      width: 300,
    },
    {
      field: "commission",
      headerName: "COMMISSION",
      width: 300,
    },
  ];

  const rows =
    list == null
      ? ""
      : list.map((val, index) => {
          const row = {
            id: val.user_id,
            username: val.username,
          };
          return row;
        });

  return (
    <Grid container>
      <CreateAccountButton
        content={<MasterAccountForm />}
        open={open}
        setOpen={setOpen}
      />
      <UsersTable columns={columns} rows={rows} loading={loading} />
    </Grid>
  );
}

export default Master;
