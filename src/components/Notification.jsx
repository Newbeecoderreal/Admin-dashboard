import React from "react";
import Badge from "@mui/material/Badge";
import { IconBell } from "@tabler/icons-react";

function Notification() {
  return (
    <Badge badgeContent={4} color="secondary">
      <IconBell stroke={2} />
    </Badge>
  );
}
export default Notification;
