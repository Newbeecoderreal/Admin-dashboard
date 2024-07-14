import React from "react";
import Master from "./Master";
import MastercontextProvider from "../../context/user/MastercontextProvider";

function MasterLayout() {
  return (
    <MastercontextProvider>
      <Master />
    </MastercontextProvider>
  );
}

export default MasterLayout;
