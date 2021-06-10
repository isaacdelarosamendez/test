import { getUsers } from "../../Models/Core/Chats";
const getUsersList = async (userId) => {
  return await getUsers(userId);
};

export { getUsersList };
