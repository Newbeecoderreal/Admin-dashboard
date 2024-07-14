import * as React from "react";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import { siteDetails } from "../constants/Site";
import SideNavDrawerList from "./SideNavDrawerList";
import MediaQueryHook from "../hooks/MediaQueryHook";
import { Box, Stack, TextField } from "@mui/material";
import SideNavCardProfile from "./SideNavCardProfile";
import Userbalance from "./Userbalance";

function SideNavDrawer({
  mobileOpen,
  handleDrawerTransitionEnd,
  handleDrawerClose,
  drawerWidth,
}) {
  const { mobile } = MediaQueryHook();
  return (
    <Drawer
      variant={mobile ? "temporary" : "permanent"}
      open={mobileOpen}
      onTransitionEnd={handleDrawerTransitionEnd}
      onClose={handleDrawerClose}
      ModalProps={{
        keepMounted: true, // Better open performance on mobile.
      }}
      sx={{
        "& .MuiDrawer-paper": {
          boxSizing: "border-box",
          width: drawerWidth,
        },
      }}
    >
      <Toolbar>
        <Typography variant="h6" fontWeight={600}>
          DOBLADABET
        </Typography>
      </Toolbar>
      <Divider />
      <Stack gap={0.5} direction="column">
        <Box sx={{ width: "100%", p: "5px 15px 0px 15px" }}>
          <SideNavCardProfile />
        </Box>
      </Stack>
      <List
        sx={{
          // selected and (selected + hover) states
          "&& .Mui-selected, && .Mui-selected:hover": {
            bgcolor: "#B59410",
            // "&, & .MuiListItemIcon-root": {
            //   color: "black",
            // },
          },
          // // hover states
          // "& .MuiListItemButton-root:hover": {
          //   bgcolor: "orange",
          //   "&, & .MuiListItemIcon-root": {
          //     color: "yellow",
          //   },
          // },
        }}
      >
        {siteDetails.DrawerNav.map((val, index) => (
          <SideNavDrawerList
            key={index}
            val={val}
            collapse={val.menu}
            submenu={val.menu}
          />
        ))}
      </List>
    </Drawer>
  );
}

export default SideNavDrawer;
