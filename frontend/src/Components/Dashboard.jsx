import { useEffect, useState } from "react";
import { API } from "../api";
import { isLoggedIn, logout } from "../utils/auth";

export default function Dashboard() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    if (!isLoggedIn()) {
      window.location.href = "/auth";
    }

    const fetchUsers = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await API.get("/auth/all-users", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setUsers(res.data);
      } catch (err) {
        alert(err.response?.data?.message || "Failed to fetch users");
      }
    };
    fetchUsers();
  }, []);

  return (
    <div style={{ padding: "2rem", position: "relative" }}>
      <button
        onClick={logout}
        style={{
          position: "absolute",
          top: "20px",
          right: "20px",
          padding: "0.5rem 1rem",
          background: "#FF006E",
          color: "white",
          border: "none",
          borderRadius: "10px",
          cursor: "pointer",
        }}
      >
        Logout
      </button>

      <h2>All Users</h2>
      <table border="1" cellPadding="10" style={{ width: "100%", borderCollapse: "collapse", marginTop: "1rem" }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Role</th>
            <th>Joined</th>
          </tr>
        </thead>
        <tbody>
          {users.map((u) => (
            <tr key={u._id}>
              <td>{u.name}</td>
              <td>{u.email}</td>
              <td>{u.phone}</td>
              <td>{u.role}</td>
              <td>{new Date(u.createdAt).toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
