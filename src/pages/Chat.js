import React from "react";
import { ChatEngine } from "react-chat-engine";

function ChatList() {
  return <div>chatlist</div>;
}

export default function Chat() {
  return (
    <div className="app-container container">
      <ChatEngine
        projectID="b095d165-217e-4a79-b190-6fb4706e857a"
        userName="Julia"
        userSecret="pawfect1234"
        renderChatList={(chatAppState) => <ChatList {...chatAppState} />}
      />
    </div>
  );
}
