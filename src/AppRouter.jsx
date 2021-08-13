import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar";

// page imports
import home from "./pages/home";
import login from "./pages/login";
import profile from "./pages/profile";
import myprofile from "./pages/my-profile";
import findfriends from "./pages/find-friends";
import post from "./pages/post";
import { useMediaQuery } from "react-responsive";

const AppRouter = () => {
  const isLargeMobileDevice = useMediaQuery({ query: "(max-width:768px)" });
  const isMobileDevice = useMediaQuery({ query: "(max-width:517px)" });
  const isSmallerMobileDevice = useMediaQuery({ query: "(max-width:420px)" });
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path="/login" component={login} />
        <Route path="/find-friends" component={findfriends} />
        <Route path="/profile/:id" component={profile} />
        <Route path="/profile" component={myprofile} />
        <Route path="/post/:id" component={post} />
        {isLargeMobileDevice && <Route path="/search" component={post} />}
        <Route exact path="/" component={home} />
        <Route path="*" render={() => <h1>Empty</h1>} />
        
      </Switch>
    </BrowserRouter>
  );
};

export default AppRouter;
