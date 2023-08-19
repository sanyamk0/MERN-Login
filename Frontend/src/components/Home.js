import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex justify-center items-center h-screen gap-5">
      <Link to="/login">
        <button className="bg-indigo-600 hover:bg-indigo-500 text-white rounded-md p-2">
          Login
        </button>
      </Link>
      <Link to="/signup">
        <button className="bg-indigo-600 hover:bg-indigo-500 text-white rounded-md p-2">
          SignUp
        </button>
      </Link>
    </div>
  );
};

export default Home;
