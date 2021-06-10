import "./Index.scss";
import { useHistory } from "react-router-dom";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import DraftsIcon from "@material-ui/icons/Drafts";
import { getUsersList } from "../../../Controllers/Chat/List";
function Index() {
  const history = useHistory();
  const navigateRoom = (userId) => {
    history.push(`/chat-room?u=${userId}`);
  };
  const renderList = () => {
    let result = getUsersList().map((user, index) => (
      <ListItem
        onClick={() => {
          navigateRoom(user.id);
        }}
        button
      >
        <ListItemIcon>
          <DraftsIcon />
        </ListItemIcon>
        <ListItemText primary={user.name} />
      </ListItem>
    ));
    return result;
  };
  return (
    <div className="chat-list">
      <List component="nav" aria-label="main mailbox folders">
        {renderList()}
      </List>
    </div>
  );
}

export default Index;
