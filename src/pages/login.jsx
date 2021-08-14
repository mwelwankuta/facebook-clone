import React from "react";
import FacebookAuth from "react-facebook-auth";
import loginUser from "../api/loginUser";
require('dotenv').config()

const Login = () => {
  const MyFacebookButton = ({ onClick }) => (
    <button
      className="bg-white py-1 px-2 rounded-sm text-blue-800 mt-2 hover:shadow-lg"
      onClick={onClick}
    >
      Login with Facebook
    </button>
  );
  return (
    <div className="max-w-5xl h-screen w-full flex p-2 bg-blue-800">
      <div className="m-auto p-4 max-w-md h-64 text-white ">
        <h1 className="font-semibold text-2xl">Login to Facebook Clone</h1>
        <p className="text-sm mt-2">
          we do not share your facebook information, we simply use it for
          authentication
        </p>
        <FacebookAuth
          appId="552058326108682"
          callback={loginUser}
          component={MyFacebookButton}
        />
      </div>
    </div>
  );
};

export default Login;
