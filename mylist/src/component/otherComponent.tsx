import { redirect } from "next/navigation";
import { useState } from "react";
import { toast } from "react-hot-toast";

export default function SignIn() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  async function Login() {
    const response = await fetch("http://localhost:8381/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    });
    if (response.ok) {
      const data = await response.json();
      toast.success("You did it!");
      localStorage.setItem("data", JSON.stringify(data));
      localStorage.setItem("token", data.data.tokens.access.token);
      redirect("/admin");
    } else {
      toast.error("Invalid email or password!");
    }
  }

  return (
    <>
      <table className="user">
        <thead>
          <tr>
            <th colSpan={4} className="sign-in">
              Sign in
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>Email</th>
            <td>
              <input
                type="text"
                placeholder="email"
                value={user.email}
                onChange={(e) => setUser({ ...user, email: e.target.value })}
              />
            </td>
          </tr>
          <tr>
            <th>Password</th>
            <td>
              <input
                type="password"
                placeholder="password"
                value={user.password}
                onChange={(e) => setUser({ ...user, password: e.target.value })}
              />
            </td>
          </tr>
          <tr>
            <td colSpan={2}>
              <button
                onClick={async () => {
                  Login();
                }}
              >
                Sign in
              </button>
            </td>
          </tr>
          <tr>
            <td colSpan={2}>
              <p>
                Do not have an account? <a href="/signup">Sign up</a>
              </p>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
