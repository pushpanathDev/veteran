"use client";
import { useState, useEffect } from "react";
import AuthGuard from "../components/AuthGuard";
import httpClient from "../utils/httpclient";
import { API_BASE_URL } from "../utils/constants"; // ✅ Import properly

export default function Scheme() {
  const [users, setUsers] = useState([]);
  const [status, setStatus] = useState("Loading...");
  const [error, setError] = useState("");

  const api = httpClient(API_BASE_URL); // ✅ Use your constant here!

  useEffect(() => {
    async function fetchUsers() {
      try {
        const data = await api.get("/items");
        setUsers(data);
        setStatus(`Fetched ${data.length} users ✅`);
        console.log(data);
      } catch (err) {
        console.error("❌ Failed to fetch:", err);
        setError(err.message);
        setStatus("Error fetching users ❌");
      }
    }

    fetchUsers();
  }, []);

  return (
    <AuthGuard>
      <h1 className="text-xl font-bold mb-4">Scheme Page</h1>

      <p>
        <strong>Status:</strong> {status}
      </p>

      {error && (
        <div className="mt-2 p-2 bg-red-200 text-red-900 rounded">
          Error: {error}
        </div>
      )}

      <ul className="mt-4">
        {users.map((item) => (
          <li key={item.id} className="border-b py-2">
            <strong>{item.name}</strong>: {item.description}
          </li>
        ))}
      </ul>
    </AuthGuard>
  );
}
