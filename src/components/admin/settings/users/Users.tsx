"use client";

import React, { useState, useEffect } from "react";
import UserList from "./UserList";
import Register from "./register/Register";
import { FaAngleLeft } from "react-icons/fa6";
// import { getUserRole } from "@/lib/server/actions";
const Users = () => {
  const [showRegister, setShowRegister] = useState(false);
  const [showToast, setShowToast] = useState(false);
  // // const [role, setRole] = useState<string | null>(null);

  // // useEffect(() => {
  // //   const fetchUserRole = async () => {
  // //     const { role } = await getUserRole();
  // //     console.log("Fetched user role:", role); // Debugging statement
  // //     setRole(role);
  // //   };

  //   fetchUserRole();
  // }, []);

  const handleUserCreated = () => {
    setShowRegister(false);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  return (
    <div className="flex flex-col gap-5">
      {showRegister ? (
        <div className="flex flex-col items-start gap-5">
          <button
            onClick={() => setShowRegister(false)}
            className="btn btn-ghost "
          >
            <FaAngleLeft />
            Tilbage
          </button>
          <Register onUserCreated={handleUserCreated} />
        </div>
      ) : (
        <>
          <div>
            <button
              onClick={() => setShowRegister(true)}
              className="btn btn-primary w-full sm:w-auto"
            >
              Opret bruger
            </button>
          </div>

          <div>
            <UserList />
          </div>
        </>
      )}
      {showToast && (
        <div className="toast toast-end">
          <div className="alert alert-success">
            <span>Bruger oprettet</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Users;
