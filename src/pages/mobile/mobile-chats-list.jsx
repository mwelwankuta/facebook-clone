import React from "react";
import UserMessageCard from "../../components/UserMessageCard";

function MobileChatsList() {
  return (
    <div className=" col-span-1 border-r p-3">
      <h1 className="font-semibold text-lg">Chats</h1>
      <UserMessageCard />
      <UserMessageCard />
      <UserMessageCard />
      <UserMessageCard />
    </div>
  );
}

export default MobileChatsList;
