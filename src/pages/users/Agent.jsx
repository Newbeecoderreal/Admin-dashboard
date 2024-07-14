import React from "react";
import { useAgentContext } from "../../context/user/AgentcontextProvider";
import CreateAccountButton from "../../components/users/CreateAccountButton";
import { Grid } from "@mui/material";
import UsersTable from "../../components/users/UsersTable";
import AgentAccountForm from "../../components/users/AgentAccountForm";

function Agent() {
  const { rows, columns, open, setOpen } = useAgentContext();

  return (
    <Grid container>
      <CreateAccountButton
        content={<AgentAccountForm />}
        open={open}
        setOpen={setOpen}
      />
      <UsersTable columns={columns} rows={rows} />
    </Grid>
  );
}

export default Agent;
