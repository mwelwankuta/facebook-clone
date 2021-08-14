import React, { Fragment, useEffect } from "react";
import fetchUserInfo from "./api/fetchUserInfo";
import AppRouter from "./AppRouter";
import PostContextProvider from "./context/postContext";
import UserContextProvider from "./context/userContext";
import Loading from "./pages/loading";

const App = () => {

  return (
    <Fragment>
      <UserContextProvider>
        <PostContextProvider>
          <AppRouter />
        </PostContextProvider>
      </UserContextProvider>
    </Fragment>
  );
};

export default App;
