import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import HomePage from "@/pages/Home";
import GoodPage from "@/pages/Good";
import LargCom from "@/pages/LargeCom";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/home" component={HomePage}></Route>
          <Route path="/good" component={GoodPage}></Route>
          <Route path="/select" component={LargCom}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
