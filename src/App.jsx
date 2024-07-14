import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Layout from "./pages/Layout";
import { useMemo } from "react";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { themeSettings } from "./theme";
import Agent from "./pages/users/Agent";
import Player from "./pages/users/Player";
import SubAccount from "./pages/users/SubAccount";
import Dashboard from "./pages/Dashboard";
import MasterLayout from "./pages/users/MasterLayout";
import AgentLayout from "./pages/users/AgentLayout";
import NotFound from "./components/NotFound";
import RequireAuth from "./components/RequireAuth";
import Unauthorized from "./pages/Unauthorized";
import Test from "./Test";

const ROLES = {
  SuperAdmin: 425,
  Admin: 424,
  Master: 423,
  Agent: 422,
  Player: 420,
};

function App() {
  const mode = "dark";
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Routes>
          <Route path="/Login" element={<Login />} />
          <Route path="/" element={<Layout />}>
            <Route index element={<Navigate to="/dashboard" replace />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="users">
              <Route
                element={<RequireAuth allowedRoles={[ROLES.SuperAdmin]} />}
              >
                <Route path="master" element={<MasterLayout />} />
              </Route>

              <Route path="agent" element={<AgentLayout />} />
              <Route path="player" element={<Player />} />
              <Route path="subaccount" element={<SubAccount />} />
            </Route>
            <Route path="/unauthorized" element={<Unauthorized />} />
          </Route>
          <Route path="/*" element={<NotFound />} />
          <Route path="/Test" element={<Test />} />
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
