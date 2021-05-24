import React, { useState, Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import Preloader from "../../assets/Preloader";
import MoviesContainer from "./Movies/MoviesContainer";
import Logout from "./Logout";
import Signin from "./Signin";
import Signup from "./Signup";
import Search from "./Search";
import Favorite from "./Favorite";

const Content = () => {
  // state with value which client searching
  const [searchVal, setSearchVal] = useState("");

  return (
    <div className="content__wrapper">
      <Suspense fallback={<Preloader />}>
        <Switch>
          <Route exact path="/">
            <Search searchVal={searchVal} setSearchVal={setSearchVal} />
            <MoviesContainer searchVal={searchVal} />
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
          <Route path="/history">history</Route>
          <Route path="/favorite">
            <Favorite />
          </Route>
        </Switch>
      </Suspense>
    </div>
  );
};

export default Content;
