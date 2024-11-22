"use client";

import { useEffect, useState } from "react";

interface userData {
  id: number;
  name: string;
  email: string;
}

export default function Admin() {
  const [data, setData] = useState<userData[]>([]);
  const [selectedEditUser, setSelectedEditUser] = useState<userData | null>(
    null
  );
  const [selectedDeleteUser, setSelectedDeleteUser] = useState<userData | null>(
    null
  );

  const fetchData = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();
    setData(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const editUser = async () => {
    if (!selectedEditUser) return;
    // You can make an API call here to update the user information
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/users/${selectedEditUser.id}`,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(selectedEditUser), // You would modify selectedEditUser here with updated data
      }
    );

    if (res.ok) {
      const updatedUser = await res.json();
      setData((prevData) =>
        prevData.map((user) =>
          user.id === updatedUser.id ? updatedUser : user
        )
      );
      alert("User updated successfully!");
    } else {
      alert("Failed to update user.");
    }
    setSelectedEditUser(null); // Clear selected user after editing
  };

  const deleteUser = async () => {
    if (!selectedDeleteUser) return;
    // You can make an API call here to delete the user
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/users/${selectedDeleteUser.id}`,
      {
        method: "DELETE",
      }
    );

    if (res.ok) {
      setData((prevData) =>
        prevData.filter((user) => user.id !== selectedDeleteUser.id)
      );
      alert("User deleted successfully!");
      setSelectedDeleteUser(null); // Clear selected user after deletion
    } else {
      alert("Failed to delete user.");
    }
    setSelectedDeleteUser(null); // Clear selected user after deletion
  };
  return (
    <>
      <table className="user">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map((user: userData) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  <button
                    className="action-btn"
                    onClick={() => setSelectedEditUser(user)}
                  >
                    Edit
                  </button>
                  <button onClick={() => setSelectedDeleteUser(user)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>

      {selectedEditUser && (
        <div>
          <h2>Edit User</h2>
          <form>
            <label>
              Name:
              <input
                type="text"
                value={selectedEditUser.name}
                onChange={(e) =>
                  setSelectedEditUser({
                    ...selectedEditUser,
                    name: e.target.value,
                  })
                }
              />
            </label>
            <label>
              Email:
              <input
                type="email"
                value={selectedEditUser.email}
                onChange={(e) =>
                  setSelectedEditUser({
                    ...selectedEditUser,
                    email: e.target.value,
                  })
                }
              />
            </label>
            <button type="button" onClick={editUser}>
              Save Changes
            </button>
          </form>
        </div>
      )}
      {selectedDeleteUser && (
        <div>
          <h2>Delete User</h2>
          <button onClick={deleteUser}>Confirm Delete</button>
        </div>
      )}
    </>
  );
}
