import React, { useState } from "react";
import { postContext } from "./postContext";

const PostContextProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const postState = { posts, setPosts };
  return (
    <postContext.Provider value={postState}>{children}</postContext.Provider>
  );
};

export default PostContextProvider;
