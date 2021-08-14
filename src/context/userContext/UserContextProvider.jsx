import React, { useState } from "react";
import { userContext } from "./userContext";

function UserContextProvider({ children }) {
  const [user, setUser] = useState({
    name: "",
    fbID: "",
    picture: "",
  });

  const userContextValue = { user, setUser };
  return (
    <userContext.Provider value={userContextValue}>
      {children}
    </userContext.Provider>
  );
}

export default UserContextProvider;
