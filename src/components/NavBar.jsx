import React from "react";
import {
  UsersIcon,
  GlobeIcon,
  SearchIcon,
  HomeIcon,
  MailIcon,
  UserIcon,
} from "@heroicons/react/solid";
import { Link, NavLink } from "react-router-dom";
import fetchUsers from "../api/fetchUsers";
import { useMediaQuery } from "react-responsive";

const NavBar = () => {
  const isLargeMobileDevice = useMediaQuery({ query: "(max-width:768px)" });
  // const isMobileDevice = useMediaQuery({ query: "(max-width:517px)" });
  const isSmallerMobileDevice = useMediaQuery({ query: "(max-width:420px)" });

  const handleSearch = async (e) => {
    const users = await fetchUsers();
    const matched = [];
    setTimeout(() => {
      const info = e.target.value;
      users.forEach((user) => {
        if (user.name.toLowerCase().includes(info.toLowerCase())) {
          matched.push(user);
        }
      });
      console.log(matched);
    }, 300);
  };
  return (
    <div className="bg-blue-800 px-6 py-2 border-b border-blue-900 flex items-center justify-between">
      <div className="flex items-center mr-10">
        <div className="mr-5">
          <Link to="/">
            {isSmallerMobileDevice && (
              <img src="/images/mobile-logo.png" alt="" className="h-5" />
            )}
            {!isSmallerMobileDevice && (
              <img src="/images/logo.png" alt="" className="h-5" />
            )}
          </Link>
        </div>
        <div className="text-gray-300 text-sm flex items-center gap-4 mr-10">
          {!isSmallerMobileDevice && (
            <NavLink to={"/all-posts"} activeClassName="text-black">
              <Link to="/all-posts">
                <GlobeIcon className="h-5 text-gray-900" />
              </Link>
            </NavLink>
          )}
        </div>
        {isLargeMobileDevice && (
          <div
            className="text-gray-300 text-sm flex items-center gap-8"
            style={{ margin: isSmallerMobileDevice ? "auto" : "" }}
          >
            <NavLink exact to={"/"} activeClassName="text-white">
              <Link to="/">
                <HomeIcon className="h-4" />
              </Link>
            </NavLink>
            <NavLink exact to={"/chats"} activeClassName="text-white">
              <Link to="/chats">
                <MailIcon className="h-4" />
              </Link>
            </NavLink>
            <NavLink exact to={"/profile"} activeClassName="text-white">
              <Link to="/profile">
                <UserIcon className="h-4" />
              </Link>
            </NavLink>
            <NavLink exact to={"/find-friends"} activeClassName="text-white">
              <Link to="/find-friends">
                <UsersIcon className="h-4" />
              </Link>
            </NavLink>
          </div>
        )}
        {!isLargeMobileDevice && (
          <div className="text-gray-400 text-sm flex items-center gap-8">
            <NavLink exact to={"/"} activeClassName="text-white">
              <Link to="/">Home</Link>
            </NavLink>
            <NavLink to={"/chats"} activeClassName="text-white">
              <Link to="/chats">Chats</Link>
            </NavLink>
            <NavLink to={"/profile"} activeClassName="text-white">
              <Link to="/profile">Profile</Link>
            </NavLink>
            <NavLink to={"/find-friends"} activeClassName="text-white">
              <Link to="/find-friends">Find Friends</Link>
            </NavLink>
          </div>
        )}
      </div>
      {isLargeMobileDevice && (
        <NavLink to={"/search"} activeClassName="text-white">
          <Link to="/search">
            <SearchIcon className="h-4 text-gray-400" />
          </Link>
        </NavLink>
      )}
      {!isLargeMobileDevice && (
        <div className="bg-white border-2 flex items-center rounded-md px-1 flex-1">
          <SearchIcon className="h-4 mr-1 text-[#574646]" />
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Search Friends..."
            className="bg-white text-sm py-1 text-gray-700 w-full"
            onChange={(e) => handleSearch(e)}
          />
        </div>
      )}
    </div>
  );
};

export default NavBar;
