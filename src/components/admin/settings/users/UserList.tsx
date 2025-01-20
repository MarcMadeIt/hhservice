import React, { useEffect, useState } from "react";
import { FaTrash } from "react-icons/fa6";
import { FaEdit } from "react-icons/fa";
import { getAllUsers, deleteUser } from "@/lib/server/actions";

interface User {
  id: string;
  email?: string;
}

const UserList = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [userToDelete, setUserToDelete] = useState<User | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const users = await getAllUsers();
        setUsers(users || []);
      } catch (error) {
        console.error("Failed to fetch users:", error);
        setError("Failed to fetch users");
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  useEffect(() => {
    if (isModalOpen) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }
  }, [isModalOpen]);

  const handleDelete = async () => {
    if (userToDelete) {
      try {
        await deleteUser(userToDelete.id);
        setUsers(users.filter((user) => user.id !== userToDelete.id));
        setUserToDelete(null);
        setIsModalOpen(false);
      } catch (error) {
        console.error("Failed to delete user:", error);
        setError("Failed to delete user");
      }
    }
  };

  const openModal = (user: User) => {
    setUserToDelete(user);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setUserToDelete(null);
    setIsModalOpen(false);
  };

  return (
    <div>
      {loading ? (
        <div className="flex justify-center gap-3 items-center">
          <span className="loading loading-spinner loading-md"></span>
          Indhenter data...
        </div>
      ) : (
        <>
          {error && <p className="text-red-500">{error}</p>}{" "}
          {/* Display error message */}
          <ul className="flex flex-col gap-3">
            {users.map((user) => (
              <li
                key={user.id}
                className="py-3 px-3 md:px-5 flex justify-between items-center rounded-lg"
              >
                <div className="flex gap-3 items-center">
                  <span className="font-semibold">{user.email}</span>
                </div>

                <div className="flex gap-8 items-center">
                  <a href="">
                    <FaEdit size={20} />
                  </a>
                  <button onClick={() => openModal(user)}>
                    <FaTrash size={18} />
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </>
      )}

      {/* Confirmation Modal */}
      {isModalOpen && (
        <div className="modal modal-open">
          <div className="modal-box">
            <h3 className="font-bold text-lg">Bekræft sletning</h3>
            <p className="py-4">
              Er du sikker på, at du vil slette denne bruger?
            </p>
            <div className="modal-action">
              <button className="btn" onClick={closeModal}>
                Annuller
              </button>
              <button className="btn btn-error" onClick={handleDelete}>
                Slet
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserList;
