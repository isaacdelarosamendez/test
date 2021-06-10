const getCurrentUser = () => {
  return localStorage.getItem("user") === null ||
    localStorage.getItem("user") === undefined
    ? { name: "Anon" }
    : JSON.parse(localStorage.getItem("user"));
};
const setUser = (user) => {
  localStorage.setItem("user", JSON.stringify(user));
  return "";
};
export { getCurrentUser, setUser };
