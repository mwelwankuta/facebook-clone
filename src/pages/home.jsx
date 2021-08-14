import React, { Fragment, useContext, useEffect, useState } from "react";
import { LogoutIcon } from "@heroicons/react/outline";
import { PhotographIcon } from "@heroicons/react/solid";
import { postContext } from "../context/postContext/postContext";
import { Link } from "react-router-dom";
import Post from "../components/Post";
import { useMediaQuery } from "react-responsive";
import ConfirmActionModal from "../components/modals/ConfirmActionModal";
import fetchPosts from "../api/fetchPosts";
import NavBar from "../components/NavBar";

const Home = () => {
  const [postText, setPostText] = useState("");
  const [image, setImage] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState({
    isOpen: false,
    title: "",
    text: "",
  });
  const post = useContext(postContext);

  const isLargeMobileDevice = useMediaQuery({ query: "(max-width:768px)" });
  const isMobileDevice = useMediaQuery({ query: "(max-width:517px)" });
  const isSmallerMobileDevice = useMediaQuery({ query: "(max-width:420px)" });

  useEffect(() => {
    const setNewPosts = async () => {
      const { posts } = await fetchPosts();
      post?.setPosts(posts);
    };
    setNewPosts();
  }, [post]);

  const handlePostSubmit = (e) => {
    e.preventDefault();
    const author = "1234";
    let formData = new FormData();

    formData.append("fbID", author);
    formData.append("filename", image.name);
    formData.append("file", image);
  };

  return (
    <Fragment>
      <NavBar />
      {/* Confirm Action */}
      <ConfirmActionModal
        modalIsOpen={modalIsOpen}
        setModalIsOpen={setModalIsOpen}
        performAction={() => alert("nice")}
      />
      {/* Confirm Action */}
      <div className="">
        <div className="bg-gray-900 py-1 px-5 flex items-center justify-between text-gray-200">
          <div className="flex items-center">
            {!isSmallerMobileDevice && (
              <button
                className="rounded-full p-1.5 border flex items-center border-gray-800 hover:bg-gray-700 mr-2"
                onClick={() =>
                  setModalIsOpen({
                    title: "Are you sure you want to log out?",
                    text: "we will miss you, come back soon.",
                    isOpen: true,
                  })
                }
              >
                <LogoutIcon className="h-5 text-gray-200" />
              </button>
            )}
            {!isLargeMobileDevice && (
              <h1 className="mr-4 font-semibold text-3xl">
                <Link to="/profile">Hi Mwelwa</Link>
              </h1>
            )}
          </div>
          <div
            className="flex items-center"
            style={{ margin: isSmallerMobileDevice ? "auto" : "" }}
          >
            <div className="mr-2">
              <form
                className="flex items-center"
                onSubmit={(e) => handlePostSubmit(e)}
              >
                <div className="mr-4">
                  <label
                    htmlFor="image"
                    className="cursor-pointer flex items-center"
                  >
                    <p className="text-xs mr-2">
                      image
                      {image !== null &&
                        (isMobileDevice ? "(1)" : "(selected)")}
                    </p>
                    <PhotographIcon className="h-5 text-white" />
                  </label>
                  <input
                    type="file"
                    name="image"
                    accept="image/*"
                    id="image"
                    className="hidden"
                    onChange={(e) => {
                      setImage(e.target.files[0]);
                    }}
                  />
                </div>
                {!isSmallerMobileDevice && (
                  <div className="flex">
                    <input
                      type="text"
                      placeholder="What's on your mind?"
                      value={postText}
                      onChange={(e) => setPostText(e.target.value)}
                      className="bg-[#222] text-white placeholder-[#666] rounded-sm px-2 py-1 shadow-inner"
                    />
                    <button
                      type="submit"
                      className="bg-[#555] px-2 py-1 rounded-r-sm"
                    >
                      Post
                    </button>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
        <div className="mx-auto max-w-5xl">
          {isSmallerMobileDevice && (
            <form
              className="flex items-center"
              onSubmit={(e) => handlePostSubmit(e)}
            >
              <div className="flex w-full">
                <input
                  type="text"
                  placeholder="What's on your mind?"
                  value={postText}
                  onChange={(e) => setPostText(e.target.value)}
                  className="bg-[#222] text-white placeholder-[#666] px-2 py-1 shadow-inner flex-1"
                />
                <button
                  type="submit"
                  className="bg-[#555] px-2 py-1 text-white "
                >
                  Post
                </button>
              </div>
            </form>
          )}
          {post?.posts.slice(0, 60).map((post) => (
            <Post key={post.id} body={post.title} url={post.url} />
          ))}
        </div>
      </div>
    </Fragment>
  );
};

export default Home;
