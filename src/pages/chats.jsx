import { ArrowRightIcon } from "@heroicons/react/solid";
import React, { Fragment } from "react";
import { useMediaQuery } from "react-responsive";
import NavBar from "../components/NavBar";
import UserMessageCard from "../components/UserMessageCard";

function Chats() {
  const isLargeMobileDevice = useMediaQuery({ query: "(max-width:768px)" });
  return (
    <Fragment>
      <NavBar />
      <div className="grid grid-cols-1 md:grid-cols-4 h-screen">
        <div className=" col-span-1 border-r p-3">
          {isLargeMobileDevice && <h1 className="font-semibold text-lg">Chats</h1>}
          <UserMessageCard />
          <UserMessageCard />
          <UserMessageCard />
          <UserMessageCard />
        </div>
        {!isLargeMobileDevice && (
          <div className="col-span-3 p-3 flex flex-col">
            <p className="font-semibold text-xl border-b pb-1">Mwelwa Nkuta</p>
            <div className="flex flex-col overflow-y-auto mt-3 flex-1">
              <p className=" self-start bg-blue-600 py-1 px-2 rounded-xl mb-1 text-white max-w-sm">
                Message Message MessageMe ssageMessa g e Me ssageMessageMe
                ssageMessag eMessageMes sage Message
              </p>
              <p className=" self-start bg-blue-600 py-1 px-2 rounded-xl mb-1 text-white max-w-sm">
                Message
              </p>
              <p className=" self-end bg-gray-300 py-1 px-2 rounded-xl mb-1 text-gray-900 max-w-sm">
                Message
              </p>
              <p className=" self-end bg-gray-300 py-1 px-2 rounded-xl mb-1 text-gray-900 max-w-sm">
                Message
              </p>
            </div>
            <div className="flex border-t pt-2 mt-2 px-5 fixed bg-white bottom-1 right-0 left-0">
              <input
                type="text"
                className="rounded-xl bg-gray-200 py-1 px-2 w-full"
                placeholder="type here"
              />
              <button className="rounded-full p-2 bg-blue-800 ml-2">
                <ArrowRightIcon className="h-4 text-white" />
              </button>
            </div>
          </div>
        )}
      </div>
    </Fragment>
  );
}

export default Chats;
