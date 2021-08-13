import React, { useEffect, useState } from "react";
import fetchUsers from "../api/fetchUsers";
import FindFriendCard from "../components/FindFriendCard";

const FindFriends = () => {
  const [users, setUsers] = useState([]);
  const getData = async () => {
    const fetchedUsers = await fetchUsers();
    setUsers(fetchedUsers);
    console.log(fetchedUsers);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="mx-auto max-w-5xl">
      <h1 className="font-semibold text-lg mt-2">People you may know</h1>
      <div className="gap-5 grid md:grid-cols-3 lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 mt-4">
        {users.map((user) => (
          <FindFriendCard name={user.name} email={user.email} />
        ))}
      </div>
    </div>
  );
};

export default FindFriends;
