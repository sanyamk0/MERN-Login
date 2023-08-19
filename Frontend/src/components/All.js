import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const All = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8000/users", { method: "GET" })
      .then(async (response) => {
        let res = await response.json();
        setUsers(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <section className="flex items-center justify-center">
      <div className="flex flex-wrap justify-center items-center gap-8 mt-3 mb-3">
        {users.map((user, index) => {
          const viewOne = () => {
            fetch("http://localhost:8000/users/" + user._id, {
              method: "GET",
            }).then(async (response) => {
              let res = await response.json();
              navigate("/user", { state: { res } });
              console.log(response);
            });
          };
          return (
            <div
              key={index}
              className="bg-slate-200 rounded-lg p-8 shadow-lg max-w-md w-full"
            >
              <div className="relative h-40 w-40 mx-auto">
                <img
                  src="https://rb.gy/um3ns"
                  alt="Avatar"
                  className="w-full h-full rounded-full object-cover shadow-md"
                />
              </div>
              <div className="text-center mt-4">
                <h2 className="text-2xl font-semibold">{user.userName}</h2>
                <span className="text-gray-600">{user.email}</span>
              </div>
              <div className="flex justify-end mt-6 gap-5">
                <Link className="btn bg-gradient-to-r bg-indigo-600 hover:bg-indigo-500 text-white px-6 py-2 rounded-full text-lg hover:shadow-inner">
                  <button onClick={viewOne}>View</button>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default All;
