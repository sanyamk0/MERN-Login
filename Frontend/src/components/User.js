import React from "react";
import { Link, useLocation } from "react-router-dom";

const User = () => {
  const location = useLocation();
  const res = location.state.res;
  const handleDelete = () => {
    fetch("http://localhost:8000/delete/" + res._id, {
      method: "DELETE",
    });
  };
  return (
    <section className="flex items-center justify-center h-screen">
      <div className="bg-slate-200 rounded-lg p-8 shadow-lg max-w-md w-full">
        <div className="relative h-40 w-40 mx-auto">
          <img
            src="https://rb.gy/um3ns"
            alt="Avatar"
            className="w-full h-full rounded-full object-cover shadow-md"
          />
        </div>
        <div className="text-center mt-4">
          <h2 className="text-2xl font-semibold">{res.userName}</h2>
          <span className="text-gray-600">{res.email}</span>
        </div>
        <div className="flex justify-center mt-6 gap-5">
          <Link
            to="/update"
            state={{ res: res }}
            className="btn bg-gradient-to-r bg-indigo-600 hover:bg-indigo-500 text-white px-6 py-2 rounded-full text-lg hover:shadow-inner"
          >
            <button>Update</button>
          </Link>
          <Link
            to="/"
            className="btn bg-gradient-to-r bg-indigo-600 hover:bg-indigo-500 text-white px-6 py-2 rounded-full text-lg hover:shadow-inner"
          >
            <button>Logout</button>
          </Link>
          <Link
            to="/"
            className="btn bg-gradient-to-r bg-indigo-600 hover:bg-indigo-500 text-white px-6 py-2 rounded-full text-lg hover:shadow-inner"
          >
            <button onClick={handleDelete}>Delete ID</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default User;
