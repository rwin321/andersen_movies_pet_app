import "./styles/main.scss";
import Navbar from "./components/Navbar/Navbar";
import Content from "./components/Content/Content";

const App = () => {
  return (
    <div className="app_wrapper">
      <Navbar />
      <Content />
    </div>
  );
};

export default App;
