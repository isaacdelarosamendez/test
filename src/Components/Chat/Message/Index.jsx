import "./Index.scss";

function Index({ userId, messages }) {
  const getUserIdBefore = (index) => {
    if (index === 0) {
      return 0;
    }
    return messages[index - 1].userId;
  };
  const renderMessages = () => {
    let result = messages.map((message, index) => (
      <div
        key={index}
        className={
          message.userId === userId
            ? "messages-element-right"
            : "messages-element-left"
        }
      >
        {getUserIdBefore(index) !== message.userId && <h4>{message.user}</h4>}
        <p
          className={
            "messages-element-box " +
            (message.userId === userId
              ? "messages-element-box-right"
              : "messages-element-box-left")
          }
        >
          {getUserIdBefore(index)}
          {message.message}
        </p>
      </div>
    ));
    return result;
  };
  return <div className="messages">{renderMessages()}</div>;
}

export default Index;
