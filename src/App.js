import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Widgets from "./Views/Widgets/Index";
import Chats from "./Views/Chat/Index";
import ChatProfile from "./Views/Chat/Profile";
import ChatRoom from "./Views/Chat/Room";
function App() {
  return (
    <div className="main-site">
      <Router>
        <div className="pages">
          <Switch>
            <Route exact path="/widgets" component={Widgets}></Route>
            <Route exact path="/chat" component={Chats}></Route>
            <Route exact path="/chat-profile" component={ChatProfile}></Route>
            <Route exact path="/chat-room/:id" component={ChatRoom}></Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
