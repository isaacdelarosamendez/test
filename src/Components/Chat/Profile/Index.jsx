import "./Index.scss";
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { setUser, getCurrentUser } from "../../../Controllers/Chat/Profile";
function Index() {
  const history = useHistory();
  const [name, setName] = useState("");

  const user = getCurrentUser();
  useEffect(() => {
    (async () => {
      if (user.id > 0) {
        setName(user.name);
      }
    })();
  }, [user]);
  const saveProfile = async () => {
    if (name === "") {
      alert("Enter your name");
      return;
    }
    const userSave = {
      name: name,
      userId: user.id,
    };
    const result = await setUser(userSave);
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
          value={name}
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
