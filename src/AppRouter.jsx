import React, { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

// page imports
import Home from "./pages/home";
import Login from "./pages/login";
import Profile from "./pages/profile";
import MyProfile from "./pages/my-profile";
import FindFriends from "./pages/find-friends";
import PageNotFound from "./pages/page-not-found";
import Post from "./pages/post";
import Chats from "./pages/chats";
import MobileChats from "./pages/mobile/mobile-chats";
import MobileChatsList from "./pages/mobile/mobile-chats-list";
import Loading from "./pages/loading";

const AppRouter = () => {
  const isLaptopOrDesktop = useMediaQuery({ query: "(min-width:768px)" });
  const isLargeMobileDevice = useMediaQuery({ query: "(max-width:768px)" });

  const [loading, setLoading] = useState(true)

  if (loading === true) {
    if (window.performance) {
      if (window.performance.navigation.type === 1) {
        return <Loading loading={loading} setLoading={setLoading} />;
      }
    }
  }

  return (
    <BrowserRouter>
      <Switch>
        {isLaptopOrDesktop && <Route path="/chats" component={Chats} />}
        <Route exact path="/" component={Home} />
        <Route path="/find-friends" component={FindFriends} />
        <Route exact path="/profile/:id" component={Profile} />
        <Route path="/profile" component={MyProfile} />
        <Route path="/post/:id" component={Post} />
        <Route path="/login" component={Login} />
        {isLargeMobileDevice && (
          <>
            <Route path="/search" component={Post} />
            <Route exact path="/chats" component={MobileChatsList} />
            <Route exact path="/chats/:id" component={MobileChats} />
          </>
        )}

        <Route path="*" component={PageNotFound} />
      </Switch>
    </BrowserRouter>
  );
};

export default AppRouter;
