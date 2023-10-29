import '.././Navbar.css'




import { Link } from "react-router-dom";


export default function Navbar() {

    return (
        <nav className='nav-Bar'>
          <h2>{"Stranger's Things"}</h2>
          <menu>
            <li>
              <Link to="/posts">Posts</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
          </menu>
        </nav>
      );
}