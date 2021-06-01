import React, { Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import Main from "./Movies/Main";
import Favorite from "./Movies/Favorite";
import History from "./Movies/History";
import Logout from "./Logout";
import Preloader from "../../common/Preloader/Preloader";
import Signin from "./Signin";
import Signup from "./Signup";
import ShowParticles from "../../common/Particles";

const Content = () => {
  return (
    <div className="content__wrapper">
      <Suspense fallback={() => <Preloader />}>
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route path="/signin">
            <Signin />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/logout">
            <Logout />
          </Route>
          <Route path="/history">
            <History />
          </Route>
          <Route path="/favorite">
            <Favorite />
            <ShowParticles />
          </Route>
        </Switch>
      </Suspense>
    </div>
  );
};

export default Content;
