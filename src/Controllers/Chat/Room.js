import { getMessages, createMessages } from "../../Models/Core/Chats";
const getMessagesRoom = async (roomId) => {
  return await getMessages(roomId);
};
const createMessagesRoom = async (userId, roomId,message) => {
  return await createMessages({
    userId: userId,
    message: message,
    roomId: roomId,
  });
};

export { getMessagesRoom, createMessagesRoom };
