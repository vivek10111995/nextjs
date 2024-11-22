import Link from "next/link";
import "./navbar.css"; // Import the CSS file

export default function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li>
          <Link className="navbar-link signup" href="/signup">
            SignUp
          </Link>
        </li>
        <li>
          <Link className="navbar-link signin" href="/signin">
            SignIn
          </Link>
        </li>
        <li>
          <Link className="navbar-link admin" href="/admin">
            Admin
          </Link>
        </li>
        <li>
          <Link className="navbar-link logout" href="/logout">
            Logout
          </Link>
        </li>
      </ul>
    </nav>
  );
}
