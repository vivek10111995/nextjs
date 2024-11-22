"use client";
import { useEffect } from "react";
import toast from "react-hot-toast";

export default function Logout() {
  function clearStorage() {
    localStorage.removeItem("token");
    toast.success("Logout Success");
  }

  useEffect(() => {
    clearStorage();
  }, []);
  return <>{}</>;
}
