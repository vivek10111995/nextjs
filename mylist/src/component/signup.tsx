

import { useState } from "react";
import { toast } from "react-hot-toast";


export default function SignUp(){
    const [userData, setUserData] = useState({
        email: "",
        password: "",
        firstName: "",
        lastName: "",
      });
    
      async function Login() {
        const response = await fetch("http://localhost:8381/auth/register", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(userData),
        });
        if (response.ok) {
          const data = await response.json();
          toast.success("You did it!");
          console.log(data);
        } else {
          toast.error("Email already taken!");
        }
      }
    
      return (
        <>
          <table className="user">
            <thead>
              <tr>
                <th colSpan={4} className="sign-in">
                  Sign up
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>FirstName</th>
                <td>
                  <input
                    type="text"
                    placeholder="first name"
                    value={userData.firstName}
                    onChange={(e) =>
                      setUserData({ ...userData, firstName: e.target.value })
                    }
                  />
                </td>
              </tr>
              <tr>
                <th>LastName</th>
                <td>
                  <input
                    type="text"
                    placeholder="last name"
                    value={userData.lastName}
                    onChange={(e) =>
                      setUserData({ ...userData, lastName: e.target.value })
                    }
                  />
                </td>
              </tr>
              <tr>
                <th>Email</th>
                <td>
                  <input
                    type="text"
                    placeholder="email"
                    value={userData.email}
                    onChange={(e) =>
                      setUserData({ ...userData, email: e.target.value })
                    }
                  />
                </td>
              </tr>
              <tr>
                <th>Password</th>
                <td>
                  <input
                    type="password"
                    placeholder="password"
                    value={userData.password}
                    onChange={(e) =>
                      setUserData({ ...userData, password: e.target.value })
                    }
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
                    Sign up
                  </button>
                </td>
              </tr>
              <tr>
                <td colSpan={2}>
                  <p>
                    Already have an account? <a href="/signin">Sign in</a>
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
        </>
      );
}