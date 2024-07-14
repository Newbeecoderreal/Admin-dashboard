import * as React from "react";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { Collapse } from "@mui/material";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import GroupAddRoundedIcon from "@mui/icons-material/GroupAddRounded";
import { Link as Routerlink, useLocation, useNavigate } from "react-router-dom";

const SideNavDrawerList = ({ collapse, val, submenu }) => {
  const location = useLocation();

  const path = location.pathname;
  var icon = "";
  switch (val.title) {
    case "Users":
      icon = <GroupAddRoundedIcon />;
      break;
    case "Dashboard":
      icon = <HomeRoundedIcon />;
      break;

    default:
      break;
  }
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(true);
  const handleClick = () => {
    if (submenu) {
      setOpen(!open);
    } else {
      navigate(val.href);
    }
  };
  return (
    <>
      <ListItemButton onClick={handleClick} selected={val.href === path}>
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText primary={val.title} />
        {collapse ? (
          open ? (
            <ExpandLess sx={{ fontSize: 18 }} />
          ) : (
            <ExpandMore sx={{ fontSize: 18 }} />
          )
        ) : null}
      </ListItemButton>
      {collapse && (
        <Collapse in={open} timeout="auto" unmountOnExit>
          {submenu.map((val, index) => (
            <List component="div" disablePadding key={index}>
              <ListItemButton
                sx={{
                  pl: 8,
                }}
                component={Routerlink}
                to={val.href}
                selected={path === val.href}
              >
                <ListItemText primary={val.title} />
              </ListItemButton>
            </List>
          ))}
        </Collapse>
      )}
    </>
  );
};

export default SideNavDrawerList;
