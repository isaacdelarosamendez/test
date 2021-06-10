import "./Index.scss";
import { useHistory } from "react-router-dom";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import DraftsIcon from "@material-ui/icons/Drafts";
import { getUsersList } from "../../../Controllers/Chat/List";
import React, { useState, useEffect } from "react";
import { getCurrentUser } from "../../../Controllers/Chat/Profile";
function Index() {
  const history = useHistory();
  const navigateRoom = (userId) => {
    if (userId > 0) {
      history.push(`/chat-room?u=${userId}`);
    } else {
      history.push(`/chat-profile`);
    }
  };
  const [userList, setUserList] = useState([]);
  const user = getCurrentUser();

  useEffect(() => {
    (async () => {
      const result = await getUsersList(user.id);
      setUserList(result);
    })();
  }, [user.id]);

  const renderList = () => {
    let result = userList?.map((user, index) => (
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
