import axios from "axios";

const fetchUsers = async () => {
  const users = (await axios.get("https://jsonplaceholder.typicode.com/users")).data;
  return users;
};

export default fetchUsers;
