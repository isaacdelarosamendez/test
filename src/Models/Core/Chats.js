import axios from "axios";
const getUsers = async (userId) => {
  const request = await axios.get(
    `${process.env.REACT_APP_BASE_URL}users?userId=${userId}`
  );
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
const createRoom = async (data) => {
  const request = await axios.post(
    `${process.env.REACT_APP_BASE_URL}rooms/create`,
    data
  );
  const response = await request.data;
  return response;
};
const createMessages = async (data) => {
  const request = await axios.post(
    `${process.env.REACT_APP_BASE_URL}messages/create`,
    data
  );
  const response = await request.data;
  return response;
};
const getMessages = async (roomId) => {
  const request = await axios.get(
    `${process.env.REACT_APP_BASE_URL}messages?roomId=${roomId}`
  );
  const response = await request.data;
  return response;
};
export { getUsers, saveUser, createRoom, getMessages, createMessages };
