"use client";

import { useAuth } from "../context/AuthContext";
import Navbar from "./navbar/page";

export default function ClientLayout({ children }) {
  const { user } = useAuth();

  return (
    <>
      {user && <Navbar />}
      <main className={user ? "pt-16" : ""}>{children}</main>
    </>
  );
}
