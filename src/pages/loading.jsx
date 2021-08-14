import React, { useContext, useEffect } from "react";
import fetchUserInfo from "../api/fetchUserInfo";
import { userContext } from "../context/userContext/userContext";

function Loading({ loading, setLoading }) {
  const { setUser } = useContext(userContext);

  useEffect(() => {
    const fun = async () => {
      const userInfo = await fetchUserInfo();
      console.log(userInfo)
      setUser(userInfo);
      setLoading(!loading);
    };
    fun();
  }, [loading, setLoading, setUser]);

  return (
    <div className="h-screen w-full bg-blue-800 p-10">
      <div className="mt-9">
        <img src="/images/logo.png" alt="" className="h-5 m-auto" />
      </div>
    </div>
  );
}

export default Loading;
