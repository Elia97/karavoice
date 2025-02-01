"use client";

import { FC } from "react";
import { User } from "@/app/types";
import { UUID } from "crypto";

interface UserListProps {
  users: User[];
}

const UserList: FC<UserListProps> = ({ users }) => {
  const onEdit = (id: UUID) => {
    console.log(id);
  };

  const onDelete = (id: UUID) => {
    console.log(id);
  };
  return (
    <div>
      <h2 className="mb-4 text-xl font-semibold">Users</h2>
      <table className="w-full rounded shadow">
        <thead className="text-left">
          <tr className="border-b">
            <th className="p-2">Name</th>
            <th className="p-2">Email</th>
            <th className="p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.length > 0 &&
            users.map((user) => (
              <tr key={user.id} className="border-b">
                <td className="p-2">{user.name}</td>
                <td className="p-2">{user.email}</td>
                <td className="p-2">
                  <button
                    type="button"
                    onClick={() => onEdit(user.id)}
                    className="text-blue-500 hover:underline"
                  >
                    Edit
                  </button>{" "}
                  |{" "}
                  <button
                    type="button"
                    onClick={() => onDelete(user.id)}
                    className="text-red-500 hover:underline"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
