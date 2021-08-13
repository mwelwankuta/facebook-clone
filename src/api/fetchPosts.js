import axios from "axios";

const fetchPosts = async () => {
  const posts = (await axios.get("https://jsonplaceholder.typicode.com/photos"))
    .data;
  const comments = (
    await axios.get("https://jsonplaceholder.typicode.com/comments")
  ).data;
  return { posts, comments };
};

export default fetchPosts;
