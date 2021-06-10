import { saveUser } from "../../Models/Core/Chats";
const getCurrentUser = () => {
  return localStorage.getItem("user") === null ||
    localStorage.getItem("user") === undefined
    ? { id: 0, name: "Anon" }
    : JSON.parse(localStorage.getItem("user"));
};
const setUser = async (user) => {
  const userResponse = await saveUser(user);
  localStorage.setItem("user", JSON.stringify(userResponse));
  return "";
};
export { getCurrentUser, setUser };
