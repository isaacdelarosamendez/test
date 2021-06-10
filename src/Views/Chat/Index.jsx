import "./Index.scss";
import { useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";
import ListChats from "../../Components/Chat/List/Index";
import { getCurrentUser } from "../../Controllers/Chat/Profile";
function Index() {
  const history = useHistory();
  const user = getCurrentUser();
  if (user.id === 0) {
    history.push(`/chat-profile`);
  }
  return (
    <div className="chat">
      <div className="chat-header">
        <h3 className="chat-header-title">Welcome {user.name}</h3>
        <Button
          className={"chat-header-navigate"}
          variant="contained"
          color="primary"
          onClick={() => {
            history.push(`/chat-profile`);
          }}
        >
          Profile
        </Button>
      </div>
      <div className="profile-main">
        <ListChats />
      </div>
    </div>
  );
}

export default Index;
