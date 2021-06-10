import "./Room.scss";
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import SendIcon from "@material-ui/icons/Send";
import Messages from "../../Components/Chat/Message/Index";
import Skeleton from "@material-ui/lab/Skeleton";
import {
  getMessagesRoom,
  createMessagesRoom,
} from "../../Controllers/Chat/Room";
import { getCurrentUser } from "../../Controllers/Chat/Profile";
function Index(props) {
  const history = useHistory();
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const user = getCurrentUser();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      setInterval(async () => {
        const result = await getMessagesRoom(props.match.params.id);
        setMessages(result);
        setLoading(false);
      }, 5000);
    })();
  }, [props.match.params.id]);

  const sendMessage = async () => {
    const result = await createMessagesRoom(
      user.id,
      props.match.params.id,
      message
    );
    setMessages(result);
    setMessage("");
  };
  return (
    <div className="room">
      <div className="room-header">
        <Button
          className={"room-header-navigate"}
          variant="contained"
          color="primary"
          onClick={() => {
            history.push(`/chat`);
          }}
        >
          Back
        </Button>
      </div>
      <div className="room-messages">
        {loading && (
          <div>
            <Skeleton width={350} height={50} />
            <Skeleton width={350} height={50} />
          </div>
        )}
        <Messages messages={messages} userId={user.id} />
      </div>
      <div className="room-form">
        <div className="room-form-elements">
          <TextField
            style={{ width: "100%", marginRight: "5px" }}
            id="outlined-basic"
            variant="outlined"
            color="primary"
            value={message}
            onChange={(event) => {
              setMessage(event.target.value);
            }}
          />
          <Button
            variant="contained"
            size="large"
            color="primary"
            endIcon={<SendIcon />}
            onClick={() => {
              sendMessage();
            }}
          >
            Send
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Index;
