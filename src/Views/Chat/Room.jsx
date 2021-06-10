import "./Room.scss";
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import ListChats from "../../Components/Chat/List/Index";
import { getCurrentUser } from "../../Controllers/Chat/Profile";
import SendIcon from "@material-ui/icons/Send";
import socketIOClient from "socket.io-client";
const ENDPOINT = "http://127.0.0.1:4001";

function Index() {
  const [response, setResponse] = useState("");

  useEffect(() => {
    const socket = socketIOClient(ENDPOINT);
    socket.on("FromAPI", (data) => {
      setResponse(data);
    });
  }, []);
  const history = useHistory();
  const user = getCurrentUser();
  const [message, setMessage] = useState("");
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
        <p>
          It's <time dateTime={response}>{response}</time>
        </p>
      </div>
      <div className="room-form">
        <TextField
          style={{ width: "100%", marginRight: "5px" }}
          id="outlined-basic"
          variant="outlined"
          onChange={(event) => {
            setMessage(event.target.value);
          }}
        />
        <Button
          variant="contained"
          size="large"
          color="primary"
          endIcon={<SendIcon />}
        >
          Send
        </Button>
      </div>
    </div>
  );
}

export default Index;
