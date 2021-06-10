import "./Profile.scss";
import { useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";
import FormProfile from "../../Components/Chat/Profile/Index"
function Index() {
  const history = useHistory();
  return (
    <div className="profile">
      <div className="profile-header">
        <Button
          className={"profile-header-navigate"}
          variant="contained"
          color="primary"
          onClick={() => {
            history.push(`/chat`);
          }}
        >
          Chat
        </Button>
      </div>
      <div className="profile-main">
          <FormProfile />
      </div>
    </div>
  );
}

export default Index;
