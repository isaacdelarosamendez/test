import "./Index.scss";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { setUser } from "../../../Controllers/Chat/Profile";
function Index() {
  const history = useHistory();
  const [name, setName] = useState("");
  const saveProfile = () => {
    if (name === "") {
      alert("Enter your name");
      return;
    }
    const userSave = {
      name: name,
    };
    const result = setUser(userSave);
    if (result === "") {
      history.push(`/chat`);
    } else {
      alert(result);
    }
  };
  return (
    <div className="profile-form">
      <div className={"profile-form-name"}>
        <TextField
          style={{ width: "100%" }}
          id="outlined-basic"
          label="Enter your name"
          variant="outlined"
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
      </div>
      <div className={"profile-form-save"}>
        <Button
          className={"profile-form-save-button"}
          variant="contained"
          color="primary"
          onClick={() => {
            saveProfile();
          }}
        >
          Save
        </Button>
      </div>
    </div>
  );
}

export default Index;
