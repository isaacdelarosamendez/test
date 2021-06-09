import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Widgets from "./Views/Widgets/Index";
function App() {
  return (
    <div className="main-site">
      <Router>
        <div className="pages">
          <Switch>
            <Route exact path="/widgets" component={Widgets}></Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
