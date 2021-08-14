import { PencilAltIcon } from "@heroicons/react/solid";
import React, { Fragment } from "react";
import NavBar from "../components/NavBar";
import Post from "../components/Post";

const Profile = () => {
  const test = [1, 46, 64, 974, 94, 9];
  return (
    <Fragment>
      <NavBar />
      <div className="md:p-8 mx-auto max-w-5xl">
        <div className="p-2 shadow flex flex-col gap-4 md:flex-row items-center">
          <div className="flex flex-col items-center">
            <div className="mb-2">
              <img
                src="data:image/png;base64,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"
                alt=""
                className=" w-32 h-32 rounded-full border"
              />
            </div>
          </div>
          <div className="md:flex-1">
            <h1 className="font-semibold text-2xl">John Banda</h1>
            <div className="mt-2 text-gray-800 text-sm mb-2">
              <ul>
                <li>
                  Age: <span className="font-semibold">14</span>
                </li>
                <li>
                  Lives in: <span className="font-semibold">Mkushi</span>
                </li>
                <li className="w-60">
                  Bio:{" "}
                  <span className="font-semibold">
                    Software engineer | UI/UX Designer. passionate about
                    everything javascript.
                  </span>
                </li>
              </ul>
            </div>
            <hr />
            <div className="flex items-center justify-between mt-2">
              <div className="flex flex-col">
                <p className="text-xs">Friends</p>
                <h1 className="text-xl font-semibold text-blue-800">50</h1>
              </div>
              <div className="flex flex-col">
                <p className="text-xs">Posts</p>
                <h1 className="text-xl font-semibold text-blue-800">12</h1>
              </div>
            </div>
          </div>
          <div className="flex">
            <button className="rounded bg-blue-800 text-white px-2 py-1 hover:shadow flex items-center">
              <PencilAltIcon className="h-4" />
              <p>Un Friend</p>
            </button>
          </div>
        </div>
        <div>
          <h1 className=" font-semibold text-lg my-4">Mwelwa's Posts</h1>
          <div className="shadow">
            {test.map(() => (
              <Post body="hi" />
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Profile;
