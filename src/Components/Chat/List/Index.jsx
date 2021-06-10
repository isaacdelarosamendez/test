import "./Index.scss";
import { useHistory } from "react-router-dom";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import DraftsIcon from "@material-ui/icons/Drafts";
import { getUsersList, createRoomChat } from "../../../Controllers/Chat/List";
import React, { useState, useEffect } from "react";
import { getCurrentUser } from "../../../Controllers/Chat/Profile";
import Skeleton from "@material-ui/lab/Skeleton";
function Index() {
  const history = useHistory();
  const [userList, setUserList] = useState([]);
  const [loading, setLoading] = useState(true);
  const user = getCurrentUser();

  const navigateRoom = async (userId) => {
    if (user.id > 0) {
      const room = await createRoomChat(user.id, userId);
      history.push(`/chat-room/${room.id}`);
    } else {
      history.push(`/chat-profile`);
    }
  };

  useEffect(() => {
    (async () => {
      setInterval(async () => {
        const result = await getUsersList(user.id);
        setUserList(result);
        setLoading(false);
      }, 5000);
    })();
  }, [user.id]);

  const renderList = () => {
    let result = userList?.map((user, index) => (
      <ListItem
        key={index}
        onClick={() => {
          navigateRoom(user.id);
        }}
        button
      >
        <ListItemIcon style={user.existsRoom ? { color: "red" } : {}}>
          <DraftsIcon />
        </ListItemIcon>
        <ListItemText primary={user.name} />
      </ListItem>
    ));
    return result;
  };
  return (
    <div className="chat-list">
      {loading && (
        <div>
          <Skeleton width={210} height={50} />
          <Skeleton width={210} height={50} />
          <Skeleton width={210} height={50} />
          <Skeleton width={210} height={50} />
          <Skeleton width={210} height={50} />
        </div>
      )}
      <List component="nav" aria-label="main mailbox folders">
        {renderList()}
      </List>
    </div>
  );
}

export default Index;
