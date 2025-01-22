"use client";

import React, { useState, useEffect } from "react";
import UserList from "./UserList";
import Register from "./register/Register";
import { FaAngleLeft } from "react-icons/fa6";
const Users = () => {
  const [showRegister, setShowRegister] = useState(false);
  const [showToast, setShowToast] = useState(false);

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
              className="btn btn-primary "
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
