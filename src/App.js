import Navbar from "./components/Navbar/Navbar";
import "./styles/main.scss";
import { Switch, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Content from "./components/Content/Content";

const App = () => {
  const dispatch = useDispatch();
  return (
    <div className="app_wrapper">
      <Navbar />
      <div className="content__wrapper">
        <Switch>
          <Route exact path="/">
            <div>search</div>
            <Content />
          </Route>
          <Route path="/signin">
            <div>sign in</div>
          </Route>
          <Route path="/signup">
            <div>sign up</div>
          </Route>
        </Switch>
      </div>
    </div>
  );
};

export default App;
