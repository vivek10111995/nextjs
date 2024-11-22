"use client";
import Admin from "@/component/admin";
import validate from "@/component/validate";
import { useEffect } from "react";
import { redirect } from "next/navigation";
import toast from "react-hot-toast";

export default function AdminComponent() {
  useEffect(() => {
    if (!validate()) {
      toast.error("You must be logged in to access this page.");
      redirect("/signin");
    }
  }, []); // Empty dependency array ensures this effect runs only once when the component mounts

  return <Admin />;
}
