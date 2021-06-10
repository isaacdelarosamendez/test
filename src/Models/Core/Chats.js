import axios from "axios";
const getUsers = async (userId) => {
  const request = await axios.get(`${process.env.REACT_APP_BASE_URL}users?userId=${userId}`);
  const response = await request.data;
  return response;
};
const saveUser = async (user) => {
  const request = await axios.post(
    `${process.env.REACT_APP_BASE_URL}users/create`,
    user
  );
  const response = await request.data;
  return response;
};
export { getUsers, saveUser };
