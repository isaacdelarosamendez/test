import { getUsers,createRoom } from "../../Models/Core/Chats";
const getUsersList = async (userId) => {
  return await getUsers(userId);
};
const createRoomChat = async (userId, userId2) => {
  return await createRoom({user1Id:userId, user2Id:userId2});
};

export { getUsersList, createRoomChat };