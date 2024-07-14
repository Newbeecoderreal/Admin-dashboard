import React from "react";
import AgentcontextProvider from "../../context/user/AgentcontextProvider";
import Agent from "./Agent";

function AgentLayout() {
  return (
    <AgentcontextProvider>
      <Agent />
    </AgentcontextProvider>
  );
}

export default AgentLayout;
