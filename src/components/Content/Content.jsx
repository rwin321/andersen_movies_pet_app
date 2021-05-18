import React, { useState, Suspense, lazy } from "react";
import { Switch, Route } from "react-router-dom";
import Preloader from "../../assets/Preloader/Preloader";
import Movies from "../Movies/Movies";
import Search from "../Search/Search";

const Content = () => {
  // state with value which client searching
  const [searchVal, setSearchVal] = useState("");

  return (
    <div className="content__wrapper">
      <Suspense fallback={<Preloader />}>
        <Switch>
          <Route exact path="/">
            <Search searchVal={searchVal} setSearchVal={setSearchVal} />
            <Movies searchVal={searchVal} />
          </Route>
          <Route path="/signin">
            <div>sign in</div>
          </Route>
          <Route path="/signup">
            <div>sign up</div>
          </Route>
        </Switch>
      </Suspense>
    </div>
  );
};

export default Content;
