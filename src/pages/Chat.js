import React from "react";
import { ChatEngine } from "react-chat-engine";

export default function Chat() {
  return (
    <div className="app-container container">
      <ChatEngine
        projectID="b095d165-217e-4a79-b190-6fb4706e857a"
        userName="Julia"
        userSecret="pawfect1234"
      />
    </div>
  );
}
