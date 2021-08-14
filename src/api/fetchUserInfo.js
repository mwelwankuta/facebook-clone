import axios from "axios";

async function FetchUserInfo() {
  let user = { username: "", picture: "" };
  console.log(await user);
  const data = await axios.get("https://jsonplaceholder.typicode.com/photos").then(data => data.statusText);
  if (data) user = { username: "mwelwa", picture: "love" };
  return await user;
}

export default FetchUserInfo;
